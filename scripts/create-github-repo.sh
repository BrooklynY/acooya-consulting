#!/bin/bash

# ==============================================================================
# Acooya Consulting - GitHub Repository Setup Script
# ==============================================================================
# This script helps you create a GitHub repository and set up Vercel deployment
# for your Acooya Consulting website.
#
# Usage: ./scripts/create-github-repo.sh
# ==============================================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print functions
print_header() {
    echo -e "\n${BLUE}════════════════════════════════════════════════════════════════${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}════════════════════════════════════════════════════════════════${NC}\n"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

# Check prerequisites
check_prerequisites() {
    print_header "Checking Prerequisites"

    # Check if git is installed
    if ! command -v git &> /dev/null; then
        print_error "Git is not installed. Please install Git first."
        exit 1
    fi
    print_success "Git is installed"

    # Check if gh is installed (GitHub CLI)
    if ! command -v gh &> /dev/null; then
        print_warning "GitHub CLI (gh) is not installed."
        print_info "You can install it from: https://cli.github.com/"
        print_info "Or continue without it and create the repository manually."
        GH_INSTALLED=false
    else
        print_success "GitHub CLI is installed"
        GH_INSTALLED=true

        # Check if logged in
        if ! gh auth status &> /dev/null; then
            print_warning "You are not logged in to GitHub CLI."
            print_info "Run 'gh auth login' to authenticate."
            GH_LOGGED_IN=false
        else
            print_success "Logged in to GitHub CLI"
            GH_LOGGED_IN=true
        fi
    fi
}

# Configure git remote
configure_git_remote() {
    print_header "Configuring Git Remote"

    echo "Enter your GitHub username:"
    read -r GITHUB_USERNAME

    if [ -z "$GITHUB_USERNAME" ]; then
        print_error "GitHub username is required."
        exit 1
    fi

    # Check if remote already exists
    if git remote -v | grep -q "origin"; then
        print_warning "Remote 'origin' already exists."
        echo "Do you want to update it? (y/n)"
        read -r UPDATE_REMOTE
        if [ "$UPDATE_REMOTE" = "y" ] || [ "$UPDATE_REMOTE" = "Y" ]; then
            git remote set-url origin "https://github.com/${GITHUB_USERNAME}/acooya-consulting.git"
            print_success "Remote 'origin' updated"
        fi
    else
        git remote add origin "https://github.com/${GITHUB_USERNAME}/acooya-consulting.git"
        print_success "Remote 'origin' added"
    fi

    echo "Remote URL: https://github.com/${GITHUB_USERNAME}/acooya-consulting.git"
}

# Create GitHub repository
create_github_repo() {
    print_header "Creating GitHub Repository"

    if [ "$GH_INSTALLED" = false ] || [ "$GH_LOGGED_IN" = false ]; then
        print_info "Manual GitHub Repository Creation Required:"
        print_info "1. Go to https://github.com/new"
        print_info "2. Repository name: acooya-consulting"
        print_info "3. Description: Acooya Consulting - Human-AI Synergy Platform"
        print_info "4. Select 'Public' or 'Private'"
        print_info "5. Do NOT initialize with README"
        print_info "6. Click 'Create repository'"
        print_info "7. Run: git remote add origin https://github.com/YOUR_USERNAME/acooya-consulting.git"
        return
    fi

    echo "Creating GitHub repository..."
    if gh repo create acooya-consulting \
        --description "Acooya Consulting - Human-AI Synergy Platform" \
        --public \
        --source=. \
        --push=current \
        --disable-wiki \
        --disable-issues; then
        print_success "GitHub repository created successfully!"
    else
        print_error "Failed to create GitHub repository."
        print_info "Please create it manually at https://github.com/new"
    fi
}

# Configure Vercel
configure_vercel() {
    print_header "Vercel Configuration"

    print_info "To connect Vercel to your GitHub repository:"
    print_info "1. Go to https://vercel.com/new"
    print_info "2. Click 'Import Project'"
    print_info "3. Select your 'acooya-consulting' repository"
    print_info "4. Configure project settings:"
    print_info "   - Framework: Vite"
    print_info "   - Root Directory: ./"
    print_info "   - Build Command: pnpm build"
    print_info "   - Output Directory: dist"
    print_info "5. Click 'Deploy'"
    print_info ""
    print_info "To add custom domain (acooyaconsulting.com):"
    print_info "1. Go to Project Settings → Domains"
    print_info "2. Add 'acooyaconsulting.com'"
    print_info "3. Configure DNS records as shown"
}

# Add GitHub secrets
add_github_secrets() {
    print_header "GitHub Secrets Configuration"

    print_info "After creating the Vercel project, add these secrets to GitHub:"
    print_info ""
    print_info "1. Go to: https://github.com/YOUR_USERNAME/acooya-consulting/settings/secrets/actions"
    print_info "2. Click 'New repository secret' for each:"
    print_info ""
    print_info "Required Secrets:"
    print_info "  • VERCEL_TOKEN - Your Vercel access token"
    print_info "  • VERCEL_ORG_ID - Your Vercel Organization ID"
    print_info "  • VERCEL_PROJECT_ID - Your Vercel Project ID"
    print_info ""
    print_info "To get these values:"
    print_info "1. Vercel Token: https://vercel.com/account/tokens"
    print_info "2. Org ID & Project ID: Vercel Dashboard → Project → Settings → General"
}

# Push to GitHub
push_to_github() {
    print_header "Pushing to GitHub"

    echo "Checking remote URL..."
    REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "")

    if [ -z "$REMOTE_URL" ]; then
        print_error "No remote URL configured. Please configure GitHub remote first."
        exit 1
    fi

    print_info "Remote URL: $REMOTE_URL"
    print_info "Make sure the repository exists on GitHub before pushing."
    echo ""
    echo "To push the code, run:"
    echo "  git push -u origin main"
    echo ""
    read -p "Do you want to push now? (y/n): " PUSH_NOW

    if [ "$PUSH_NOW" = "y" ] || [ "$PUSH_NOW" = "Y" ]; then
        print_info "Pushing to GitHub..."
        if git push -u origin main; then
            print_success "Successfully pushed to GitHub!"
        else
            print_error "Failed to push to GitHub."
            print_info "Please create the repository on GitHub first, then run:"
            print_info "  git push -u origin main"
        fi
    fi
}

# Main function
main() {
    print_header "Acooya Consulting - GitHub Setup"

    echo "This script will help you:"
    echo "  1. Configure Git remote for GitHub"
    echo "  2. Create a GitHub repository"
    echo "  3. Set up Vercel deployment"
    echo "  4. Push your code to GitHub"
    echo ""

    check_prerequisites
    configure_git_remote
    create_github_repo
    configure_vercel
    add_github_secrets
    push_to_github

    print_header "Setup Complete!"

    echo "Next Steps:"
    echo "  1. Connect Vercel to your GitHub repository"
    echo "  2. Add custom domain 'acooyaconsulting.com' in Vercel"
    echo "  3. Configure DNS records at your domain registrar"
    echo "  4. Wait for SSL certificate (5-30 minutes)"
    echo "  5. Access your site at https://acooyaconsulting.com"
    echo ""
    print_success "Your website will be live at www.acooyaconsulting.com"
}

# Run main function
main
