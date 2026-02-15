#!/bin/bash

# =============================================================================
# init.sh - Spring FES 企业官网项目初始化脚本
# =============================================================================
# 每次 session 开始时运行此脚本，确保环境正确并启动开发服务器。
# =============================================================================

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${YELLOW}Initializing Spring FES Corporate Website...${NC}"

# Check if website directory exists
if [ ! -d "website" ]; then
  echo -e "${RED}✗ website directory not found!${NC}"
  echo "Please create the Next.js project first."
  exit 1
fi

# Install dependencies
echo "Installing dependencies..."
cd website && npm install && cd ..

# Kill any existing dev server on port 3000
if lsof -ti:3000 > /dev/null 2>&1; then
  echo "Killing existing process on port 3000..."
  lsof -ti:3000 | xargs kill -9 2>/dev/null || true
  sleep 1
fi

# Start development server in background
echo "Starting development server..."
cd website
npm run dev &
SERVER_PID=$!
cd ..

# Wait for server to be ready (with timeout)
echo "Waiting for server to start..."
MAX_WAIT=30
WAITED=0
while ! curl -s http://localhost:3000 > /dev/null 2>&1; do
  sleep 1
  WAITED=$((WAITED + 1))
  if [ $WAITED -ge $MAX_WAIT ]; then
    echo -e "${RED}✗ Server failed to start within ${MAX_WAIT} seconds!${NC}"
    echo "Check for errors in the Next.js application."
    exit 1
  fi
done

# Basic health check - verify server responds with 200
echo "Running health check..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000)
if [ "$HTTP_STATUS" -ge 200 ] && [ "$HTTP_STATUS" -lt 400 ]; then
  echo -e "${GREEN}✓ Health check passed (HTTP ${HTTP_STATUS})${NC}"
else
  echo -e "${RED}✗ Health check failed (HTTP ${HTTP_STATUS})${NC}"
  echo "The server is running but returning errors. Check the application logs."
  echo "Fix any issues before starting new tasks."
  exit 1
fi

echo -e "${GREEN}✓ Initialization complete!${NC}"
echo -e "${GREEN}✓ Dev server running at http://localhost:3000 (PID: $SERVER_PID)${NC}"
echo ""
echo "Next steps:"
echo "  1. Use browser automation to verify the app works"
echo "  2. Read progress.txt and git log to understand current state"
echo "  3. Read task.json and pick the next incomplete task"
echo ""
echo "Ready to continue development."
