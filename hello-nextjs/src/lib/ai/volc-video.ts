/**
 * Volcano Engine Video Generation API wrapper.
 * Handles video generation using Seedance model (image-to-video).
 */

import type {
  VolcVideoTaskResponse,
  VolcVideoTaskStatusResponse,
} from "@/types/ai";

// Configuration
const VOLC_ACCESS_KEY = process.env.VOLC_ACCESS_KEY;
const VOLC_SECRET_KEY = process.env.VOLC_SECRET_KEY;
const VOLC_VIDEO_BASE_URL = process.env.VOLC_VIDEO_BASE_URL || "https://cv.volcengineapi.com";
const VOLC_REGION = process.env.VOLC_REGION || "cn-north-1";

// Retry configuration
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 2000;
const REQUEST_TIMEOUT_MS = 60000; // 1 minute for API calls (video generation is async)

/**
 * Custom error class for Volcano Engine Video API errors
 */
export class VolcVideoApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public errorCode?: number
  ) {
    super(message);
    this.name = "VolcVideoApiError";
  }
}

/**
 * Video task status enum
 */
export type VideoTaskStatus = "pending" | "processing" | "completed" | "failed";

/**
 * Sleep utility for retry delays
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check if the API credentials are configured
 */
export function isVolcVideoConfigured(): boolean {
  return !!(VOLC_ACCESS_KEY && VOLC_SECRET_KEY);
}

/**
 * Generate HMAC-SHA256 signature for Volcano Engine API
 */
async function generateSignature(
  secretKey: string,
  message: string
): Promise<string> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secretKey);
  const messageData = encoder.encode(message);

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign("HMAC", cryptoKey, messageData);
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

/**
 * Hash a string using SHA-256
 */
