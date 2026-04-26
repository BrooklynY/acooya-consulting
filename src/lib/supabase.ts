import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://awudfndxopcsrjczmswh.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3dWRmbmR4b3Bjc3JqY3ptc3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2MzQxMzAsImV4cCI6MjA5MTIxMDEzMH0.dLbmFMDXYSygdtxYCTMZWCuJkqnEUjt1qPiN0Hbp8ng';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  user_type: 'client' | 'consultant' | 'ai_developer' | 'founder';
  created_at: string;
}

export interface Consultant {
  id: string;
  user_id: string;
  title: string;
  expertise: string[];
  hourly_rate: number;
  bio: string;
  rating: number;
  total_engagements: number;
  availability: 'available' | 'busy' | 'offline';
  verified: boolean;
  years_experience: number;
  certifications: string[];
  languages: string[];
}

export interface AIAgent {
  id: string;
  developer_id: string;
  name: string;
  description: string;
  capabilities: string[];
  price_per_use: number;
  category: string;
  rating: number;
  usage_count: number;
  active: boolean;
  api_endpoint?: string;
  documentation?: string;
}

export interface Engagement {
  id: string;
  client_id: string;
  provider_id: string;
  provider_type: 'consultant' | 'ai_agent';
  service_type: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  price: number;
  started_at?: string;
  completed_at?: string;
  transcript?: string;
  summary?: string;
  rating?: number;
  review?: string;
}

export interface Transaction {
  id: string;
  engagement_id: string;
  client_id: string;
  provider_id: string;
  amount: number;
  platform_fee: number;
  provider_payout: number;
  status: 'pending' | 'completed' | 'refunded';
  payment_method: 'stripe' | 'card';
  created_at: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  type: 'consultant' | 'ai_developer';
  price: number;
  billing_period: 'monthly' | 'yearly';
  features: string[];
  max_engagements?: number;
  max_ai_agents?: number;
  commission_rate: number;
}
