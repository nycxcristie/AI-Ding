#!/bin/bash

# AI-Ding Extension Git Repository Setup Script
# This script automates the process of creating a local Git repository
# and copying all necessary extension files

set -e  # Exit on any error

echo "🚀 AI-Ding Extension Git Repository Setup"
echo "=========================================="

# Configuration
REPO_DIR="ai-ding-extension-source"
GITHUB_REPO_NAME="AI-Ding-Chrome-Extension"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if directory already exists
if [ -d "$REPO_DIR" ]; then
    print_warning "Directory '$REPO_DIR' already exists!"
    read -p "Do you want to remove it and start fresh? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -rf "$REPO_DIR"
        print_success "Removed existing directory"
    else
        print_error "Aborting setup"
        exit 1
    fi
fi

# Step 1: Create the local directory
print_status "Creating local directory: $REPO_DIR"
mkdir -p "$REPO_DIR"
print_success "Directory created"

# Step 2: Copy extension files
print_status "Copying extension files..."

# Create directory structure
mkdir -p "$REPO_DIR/src/utils"
mkdir -p "$REPO_DIR/src/platforms"
mkdir -p "$REPO_DIR/icons"
mkdir -p "$REPO_DIR/sounds"

# Copy main extension files
print_status "Copying main extension files..."
cp manifest.json "$REPO_DIR/" 2>/dev/null || print_warning "manifest.json not found"
cp background.js "$REPO_DIR/" 2>/dev/null || print_warning "background.js not found"
cp popup.html "$REPO_DIR/" 2>/dev/null || print_warning "popup.html not found"
cp popup.js "$REPO_DIR/" 2>/dev/null || print_warning "popup.js not found"
cp public/styles.css "$REPO_DIR/styles.css" 2>/dev/null || print_warning "styles.css not found"

# Copy utility files
print_status "Copying utility files..."
cp src/utils/notificationUtils.js "$REPO_DIR/src/utils/" 2>/dev/null || print_warning "notificationUtils.js not found"

# Copy platform detectors
print_status "Copying platform detectors..."
cp src/platforms/*.js "$REPO_DIR/src/platforms/" 2>/dev/null || print_warning "Platform detectors not found"

# Copy icons
print_status "Copying icons..."
cp icons/*.png "$REPO_DIR/icons/" 2>/dev/null || print_warning "Icons not found"

# Copy sounds
print_status "Copying sounds..."
cp sounds/*.mp3 "$REPO_DIR/sounds/" 2>/dev/null || print_warning "Sound files not found"

# Copy documentation files from extension-files
print_status "Copying documentation files..."
cp extension-files/.gitignore "$REPO_DIR/" 2>/dev/null || print_warning ".gitignore not found"
cp extension-files/README.md "$REPO_DIR/" 2>/dev/null || print_warning "README.md not found"
cp extension-files/CHANGELOG.md "$REPO_DIR/" 2>/dev/null || print_warning "CHANGELOG.md not found"
cp extension-files/INSTALL.md "$REPO_DIR/" 2>/dev/null || print_warning "INSTALL.md not found"
cp extension-files/DEVELOPMENT.md "$REPO_DIR/" 2>/dev/null || print_warning "DEVELOPMENT.md not found"
cp extension-files/LICENSE "$REPO_DIR/" 2>/dev/null || print_warning "LICENSE not found"
cp extension-files/CONTRIBUTING.md "$REPO_DIR/" 2>/dev/null || print_warning "CONTRIBUTING.md not found"

print_success "All files copied successfully"

# Step 3: Initialize Git repository
print_status "Initializing Git repository..."
cd "$REPO_DIR"

git init
print_success "Git repository initialized"

# Step 4: Add and commit files
print_status "Adding files to Git..."
git add .
print_success "Files added to staging area"

print_status "Creating initial commit..."
git commit -m "Initial commit of AI-Ding Chrome Extension source code"
print_success "Initial commit created"

# Step 5: Display next steps
echo
echo "🎉 Repository setup complete!"
echo "================================"
echo
print_status "Next steps:"
echo "1. Create a new repository on GitHub named: $GITHUB_REPO_NAME"
echo "2. Run the following commands to connect and push:"
echo
echo -e "${YELLOW}cd $REPO_DIR${NC}"
echo -e "${YELLOW}git remote add origin https://github.com/YOUR_USERNAME/$GITHUB_REPO_NAME.git${NC}"
echo -e "${YELLOW}git branch -M main${NC}"
echo -e "${YELLOW}git push -u origin main${NC}"
echo
print_warning "Remember to replace 'YOUR_USERNAME' with your actual GitHub username!"
echo
print_status "Repository location: $(pwd)"

# Display file structure
echo
print_status "Repository structure:"
find . -type f -name ".*" -prune -o -type f -print | head -20 | sed 's|^\./||' | sort

if [ $(find . -type f | wc -l) -gt 20 ]; then
    echo "... and $(( $(find . -type f | wc -l) - 20 )) more files"
fi

echo
print_success "Setup completed successfully! 🚀"