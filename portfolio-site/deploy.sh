#!/bin/bash

# Script to build and deploy React app to AWS S3
# Usage: ./deploy.sh

set -e  # Exit on any error

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
S3_BUCKET="s3://leahsattar-portfolio-site/"
AWS_PROFILE="leah"
BUILD_DIR="build"

echo -e "${YELLOW}Starting deployment process...${NC}"

# Get the script directory and navigate to project root
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo -e "${RED}Error: npm is not installed or not in PATH${NC}"
    exit 1
fi

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Dependencies not found. Installing dependencies...${NC}"
    npm install
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}npm install failed! Aborting deployment.${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}Dependencies installed successfully!${NC}"
fi

# Verify react-scripts is installed
if [ ! -f "node_modules/.bin/react-scripts" ] && [ ! -f "node_modules/react-scripts/bin/react-scripts.js" ]; then
    echo -e "${RED}Error: react-scripts not found. Please run 'npm install' manually.${NC}"
    exit 1
fi

echo -e "${YELLOW}Building React application...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed! Aborting deployment.${NC}"
    exit 1
fi

echo -e "${GREEN}Build completed successfully!${NC}"

# Check if build directory exists
if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}Error: Build directory not found at $BUILD_DIR${NC}"
    exit 1
fi

# Navigate to build directory
cd "$BUILD_DIR"

echo -e "${YELLOW}Syncing files to S3...${NC}"
aws s3 sync . "$S3_BUCKET" --delete --profile "$AWS_PROFILE"

if [ $? -ne 0 ]; then
    echo -e "${RED}Sync failed!${NC}"
    exit 1
fi

echo -e "${GREEN}Deployment completed successfully!${NC}"
echo -e "${GREEN}Files have been uploaded to $S3_BUCKET${NC}"

