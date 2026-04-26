import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { mockEngagements, humanConsultants, aiAgents } from '../data/mockData';
import {
  LayoutDashboard, Users, Bot, Briefcase, FileText, Settings, LogOut,
  Bell, Search, Plus, ChevronRight, ChevronDown, Calendar, Clock,
  TrendingUp, AlertCircle, CheckCircle, XCircle, MessageSquare,
  Download, Upload, Eye, Star, MoreVertical, BellOff, Menu, X,
  Activity, DollarSign, ArrowUpRight, ArrowDownRight, Zap, Shield,
  BarChart3, Target, TrendingDown, BookOpen, CalendarCheck, Award,
  FolderOpen, Send, Paperclip, Image, Video, File, Archive,
  Edit3, MessageCircle, Users2, Layout, Network, Globe, Sparkles,
  Key, Crown, Gem, BookMarked, HelpCircle, AlertTriangle
} from 'lucide-react';

// Logo Component - Matches Layout header logo (h-20)
const Logo = () => (
  <img src="/logo_white.png" alt="Acooya Consulting" className="h-20 w-auto" />
);

// Subscription Tier Badge Component
const SubscriptionBadge: React.FC<{ tier: string; compact?: boolean }> = ({ tier, compact }) => {
  const tierConfig = {
    starter: {
      icon: Key,
      gradient: 'from-gray-500 to-gray-600',
      bg: 'bg-gray-100',
      text: 'text-gray-700',
      label: 'Starter'
    },
    professional: {
      icon: Crown,
      gradient: 'from-blue-500 to-indigo-600',
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      label: 'Professional'
    },
    enterprise: {
      icon: Gem,
      gradient: 'from-purple-500 to-pink-600',
      bg: 'bg-purple-100',
      text: 'text-purple-700',
      label: 'Enterprise'
    }
  };

  const config = tierConfig[tier as keyof typeof tierConfig] || tierConfig.starter;
  const Icon = config.icon;

  if (compact) {
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${config.gradient} text-white`}>
        <Icon className="w-3 h-3" />
        {config.label}
      </span>
    );
  }

  return (
    <div className={`p-4 rounded-xl bg-gradient-to-r ${config.gradient} text-white`}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="font-semibold">{config.label} Plan</p>
          <p className="text-white/80 text-sm">{tier === 'enterprise' ? 'Unlimited access to all features' : tier === 'professional' ? 'Full professional toolkit' : 'Essential features included'}</p>
        </div>
      </div>
    </div>
  );
};

// Subscription Features Panel Component
const SubscriptionFeaturesPanel: React.FC<{ tier: string }> = ({ tier }) => {
  const features = {
    starter: [
      { icon: Briefcase, label: 'Up to 3 Active Engagements', available: true },
      { icon: Users, label: 'Basic Human Consultant Access', available: true },
      { icon: Bot, label: 'Standard AI Agents', available: true },
      { icon: MessageSquare, label: 'Workspace Collaboration', available: false },
      { icon: Archive, label: 'Extended History (6 months)', available: false },
      { icon: Crown, label: 'Priority Support', available: false },
      { icon: Gem, label: 'Custom AI Agents', available: false },
      { icon: Layout, label: 'White-label Portal', available: false }
    ],
    professional: [
      { icon: Briefcase, label: 'Up to 10 Active Engagements', available: true },
      { icon: Users, label: 'Priority Human Consultants', available: true },
      { icon: Bot, label: 'Full AI Agent Suite', available: true },
      { icon: MessageSquare, label: 'Workspace Collaboration', available: true },
      { icon: Archive, label: 'Extended History (12 months)', available: true },
      { icon: Crown, label: 'Priority Support', available: true },
      { icon: Bot, label: 'Custom AI Agents', available: false },
      { icon: Layout, label: 'White-label Portal', available: false }
    ],
    enterprise: [
      { icon: Briefcase, label: 'Unlimited Engagements', available: true },
      { icon: Users, label: 'Exclusive Senior Consultants', available: true },
      { icon: Bot, label: 'Unlimited AI Access', available: true },
      { icon: MessageSquare, label: 'Advanced Collaboration', available: true },
      { icon: Archive, label: 'Full History + Exports', available: true },
      { icon: Crown, label: 'White-glove Support', available: true },
      { icon: Sparkles, label: 'Custom AI Development', available: true },
      { icon: Layout, label: 'White-label Portal', available: true }
    ]
  };

  const tierFeatures = features[tier as keyof typeof features] || features.starter;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="font-semibold text-gray-900 mb-4">Plan Features</h3>
      <div className="grid grid-cols-2 gap-3">
        {tierFeatures.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} className={`flex items-center gap-2 p-2 rounded-lg ${feature.available ? 'bg-green-50' : 'bg-gray-50'}`}>
              {feature.available ? (
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 text-gray-300 flex-shrink-0" />
              )}
              <span className={`text-sm ${feature.available ? 'text-gray-700' : 'text-gray-400'}`}>
                {feature.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Client Collaboration Hub Component
const CollaborationHub: React.FC<{ tier: string }> = ({ tier }) => {
  const [activeView, setActiveView] = useState<'workspace' | 'documents' | 'activity'>('workspace');

  return (
    <div className="space-y-4">
      {/* Collaboration Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Collaboration Hub</h2>
          <p className="text-sm text-gray-500">Manage your research and consulting workspace</p>
        </div>
        {tier === 'enterprise' && (
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors">
            <Layout className="w-4 h-4" />
            Create Workspace
          </button>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="flex flex-col items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
            <MessageCircle className="w-6 h-6 text-blue-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">Start Chat</span>
        </button>
        <button className="flex flex-col items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
            <Video className="w-6 h-6 text-green-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">Schedule Call</span>
        </button>
        <button className="flex flex-col items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
            <FolderOpen className="w-6 h-6 text-purple-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">Share Files</span>
        </button>
        <button className="flex flex-col items-center p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-2">
            <Network className="w-6 h-6 text-amber-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">Invite Team</span>
        </button>
      </div>

      {/* Collaboration Workspace */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex">
            {[
              { id: 'workspace', label: 'Active Workspace', icon: Layout },
              { id: 'documents', label: 'Shared Documents', icon: FileText },
              { id: 'activity', label: 'Recent Activity', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveView(tab.id as typeof activeView)}
                className={`flex items-center gap-2 px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                  activeView === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {activeView === 'workspace' && (
            <div className="space-y-4">
              {/* Active workspace cards */}
              {[
                { name: 'Digital Transformation Research', participants: 4, docs: 12, updated: '2 hours ago', status: 'active' },
                { name: 'Market Analysis Q1 2026', participants: 3, docs: 8, updated: '1 day ago', status: 'active' },
                { name: 'AI Implementation Strategy', participants: 5, docs: 15, updated: '3 days ago', status: 'review' }
              ].map((workspace, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      workspace.status === 'active' ? 'bg-green-100' : 'bg-amber-100'
                    }`}>
                      <Layout className={`w-5 h-5 ${
                        workspace.status === 'active' ? 'text-green-600' : 'text-amber-600'
                      }`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{workspace.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Users2 className="w-4 h-4" />
                          {workspace.participants} participants
                        </span>
                        <span className="flex items-center gap-1">
                          <File className="w-4 h-4" />
                          {workspace.docs} documents
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400">{workspace.updated}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      workspace.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {workspace.status === 'active' ? 'Active' : 'In Review'}
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              ))}

              {tier !== 'enterprise' && (
                <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Upgrade to Enterprise</p>
                        <p className="text-sm text-gray-600">Unlimited workspaces and team collaboration</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Upgrade Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeView === 'documents' && (
            <div className="space-y-3">
              {[
                { name: 'Strategic Report Q4 2025.pdf', size: '2.4 MB', type: 'pdf', updated: '2 hours ago' },
                { name: 'Market Analysis Dashboard.xlsx', size: '1.8 MB', type: 'xlsx', updated: '1 day ago' },
                { name: 'AI Implementation Roadmap.pptx', size: '5.2 MB', type: 'pptx', updated: '3 days ago' },
                { name: 'Research Data Summary.docx', size: '890 KB', type: 'docx', updated: '1 week ago' }
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      doc.type === 'pdf' ? 'bg-red-100' :
                      doc.type === 'xlsx' ? 'bg-green-100' :
                      doc.type === 'pptx' ? 'bg-orange-100' : 'bg-blue-100'
                    }`}>
                      <File className={`w-5 h-5 ${
                        doc.type === 'pdf' ? 'text-red-600' :
                        doc.type === 'xlsx' ? 'text-green-600' :
                        doc.type === 'pptx' ? 'text-orange-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{doc.name}</p>
                      <p className="text-sm text-gray-500">{doc.size} • {doc.updated}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeView === 'activity' && (
            <div className="space-y-4">
              {[
                { user: 'Dr. Sarah Chen', action: 'commented on', target: 'Digital Transformation Research', time: '15 minutes ago', type: 'comment' },
                { user: 'Atlas AI', action: 'completed analysis for', target: 'Market Analysis Q1 2026', time: '1 hour ago', type: 'ai' },
                { user: 'Marcus Chen', action: 'uploaded', target: 'AI Implementation Strategy.pdf', time: '3 hours ago', type: 'upload' },
                { user: 'Dr. Elena Rodriguez', action: 'shared', target: 'Research Data Summary.docx', time: '1 day ago', type: 'share' }
              ].map((activity, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === 'ai' ? 'bg-purple-100' :
                    activity.type === 'upload' ? 'bg-blue-100' :
                    activity.type === 'share' ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    {activity.type === 'ai' ? (
                      <Bot className="w-4 h-4 text-purple-600" />
                    ) : activity.type === 'upload' ? (
                      <Upload className="w-4 h-4 text-blue-600" />
                    ) : activity.type === 'share' ? (
                      <Network className="w-4 h-4 text-green-600" />
                    ) : (
                      <MessageCircle className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.user}</span>
                      {' '}{activity.action}{' '}
                      <span className="font-medium text-blue-600">{activity.target}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Researcher Dashboard Component (for Elena)
const ResearcherDashboard: React.FC<{ tier: string }> = ({ tier }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Research Hub</h2>
          <p className="text-sm text-gray-500">Advanced tools for research and analysis</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
          <Sparkles className="w-4 h-4" />
          New Research Project
        </button>
      </div>

      {/* Research Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
            <Globe className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Market Intelligence</h3>
          <p className="text-sm text-gray-500 mb-4">Real-time market data and trend analysis powered by AI agents</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-green-600 font-medium">Active</span>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">Open Dashboard</button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
            <BookMarked className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Knowledge Base</h3>
          <p className="text-sm text-gray-500 mb-4">Access comprehensive research archives and documentation</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">247 articles</span>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">Browse</button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">AI Analytics</h3>
          <p className="text-sm text-gray-500 mb-4">Advanced AI-powered data analysis and insights generation</p>
          <div className="flex items-center justify-between">
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              tier === 'enterprise' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
            }`}>
              {tier === 'enterprise' ? 'Full Access' : 'Limited'}
            </span>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">Analyze</button>
          </div>
        </div>
      </div>

      {/* Recent Research */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Recent Research Projects</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {[
            { title: 'AI Impact on Consulting Industry 2026', status: 'In Progress', progress: 68, contributors: 4 },
            { title: 'Digital Transformation Best Practices', status: 'Completed', progress: 100, contributors: 3 },
            { title: 'Strategic Technology Adoption Framework', status: 'Review', progress: 85, contributors: 5 }
          ].map((project, idx) => (
            <div key={idx} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{project.title}</h4>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users2 className="w-4 h-4" />
                      {project.contributors} contributors
                    </span>
                    <span className="flex items-center gap-1">
                      <BarChart3 className="w-4 h-4" />
                      {project.progress}% complete
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ml-4 ${
                  project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                  project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                  'bg-amber-100 text-amber-700'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Agents for Research */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg">Research AI Agents</h3>
            <p className="text-white/80 text-sm">Specialised AI agents for advanced research tasks</p>
          </div>
          <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors">
            View All Agents
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'DataMiner Pro', tasks: 'Automated data collection and analysis', active: true },
            { name: 'InsightSynth', tasks: 'Research synthesis and summarisation', active: true },
            { name: 'TrendScanner', tasks: 'Market trend identification and forecasting', active: tier === 'enterprise' }
          ].map((agent, idx) => (
            <div key={idx} className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">{agent.name}</h4>
                <span className={`w-2 h-2 rounded-full ${agent.active ? 'bg-green-400' : 'bg-gray-400'}`} />
              </div>
              <p className="text-sm text-white/80">{agent.tasks}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Sidebar Component
interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, collapsed, onToggleCollapse }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Role-based menu items
  const menuItems = useMemo(() => {
    const baseItems = [
      { id: 'overview', label: 'Overview', icon: LayoutDashboard, path: '/portal' },
      { id: 'engagements', label: 'Engagements', icon: Briefcase, badge: 3 },
      { id: 'collaboration', label: 'Collaboration', icon: MessageCircle },
      { id: 'transcripts', label: 'Transcripts', icon: FileText },
      { id: 'history', label: 'History', icon: Archive },
      { id: 'settings', label: 'Settings', icon: Settings }
    ];

    if (user?.role === 'client') {
      // Client-specific menu with subscription awareness
      const isResearcher = user?.email === 'elena@acooya.com';

      if (isResearcher) {
        return [
          { id: 'overview', label: 'Research Hub', icon: BookOpen, path: '/portal' },
          { id: 'collaboration', label: 'Collaboration', icon: MessageCircle },
          { id: 'engagements', label: 'Engagements', icon: Briefcase, badge: 3 },
          { id: 'transcripts', label: 'Transcripts', icon: FileText },
          { id: 'history', label: 'History', icon: Archive },
          { id: 'settings', label: 'Settings', icon: Settings }
        ];
      }

      return [
        ...baseItems
      ];
    }

    if (user?.role === 'consultant') {
      // Check if it's Marcus Chen (AI/tech focused consultant)
      const isMarcus = user?.email === 'marcus@acooya.com';

      if (isMarcus) {
        return [
          ...baseItems.slice(0, 1),
          { id: 'ai-agents', label: 'AI Agents', icon: Bot, path: '/portal/ai-agents' },
          { id: 'performance', label: 'Performance', icon: BarChart3, path: '/portal/performance' },
          ...baseItems.slice(1)
        ];
      }

      // Sarah Johnson - Strategy focused consultant
      return [
        ...baseItems.slice(0, 1),
        { id: 'clients', label: 'My Clients', icon: Users, path: '/portal/clients' },
        { id: 'strategy', label: 'Strategy Hub', icon: Target, path: '/portal/strategy' },
        ...baseItems.slice(1)
      ];
    }

    // AI Agent Developer - Alex Rivera
    if (user?.role === 'ai_agent') {
      return [
        ...baseItems.slice(0, 1),
        { id: 'studio', label: 'Dev Studio', icon: Bot, path: '/portal/studio' },
        { id: 'pipeline', label: 'AI Pipeline', icon: Activity, path: '/portal/pipeline' },
        { id: 'models', label: 'Models', icon: BarChart3, path: '/portal/models' },
        ...baseItems.slice(1)
      ];
    }

    return baseItems;
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-50 transition-all duration-300 ${
      collapsed ? 'w-20' : 'w-72'
    }`}>
      {/* User Profile - Now at TOP */}
      <div className="h-20 flex items-center border-b border-gray-200 px-4">
        {!collapsed ? (
          <div className="flex items-center gap-3 flex-1">
            {user?.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                {user?.name?.charAt(0) || 'U'}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate">{user?.name}</p>
              <p className="text-sm text-gray-500 truncate">{user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogout}
            className="w-full p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors flex justify-center"
            title="Sign Out"
          >
            <LogOut className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1">
        {menuItems.map(({ id, label, icon: Icon, badge }) => (
          <button
            key={id}
            onClick={() => {
              onTabChange(id);
              if (id === 'overview') navigate('/portal');
              else navigate(`/portal/${id}`);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
              activeTab === id
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && (
              <>
                <span className="flex-1 text-left">{label}</span>
                {badge && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {badge}
                  </span>
                )}
              </>
            )}
          </button>
        ))}
      </nav>

      {/* Logo - Now at BOTTOM */}
      <div className="absolute bottom-0 left-0 right-0 h-20 flex items-center border-t border-gray-200 px-4">
        <Link to="/" className="flex items-center flex-1">
          {collapsed ? (
            <img src="/logo_white.png" alt="Acooya Consulting" className="h-12 w-auto mx-auto" />
          ) : (
            <Logo />
          )}
        </Link>
        <button
          onClick={onToggleCollapse}
          className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {collapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
        </button>
      </div>
    </aside>
  );
};

// Overview Tab Component
const OverviewTab: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { user } = useAuth();

  // Role-based content configuration with subscription tier awareness
  const roleConfig = useMemo(() => {
    if (user?.role === 'client') {
      // Client-specific configuration with tier awareness
      const tierLimitations = {
        starter: { maxEngagements: 3, hasAdvancedAI: false, hasCollaboration: false, hasCustomIntegrations: false },
        professional: { maxEngagements: 10, hasAdvancedAI: false, hasCollaboration: true, hasCustomIntegrations: true },
        enterprise: { maxEngagements: Infinity, hasAdvancedAI: true, hasCollaboration: true, hasCustomIntegrations: true }
      };
      const limits = tierLimitations[user.subscription as keyof typeof tierLimitations] || tierLimitations.starter;

      // Check if it's Elena Rodriguez (researcher)
      const isResearcher = user.email === 'elena@acooya.com';

      if (isResearcher) {
        return {
          welcomeMessage: `Welcome back, ${user.name.split(' ')[0]}!`,
          subtitle: "Your research dashboard and collaboration workspace.",
          primaryAction: 'New Research',
          primaryActionIcon: Sparkles,
          stats: [
            { label: 'Active Projects', value: '4', change: '+1 this month', positive: true, icon: BookOpen },
            { label: 'Research Papers', value: '12', change: '+3 published', positive: true, icon: FileText },
            { label: 'Collaborations', value: '8', change: '3 active now', positive: true, icon: Users2 },
            { label: 'AI Insights', value: limits.hasAdvancedAI ? '247' : '85', change: limits.hasAdvancedAI ? 'Full AI access' : 'Limited access', positive: limits.hasAdvancedAI, icon: Bot }
          ],
          recentActivity: [
            { id: 1, action: 'DataMiner Pro completed data collection', time: '1 hour ago', type: 'ai' },
            { id: 2, action: 'New research collaboration invited', time: '3 hours ago', type: 'system' },
            { id: 3, action: 'Market analysis updated', time: '5 hours ago', type: 'consultant' },
            { id: 4, action: 'TrendScanner AI delivered forecast', time: '1 day ago', type: 'ai' }
          ],
          sectionTitle: 'Research Resources',
          showResources: true,
          accentColor: 'indigo',
          isResearcher: true
        };
      }

      return {
        welcomeMessage: `Welcome back, ${user.name.split(' ')[0]}!`,
        subtitle: "Here's an overview of your consulting engagements and resources.",
        primaryAction: 'New Engagement',
        primaryActionIcon: Plus,
        stats: [
          { label: 'Active Engagements', value: limits.maxEngagements === Infinity ? '5' : `${3}/${limits.maxEngagements}`, change: limits.maxEngagements === Infinity ? 'Unlimited' : `${limits.maxEngagements - 3} more available`, positive: true, icon: Briefcase },
          { label: 'Resources Allocated', value: limits.hasCollaboration ? '8' : '5', change: limits.hasCollaboration ? 'Full team access' : 'Limited team', positive: limits.hasCollaboration, icon: Users },
          { label: 'Documents', value: '24', change: '+5 this week', positive: true, icon: FileText },
          { label: 'Budget Utilised', value: '68%', change: '-$12,500 remaining', positive: false, icon: DollarSign }
        ],
        recentActivity: [
          { id: 1, action: 'Nova AI completed data analysis', time: '2 hours ago', type: 'ai' },
          { id: 2, action: 'Dr. Sarah Chen uploaded Phase 2 report', time: '5 hours ago', type: 'consultant' },
          { id: 3, action: 'New engagement proposal received', time: '1 day ago', type: 'system' },
          { id: 4, action: 'Atlas AI delivered strategic recommendations', time: '2 days ago', type: 'ai' }
        ],
        sectionTitle: 'Your Allocated Resources',
        showResources: true,
        accentColor: 'blue'
      };
    }

    if (user?.role === 'consultant') {
      const isMarcus = user.email === 'marcus@acooya.com';

      if (isMarcus) {
        // Marcus Chen - CTO & AI Specialist
        return {
          welcomeMessage: `Good to see you, ${user.name.split(' ')[0]}!`,
          subtitle: 'AI agent performance and technical metrics at a glance.',
          primaryAction: 'View AI Agents',
          primaryActionIcon: Bot,
          stats: [
            { label: 'Active AI Agents', value: '12', change: '+2 new agents', positive: true, icon: Bot },
            { label: 'Total Sessions', value: '2.4K', change: '+340 this week', positive: true, icon: Activity },
            { label: 'Avg Response Time', value: '0.8s', change: '-0.2s improvement', positive: true, icon: TrendingDown },
            { label: 'Accuracy Rate', value: '97.8%', change: '+0.5%', positive: true, icon: Award }
          ],
          recentActivity: [
            { id: 1, action: 'Atlas AI v3.2 deployed to production', time: '1 hour ago', type: 'ai' },
            { id: 2, action: 'New LangChain integration completed', time: '3 hours ago', type: 'system' },
            { id: 3, action: 'Nexus AI processed 500+ documents', time: '5 hours ago', type: 'ai' },
            { id: 4, action: 'System performance optimized', time: '1 day ago', type: 'system' }
          ],
          sectionTitle: 'Top Performing AI Agents',
          showResources: false,
          accentColor: 'purple'
        };
      }

      // Sarah Johnson - Chief Strategy Officer
      return {
        welcomeMessage: `Hello, ${user.name.split(' ')[0]}!`,
        subtitle: 'Your client engagements and strategic initiatives.',
        primaryAction: 'View My Clients',
        primaryActionIcon: Users,
        stats: [
          { label: 'Active Clients', value: '8', change: '+2 new this quarter', positive: true, icon: Users },
          { label: 'Engagements', value: '12', change: '4 in progress', positive: true, icon: Briefcase },
          { label: 'Avg Client Rating', value: '4.9', change: '+0.2 from last month', positive: true, icon: Star },
          { label: 'Revenue Generated', value: '$485K', change: '+12% this quarter', positive: true, icon: TrendingUp }
        ],
        recentActivity: [
          { id: 1, action: 'Quarterly strategy review completed for TechCorp', time: '2 hours ago', type: 'consultant' },
          { id: 2, action: 'New market analysis delivered to InnoVentures', time: '4 hours ago', type: 'system' },
          { id: 3, action: 'Client presentation scheduled for GlobalTech', time: '1 day ago', type: 'consultant' },
          { id: 4, action: 'Strategic roadmap finalized for DataFlow Inc', time: '2 days ago', type: 'system' }
        ],
        sectionTitle: 'Your Consulting Clients',
        showResources: false,
        accentColor: 'green'
      };
    }

    // AI Agent Developer - Alex Rivera
    if (user?.role === 'ai_agent') {
      return {
        welcomeMessage: `Welcome back, ${user.name.split(' ')[0]}!`,
        subtitle: 'AI agent development studio and model management.',
        primaryAction: 'Open Dev Studio',
        primaryActionIcon: Bot,
        stats: [
          { label: 'Active Agents', value: '12', change: '+3 this month', positive: true, icon: Bot },
          { label: 'Models Deployed', value: '8', change: '+2 in pipeline', positive: true, icon: BarChart3 },
          { label: 'API Calls', value: '1.2M', change: '+15% this week', positive: true, icon: Activity },
          { label: 'Uptime', value: '99.9%', change: 'SLA met', positive: true, icon: Shield }
        ],
        recentActivity: [
          { id: 1, action: 'Nova v2.1 agent deployed to production', time: '30 minutes ago', type: 'ai' },
          { id: 2, action: 'New LangChain integration completed', time: '2 hours ago', type: 'system' },
          { id: 3, action: 'Atlas AI model fine-tuned successfully', time: '4 hours ago', type: 'ai' },
          { id: 4, action: 'Security audit passed for all agents', time: '1 day ago', type: 'system' }
        ],
        sectionTitle: 'Development Pipeline',
        showResources: false,
        accentColor: 'cyan'
      };
    }

    // Default fallback
    return {
      welcomeMessage: `Welcome back!`,
      subtitle: "Here's what's happening.",
      primaryAction: 'View Engagements',
      primaryActionIcon: Briefcase,
      stats: [
        { label: 'Active Engagements', value: '3', change: 'On track', positive: true, icon: Briefcase },
        { label: 'Resources', value: '8', change: 'Available', positive: true, icon: Users },
        { label: 'Documents', value: '24', change: 'Up to date', positive: true, icon: FileText },
        { label: 'Budget', value: '68%', change: 'On budget', positive: true, icon: DollarSign }
      ],
      recentActivity: [
        { id: 1, action: 'System update', time: 'Just now', type: 'system' }
      ],
      sectionTitle: 'Resources',
      showResources: false,
      accentColor: 'blue'
    };
  }, [user]);

  const PrimaryIcon = roleConfig.primaryActionIcon;

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {roleConfig.welcomeMessage}
          </h1>
          <p className="text-gray-600 mt-1">{roleConfig.subtitle}</p>
        </div>
        <button
          onClick={() => onNavigate(roleConfig.accentColor === 'blue' ? 'engagements' : roleConfig.accentColor === 'purple' ? 'ai-agents' : roleConfig.accentColor === 'cyan' ? 'studio' : 'clients')}
          className={`flex items-center gap-2 px-4 py-2 text-white font-medium rounded-xl transition-colors ${
            roleConfig.accentColor === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
            roleConfig.accentColor === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
            roleConfig.accentColor === 'cyan' ? 'bg-cyan-600 hover:bg-cyan-700' :
            'bg-green-600 hover:bg-green-700'
          }`}
        >
          <PrimaryIcon className="w-5 h-5" />
          {roleConfig.primaryAction}
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roleConfig.stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className={`flex items-center justify-between mb-4`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                roleConfig.accentColor === 'blue' ? 'bg-blue-100' :
                roleConfig.accentColor === 'purple' ? 'bg-purple-100' :
                roleConfig.accentColor === 'cyan' ? 'bg-cyan-100' :
                'bg-green-100'
              }`}>
                <stat.icon className={`w-6 h-6 ${
                  roleConfig.accentColor === 'blue' ? 'text-blue-600' :
                  roleConfig.accentColor === 'purple' ? 'text-purple-600' :
                  roleConfig.accentColor === 'cyan' ? 'text-cyan-600' :
                  'text-green-600'
                }`} />
              </div>
              <span className={`flex items-center gap-1 text-sm font-medium ${
                stat.positive ? 'text-green-600' : 'text-amber-600'
              }`}>
                {stat.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {stat.change}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Engagements / Items */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              {user?.role === 'client' ? 'Active Engagements' :
               user?.role === 'ai_agent' ? 'Development Pipeline' :
               user?.email === 'marcus@acooya.com' ? 'AI Agent Performance' : 'Client Engagements'}
            </h2>
            <button
              onClick={() => onNavigate(roleConfig.accentColor === 'blue' ? 'engagements' : roleConfig.accentColor === 'cyan' ? 'pipeline' : roleConfig.accentColor === 'purple' ? 'ai-agents' : 'clients')}
              className={`font-medium text-sm hover:opacity-80 ${
                roleConfig.accentColor === 'blue' ? 'text-blue-600' :
                roleConfig.accentColor === 'cyan' ? 'text-cyan-600' :
                roleConfig.accentColor === 'purple' ? 'text-purple-600' :
                'text-green-600'
              }`}
            >
              View All
            </button>
          </div>
          <div className="divide-y divide-gray-100">
            {user?.role === 'client' && mockEngagements.slice(0, 3).map((engagement) => (
              <div key={engagement.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{engagement.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{engagement.client}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    engagement.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {engagement.status === 'active' ? 'Active' : 'Completed'}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-medium text-gray-900">{engagement.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        roleConfig.accentColor === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                        roleConfig.accentColor === 'cyan' ? 'bg-gradient-to-r from-cyan-500 to-cyan-600' :
                        roleConfig.accentColor === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                        'bg-gradient-to-r from-green-500 to-green-600'
                      }`}
                      style={{ width: `${engagement.progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {engagement.consultants.map((consultant, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-lg">
                        <Bot className={`w-4 h-4 ${
                          roleConfig.accentColor === 'blue' ? 'text-blue-600' :
                          roleConfig.accentColor === 'cyan' ? 'text-cyan-600' :
                          roleConfig.accentColor === 'purple' ? 'text-purple-600' :
                          'text-green-600'
                        }`} />
                        <span className="text-sm text-gray-700">{consultant}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    Due {engagement.endDate}
                  </div>
                </div>
              </div>
            ))}

            {/* AI Agent Developer Pipeline */}
            {user?.role === 'ai_agent' && [
              { id: 'nlp-1', name: 'NLP Processor v3.0', stage: 'Training', progress: 75, type: 'NLP' },
              { id: 'cv-1', name: 'Vision Analyzer Pro', stage: 'Testing', progress: 90, type: 'Computer Vision' },
              { id: 'chat-1', name: 'Conversational AI v2.5', stage: 'Deployment', progress: 100, type: 'Chatbot' }
            ].map((agent) => (
              <div key={agent.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{agent.type}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    agent.stage === 'Deployment' ? 'bg-green-100 text-green-700' :
                    agent.stage === 'Testing' ? 'bg-cyan-100 text-cyan-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {agent.stage}
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-medium text-gray-900">{agent.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600"
                      style={{ width: `${agent.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {user?.role === 'consultant' && user?.email === 'marcus@acooya.com' && aiAgents.slice(0, 3).map((agent) => (
              <div key={agent.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                      <p className="text-sm text-gray-500">{agent.category}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    24/7 Active
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Sessions</p>
                    <p className="font-semibold text-gray-900">{agent.usageCount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Rating</p>
                    <p className="font-semibold text-gray-900 flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      {agent.rating}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Status</p>
                    <p className="font-semibold text-gray-900">Active</p>
                  </div>
                </div>
              </div>
            ))}

            {user?.role === 'consultant' && user?.email === 'sarah@acooya.com' && humanConsultants.slice(0, 3).map((consultant) => (
              <div key={consultant.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={consultant.image}
                      alt={consultant.name}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{consultant.name}</h3>
                      <p className="text-sm text-gray-500">{consultant.title}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    consultant.availability === 'Available Now'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {consultant.availability}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Projects</p>
                    <p className="font-semibold text-gray-900">{consultant.projects}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Rating</p>
                    <p className="font-semibold text-gray-900 flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      {consultant.rating}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Experience</p>
                    <p className="font-semibold text-gray-900">{consultant.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="p-6 space-y-4">
            {roleConfig.recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activity.type === 'ai'
                    ? 'bg-purple-100'
                    : activity.type === 'consultant'
                    ? 'bg-green-100'
                    : 'bg-gray-100'
                }`}>
                  {activity.type === 'ai' ? (
                    <Bot className="w-4 h-4 text-purple-600" />
                  ) : activity.type === 'consultant' ? (
                    <Users className="w-4 h-4 text-green-600" />
                  ) : (
                    <Activity className="w-4 h-4 text-gray-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Preview - Only for clients */}
      {roleConfig.showResources && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">{roleConfig.sectionTitle}</h2>
            <button
              onClick={() => onNavigate('resources')}
              className="text-blue-600 font-medium text-sm hover:text-blue-700"
            >
              Manage Resources
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {humanConsultants.slice(0, 2).map((consultant) => (
              <div key={consultant.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={consultant.image}
                    alt={consultant.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{consultant.name}</h4>
                    <p className="text-xs text-gray-500">{consultant.title}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{consultant.rating}</span>
                  </div>
                  <span className="text-sm text-green-600">{consultant.availability.split(' ')[0]}</span>
                </div>
              </div>
            ))}
            {aiAgents.slice(0, 2).map((agent) => (
              <div key={agent.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{agent.name}</h4>
                    <p className="text-xs text-gray-500">{agent.category}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{agent.rating}</span>
                  </div>
                  <span className="text-sm text-blue-600">24/7 Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Role-specific additional sections */}
      {user?.email === 'marcus@acooya.com' && (
        <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">AI Development Pipeline</h2>
              <p className="text-purple-200 text-sm">Next generation AI agents in development</p>
            </div>
            <button
              onClick={() => onNavigate('ai-agents')}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors"
            >
              View Pipeline
            </button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-xs text-purple-200">In Development</p>
              <p className="text-2xl font-bold">4</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-xs text-purple-200">Testing Phase</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-xs text-purple-200">Ready for Deploy</p>
              <p className="text-2xl font-bold">1</p>
            </div>
          </div>
        </div>
      )}

      {user?.email === 'sarah@acooya.com' && (
        <div className="bg-gradient-to-br from-green-900 to-teal-900 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">Quarterly Strategy Review</h2>
              <p className="text-green-200 text-sm">Upcoming client strategy sessions</p>
            </div>
            <button
              onClick={() => onNavigate('strategy')}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors"
            >
              View Schedule
            </button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-xs text-green-200">Scheduled</p>
              <p className="text-2xl font-bold">5</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-xs text-green-200">In Progress</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-xs text-green-200">Completed</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Engagements Tab Component
const EngagementsTab: React.FC = () => {
  const { user } = useAuth();
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'completed'>('all');
  const accentColor = user?.email === 'sarah@acooya.com' ? 'green' : 'blue';

  const filteredEngagements = mockEngagements.filter(eng =>
    statusFilter === 'all' || eng.status === statusFilter
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Engagements</h1>
        <button className={`flex items-center gap-2 px-4 py-2 text-white font-medium rounded-xl transition-colors ${
          accentColor === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
        }`}>
          <Plus className="w-5 h-5" />
          New Engagement
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        {['all', 'active', 'completed'].map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status as typeof statusFilter)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              statusFilter === status
                ? accentColor === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Engagements Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredEngagements.map((engagement) => (
          <div key={engagement.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{engagement.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{engagement.client}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  engagement.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {engagement.status === 'active' ? 'Active' : 'Completed'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Value</p>
                  <p className="font-semibold text-gray-900">{engagement.value}</p>
                </div>
                <div>
                  <p className="text-gray-500">Start Date</p>
                  <p className="font-semibold text-gray-900">{engagement.startDate}</p>
                </div>
                <div>
                  <p className="text-gray-500">End Date</p>
                  <p className="font-semibold text-gray-900">{engagement.endDate}</p>
                </div>
              </div>
            </div>
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-semibold text-gray-900">{engagement.progress}%</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    accentColor === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-green-500 to-green-600'
                  }`}
                  style={{ width: `${engagement.progress}%` }}
                />
              </div>
            </div>
            <div className="p-6 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-700 mb-3">Allocated Resources</p>
              <div className="flex flex-wrap gap-2">
                {engagement.consultants.map((consultant, idx) => (
                  <span key={idx} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                    accentColor === 'blue' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'
                  }`}>
                    {consultant}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm font-medium text-gray-700 mb-3">Recent Activity</p>
              <div className="space-y-2">
                {engagement.recentActivity.slice(0, 2).map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-gray-700">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.date} • {activity.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-6 pb-6 flex gap-3">
              <button className={`flex-1 py-2 text-white font-medium rounded-lg transition-colors ${
                accentColor === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
              }`}>
                View Details
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                Documents
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Resources Tab Component (for clients)
const ResourcesTab: React.FC = () => {
  const [typeFilter, setTypeFilter] = useState<'all' | 'consultant' | 'ai_agent'>('all');

  const resources = [
    ...humanConsultants.map(c => ({
      ...c,
      type: 'consultant' as const,
      hourlyRate: c.hourlyRate,
      status: c.availability === 'Available Now' ? 'active' as const : 'pending' as const
    })),
    ...aiAgents.map(a => ({
      ...a,
      type: 'ai_agent' as const,
      hourlyRate: a.pricePerSession,
      status: 'active' as const
    }))
  ];

  const filteredResources = typeFilter === 'all'
    ? resources
    : resources.filter(r => r.type === typeFilter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Resources</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors">
          <Plus className="w-5 h-5" />
          Add Resource
        </button>
      </div>

      <div className="flex items-center gap-4">
        {[
          { value: 'all', label: 'All Resources', icon: Users },
          { value: 'consultant', label: 'Human Consultants', icon: Users },
          { value: 'ai_agent', label: 'AI Agents', icon: Bot }
        ].map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            onClick={() => setTypeFilter(value as typeof typeFilter)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              typeFilter === value
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {resource.type === 'consultant' ? (
                    <img src={resource.image} alt={resource.name} className="w-14 h-14 rounded-xl object-cover" />
                  ) : (
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <Bot className="w-7 h-7 text-white" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-900">{resource.name}</h3>
                    <p className="text-sm text-gray-500">
                      {resource.type === 'consultant' ? resource.title : resource.category}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  resource.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {resource.status === 'active' ? 'Active' : 'Pending'}
                </span>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Expertise</p>
                <div className="flex flex-wrap gap-1">
                  {(resource.type === 'consultant' ? resource.expertise : resource.capabilities).slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-100">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold text-gray-900">{resource.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Rating</p>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">
                    ${resource.hourlyRate}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {resource.type === 'consultant' ? '/hour' : '/session'}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    resource.availability === 'Available Now' || resource.availability === '24/7 Active'
                      ? 'bg-green-500'
                      : resource.availability === 'Limited Availability'
                      ? 'bg-amber-500'
                      : 'bg-gray-400'
                  }`} />
                  <span className="text-sm text-gray-600">{resource.availability}</span>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6 flex gap-3">
              <button className="flex-1 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Message
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// AI Agents Tab Component (for Marcus Chen)
const AIAgentsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Agent Management</h1>
          <p className="text-gray-600 mt-1">Monitor and manage all AI agents across engagements</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition-colors">
          <Plus className="w-5 h-5" />
          Deploy New Agent
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Agents', value: '12', icon: Bot, color: 'purple' },
          { label: 'Active Sessions', value: '47', icon: Activity, color: 'blue' },
          { label: 'Avg Response', value: '0.8s', icon: TrendingDown, color: 'green' },
          { label: 'Success Rate', value: '99.2%', icon: Award, color: 'amber' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
              stat.color === 'purple' ? 'bg-purple-100' :
              stat.color === 'blue' ? 'bg-blue-100' :
              stat.color === 'green' ? 'bg-green-100' : 'bg-amber-100'
            }`}>
              <stat.icon className={`w-6 h-6 ${
                stat.color === 'purple' ? 'text-purple-600' :
                stat.color === 'blue' ? 'text-blue-600' :
                stat.color === 'green' ? 'text-green-600' : 'text-amber-600'
              }`} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* AI Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiAgents.map((agent) => (
          <div key={agent.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                  <p className="text-sm text-gray-500">{agent.category}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{agent.description}</p>

              <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{agent.usageCount.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">Sessions</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-bold text-gray-900">{agent.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500">Rating</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  24/7 Active
                </span>
                <span className="text-sm text-gray-500">Updated today</span>
              </div>
            </div>
            <div className="px-6 pb-6 flex gap-3">
              <button className="flex-1 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors">
                Manage
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                Analytics
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Clients Tab Component (for Sarah Johnson)
const ClientsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Clients</h1>
          <p className="text-gray-600 mt-1">Manage your consulting client relationships</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors">
          <Plus className="w-5 h-5" />
          Add New Client
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Active Clients', value: '8', icon: Users, color: 'green' },
          { label: 'In Progress', value: '4', icon: Clock, color: 'blue' },
          { label: 'Avg Rating', value: '4.9', icon: Star, color: 'amber' },
          { label: 'Total Revenue', value: '$485K', icon: TrendingUp, color: 'purple' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
              stat.color === 'green' ? 'bg-green-100' :
              stat.color === 'blue' ? 'bg-blue-100' :
              stat.color === 'amber' ? 'bg-amber-100' : 'bg-purple-100'
            }`}>
              <stat.icon className={`w-6 h-6 ${
                stat.color === 'green' ? 'text-green-600' :
                stat.color === 'blue' ? 'text-blue-600' :
                stat.color === 'amber' ? 'text-amber-600' : 'text-purple-600'
              }`} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Clients List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Client Overview</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {[
            { name: 'TechCorp Australia', industry: 'Technology', engagements: 3, revenue: '$125K', rating: 4.9, status: 'Active' },
            { name: 'InnoVentures Group', industry: 'Venture Capital', engagements: 2, revenue: '$95K', rating: 5.0, status: 'Active' },
            { name: 'GlobalTech Solutions', industry: 'Enterprise Software', engagements: 4, revenue: '$180K', rating: 4.8, status: 'Active' },
            { name: 'DataFlow Inc', industry: 'Data Analytics', engagements: 2, revenue: '$85K', rating: 4.9, status: 'Review' }
          ].map((client, idx) => (
            <div key={idx} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-bold">
                    {client.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{client.name}</h3>
                    <p className="text-sm text-gray-500">{client.industry}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{client.engagements}</p>
                    <p className="text-xs text-gray-500">Engagements</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{client.revenue}</p>
                    <p className="text-xs text-gray-500">Revenue</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-semibold text-gray-900">{client.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    client.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {client.status}
                  </span>
                  <button className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Performance Tab Component (for Marcus Chen)
const PerformanceTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Performance Analytics</h1>
          <p className="text-gray-600 mt-1">AI agent performance metrics and insights</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition-colors">
          <Download className="w-5 h-5" />
          Export Report
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Requests', value: '24,892', change: '+12%', positive: true },
          { label: 'Success Rate', value: '99.2%', change: '+0.3%', positive: true },
          { label: 'Avg Latency', value: '0.8s', change: '-15%', positive: true },
          { label: 'Cost Efficiency', value: '94%', change: '+5%', positive: true }
        ].map((metric, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
            <p className="text-sm text-gray-500">{metric.label}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{metric.value}</p>
            <p className={`text-sm font-medium mt-2 ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
              {metric.change} from last period
            </p>
          </div>
        ))}
      </div>

      {/* Performance Chart Placeholder */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Response Time Trend</h2>
        <div className="h-64 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl flex items-center justify-center">
          <p className="text-gray-500">Interactive performance chart visualization</p>
        </div>
      </div>
    </div>
  );
};

// Strategy Tab Component (for Sarah Johnson)
const StrategyTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Strategy Hub</h1>
          <p className="text-gray-600 mt-1">Strategic planning tools and resources</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors">
          <Plus className="w-5 h-5" />
          New Strategy Session
        </button>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Strategy Sessions</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {[
            { client: 'TechCorp Australia', type: 'Quarterly Review', date: 'Apr 15, 2026', time: '10:00 AM' },
            { client: 'InnoVentures Group', type: 'Market Analysis', date: 'Apr 18, 2026', time: '2:00 PM' },
            { client: 'GlobalTech Solutions', type: 'Strategy Workshop', date: 'Apr 22, 2026', time: '9:00 AM' }
          ].map((session, idx) => (
            <div key={idx} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                  <CalendarCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{session.client}</h3>
                  <p className="text-sm text-gray-500">{session.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="font-medium text-gray-900">{session.date}</p>
                  <p className="text-sm text-gray-500">{session.time}</p>
                </div>
                <button className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategy Resources */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Strategic Frameworks', desc: 'Access proven strategy frameworks and methodologies', icon: BookOpen },
          { title: 'Market Research', desc: 'Latest industry insights and market analysis tools', icon: BarChart3 },
          { title: 'Templates', desc: 'Ready-to-use strategy templates and documents', icon: FileText }
        ].map((resource, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
              <resource.icon className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
            <p className="text-sm text-gray-500">{resource.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Settings Tab Component
const SettingsTab: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { user, updateSubscription } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account preferences and subscription</p>
        </div>
      </div>

      {/* Subscription Management */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Subscription Plan</h2>
        <div className="mb-6">
          <SubscriptionBadge tier={user?.subscription || 'starter'} />
        </div>
        <SubscriptionFeaturesPanel tier={user?.subscription || 'starter'} />

        {user?.subscription !== 'enterprise' && (
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-900">Upgrade to Enterprise</p>
                  <p className="text-sm text-gray-600">Unlock all features and unlimited access</p>
                </div>
              </div>
              <button
                onClick={() => updateSubscription('enterprise')}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Upgrade Now - $2,499/mo
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Profile Settings */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" defaultValue={user?.name} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" defaultValue={user?.email} disabled className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
            <input type="text" defaultValue={user?.company} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <input type="text" defaultValue={user?.role.charAt(0).toUpperCase() + user?.role.slice(1).replace('_', ' ')} disabled className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 capitalize" />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add an extra layer of security</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
              Enable
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Key className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Change Password</p>
                <p className="text-sm text-gray-500">Update your account password</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
              Update
            </button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h2>
        <div className="space-y-3">
          {[
            { label: 'Email notifications for new messages', enabled: true },
            { label: 'Engagement status updates', enabled: true },
            { label: 'Document sharing alerts', enabled: true },
            { label: 'Weekly summary reports', enabled: false },
            { label: 'Marketing and promotional emails', enabled: false }
          ].map((pref, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">{pref.label}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked={pref.enabled} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Transcripts Tab Component
const TranscriptsTab: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'consultation' | 'ai_analysis' | 'research'>('all');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Engagement Transcripts</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors">
          <Download className="w-5 h-5" />
          Export All
        </button>
      </div>

      <div className="flex items-center gap-4">
        {[
          { value: 'all', label: 'All Transcripts', count: 28 },
          { value: 'consultation', label: 'Consultations', count: 12 },
          { value: 'ai_analysis', label: 'AI Analysis', count: 10 },
          { value: 'research', label: 'Research Sessions', count: 6 }
        ].map(({ value, label, count }) => (
          <button
            key={value}
            onClick={() => setFilter(value as typeof filter)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
              filter === value
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {label}
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              filter === value ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-600'
            }`}>
              {count}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {[
          { id: 'TR-2026-001', title: 'Strategic Planning Consultation - Q1 Review', date: 'Apr 12, 2026', duration: '45 min', type: 'consultation', participants: ['Dr. Sarah Chen', 'Marcus Chen'] },
          { id: 'TR-2026-002', title: 'Market Analysis AI Session - TechCorp Australia', date: 'Apr 10, 2026', duration: '32 min', type: 'ai_analysis', participants: ['Atlas AI', 'DataMiner Pro'] },
          { id: 'TR-2026-003', title: 'AI Implementation Strategy Workshop', date: 'Apr 8, 2026', duration: '1h 15min', type: 'consultation', participants: ['Dr. Sarah Chen', 'Marcus Chen', 'Brooklyn Yang'] },
          { id: 'TR-2026-004', title: 'Research Collaboration - Digital Transformation', date: 'Apr 5, 2026', duration: '58 min', type: 'research', participants: ['Dr. Elena Rodriguez', 'InsightSynth'] },
          { id: 'TR-2026-005', title: 'Operational Efficiency Analysis', date: 'Apr 3, 2026', duration: '40 min', type: 'ai_analysis', participants: ['Nova AI', 'Atlas AI'] }
        ].map((transcript) => (
          <div key={transcript.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    transcript.type === 'consultation' ? 'bg-green-100 text-green-700' :
                    transcript.type === 'ai_analysis' ? 'bg-purple-100 text-purple-700' :
                    'bg-indigo-100 text-indigo-700'
                  }`}>
                    {transcript.type === 'consultation' ? 'Consultation' :
                     transcript.type === 'ai_analysis' ? 'AI Analysis' : 'Research'}
                  </span>
                  <span className="text-sm text-gray-500">{transcript.id}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{transcript.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {transcript.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {transcript.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users2 className="w-4 h-4" />
                    {transcript.participants.length} participants
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  {transcript.participants.map((p, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Eye className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// EngagementHistory Tab Component
const EngagementHistoryTab: React.FC<{ tier: string }> = ({ tier }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Engagement History</h1>
          <p className="text-gray-600 mt-1">
            {tier === 'starter' ? 'Last 3 months of engagement history' :
             tier === 'professional' ? 'Last 12 months of engagement history' :
             'Complete engagement history with exports'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow text-blue-600' : 'text-gray-500'}`}
            >
              <Layout className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow text-blue-600' : 'text-gray-500'}`}
            >
              <FileText className="w-5 h-5" />
            </button>
          </div>
          {tier === 'enterprise' && (
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              <Archive className="w-4 h-4" />
              Export Full History
            </button>
          )}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Engagements', value: '24', icon: Briefcase, color: 'blue' },
          { label: 'Hours Consulted', value: '156', icon: Clock, color: 'green' },
          { label: 'AI Sessions', value: '89', icon: Bot, color: 'purple' },
          { label: 'Documents Generated', value: '47', icon: FileText, color: 'amber' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
              stat.color === 'blue' ? 'bg-blue-100' :
              stat.color === 'green' ? 'bg-green-100' :
              stat.color === 'purple' ? 'bg-purple-100' : 'bg-amber-100'
            }`}>
              <stat.icon className={`w-5 h-5 ${
                stat.color === 'blue' ? 'text-blue-600' :
                stat.color === 'green' ? 'text-green-600' :
                stat.color === 'purple' ? 'text-purple-600' : 'text-amber-600'
              }`} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* History List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { id: 'ENG-2026-004', title: 'Strategic Technology Adoption', date: 'Apr 10, 2026', type: 'Consulting', status: 'Active', value: '$45,000' },
                { id: 'ENG-2026-003', title: 'Market Expansion Analysis', date: 'Mar 28, 2026', type: 'AI + Consulting', status: 'Completed', value: '$32,000' },
                { id: 'ENG-2026-002', title: 'Digital Transformation Roadmap', date: 'Mar 15, 2026', type: 'Consulting', status: 'Completed', value: '$78,000' },
                { id: 'ENG-2026-001', title: 'Operational Efficiency Review', date: 'Feb 28, 2026', type: 'AI Analysis', status: 'Completed', value: '$15,000' }
              ].map((engagement) => (
                <tr key={engagement.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{engagement.title}</p>
                      <p className="text-xs text-gray-500">{engagement.id}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{engagement.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      engagement.type === 'Consulting' ? 'bg-green-100 text-green-700' :
                      engagement.type === 'AI Analysis' ? 'bg-purple-100 text-purple-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {engagement.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      engagement.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {engagement.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">{engagement.value}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <FileText className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {tier !== 'enterprise' && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <p className="text-sm text-gray-700">
                <strong>Historical data limited</strong> to {tier === 'starter' ? '3 months' : '12 months'}.
                Upgrade to Enterprise for complete engagement history.
              </p>
            </div>
            <button className="px-4 py-2 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors">
              Upgrade
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Client Portal Component
const ClientPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [collapsed, setCollapsed] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  // Check if user is a researcher (Elena)
  const isResearcher = user?.email === 'elena@acooya.com';

  // Role-based notifications
  const notifications = useMemo(() => {
    if (user?.role === 'ai_agent') {
      return [
        { id: 1, title: 'Agent deployed', message: 'Nova v2.1 deployed to production', time: '30 min ago', unread: true },
        { id: 2, title: 'Training complete', message: 'NLP Processor v3.0 training finished', time: '2 hours ago', unread: true },
        { id: 3, title: 'Model updated', message: 'Atlas AI v3.2 model optimized', time: '4 hours ago', unread: false }
      ];
    }
    if (user?.email === 'marcus@acooya.com') {
      return [
        { id: 1, title: 'Agent deployed', message: 'Atlas AI v3.2 deployed successfully', time: '1 hour ago', unread: true },
        { id: 2, title: 'Performance alert', message: 'Response time increased by 5%', time: '3 hours ago', unread: true },
        { id: 3, title: 'Integration complete', message: 'New LangChain integration ready', time: '1 day ago', unread: false }
      ];
    }
    if (user?.email === 'sarah@acooya.com') {
      return [
        { id: 1, title: 'Strategy session', message: 'TechCorp review scheduled for Apr 15', time: '2 hours ago', unread: true },
        { id: 2, title: 'Client feedback', message: 'New 5-star review from InnoVentures', time: '5 hours ago', unread: true },
        { id: 3, title: 'Report ready', message: 'Q1 strategy report completed', time: '1 day ago', unread: false }
      ];
    }
    if (isResearcher) {
      return [
        { id: 1, title: 'Research update', message: 'DataMiner Pro completed data collection', time: '1 hour ago', unread: true },
        { id: 2, title: 'Collaboration invite', message: 'New research collaboration from TechCorp', time: '3 hours ago', unread: true },
        { id: 3, title: 'AI analysis ready', message: 'TrendScanner delivered market forecast', time: '5 hours ago', unread: false }
      ];
    }
    return [
      { id: 1, title: 'New document uploaded', message: 'Phase 2 report is ready', time: '2 hours ago', unread: true },
      { id: 2, title: 'Engagement milestone', message: '50% progress reached', time: '1 day ago', unread: true },
      { id: 3, title: 'Resource update', message: 'Atlas AI completed analysis', time: '2 days ago', unread: false }
    ];
  }, [user, isResearcher]);

  const [showNotifications, setShowNotifications] = useState(false);

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portal...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const unreadNotifications = notifications.filter(n => n.unread).length;

  // Determine accent color based on role
  const accentColor = user.role === 'consultant'
    ? (user.email === 'marcus@acooya.com' ? 'purple' : 'green')
    : user.role === 'ai_agent' ? 'cyan' : 'blue';

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
      />

      {/* Main Content */}
      <div className={`transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-72'}`}>
        {/* Top Bar */}
        <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={
                    user.role === 'ai_agent'
                      ? 'Search agents, models, integrations...'
                      : user.role === 'consultant' && user.email === 'marcus@acooya.com'
                      ? 'Search AI agents, integrations...'
                      : user.role === 'consultant' && user.email === 'sarah@acooya.com'
                      ? 'Search clients, strategies...'
                      : isResearcher
                      ? 'Search research, publications, collaborations...'
                      : 'Search engagements, documents, resources...'
                  }
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 ml-6">
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <Bell className="w-6 h-6" />
                  {unreadNotifications > 0 && (
                    <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {unreadNotifications}
                    </span>
                  )}
                </button>

                {showNotifications && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="p-4 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="divide-y divide-gray-100 max-h-80 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                            notification.unread ? 'bg-blue-50/50' : ''
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            {notification.unread && (
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                            )}
                            <div className={notification.unread ? '' : 'ml-5'}>
                              <h4 className="font-medium text-gray-900 text-sm">{notification.title}</h4>
                              <p className="text-sm text-gray-600 mt-0.5">{notification.message}</p>
                              <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t border-gray-100">
                      <button className="w-full text-center text-sm text-blue-600 font-medium hover:text-blue-700">
                        View All Notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Subscription Badge */}
              <div className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full ${
                accentColor === 'blue' ? 'bg-gradient-to-r from-blue-100 to-purple-100' :
                accentColor === 'purple' ? 'bg-gradient-to-r from-purple-100 to-pink-100' :
                'bg-gradient-to-r from-green-100 to-teal-100'
              }`}>
                <Zap className={`w-4 h-4 ${
                  accentColor === 'blue' ? 'text-blue-600' :
                  accentColor === 'purple' ? 'text-purple-600' :
                  'text-green-600'
                }`} />
                <span className={`text-sm font-medium ${
                  accentColor === 'blue' ? 'text-blue-700' :
                  accentColor === 'purple' ? 'text-purple-700' :
                  'text-green-700'
                } capitalize`}>{user.subscription} Plan</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main id="overview" className="p-6">
          {activeTab === 'overview' && isResearcher ? (
            <ResearcherDashboard tier={user?.subscription || 'starter'} />
          ) : activeTab === 'overview' ? (
            <OverviewTab onNavigate={setActiveTab} />
          ) : activeTab === 'engagements' ? (
            <EngagementsTab />
          ) : activeTab === 'resources' ? (
            <ResourcesTab />
          ) : activeTab === 'collaboration' ? (
            <CollaborationHub tier={user?.subscription || 'starter'} />
          ) : activeTab === 'transcripts' ? (
            <TranscriptsTab />
          ) : activeTab === 'history' ? (
            <EngagementHistoryTab tier={user?.subscription || 'starter'} />
          ) : activeTab === 'ai-agents' ? (
            <AIAgentsTab />
          ) : activeTab === 'performance' ? (
            <PerformanceTab />
          ) : activeTab === 'clients' ? (
            <ClientsTab />
          ) : activeTab === 'strategy' ? (
            <StrategyTab />
          ) : activeTab === 'settings' ? (
            <SettingsTab onNavigate={setActiveTab} />
          ) : activeTab === 'studio' ? (
            <StudioTab />
          ) : activeTab === 'pipeline' ? (
            <PipelineTab />
          ) : activeTab === 'models' ? (
            <ModelsTab />
          ) : null}
        </main>
      </div>
    </div>
  );
};

// AI Agent Developer Tab Components
const StudioTab: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Development Studio</h1>
          <p className="text-gray-600 mt-1">Build and configure AI agents for the platform</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white font-medium rounded-xl hover:bg-cyan-700 transition-colors">
          <Plus className="w-5 h-5" />
          New Agent
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Agent Builder */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Agent Builder</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Agent Name</label>
              <input type="text" placeholder="e.g., Nova Finance Analyzer" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Agent Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500">
                <option>NLP Processing</option>
                <option>Computer Vision</option>
                <option>Conversational AI</option>
                <option>Data Analysis</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Capabilities</label>
              <div className="flex flex-wrap gap-2">
                {['Text Analysis', 'Sentiment', 'Translation', 'Summarization'].map((cap) => (
                  <span key={cap} className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">{cap}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Integration Hub */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Integration Hub</h2>
          <div className="space-y-3">
            {[
              { name: 'LangChain', status: 'Connected' },
              { name: 'OpenAI API', status: 'Connected' },
              { name: 'Hugging Face', status: 'Available' },
              { name: 'Custom Webhook', status: 'Available' }
            ].map((integration) => (
              <div key={integration.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">{integration.name}</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  integration.status === 'Connected' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'
                }`}>{integration.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PipelineTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Pipeline</h1>
          <p className="text-gray-600 mt-1">Monitor and manage AI agent training pipelines</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Active Training Jobs</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {[
            { name: 'NLP Processor v3.0', type: 'NLP', stage: 'Training', progress: 75, eta: '2 hours' },
            { name: 'Vision Analyzer Pro', type: 'CV', stage: 'Testing', progress: 90, eta: 'Complete' },
            { name: 'Conversational AI v2.5', type: 'Chat', stage: 'Deploying', progress: 100, eta: 'Live' },
            { name: 'Data Extraction Agent', type: 'NLP', stage: 'Queued', progress: 0, eta: '4 hours' }
          ].map((job) => (
            <div key={job.name} className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{job.name}</h3>
                  <p className="text-sm text-gray-500">{job.type}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  job.stage === 'Live' ? 'bg-green-100 text-green-700' :
                  job.stage === 'Deploying' ? 'bg-cyan-100 text-cyan-700' :
                  job.stage === 'Testing' ? 'bg-purple-100 text-purple-700' :
                  job.stage === 'Training' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-600'
                }`}>{job.stage}</span>
              </div>
              <div className="mb-2">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-500">Progress</span>
                  <span className="font-medium">{job.progress}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full" style={{ width: `${job.progress}%` }} />
                </div>
              </div>
              <p className="text-xs text-gray-500">ETA: {job.eta}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ModelsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Models</h1>
          <p className="text-gray-600 mt-1">Manage deployed AI models and their configurations</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white font-medium rounded-xl hover:bg-cyan-700 transition-colors">
          <Upload className="w-5 h-5" />
          Import Model
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Atlas AI v3.2', type: 'Foundation', accuracy: '97.8%', status: 'Production' },
          { name: 'Nova v2.1', type: 'NLP', accuracy: '95.4%', status: 'Production' },
          { name: 'Vision Core v1.5', type: 'CV', accuracy: '94.2%', status: 'Production' },
          { name: 'Chat Flow v3.0', type: 'Chatbot', accuracy: '92.8%', status: 'Beta' },
          { name: 'Data Extract Pro', type: 'NLP', accuracy: '96.1%', status: 'Production' },
          { name: 'Sentiment Plus', type: 'NLP', accuracy: '93.5%', status: 'Development' }
        ].map((model) => (
          <div key={model.name} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                <Bot className="w-6 h-6 text-cyan-600" />
              </div>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                model.status === 'Production' ? 'bg-green-100 text-green-700' :
                model.status === 'Beta' ? 'bg-purple-100 text-purple-700' :
                'bg-gray-100 text-gray-600'
              }`}>{model.status}</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{model.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{model.type} Model</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Accuracy</span>
              <span className="font-medium text-cyan-600">{model.accuracy}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientPortal;
