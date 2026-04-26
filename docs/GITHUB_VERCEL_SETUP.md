# Acooya Consulting - GitHub & Vercel Setup Guide

## Overview

This guide will help you set up GitHub repository and Vercel deployment for your Acooya Consulting platform. You have two options:

1. **Automated Setup** - Use the provided script for quick setup
2. **Manual Setup** - Follow step-by-step instructions below

---

## Option 1: Automated Setup (Recommended)

### Prerequisites

- Git installed
- Node.js 18+ installed
- GitHub CLI installed (optional, for automatic repo creation)
- Vercel account

### Steps

1. **Make the script executable:**
   ```bash
   chmod +x /workspace/acooya-consulting/scripts/setup-deploy.sh
   ```

2. **Run the setup script:**
   ```bash
   cd /workspace/acooya-consulting
   ./scripts/setup-deploy.sh
   ```

3. **Follow the on-screen prompts:**
   - Enter your GitHub username
   - Enter your Vercel access token
   - Complete Git and Vercel configuration

4. **Add secrets to GitHub (after script completes):**
   - Go to: `https://github.com/YOUR_USERNAME/acooya-consulting/settings/secrets/actions`
   - Add: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

5. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```

---

## Option 2: Manual Step-by-Step Setup

### Phase 1: GitHub Repository Setup

#### Step 1.1: Create GitHub Repository

1. Go to [GitHub New Repository](https://github.com/new)
2. Fill in the details:
   - **Repository name:** `acooya-consulting`
   - **Description:** "Acooya Consulting - Human-AI Synergy Platform"
   - **Visibility:** Public (recommended) or Private
   - **Do NOT** initialize with README (we already have code)

3. Click "Create repository"

#### Step 1.2: Initialize Git in Project Directory

```bash
cd /workspace/acooya-consulting

# Initialize Git repository
git init

# Configure Git user (replace with your details)
git config user.email "your-email@example.com"
git config user.name "Your Name"

# Add all files to staging
git add .

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
```

#### Step 1.3: Push to GitHub

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/acooya-consulting.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### Phase 2: Vercel Setup

#### Step 2.1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (recommended)
3. Authorize Vercel to access your GitHub repositories

#### Step 2.2: Install Vercel CLI

```bash
# Install globally
npm install -g vercel

# Verify installation
vercel --version
```

#### Step 2.3: Deploy to Vercel

```bash
cd /workspace/acooya-consulting

# Login to Vercel (if not already logged in)
vercel login

# Deploy to preview
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No (Create a new project)
# - Project name? acooya-consulting
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

#### Step 2.4: Get Vercel Project IDs

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your `acooya-consulting` project
3. Go to **Settings** → **General**
4. Scroll to **Project ID** and **Org ID**
5. Copy these values for GitHub Actions secrets

### Phase 3: GitHub Actions Setup (Auto-Deployment)

#### Step 3.1: Create GitHub Secrets

1. Go to your repository: `https://github.com/YOUR_USERNAME/acooya-consulting`
2. Go to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** for each:

| Secret Name | Value |
|-------------|-------|
| `VERCEL_TOKEN` | Your Vercel access token (from https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Your Vercel Organization ID (format: `team_xxxxxxxxxx`) |
| `VERCEL_PROJECT_ID` | Your Vercel Project ID (format: `prj_xxxxxxxxxx`) |

#### Step 3.2: Create GitHub Actions Workflows

Create the `.github/workflows` directory and files:

**Directory structure:**
```
.github/
└── workflows/
    ├── deploy.yml      # Auto-deployment to production
    └── ci.yml          # CI pipeline (lint, type-check, test)
```

**File: `.github/workflows/deploy.yml`**
```yaml
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
```

**File: `.github/workflows/ci.yml`**
```yaml
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
```

#### Step 3.3: Push Workflows to GitHub

```bash
cd /workspace/acooya-consulting

# Create directories
mkdir -p .github/workflows

# Copy/create the workflow files (see above)

# Commit and push
git add .
git commit -m "Add GitHub Actions workflows for CI/CD"
git push
```

### Phase 4: Verify Deployment

#### Check GitHub Actions

1. Go to your repository on GitHub
2. Click on **Actions** tab
3. You should see:
   - `CI Pipeline` - running on every push
   - `Vercel Production Deployment` - running on push to main

#### Check Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select `acooya-consulting` project
3. You should see deployment status and URL

---

## Custom Domain Setup (Optional)

### Step 1: Purchase Domain

Purchase a domain (e.g., `acooyaconsulting.com`) from a registrar like:
- Namecheap
- GoDaddy
- Google Domains

### Step 2: Configure Vercel

1. Go to Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Enter your domain name (e.g., `acooyaconsulting.com`)
3. Click **Add**
4. Vercel will provide DNS records to add

### Step 3: Update DNS Records

In your domain registrar's DNS settings, add:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

### Step 4: Wait for SSL

Vercel will automatically provision an SSL certificate. This may take a few minutes to 48 hours.

---

## Troubleshooting

### Common Issues

**1. Git push rejected**
```bash
# Solution: Set upstream branch
git push --set-upstream origin main
```

**2. Vercel deployment failed**
- Check build logs in Vercel dashboard
- Ensure `VERCEL_TOKEN` secret is correct
- Verify project ID and org ID are correct

**3. GitHub Actions not running**
- Ensure workflows are in `.github/workflows/` directory
- Check if repository has Actions enabled (Settings → Actions → Allow all actions)

**4. Build errors**
```bash
# Run locally to debug
cd /workspace/acooya-consulting
pnpm install
pnpm build
```

### Get Help

- **GitHub Actions Docs:** https://docs.github.com/en/actions
- **Vercel Docs:** https://vercel.com/docs
- **Email:** contact@acooyaconsulting.com
- **Phone:** +61 428 112 376

---

## Summary

After completing all steps, your deployment pipeline will be:

```
Developer pushes code → GitHub → Triggers GitHub Actions → Builds project → Deploys to Vercel
                                              ↓
                                        Runs tests/lint
```

**Benefits:**
- Automatic deployment on every push to main
- Preview deployments for pull requests
- CI/CD pipeline for quality assurance
- Custom domain support

---

*Built by MiniMax Agent for Acooya Consulting*