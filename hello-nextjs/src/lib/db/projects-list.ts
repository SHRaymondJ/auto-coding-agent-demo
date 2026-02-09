/**
 * Project list data access.
 * Fetches projects with preview images.
 */

import { createClient } from "@/lib/supabase/server";
import type { Project } from "@/types/database";

/**
 * Project with preview image for list display
 */
export interface ProjectWithPreview extends Project {
  preview_image_url: string | null;
  scene_count: number;
}

/**
 * Get all projects for a user with preview images
 * @param userId - The user ID
 * @param options - Pagination options
 * @returns Array of projects with previews and total count
 */
export async function getProjectsWithPreview(
  userId: string,
  options: {
    page?: number;
    limit?: number;
  } = {}
): Promise<{ projects: ProjectWithPreview[]; total: number }> {
  const supabase = await createClient();
  const page = options.page ?? 1;
  const limit = options.limit ?? 20;
  const offset = (page - 1) * limit;

  // Get projects with count
  const { data: projects, error: projectsError, count } = await supabase
    .from("projects")
    .select("*", { count: "exact" })
    .eq("user_id", userId)
    .order("updated_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (projectsError) {
    console.error("Error fetching projects:", projectsError);
    throw new Error("Failed to fetch projects");
  }

  if (!projects || projects.length === 0) {
    return {
      projects: [],
      total: count ?? 0,
    };
  }

  // Get scene counts and preview images for each project
  const projectIds = projects.map((p) => p.id);

  // Get scene counts
  const { data: sceneCounts, error: sceneError } = await supabase
    .from("scenes")
    .select("project_id")
    .in("project_id", projectIds);

  if (sceneError) {
    console.error("Error fetching scene counts:", sceneError);
  }

  // Count scenes per project
  const sceneCountMap = new Map<string, number>();
  (sceneCounts ?? []).forEach((scene) => {
    const current = sceneCountMap.get(scene.project_id) ?? 0;
    sceneCountMap.set(scene.project_id, current + 1);
  });

  // Get first scene for each project to get preview image
  const { data: firstScenes, error: scenesError } = await supabase
    .from("scenes")
    .select("id, project_id, order_index")
    .in("project_id", projectIds)
    .order("order_index", { ascending: true });

  if (scenesError) {
    console.error("Error fetching first scenes:", scenesError);
  }

  // Get the first scene ID for each project
  const firstSceneMap = new Map<string, string>();
  (firstScenes ?? []).forEach((scene) => {
    if (!firstSceneMap.has(scene.project_id)) {
      firstSceneMap.set(scene.project_id, scene.id);
    }
  });

  // Get preview images for first scenes
  const firstSceneIds = Array.from(firstSceneMap.values());
  const { data: previewImages, error: imagesError } = await supabase
    .from("images")
    .select("scene_id, url")
    .in("scene_id", firstSceneIds)
    .order("version", { ascending: false });

  if (imagesError) {
    console.error("Error fetching preview images:", imagesError);
  }

  // Map scene ID to preview image URL (get the latest version)
  const previewImageMap = new Map<string, string>();
  (previewImages ?? []).forEach((image) => {
    if (!previewImageMap.has(image.scene_id)) {
      previewImageMap.set(image.scene_id, image.url);
    }
  });

  // Combine all data
  const projectsWithPreview: ProjectWithPreview[] = projects.map((project) => {
    const firstSceneId = firstSceneMap.get(project.id);
    const previewImageUrl = firstSceneId
      ? previewImageMap.get(firstSceneId) ?? null
      : null;

    return {
      ...project,
      preview_image_url: previewImageUrl,
      scene_count: sceneCountMap.get(project.id) ?? 0,
    };
  });

  return {
    projects: projectsWithPreview,
    total: count ?? 0,
  };
}