async function hashSHA256(message: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Get host from base URL
 */
function getHost(baseUrl: string): string {
  const url = new URL(baseUrl);
  return url.host;
}

/**
 * Build authorization header for Volcano Engine API
 */
async function buildAuthHeaders(
  method: string,
  path: string,
  body: string,
  baseUrl: string = VOLC_VIDEO_BASE_URL
): Promise<Record<string, string>> {
  if (!VOLC_ACCESS_KEY || !VOLC_SECRET_KEY) {
    throw new VolcVideoApiError("Volcano Engine credentials not configured");
  }

  const host = getHost(baseUrl);
  const now = new Date();
  const dateStr = now.toISOString().replace(/[:-]|\.\d{3}/g, "");
  const shortDate = dateStr.slice(0, 8);

  // Build canonical request
  const hashedPayload = await hashSHA256(body);
  const canonicalHeaders = `content-type:application/json\nhost:${host}\nx-content-sha256:${hashedPayload}\nx-date:${dateStr}\n`;
  const signedHeaders = "content-type;host;x-content-sha256;x-date";

  const canonicalRequest = `${method}\n${path}\n\n${canonicalHeaders}\n${signedHeaders}\n${hashedPayload}`;

  // Build string to sign
  const credentialScope = `${shortDate}/${VOLC_REGION}/cv/visual/request`;
  const hashedCanonicalRequest = await hashSHA256(canonicalRequest);
  const stringToSign = `HMAC-SHA256\n${dateStr}\n${credentialScope}\n${hashedCanonicalRequest}`;

  // Calculate signature
  const kDate = await generateSignature(VOLC_SECRET_KEY, shortDate);
  const kRegion = await generateSignature(kDate, VOLC_REGION);
  const kService = await generateSignature(kRegion, "cv");
  const kSigning = await generateSignature(kService, "request");
  const signature = await generateSignature(kSigning, stringToSign);

  const authorization = `HMAC-SHA256 Credential=${VOLC_ACCESS_KEY}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  return {
    "Content-Type": "application/json",
    "X-Date": dateStr,
    "X-Content-Sha256": hashedPayload,
    Authorization: authorization,
  };
}

/**
 * Result of video generation task creation
 */
export interface VideoTaskResult {
  taskId: string;
  status: VideoTaskStatus;
}

/**
 * Result of video task status query
 */
export interface VideoStatusResult {
  taskId: string;
  status: VideoTaskStatus;
  progress?: number;
  videoUrl?: string;
  errorMessage?: string;
}

/**
 * Create a video generation task from an image
 * @param imageUrl - URL of the source image
 * @param prompt - Description of the desired video motion
 * @param options - Additional generation options
 * @returns Task ID and initial status
 */
export async function createVideoTask(
  imageUrl: string,
  prompt?: string,
  options: {
    negativePrompt?: string;
    duration?: number;
    seed?: number;
  } = {}
): Promise<VideoTaskResult> {
  if (!isVolcVideoConfigured()) {
    throw new VolcVideoApiError("Volcano Engine video generation is not configured");
  }

  // Build request body for Seedance model (image-to-video)
  const requestBody = {
    req_key: "i2v_high_aes_general", // Image-to-video model key
    image_url: imageUrl,
    prompt: prompt ?? "",
    negative_prompt: options.negativePrompt ?? "low quality, blurry, distorted, bad motion, static",
    duration: options.duration ?? 5, // Default 5 seconds
    ...(options.seed !== undefined && { seed: options.seed }),
  };

  const body = JSON.stringify(requestBody);
  const path = "/";

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const headers = await buildAuthHeaders("POST", path, body);

      const response = await fetch(`${VOLC_VIDEO_BASE_URL}/`, {
        method: "POST",
        headers,
        body,
        signal: controller.signal,
      });

      const data: VolcVideoTaskResponse = await response.json();

      if (data.code !== 10000 && data.code !== 0) {
        throw new VolcVideoApiError(
          data.message || `API error: ${data.code}`,
          response.status,
          data.code
        );
      }

      if (!data.data?.task_id) {
        throw new VolcVideoApiError("No task ID in response");
      }

      clearTimeout(timeoutId);
      return {
        taskId: data.data.task_id,
        status: (data.data.status as VideoTaskStatus) || "pending",
      };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error("Unknown error");

      // Don't retry on auth errors
      if (error instanceof VolcVideoApiError && (error.errorCode === 401 || error.errorCode === 403)) {
        throw error;
      }

      // Abort errors shouldn't be retried
      if ((error as Error).name === "AbortError") {
        throw new VolcVideoApiError("Request timed out");
      }

      // Retry for other errors
      if (attempt < MAX_RETRIES) {
        console.warn(`Volc Video API attempt ${attempt} failed, retrying...`, error);
        await sleep(RETRY_DELAY_MS * attempt);
      }
    }
  }

  clearTimeout(timeoutId);
  throw new VolcVideoApiError(
    `Failed after ${MAX_RETRIES} attempts: ${lastError?.message}`
  );
}

/**
 * Query the status of a video generation task
 * @param taskId - The task ID to query
 * @returns Current status and video URL (if completed)
 */
export async function getVideoTaskStatus(taskId: string): Promise<VideoStatusResult> {
  if (!isVolcVideoConfigured()) {
    throw new VolcVideoApiError("Volcano Engine video generation is not configured");
  }

  const requestBody = {
    req_key: "i2v_high_aes_general", // Same model key for status query
    task_id: taskId,
  };

  const body = JSON.stringify(requestBody);
  const path = "/";

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const headers = await buildAuthHeaders("POST", path, body);

      const response = await fetch(`${VOLC_VIDEO_BASE_URL}/`, {
        method: "POST",
        headers,
        body,
        signal: controller.signal,
      });

      const data: VolcVideoTaskStatusResponse = await response.json();

      if (data.code !== 10000 && data.code !== 0) {
        throw new VolcVideoApiError(
          data.message || `API error: ${data.code}`,
          response.status,
          data.code
        );
      }

      clearTimeout(timeoutId);

      return {
        taskId: data.data.task_id,
        status: data.data.status,
        progress: data.data.progress,
        videoUrl: data.data.video_url,
        errorMessage: data.data.error_message,
      };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error("Unknown error");

      // Don't retry on auth errors
      if (error instanceof VolcVideoApiError && (error.errorCode === 401 || error.errorCode === 403)) {
        throw error;
      }

      // Abort errors shouldn't be retried
      if ((error as Error).name === "AbortError") {
        throw new VolcVideoApiError("Request timed out");
      }

      // Retry for other errors
      if (attempt < MAX_RETRIES) {
        console.warn(`Volc Video Status API attempt ${attempt} failed, retrying...`, error);
        await sleep(RETRY_DELAY_MS * attempt);
      }
    }
  }

  clearTimeout(timeoutId);
  throw new VolcVideoApiError(
    `Failed after ${MAX_RETRIES} attempts: ${lastError?.message}`
  );
}

/**
 * Wait for a video task to complete
 * @param taskId - The task ID to wait for
 * @param options - Polling options
 * @returns Final status with video URL
 */
export async function waitForVideoTask(
  taskId: string,
  options: {
    pollIntervalMs?: number;
    maxWaitMs?: number;
    onProgress?: (progress: number) => void;
  } = {}
): Promise<VideoStatusResult> {
  const pollInterval = options.pollIntervalMs ?? 5000; // Default 5 seconds
  const maxWait = options.maxWaitMs ?? 600000; // Default 10 minutes
  const startTime = Date.now();

  while (Date.now() - startTime < maxWait) {
    const status = await getVideoTaskStatus(taskId);

    if (status.progress !== undefined && options.onProgress) {
      options.onProgress(status.progress);
    }

    if (status.status === "completed") {
      return status;
    }

    if (status.status === "failed") {
      throw new VolcVideoApiError(
        status.errorMessage || "Video generation failed"
      );
    }

    await sleep(pollInterval);
  }

  throw new VolcVideoApiError(
    `Video generation timed out after ${maxWait / 1000} seconds`
  );
}

/**
 * Generate a video from an image (convenience function that waits for completion)
 * @param imageUrl - URL of the source image
 * @param prompt - Description of the desired video motion
 * @param options - Generation and polling options
 * @returns Video URL
 */
export async function generateVideo(
  imageUrl: string,
  prompt?: string,
  options: {
    negativePrompt?: string;
    duration?: number;
    seed?: number;
    pollIntervalMs?: number;
    maxWaitMs?: number;
    onProgress?: (progress: number) => void;
  } = {}
): Promise<string> {
  const task = await createVideoTask(imageUrl, prompt, {
    negativePrompt: options.negativePrompt,
    duration: options.duration,
    seed: options.seed,
  });

  const result = await waitForVideoTask(task.taskId, {
    pollIntervalMs: options.pollIntervalMs,
    maxWaitMs: options.maxWaitMs,
    onProgress: options.onProgress,
  });

  if (!result.videoUrl) {
    throw new VolcVideoApiError("Video generation completed but no URL returned");
  }

  return result.videoUrl;
}

/**
 * Regenerate a video with different parameters
 * @param imageUrl - URL of the source image
 * @param prompt - Description of the desired video motion
 * @param seed - Previous seed to modify (or omit for random)
 * @param options - Additional options
 * @returns Video URL
 */
export async function regenerateVideo(
  imageUrl: string,
  prompt?: string,
  seed?: number,
  options?: {
    negativePrompt?: string;
    duration?: number;
    pollIntervalMs?: number;
    maxWaitMs?: number;
    onProgress?: (progress: number) => void;
  }
): Promise<string> {
  // Use a different seed for regeneration if not specified
  const newSeed = seed ?? Math.floor(Math.random() * 2147483647);

  return generateVideo(imageUrl, prompt, {
    ...options,
    seed: newSeed,
  });
}
