# Acooya Consulting - Deployment Guide

## Quick Setup Instructions

### 1. Connect to GitHub

```bash
# Navigate to project directory
cd /workspace/acooya-consulting

# Initialize Git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Acooya Consulting - Initial release

Features:
- Human-AI Synergy consulting platform
- Three service offerings (Business Architecture, Delivery Enablement, Strategic Insights)
- Subscription pricing (Growth $42/mo, Professional $127/mo, Enterprise $424/mo)
- Marketplace for consultants and AI agents
- Secure engagement portal with transcripts
- SOC 2 Type II compliant security"

# Create new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/acooya-consulting.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd /workspace/acooya-consulting

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? acooya-consulting
# - Directory? ./
# - Override settings? No

# For production deployment:
vercel --prod
```

### 3. Environment Variables (.env)

Create a `.env` file in the project root:

```env
# Supabase (if using real database)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key

# Optional: Analytics
VITE_GA_ID=G-XXXXXXXXXX
```

### 4. Custom Domain Setup (Vercel)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `acooyaconsulting.com`)
3. Update DNS records as instructed by Vercel
4. Wait for SSL certificate to be provisioned

## Project Structure

```
acooya-consulting/
├── src/
│   ├── App.tsx                     # Main application
│   ├── components/                 # Reusable UI components
│   │   ├── Layout.tsx
│   │   └── ErrorBoundary.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx         # Authentication state
│   ├── data/
│   │   └── mockData.ts             # Demo data & content
│   ├── pages/                      # Page components
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── MarketplacePage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── ClientPortal.tsx
│   │   └── ... (17 pages total)
│   ├── lib/
│   │   ├── supabase.ts             # Database connection
│   │   └── utils.ts
│   └── types/
│       └── auth.ts
├── public/                         # Static assets
│   ├── logo_*.png
│   ├── icon_*.png
│   └── brooklyn-yang.jpg
├── dist/                           # Production build (do not edit)
├── docs/                           # Documentation
│   ├── LAUNCH_CHECKLIST.md
│   ├── MARKETING_PLAN.md
│   └── TECHNICAL_DOCUMENTATION.md
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Routing**: React Router v6
- **State Management**: React Context
- **Backend**: Supabase (optional)
- **Deployment**: Vercel (recommended)

## Scripts

```bash
# Development
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint
```

## Support

- **Email**: contact@acooyaconsulting.com
- **Phone**: +61 428 112 376
- **Location**: Sydney, NSW, Australia

---

*Built by MiniMax Agent for Acooya Consulting*
