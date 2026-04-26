// Authentication and User Types

export type UserRole = 'client' | 'consultant' | 'ai_agent' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  company?: string;
  subscription: SubscriptionTier;
  createdAt: string;
}

export type SubscriptionTier = 'starter' | 'professional' | 'enterprise';

export interface Subscription {
  tier: SubscriptionTier;
  status: 'active' | 'cancelled' | 'expired';
  startDate: string;
  endDate?: string;
  features: string[];
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
  logout: () => void;
  updateSubscription: (tier: SubscriptionTier) => void;
}

export interface ConsultantProfile {
  id: string;
  userId: string;
  name: string;
  title: string;
  expertise: string[];
  experience: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  availability: 'available' | 'busy' | 'unavailable';
  bio: string;
  image: string;
  certifications: string[];
  languages: string[];
  completedProjects: number;
  responseTime: string;
}

export interface AIAgentProfile {
  id: string;
  userId: string;
  name: string;
  category: string;
  capabilities: string[];
  usageCount: number;
  rating: number;
  reviewCount: number;
  pricePerSession: number;
  availability: '24/7' | 'scheduled' | 'limited';
  description: string;
  icon: string;
  version: string;
  lastUpdated: string;
}

export interface WorkspaceResource {
  id: string;
  type: 'consultant' | 'ai_agent';
  profileId: string;
  name: string;
  image?: string;
  role: string;
  status: 'active' | 'pending' | 'completed';
  joinedAt: string;
}

export interface Engagement {
  id: string;
  title: string;
  client: string;
  clientId: string;
  type: 'human' | 'ai' | 'hybrid';
  status: 'draft' | 'active' | 'completed' | 'cancelled';
  progress: number;
  startDate: string;
  endDate: string;
  value: string;
  budget: number;
  currency: string;
  description: string;
  objectives: string[];
  deliverables: string[];
  resources: WorkspaceResource[];
  recentActivity: ActivityItem[];
  documents: Document[];
  transcripts: Transcript[];
  budgetUsed: number;
  nextMilestone: string;
  risks: string[];
}

export interface ActivityItem {
  id: string;
  date: string;
  action: string;
  user: string;
  userId: string;
  type: 'milestone' | 'document' | 'comment' | 'status';
  details?: string;
}

export interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'docx' | 'xlsx' | 'pptx' | 'other';
  size: string;
  date: string;
  uploadedBy: string;
  url?: string;
}

export interface Transcript {
  id: string;
  title: string;
  date: string;
  duration: string;
  participants: string[];
  summary: string;
  keyPoints: string[];
  actionItems: string[];
  documentCount: number;
}

export interface Notification {
  id: string;
  type: 'engagement' | 'document' | 'message' | 'system';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  actionUrl?: string;
}
