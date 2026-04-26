# Acooya Consulting Platform - Technical Documentation

## Comprehensive Build Guide & Architecture Reference

**Version:** 1.0
**Last Updated:** April 2026
**Author:** MiniMax Agent for Acooya Consulting

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Architecture](#2-architecture)
3. [Tech Stack](#3-tech-stack)
4. [Directory Structure](#4-directory-structure)
5. [Components](#5-components)
6. [Pages](#6-pages)
7. [Data Models](#7-data-models)
8. [Styling & Theming](#8-styling--theming)
9. [Brand Guidelines](#9-brand-guidelines)
10. [Build & Deployment](#10-build--deployment)
11. [Future Enhancements](#11-future-enhancements)

---

## 1. Project Overview

### Project Description

Acooya Consulting is a modern online consulting platform that bridges human expertise with AI intelligence. The platform enables enterprises to engage with world-class consultants, deploy purpose-built AI agents, or combine both for transformative business outcomes.

### Core Features

- **Multi-format Engagement**: Choose human consultants, AI agents, or hybrid teams
- **Secure Workspace**: Encrypted collaboration environment for all engagements
- **Engagement Management**: Complete lifecycle from brief to delivery
- **Summary Transcripts**: AI-generated summaries of all engagements
- **Knowledge Hub**: Resources, templates, and tools for consultants and clients
- **Compliance**: SOC 2 Type II and GDPR ready

### Target Users

1. **Enterprise Clients**: Organisations seeking consulting services
2. **Human Consultants**: Professionals offering consulting services
3. **AI Agent Developers**: Teams building consulting AI agents
4. **Platform Administrators**: Staff managing the marketplace

---

## 2. Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                             │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    React SPA (Vite)                       │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │   │
│  │  │  Home   │ │Services │ │Consult- │ │Engage-  │  ...      │   │
│  │  │  Page   │ │  Page   │ │  ants   │ │ments    │          │   │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘          │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      DATA LAYER (Mock)                           │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    src/data/mockData.ts                     │   │
│  │  • consultingServices    • humanConsultants                │   │
│  │  • aiAgents             • hybridSolutions                  │   │
│  │  • mockEngagements       • knowledgeBase                  │   │
│  │  • testimonials         • partnershipConcept              │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### Routing Architecture

```
BrowserRouter
    └── Layout (Shared UI Wrapper)
        └── Routes
            ├── /           → HomePage
            ├── /services   → ServicesPage
            ├── /consultants → FindConsultantsPage
            ├── /engagements → EngagementPortal
            ├── /dashboard  → DashboardPage
            ├── /knowledge → KnowledgeBasePage
            └── /about     → AboutPage
```

### Component Hierarchy

```
App
└── Layout
    ├── Navigation (Desktop + Mobile)
    ├── TopBanner
    ├── MainContent (Outlet)
    └── Footer
        ├── Brand Column
        ├── Services Links
        ├── Platform Links
        └── Contact Info

Pages/
├── HomePage
│   ├── HeroSection
│   ├── StatsSection
│   ├── PartnershipConcept
│   ├── ServicesPreview
│   ├── ConsultantsPreview
│   ├── Testimonials
│   ├── SecuritySection
│   └── CTASection
├── ServicesPage
│   ├── ServiceDetail (×3)
│   └── HybridSolutions
├── FindConsultantsPage
│   ├── SearchFilters
│   ├── HumanConsultantsGrid
│   └── AIAgentsGrid
├── EngagementPortal
│   └── MultiStepForm
│       ├── Step 1: Engagement Type
│       ├── Step 2: Select Service
│       ├── Step 3: Choose Partners
│       ├── Step 4: Project Brief
│       └── Step 5: Review & Submit
├── DashboardPage
│   ├── DashboardHeader
│   ├── Sidebar
│   ├── StatsCards
│   ├── ActiveEngagements
│   ├── RecentActivity
│   └── EngagementDetail (Sidebar)
├── KnowledgeBasePage
│   ├── SearchBar
│   ├── CategoryFilters
│   ├── ResourcesGrid
│   └── InsightsSection
└── AboutPage
    ├── MissionSection
    ├── StatsSection
    ├── LeadershipTeam
    ├── TechnologyStack
    └── ContactForm
```

---

## 3. Tech Stack

### Core Technologies

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | React | 18.3.1 | UI library |
| **Language** | TypeScript | 5.6.2 | Type safety |
| **Bundler** | Vite | 6.2.6 | Fast builds |
| **Styling** | Tailwind CSS | 3.4.16 | Utility-first CSS |
| **Routing** | React Router | 6.30.0 | Client-side routing |
| **Icons** | Lucide React | 0.364.0 | Icon library |
| **Package Manager** | pnpm | Latest | Dependency management |

### UI Components & Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| @radix-ui/* | Various | Accessible UI primitives |
| class-variance-authority | 0.7.1 | Component variants |
| clsx | 2.1.1 | Conditional classes |
| tailwind-merge | 2.6.0 | Tailwind class merging |
| tailwindcss-animate | 1.0.7 | Animation utilities |

### Form & Validation

| Library | Version | Purpose |
|---------|---------|---------|
| react-hook-form | 7.55.0 | Form state management |
| @hookform/resolvers | 3.10.0 | Form validation |
| zod | 3.24.2 | Schema validation |

### Data Visualization

| Library | Version | Purpose |
|---------|---------|---------|
| recharts | 2.15.2 | Charts and graphs |

### Additional Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| date-fns | 3.6.0 | Date formatting |
| react-day-picker | 8.10.1 | Date picker |
| embla-carousel-react | 8.6.0 | Carousel component |
| react-resizable-panels | 2.1.7 | Resizable panels |
| sonner | 1.7.4 | Toast notifications |
| vaul | 1.1.2 | Drawer component |
| next-themes | 0.4.6 | Theme management |

### Development Tools

| Tool | Purpose |
|------|---------|
| ESLint | Code linting |
| TypeScript | Type checking |
| PostCSS | CSS processing |
| Autoprefixer | CSS vendor prefixes |

---

## 4. Directory Structure

```
acooya-consulting/
├── docs/                          # Documentation files
│   ├── MARKETING_PLAN.md         # Marketing strategy
│   ├── LAUNCH_CHECKLIST.md       # Launch readiness
│   └── TECHNICAL_DOCUMENTATION.md # This file
│
├── public/                         # Static assets
│
├── src/                           # Source code
│   ├── App.tsx                   # Root component with routing
│   ├── main.tsx                  # Entry point
│   ├── index.css                # Tailwind imports
│   │
│   ├── components/               # Reusable components
│   │   ├── Layout.tsx           # Main layout wrapper
│   │   └── ErrorBoundary.tsx    # Error handling
│   │
│   ├── pages/                   # Page components
│   │   ├── HomePage.tsx         # Landing page
│   │   ├── ServicesPage.tsx     # Service details
│   │   ├── FindConsultantsPage.tsx # Consultant directory
│   │   ├── EngagementPortal.tsx  # Engagement wizard
│   │   ├── DashboardPage.tsx     # Client dashboard
│   │   ├── KnowledgeBasePage.tsx # Resources hub
│   │   └── AboutPage.tsx        # About & contact
│   │
│   ├── data/                    # Data layer
│   │   └── mockData.ts          # Mock data & types
│   │
│   ├── hooks/                   # Custom React hooks
│   │   └── use-mobile.tsx       # Mobile detection
│   │
│   ├── lib/                     # Utilities
│   │   └── utils.ts             # Helper functions
│   │
│   └── styles/                  # Styles
│       └── globals.css           # Global styles & variables
│
├── index.html                    # HTML entry
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tsconfig.app.json            # App TypeScript config
├── tsconfig.node.json           # Node TypeScript config
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
└── eslint.config.js             # ESLint configuration
```

---

## 5. Components

### Layout Component (`src/components/Layout.tsx`)

**Purpose**: Provides the main application shell with consistent navigation and footer.

**Key Elements**:
- **TopBanner**: Security certification notice (SOC 2 Type II)
- **Navigation**: Responsive nav with desktop/mobile modes
- **Logo**: SVG logo with 4 bird-like colored elements
- **Footer**: Multi-column footer with links and contact info

**Props**: None (uses React Router for page content)

**State**:
- `mobileMenuOpen`: Boolean for mobile menu toggle

### Logo SVG Component

**Location**: Inline in `Layout.tsx`

**Design**:
- ViewBox: 400×120
- Icon: 4 swirling bird-like elements arranged radially
- Colors:
  - Top: #2563EB (Blue)
  - Right: #F59E0B (Orange)
  - Bottom: #10B981 (Green)
  - Left: #EC4899 (Pink)
- Text: "ACOOYA" in dark charcoal #374151
- Subtitle: "CONSULTING" with flanking lines

### ErrorBoundary Component (`src/components/ErrorBoundary.tsx`)

**Purpose**: Catches and handles React errors gracefully.

---

## 6. Pages

### 6.1 HomePage (`src/pages/HomePage.tsx`)

**Route**: `/`

**Purpose**: Landing page showcasing the Acooya value proposition.

**Sections**:
1. **HeroSection**: Main CTA with animated background
2. **StatsSection**: 6 key metrics with icons
3. **PartnershipConcept**: Human-AI Synergy Model explanation
4. **ServicesPreview**: 3 service cards linking to ServicesPage
5. **ConsultantsPreview**: Human consultants and AI agents listings
6. **Testimonials**: Carousel of client quotes
7. **SecuritySection**: Compliance and security features
8. **CTASection**: Final conversion section

**Key Features**:
- Responsive grid layouts
- Animated gradient backgrounds
- Interactive testimonial carousel
- SVG logo component

### 6.2 ServicesPage (`src/pages/ServicesPage.tsx`)

**Route**: `/services`

**Purpose**: Detailed information about each consulting practice area.

**Services**:
1. **Business Architecture & Operating Model**
   - Price: $50,000 - $250,000
   - Duration: 4-12 weeks

2. **Delivery Enablement**
   - Price: $30,000 - $150,000
   - Duration: 3-8 weeks

3. **Strategic Insight & Reporting**
   - Price: $40,000 - $200,000
   - Duration: 6-16 weeks

**Key Features**:
- Alternating layout for each service
- Feature and deliverable lists
- Hybrid solutions callout section

### 6.3 FindConsultantsPage (`src/pages/FindConsultantsPage.tsx`)

**Route**: `/consultants`

**Purpose**: Directory for browsing and selecting consulting partners.

**Tabs**:
- Human Consultants tab
- AI Agents tab

**Features**:
- Search by name or expertise
- Filter by category/expertise
- Consultant cards with ratings and availability
- AI agent cards with capabilities

### 6.4 EngagementPortal (`src/pages/EngagementPortal.tsx`)

**Route**: `/engagements`

**Purpose**: Multi-step wizard for creating new engagements.

**5-Step Process**:

| Step | Title | Description |
|------|-------|--------------|
| 1 | Engagement Type | Choose human, AI, or hybrid |
| 2 | Select Service | Pick from 3 practice areas |
| 3 | Choose Partners | Select consultants/agents |
| 4 | Project Brief | Describe project & upload docs |
| 5 | Review & Submit | Confirm details and submit |

**State Management**:
```typescript
const [currentStep, setCurrentStep] = useState(1);
const [engagementType, setEngagementType] = useState<'human' | 'ai' | 'hybrid' | null>(null);
const [selectedService, setSelectedService] = useState('');
const [selectedConsultants, setSelectedConsultants] = useState<string[]>([]);
const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
const [projectBrief, setProjectBrief] = useState('');
```

### 6.5 DashboardPage (`src/pages/DashboardPage.tsx`)

**Route**: `/dashboard`

**Purpose**: Client portal for managing engagements.

**Tabs**:
- Overview: Stats, active engagements, recent activity
- Engagements: Full engagement table
- Documents: Document repository
- Transcripts: AI-generated engagement summaries

**Features**:
- Engagement detail sidebar
- Progress tracking
- Document management
- Activity timeline

### 6.6 KnowledgeBasePage (`src/pages/KnowledgeBasePage.tsx`)

**Route**: `/knowledge`

**Purpose**: Resource library for consultants and clients.

**Categories**:
- Assessment Tools
- Templates
- Methodology
- Toolkits
- Case Studies

**Features**:
- Search functionality
- Category filtering
- Bookmarking
- Download buttons

### 6.7 AboutPage (`src/pages/AboutPage.tsx`)

**Route**: `/about`

**Purpose**: Company information, leadership, and contact.

**Sections**:
- Mission & Vision
- Stats
- Leadership Team
- Technology Stack
- Contact Form

---

## 7. Data Models

### Located in: `src/data/mockData.ts`

### Consulting Service

```typescript
interface ConsultingService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  deliverables: string[];
  priceRange: string;
  duration: string;
  icon: 'building' | 'rocket' | 'chart';
}
```

### Human Consultant

```typescript
interface HumanConsultant {
  id: string;
  name: string;
  title: string;
  expertise: string[];
  experience: string;
  rating: number;
  projects: number;
  hourlyRate: number;
  availability: 'Available Now' | 'Available from next week' | 'Limited Availability';
  bio: string;
  image: string;
}
```

### AI Agent

```typescript
interface AIAgent {
  id: string;
  name: string;
  category: string;
  capabilities: string[];
  usageCount: number;
  rating: number;
  pricePerSession: number;
  availability: string;
  description: string;
  icon: string;
}
```

### Hybrid Solution

```typescript
interface HybridSolution {
  id: string;
  title: string;
  description: string;
  humanRole: string;
  aiRole: string;
  duration: string;
  price: string;
  savings: string;
}
```

### Engagement

```typescript
interface Engagement {
  id: string;
  title: string;
  client: string;
  type: 'human' | 'ai' | 'hybrid';
  status: 'active' | 'completed' | 'pending';
  progress: number;
  startDate: string;
  endDate: string;
  value: string;
  consultants: string[];
  recentActivity: Activity[];
  documents: Document[];
}

interface Activity {
  date: string;
  action: string;
  user: string;
}

interface Document {
  name: string;
  date: string;
}
```

### Knowledge Resource

```typescript
interface KnowledgeResource {
  id: string;
  title: string;
  category: string;
  description: string;
  downloads: number;
  date: string;
}
```

### Testimonial

```typescript
interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  rating: number;
  image: string;
}
```

### Partnership Concept

```typescript
interface PartnershipConcept {
  title: string;
  subtitle: string;
  description: string;
  benefits: Benefit[];
  process: ProcessStep[];
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface ProcessStep {
  phase: string;
  description: string;
  duration: string;
}
```

---

## 8. Styling & Theming

### Tailwind Configuration

**Location**: `tailwind.config.js`

**Custom Colors**: Uses Acooya brand colors through Tailwind utilities:
- `blue-*` / `bg-blue-*` - Primary brand color
- `purple-*` / `bg-purple-*` - Secondary accent
- `green-*` / `bg-green-*` - Success/positive
- `pink-*` / `bg-pink-*` - Highlight/accent
- `gray-*` / `bg-gray-*` - Neutrals

**Container Configuration**:
```javascript
container: {
  center: true,
  padding: '2rem',
  screens: {
    '2xl': '1400px',
  },
}
```

### Global Styles

**Location**: `src/styles/globals.css`

**Key Features**:
- Custom CSS variables for brand colors
- Animation keyframes (fadeIn, slideIn, pulse)
- Gradient backgrounds
- Card hover effects
- Custom button styles (.btn-primary, .btn-secondary, .btn-ghost)
- Input styles (.input)
- Badge variants (.badge-blue, .badge-green, etc.)

### Custom CSS Classes

```css
/* Brand Colors */
--acooya-blue: #2563EB;
--acooya-orange: #F59E0B;
--acooya-green: #10B981;
--acooya-pink: #EC4899;
--acooya-charcoal: #374151;

/* Animations */
@keyframes fadeIn { ... }
@keyframes slideIn { ... }

/* Utility Classes */
.animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
.card-hover { transition: all 0.3s ease; }
.badge { /* inline-flex badges */ }
.btn { /* button base */ }
.input { /* form input styling */ }
```

### Responsive Design

**Breakpoints**:
- Mobile: < 640px (default)
- Tablet: sm: 640px
- Desktop: md: 768px
- Large Desktop: lg: 1024px
- XL: xl: 1280px
- 2XL: 2xl: 1400px

**Common Responsive Patterns**:
```tsx
// Grid columns
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// Text sizes
text-xl lg:text-4xl

// Spacing
py-12 lg:py-20

// Visibility
hidden lg:block
```

---

## 9. Brand Guidelines

### Logo Usage

The Acooya logo consists of:
1. **Icon**: 4 bird-like swirling elements
2. **Text**: "ACOOYA" in bold sans-serif
3. **Subtitle**: "CONSULTING" with decorative lines

**Spacing**: Maintain clear space equal to the height of the icon around the logo.

**Minimum Size**: 120px width for digital use.

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Blue | #2563EB | Primary actions, links, headers |
| Orange | #F59E0B | Highlights, secondary accents |
| Green | #10B981 | Success states, positive indicators |
| Pink | #EC4899 | Special callouts, decorative |
| Charcoal | #374151 | Body text |
| Gray | #6B7280 | Secondary text |

### Typography

**Font Family**: Inter (Google Fonts)

**Weights**:
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extra Bold: 800

**Scale**:
- xs: 12px
- sm: 14px
- base: 16px
- lg: 18px
- xl: 20px
- 2xl: 24px
- 3xl: 30px
- 4xl: 36px
- 5xl: 48px
- 6xl: 60px

### Imagery

**Consultant Photos**: Professional headshots, 400×400px, circular or rounded corners.

**Icons**: Use Lucide React icons throughout. Standard size: 20-24px for inline, 40-48px for featured.

### Tone of Voice

- Professional yet approachable
- Confident but not arrogant
- Clear and concise
- Use British English spelling
- Avoid jargon; explain technical terms

---

## 10. Build & Deployment

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Build Process

1. **Install Dependencies**: `pnpm install`
2. **Type Check**: `tsc -b` (TypeScript compilation)
3. **Vite Build**: `vite build`
   - Transforms React/TypeScript with esbuild
   - Processes Tailwind CSS
   - Optimizes assets
   - Outputs to `dist/` directory

### Deployment

**Method**: Static file deployment

**Output Directory**: `dist/`

**Files Generated**:
```
dist/
├── index.html
├── assets/
│   ├── index-*.css (compiled styles)
│   └── index-*.js (compiled scripts)
└── (other static assets)
```

### Environment Configuration

**Vite Environment Variables**:
- `BUILD_MODE=prod` - Enable production optimizations

**TypeScript Paths**:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Path Aliases

Use `@/` prefix for imports from `src/`:
```tsx
// Instead of
import { consultingServices } from './data/mockData';

// Use
import { consultingServices } from '@/data/mockData';
```

---

## 11. Future Enhancements

### Recommended Additions

1. **Backend Integration**
   - Supabase or similar for real data
   - User authentication
   - Database for engagements and documents

2. **Real-time Features**
   - WebSocket connections for live updates
   - Real-time collaboration in secure workspace

3. **AI Agent Integration**
   - Connect to actual AI agent APIs
   - Real-time AI responses and analysis

4. **Payment Integration**
   - Stripe for engagement payments
   - Subscription management

5. **Advanced Search**
   - Algolia for full-text search
   - Filter and facet search

6. **Analytics Dashboard**
   - Google Analytics integration
   - User behavior tracking
   - Conversion optimization

7. **Email Automation**
   - SendGrid or similar
   - Automated engagement updates
   - Marketing campaigns

8. **Mobile App**
   - React Native for iOS/Android
   - Consistent experience across platforms

### Performance Optimizations

1. Code splitting by route
2. Lazy loading for heavy components
3. Image optimization
4. Service worker for offline support
5. CDN deployment

---

## Appendix A: File Reference

### Key Source Files

| File | Lines | Purpose |
|------|-------|---------|
| `src/App.tsx` | 31 | Root component with routing |
| `src/components/Layout.tsx` | 231 | Main layout wrapper |
| `src/data/mockData.ts` | 423 | All data and types |
| `src/pages/HomePage.tsx` | ~600 | Landing page |
| `src/pages/ServicesPage.tsx` | ~350 | Services detail |
| `src/pages/FindConsultantsPage.tsx` | ~400 | Consultant directory |
| `src/pages/EngagementPortal.tsx` | ~450 | Engagement wizard |
| `src/pages/DashboardPage.tsx` | ~500 | Client dashboard |
| `src/pages/KnowledgeBasePage.tsx` | ~300 | Resources hub |
| `src/pages/AboutPage.tsx` | ~300 | About & contact |

### Dependencies Count

- **Production Dependencies**: 45+
- **Dev Dependencies**: 15+

---

## Appendix B: Quick Reference

### Adding a New Page

1. Create page component in `src/pages/`
2. Import in `App.tsx`
3. Add route in `Routes` component
4. Add navigation link in `Layout.tsx`

### Adding Mock Data

1. Open `src/data/mockData.ts`
2. Add new entry to appropriate array
3. Import and use in components

### Styling Guidelines

1. Use Tailwind utility classes first
2. Add custom classes in `globals.css` if needed
3. Follow BEM naming for custom components
4. Maintain consistency with existing patterns

---

**Document End**

For questions or clarifications, refer to the inline code comments or contact the development team.
