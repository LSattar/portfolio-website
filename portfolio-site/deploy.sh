#!/bin/bash

# Script to build and deploy React app to AWS S3
# Usage: ./deploy.sh

set -e  # Exit on any error

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Save the original working directory
ORIGINAL_DIR="$(pwd)"

# Trap to restore original directory on exit
trap 'cd "$ORIGINAL_DIR"' EXIT

# Configuration
S3_BUCKET="s3://leahsattar-portfolio-site/"
AWS_PROFILE="leah"
CLOUDFRONT_DISTRIBUTION_ID="E26EAFYP2A1P8O"
BUILD_DIR="build"

echo -e "${YELLOW}Starting deployment process...${NC}"

# Get the script directory (project root)
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Use absolute paths for all operations
PROJECT_ROOT="$SCRIPT_DIR"
BUILD_DIR_ABS="$PROJECT_ROOT/$BUILD_DIR"

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo -e "${RED}Error: npm is not installed or not in PATH${NC}"
    exit 1
fi

# Check if node_modules exists, if not install dependencies
if [ ! -d "$PROJECT_ROOT/node_modules" ]; then
    echo -e "${YELLOW}Dependencies not found. Installing dependencies...${NC}"
    (cd "$PROJECT_ROOT" && npm install)
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}npm install failed! Aborting deployment.${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}Dependencies installed successfully!${NC}"
fi

# Verify react-scripts is installed
if [ ! -f "$PROJECT_ROOT/node_modules/.bin/react-scripts" ] && [ ! -f "$PROJECT_ROOT/node_modules/react-scripts/bin/react-scripts.js" ]; then
    echo -e "${RED}Error: react-scripts not found. Please run 'npm install' manually.${NC}"
    exit 1
fi

echo -e "${YELLOW}Building React application...${NC}"
(cd "$PROJECT_ROOT" && npm run build)

if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed! Aborting deployment.${NC}"
    exit 1
fi

echo -e "${GREEN}Build completed successfully!${NC}"

# Check if build directory exists
if [ ! -d "$BUILD_DIR_ABS" ]; then
    echo -e "${RED}Error: Build directory not found at $BUILD_DIR_ABS${NC}"
    exit 1
fi

echo -e "${YELLOW}Syncing files to S3...${NC}"
aws s3 sync "$BUILD_DIR_ABS" "$S3_BUCKET" --delete --profile "$AWS_PROFILE"

if [ $? -ne 0 ]; then
    echo -e "${RED}Sync failed!${NC}"
    exit 1
fi

echo -e "${YELLOW}Setting cache-control headers for optimal SPA caching...${NC}"

# Set no-cache for all HTML files (so they always fetch fresh)
echo -e "${YELLOW}  → Setting no-cache for HTML files...${NC}"
find "$BUILD_DIR_ABS" -name "*.html" -type f | while read -r file; do
    # Get relative path from build directory
    rel_path="${file#$BUILD_DIR_ABS/}"
    aws s3 cp "$file" "$S3_BUCKET$rel_path" \
        --cache-control "no-cache, max-age=0, must-revalidate" \
        --metadata-directive REPLACE \
        --profile "$AWS_PROFILE" 2>/dev/null || true
done

# Set long cache for hashed assets (main-*.js, main-*.css, chunk files)
echo -e "${YELLOW}  → Setting long cache for hashed assets...${NC}"
# Handle all hashed assets in static/js and static/css
find "$BUILD_DIR_ABS/static" -type f \( -name "main.*.js" -o -name "main.*.css" -o -name "*.chunk.js" -o -name "*.chunk.css" \) | while read -r file; do
    if [ -f "$file" ]; then
        rel_path="${file#$BUILD_DIR_ABS/}"
        aws s3 cp "$file" "$S3_BUCKET$rel_path" \
            --cache-control "max-age=31536000, immutable" \
            --metadata-directive REPLACE \
            --profile "$AWS_PROFILE" 2>/dev/null || true
    fi
done

echo -e "${YELLOW}Creating CloudFront invalidation...${NC}"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
    --paths "/*" \
    --profile "$AWS_PROFILE" \
    --query 'Invalidation.Id' \
    --output text)

if [ $? -ne 0 ]; then
    echo -e "${RED}CloudFront invalidation failed!${NC}"
    exit 1
fi

echo -e "${GREEN}CloudFront invalidation created: $INVALIDATION_ID${NC}"
echo -e "${YELLOW}Note: Wait for invalidation to show 'Completed' in CloudFront console before testing${NC}"

echo -e "${GREEN}Deployment completed successfully!${NC}"
echo -e "${GREEN}Files have been uploaded to $S3_BUCKET${NC}"
echo -e "${GREEN}CloudFront cache will be cleared once invalidation completes${NC}"

