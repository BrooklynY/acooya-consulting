import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Eye, EyeOff, Lock, Building2, Briefcase, Cpu, ChevronDown, Check, Users, Bot, DollarSign, BarChart3, Settings, FileText, Shield, Zap, Globe, CreditCard, PieChart, TrendingUp, BriefcaseIcon, Layers, Code2, Rocket, Eye as EyeIcon, Wallet, Star } from 'lucide-react';

// Portal configuration for display only (3 portals - no admin)
const portalConfigs = [
  {
    id: 'client',
    name: 'Client Portal',
    tagline: 'Enterprise Transformation Hub',
    description: 'For organisations seeking consulting services with AI-augmented human expertise',
    icon: Building2,
    colorClass: 'from-amber-500 to-orange-600',
    bgClass: 'bg-amber-500/20',
    borderClass: 'border-amber-500/30 hover:border-amber-500/60',
    textClass: 'text-amber-400',
    accentClass: 'text-amber-600',
  },
  {
    id: 'consultant',
    name: 'Consultant Portal',
    tagline: 'Expert Network Platform',
    description: 'For independent service providers offering human consulting expertise',
    icon: Briefcase,
    colorClass: 'from-blue-500 to-indigo-600',
    bgClass: 'bg-blue-500/20',
    borderClass: 'border-blue-500/30 hover:border-blue-500/60',
    textClass: 'text-blue-400',
    accentClass: 'text-blue-600',
  },
  {
    id: 'ai_agent',
    name: 'AI Agent Developer Portal',
    tagline: 'Agent Marketplace Platform',
    description: 'For AI developers building, publishing, and monetizing consulting AI agents',
    icon: Cpu,
    colorClass: 'from-purple-500 to-pink-600',
    bgClass: 'bg-purple-500/20',
    borderClass: 'border-purple-500/30 hover:border-purple-500/60',
    textClass: 'text-purple-400',
    accentClass: 'text-purple-600',
  }
];

const portalSubheadings: Record<string, { title: string; description: string }> = {
  client: {
    title: 'Sign In to Your Portal',
    description: 'Access your Client Portal to engage consultants, deploy AI agents, and manage your transformation projects.'
  },
  consultant: {
    title: 'Sign In to Your Portal',
    description: 'Access your Consultant Portal to manage engagements, update your availability, and receive client enquiries.'
  },
  ai_agent: {
    title: 'Sign In to Your Portal',
    description: 'Access your Developer Portal to manage your AI agents, track performance, and view marketplace analytics.'
  },
  default: {
    title: 'Sign In to Your Portal',
    description: 'Select your portal above to continue.'
  }
};


const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPortal, setSelectedPortal] = useState<string>('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      navigate('/portal');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePortalSelect = (portalId: string) => {
    setSelectedPortal(portalId);
  };

  const currentSubheading = selectedPortal ? portalSubheadings[selectedPortal] : portalSubheadings.default;

  const getPortalBadgeColor = (portalId: string) => {
    switch (portalId) {
      case 'client': return 'bg-amber-500/80 text-white';
      case 'consultant': return 'bg-blue-500/80 text-white';
      case 'ai_agent': return 'bg-purple-500/80 text-white';
      default: return 'bg-gray-500/80 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 p-6 py-8">
        <div className="w-full max-w-6xl mx-auto">
          {/* Welcome Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Acooya Portal Access
            </h1>
            <p className="text-blue-200/90 text-lg max-w-3xl mx-auto">
              Select your portal to access specialized tools, manage engagements, and collaborate with world-class consultants and AI agents.
            </p>
          </div>

          {/* Portal Selection Cards - 3 in a row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {portalConfigs.map((portal) => {
              const Icon = portal.icon;
              const isSelected = selectedPortal === portal.id;

              return (
                <button
                  key={portal.id}
                  onClick={() => handlePortalSelect(portal.id)}
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    isSelected
                      ? `${portal.borderClass} ring-2 ring-white/40 bg-white/10`
                      : `${portal.borderClass} bg-white/5 hover:bg-white/10`
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-3 right-3">
                      <div className={`w-6 h-6 rounded-full ${portal.bgClass} flex items-center justify-center`}>
                        <Check className={`w-4 h-4 ${portal.textClass}`} />
                      </div>
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-xl ${portal.bgClass} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${portal.textClass}`} />
                  </div>
                  <div className="mb-3">
                    <h3 className="font-bold text-white text-lg">{portal.name}</h3>
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${portal.bgClass} ${portal.textClass}`}>
                      {portal.tagline}
                    </span>
                  </div>
                  <p className="text-blue-200/80 text-sm">{portal.description}</p>
                </button>
              );
            })}
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8 mb-6 max-w-xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{currentSubheading.title}</h2>
              <p className="text-gray-600 mt-2">{currentSubheading.description}</p>
              {selectedPortal && (
                <div className={`mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${getPortalBadgeColor(selectedPortal)}`}>
                  <span>Signing in as:</span>
                  <span className="font-semibold">
                    {selectedPortal === 'client' ? 'Client' :
                     selectedPortal === 'consultant' ? 'Consultant' :
                     'AI Agent Developer'}
                  </span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow pr-12"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="mt-6 text-center space-y-3">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-blue-600 hover:text-blue-700">
                  Create a free account →
                </Link>
              </p>
              <p className="text-sm text-gray-500">
                Not yet a customer?{' '}
                <Link to="/register" state={{ demoRequest: true }} className="font-medium text-blue-600 hover:text-blue-700">
                  Request a Demo →
                </Link>
              </p>
            </div>

            {/* Security Badge */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-4">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Lock className="w-4 h-4 text-green-500" />
                <span>AES-256 encrypted infrastructure</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Built to SOC 2 standards</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Globe className="w-4 h-4 text-green-500" />
                <span>Australian Privacy Act aligned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;