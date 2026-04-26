#!/bin/bash
# ============================================================
# Acooya Consulting - GitHub & Vercel Deployment Script
# ============================================================
# This script automates the setup of GitHub repository and
# Vercel deployment for the Acooya Consulting platform.
# ============================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project configuration
PROJECT_NAME="acooya-consulting"
REPO_NAME="acooya-consulting"
GITHUB_USERNAME=""
VERCEL_TOKEN=""

# Print functions
print_header() {
    echo -e "\n${BLUE}========================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}========================================${NC}\n"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

# Check prerequisites
check_prerequisites() {
    print_header "Checking Prerequisites"

    # Check Git
    if command -v git &> /dev/null; then
        print_success "Git is installed"
        git --version
    else
        print_error "Git is not installed. Please install Git first."
        exit 1
    fi

    # Check Node.js
    if command -v node &> /dev/null; then
        print_success "Node.js is installed"
        node --version
    else
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi

    # Check npm
    if command -v npm &> /dev/null; then
        print_success "npm is installed"
        npm --version
    else
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
}

# Get GitHub username
get_github_username() {
    print_header "GitHub Configuration"

    echo "Enter your GitHub username:"
    read -p "> " GITHUB_USERNAME

    if [ -z "$GITHUB_USERNAME" ]; then
        print_error "GitHub username cannot be empty"
        exit 1
    fi

    print_success "GitHub username: $GITHUB_USERNAME"
}

# Get Vercel token
get_vercel_token() {
    print_header "Vercel Configuration"

    echo "Enter your Vercel access token (from https://vercel.com/account/tokens):"
    read -p "> " VERCEL_TOKEN

    if [ -z "$VERCEL_TOKEN" ]; then
        print_error "Vercel token cannot be empty"
        exit 1
    fi

    print_success "Vercel token configured"
}

# Initialize Git repository
init_git_repo() {
    print_header "Initializing Git Repository"

    cd /workspace/acooya-consulting

    # Initialize Git if not already initialized
    if [ ! -d ".git" ]; then
        git init
        print_success "Git repository initialized"
    else
        print_info "Git repository already exists"
    fi

    # Configure Git user (if not set)
    if [ -z "$(git config user.email)" ]; then
        echo "Enter your Git email:"
        read -p "> " GIT_EMAIL
        git config user.email "$GIT_EMAIL"
    fi

    if [ -z "$(git config user.name)" ]; then
        echo "Enter your Git name:"
        read -p "> " GIT_NAME
        git config user.name "$GIT_NAME"
    fi

    # Create .gitignore if not exists
    if [ ! -f ".gitignore" ]; then
        cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
dist/
build/
out/

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Environment
.env
.env.local
.env.*.local

# Testing
coverage/
*.lcov

# Misc
*.tgz
*.tar.gz
EOF
        print_success "Created .gitignore"
    fi

    # Add all files
    git add .
    print_success "Files staged"

    # Create initial commit
    git commit -m "Acooya Consulting - Initial release

Features:
- Human-AI Synergy consulting platform
- Three service offerings
- Subscription pricing (Growth/Professional/Enterprise)
- Marketplace for consultants and AI agents
- Secure engagement portal
- SOC 2 Type II compliant security

Built with React, TypeScript, Tailwind CSS, and Vite"

    print_success "Initial commit created"
}

# Create GitHub repository
create_github_repo() {
    print_header "Creating GitHub Repository"

    # Check if gh CLI is available
    if command -v gh &> /dev/null; then
        print_info "GitHub CLI is installed"

        # Check if authenticated
        if gh auth status &> /dev/null; then
            print_success "Authenticated with GitHub"

            # Create repository
            gh repo create "$REPO_NAME" --public --source=. --push << EOF
Y
EOF
            print_success "GitHub repository created"
        else
            print_warning "Not authenticated with GitHub CLI"
            print_info "Please authenticate with: gh auth login"
            print_info "Or create the repository manually at https://github.com/new"
        fi
    else
        print_info "GitHub CLI not installed"
        print_info "Creating repository manually..."
        print_info "Please create a new repository at: https://github.com/new"
        print_info "Repository name: $REPO_NAME"
        print_info "Description: Acooya Consulting - Human-AI Synergy Platform"
        print_info "Visibility: Public or Private (your choice)"
    fi

    # Set remote
    print_info "Setting up remote repository..."
    echo "Enter your GitHub repository URL (or press Enter to skip):"
    read -p "> " REPO_URL

    if [ -n "$REPO_URL" ]; then
        git remote add origin "$REPO_URL"
        git branch -M main
        print_success "Remote configured"
    fi
}

# Install Vercel CLI
install_vercel_cli() {
    print_header "Installing Vercel CLI"

    if command -v vercel &> /dev/null; then
        print_success "Vercel CLI already installed"
        vercel --version
    else
        print_info "Installing Vercel CLI..."
        npm install -g vercel
        print_success "Vercel CLI installed"
    fi
}

# Deploy to Vercel
deploy_to_vercel() {
    print_header "Deploying to Vercel"

    cd /workspace/acooya-consulting

    print_info "Starting Vercel deployment..."
    print_info "You will be prompted to login if not authenticated"
    print_info "Follow the on-screen instructions to complete deployment"
    echo ""

    # Deploy with Vercel
    vercel --yes --prod

    print_success "Deployment initiated!"
    print_info "Check your Vercel dashboard for deployment status: https://vercel.com/dashboard"
}

# Create GitHub Actions for auto-deployment
create_github_actions() {
    print_header "Setting up GitHub Actions"

    mkdir -p .github/workflows

    cat > .github/workflows/deploy.yml << 'EOF'
name: Vercel Production Deployment

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Type check
        run: pnpm type-check

      - name: Build
        run: pnpm build

      - name: Deploy to Vercel (Production)
        if: github.ref == 'refs/heads/main'
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'

      - name: Deploy Preview (PR only)
        if: github.event_name == 'pull_request'
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
EOF

    print_success "GitHub Actions workflow created"

    cat > .github/workflows/ci.yml << 'EOF'
name: CI Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  lint-and-type-check:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - run: pnpm install --frozen-lockfile

      - name: Lint
        run: pnpm lint

      - name: Type check
        run: pnpm type-check

      - name: Test
        run: pnpm test --run
EOF

    print_success "CI pipeline created"
}

# Main setup
main() {
    print_header "Acooya Consulting - Deployment Setup"
    print_info "This script will help you set up GitHub and Vercel deployment"
    print_info "Press Ctrl+C at any time to cancel\n"

    # Step 1: Check prerequisites
    check_prerequisites

    # Step 2: Get configuration
    get_github_username
    get_vercel_token

    # Step 3: Initialize Git
    init_git_repo

    # Step 4: Create GitHub repository
    create_github_repo

    # Step 5: Install Vercel CLI
    install_vercel_cli

    # Step 6: Create GitHub Actions
    create_github_actions

    # Step 7: Deploy to Vercel
    deploy_to_vercel

    print_header "Setup Complete!"
    print_success "Your Acooya Consulting platform is now set up for deployment"
    print_info ""
    print_info "Next steps:"
    print_info "1. Add Vercel secrets to GitHub repository:"
    print_info "   - Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME/settings/secrets/actions"
    print_info "   - Add VERCEL_TOKEN with your Vercel access token"
    print_info "   - Add VERCEL_ORG_ID from your Vercel project settings"
    print_info "   - Add VERCEL_PROJECT_ID from your Vercel project settings"
    print_info ""
    print_info "2. Push to GitHub to trigger auto-deployment:"
    print_info "   git push -u origin main"
    print_info ""
    print_info "3. Monitor deployments at:"
    print_info "   https://vercel.com/dashboard"
}

# Run main function
main "$@"
