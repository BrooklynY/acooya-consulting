import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole, SubscriptionTier, AuthState } from '../types/auth';

interface AuthContextType extends AuthState {}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users database with different roles (per D11 Portal Specification)
const mockUsers: Record<string, User & { password: string }> = {
  // CLIENT PORTAL - Organisations seeking consulting services
  'brooklyn@acooya.com': {
    id: 'u1',
    email: 'brooklyn@acooya.com',
    password: 'demo123',
    name: 'Brooklyn Yang',
    role: 'client',
    company: 'Acooya Consulting',
    subscription: 'enterprise',
    createdAt: '2025-01-15',
    avatar: '/brooklyn-yang.jpg'
  },
  'elena@acooya.com': {
    id: 'u2',
    email: 'elena@acooya.com',
    password: 'demo123',
    name: 'Dr. Elena Rodriguez',
    role: 'client',
    company: 'Horizon Research Institute',
    subscription: 'professional',
    createdAt: '2024-12-05',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop'
  },
  // CONSULTANT PORTAL - Independent service providers
  'marcus@acooya.com': {
    id: 'u3',
    email: 'marcus@acooya.com',
    password: 'demo123',
    name: 'Marcus Chen',
    role: 'consultant',
    company: 'Acooya Consulting',
    subscription: 'enterprise',
    createdAt: '2024-08-20',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  'sarah@acooya.com': {
    id: 'u4',
    email: 'sarah@acooya.com',
    password: 'demo123',
    name: 'Sarah Johnson',
    role: 'consultant',
    company: 'Acooya Consulting',
    subscription: 'professional',
    createdAt: '2024-11-10',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop'
  },
  // AI-AGENT DEVELOPER PORTAL - Agent builders & publishers
  'alex@acooya.com': {
    id: 'u5',
    email: 'alex@acooya.com',
    password: 'demo123',
    name: 'Alex Rivera',
    role: 'ai_agent',
    company: 'Acooya AI Labs',
    subscription: 'enterprise',
    createdAt: '2024-06-15',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
  },
  // ADMIN PORTAL - Platform owner & business management
  'admin@acooya.com': {
    id: 'u0',
    email: 'admin@acooya.com',
    password: 'admin123',
    name: 'Brooklyn Yang',
    role: 'admin',
    company: 'Acooya Consulting',
    subscription: 'enterprise',
    createdAt: '2024-01-01',
    avatar: '/brooklyn-yang.jpg'
  }
};

// Subscription features mapping (per D11 v1.1 specification)
const subscriptionFeatures: Record<SubscriptionTier, string[]> = {
  starter: [
    'Up to 3 active engagements',
    'Up to 3 users per organisation',
    '200 AI agent credits per month',
    'Aria (Research) + Nova (Analytics) agents',
    '14-day free trial — no credit card required',
    'Pre-task credit confirmation — no surprises',
    'Standard human consultant access',
    'Secure encrypted workspace',
    'Engagement history — 6 months',
    'Email support — 48-hour response',
    'All resources and frameworks library'
  ],
  professional: [
    'Everything in Growth, plus:',
    'Up to 15 active engagements',
    'Up to 15 users per organisation',
    '1,000 AI agent credits per month',
    'All 4 AI agents (Aria, Atlas, Nova, Zenith)',
    'Zenith orchestration — multi-agent workflows',
    'Priority access to senior human consultants',
    'Engagement history — 2 years',
    'Advanced workspace with team collaboration',
    'Quarterly strategic reviews',
    'Priority support — 24-hour response',
    'Advanced analytics dashboard',
    'Lower overage rate — $0.15 per credit'
  ],
  enterprise: [
    'Everything in Professional, plus:',
    'Unlimited active engagements',
    'Unlimited users per organisation',
    '5,000 AI agent credits per month',
    'Custom AI agent development',
    'Dedicated lead consultant + engagement SLA',
    'Engagement history — unlimited retention',
    'Australian data residency (ap-southeast-2)',
    'Dedicated Customer Success Manager',
    'On-site workshops and executive briefings',
    'White-glove concierge support',
    'Custom integrations — scoped on request',
    'Lowest overage rate — $0.07 per credit'
  ]
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored session
    const storedUser = localStorage.getItem('acooya_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem('acooya_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));

    const mockUser = mockUsers[email];
    if (mockUser && mockUser.password === password) {
      const { password: _, ...userWithoutPassword } = mockUser;
      setUser(userWithoutPassword);
      localStorage.setItem('acooya_user', JSON.stringify(userWithoutPassword));
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    throw new Error('Invalid email or password');
  };

  const register = async (email: string, password: string, name: string, role: UserRole): Promise<void> => {
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));

    if (mockUsers[email]) {
      setIsLoading(false);
      throw new Error('Email already registered');
    }

    const newUser: User = {
      id: `u${Date.now()}`,
      email,
      name,
      role,
      subscription: 'starter',
      createdAt: new Date().toISOString().split('T')[0],
      avatar: role === 'client'
        ? `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2563EB&color=fff`
        : undefined
    };

    setUser(newUser);
    localStorage.setItem('acooya_user', JSON.stringify(newUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('acooya_user');
  };

  const updateSubscription = (tier: SubscriptionTier) => {
    if (user) {
      const updatedUser = {
        ...user,
        subscription: tier
      };
      setUser(updatedUser);
      localStorage.setItem('acooya_user', JSON.stringify(updatedUser));
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    updateSubscription
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const getSubscriptionFeatures = (tier: SubscriptionTier): string[] => {
  return subscriptionFeatures[tier];
};

export const getSubscriptionPrice = (tier: SubscriptionTier): { monthly: number; annual: number } => {
  const prices: Record<SubscriptionTier, { monthly: number; annual: number }> = {
    starter: { monthly: 25, annual: 296 },
    professional: { monthly: 42, annual: 500 },
    enterprise: { monthly: 169, annual: 2030 }
  };
  return prices[tier];
};

// Portal categories configuration (per D11 v1.1 specification)
// Used by LoginPage for demo account selection
export const portalCategories = [
  {
    id: 'client',
    name: 'Client Portal',
    description: 'Organisations seeking consulting services',
    icon: 'Building2',
    color: 'amber',
    demoAccounts: [
      { email: 'brooklyn@acooya.com', password: 'demo123', name: 'Brooklyn Yang', title: 'CEO & Founder', tier: 'Enterprise', company: 'Acooya Consulting' },
      { email: 'elena@acooya.com', password: 'demo123', name: 'Dr. Elena Rodriguez', title: 'Research Director', tier: 'Professional', company: 'Horizon Research Institute' }
    ]
  },
  {
    id: 'consultant',
    name: 'Consultant Portal',
    description: 'Independent service providers',
    icon: 'Briefcase',
    color: 'blue',
    demoAccounts: [
      { email: 'marcus@acooya.com', password: 'demo123', name: 'Marcus Chen', title: 'CTO & Co-Founder', tier: 'Enterprise', company: 'Acooya Consulting' },
      { email: 'sarah@acooya.com', password: 'demo123', name: 'Sarah Johnson', title: 'Chief Strategy Officer', tier: 'Professional', company: 'Acooya Consulting' }
    ]
  },
  {
    id: 'ai_agent',
    name: 'AI Agent Developer Portal',
    description: 'Agent builders & publishers',
    icon: 'Cpu',
    color: 'purple',
    demoAccounts: [
      { email: 'alex@acooya.com', password: 'demo123', name: 'Alex Rivera', title: 'Lead AI Developer', tier: 'Enterprise', company: 'Acooya AI Labs' }
    ]
  },
  {
    id: 'admin',
    name: 'Administrator Portal',
    description: 'Platform owner & business management',
    icon: 'Crown',
    color: 'rose',
    demoAccounts: [
      { email: 'admin@acooya.com', password: 'admin123', name: 'Brooklyn Yang', title: 'Platform Owner', tier: 'Admin', company: 'Acooya Consulting' }
    ]
  }
];

// Legacy demoAccounts export for compatibility
export const demoAccounts = portalCategories.flatMap(cat => cat.demoAccounts);

// Revenue stream configuration (per D11 v1.1 Section 6)
export const revenueStreams = {
  clientSubscriptions: {
    starter: { monthly: 25, annual: 296 },
    professional: { monthly: 42, annual: 500 },
    enterprise: { monthly: 169, annual: 2030 }
  },
  aiAgentSubscriptions: {
    lite: { price: 29, devNet: 23.20, acooya: 5.80 },
    professional: { price: 79, devNet: 63.20, acooya: 15.80 },
    business: { price: 149, devNet: 119.20, acooya: 29.80 }
  },
  consultantCommission: 0.20, // 20% platform fee
  developerCommission: 0.20  // 20% platform fee
};
