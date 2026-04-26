import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserRole } from '../types/auth';
import { Eye, EyeOff, Shield, Check, Users, Bot, Briefcase, X, FileText, Scale, Lock, Users2, CreditCard, AlertTriangle, Globe, Star, Award } from 'lucide-react';

const roleOptions = [
  {
    value: 'client' as UserRole,
    label: 'Client',
    description: 'I want to engage consultants and AI agents',
    icon: Briefcase,
    color: 'blue'
  },
  {
    value: 'consultant' as UserRole,
    label: 'Consultant',
    description: 'I offer consulting services',
    icon: Users,
    color: 'green'
  },
  {
    value: 'ai_agent' as UserRole,
    label: 'AI Agent Developer',
    description: 'I develop AI agents for the platform',
    icon: Bot,
    color: 'amber'
  }
];

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<UserRole>('client');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  // Consultant-specific fields
  const [experience, setExperience] = useState('');
  const [specialization, setSpecialization] = useState('');

  // AI Agent Developer-specific fields
  const [agentName, setAgentName] = useState('');
  const [agentCategory, setAgentCategory] = useState('');

  const { register, updateSubscription } = useAuth();
  const navigate = useNavigate();

  // Handle pre-selected tier from pricing page
  useEffect(() => {
    const savedTier = sessionStorage.getItem('selectedTier');
    if (savedTier) {
      setSelectedTier(savedTier);
    }
  }, []);

  // Terms of Service Content
  const termsContent = {
    effectiveDate: "13 April 2026",
    sections: [
      {
        title: "Acceptance of Terms",
        icon: Scale,
        content: "By creating an account and using Acooya Consulting's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
      },
      {
        title: "Our Services",
        icon: Users2,
        content: "Acooya provides a Human-AI Synergy platform connecting organisations with world-class consultants and purpose-built AI agents. Our services include engagement management, collaboration workspaces, and secure document handling."
      },
      {
        title: "User Accounts",
        icon: Users,
        content: "You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information during registration and to notify us of any unauthorized access immediately."
      },
      {
        title: "Service Providers (Consultants & AI Agents)",
        icon: Bot,
        content: "Consultants and AI agents on our platform are independent providers. Acooya facilitates connections but does not guarantee the services provided by third-party consultants. All engagements are subject to separate agreements."
      },
      {
        title: "Payments & Billing",
        icon: CreditCard,
        content: "Subscription fees are billed monthly or annually according to your selected plan. AI agent usage may incur additional charges. All fees are in USD unless otherwise specified."
      },
      {
        title: "Limitation of Liability",
        icon: AlertTriangle,
        content: "Acooya shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform or services."
      },
      {
        title: "Governing Law",
        icon: Globe,
        content: "These Terms are governed by the laws of New South Wales, Australia. Any disputes shall be resolved in the courts of New South Wales, Australia."
      }
    ]
  };

  // Privacy Policy Content
  const privacyContent = {
    lastUpdated: "13 April 2026",
    sections: [
      {
        title: "Information We Collect",
        icon: FileText,
        content: "We collect personal information including name, email, company details, payment information, and engagement data. This information is necessary for providing our consulting services."
      },
      {
        title: "How We Use Your Information",
        icon: Lock,
        content: "We use your information to: provide and improve our services, process payments, facilitate engagements between clients and service providers, and communicate important updates."
      },
      {
        title: "Data Protection",
        icon: Shield,
        content: "We implement industry-standard security measures including 256-bit encryption, SOC 2 compliance, and regular security audits. Your data is stored securely in compliance with Australian Privacy Principles."
      },
      {
        title: "Information Sharing",
        icon: Users2,
        content: "We share information with: consultants and AI agents for engagement purposes, payment processors for billing, and legal authorities when required by law. We do not sell your personal information."
      },
      {
        title: "Your Rights",
        icon: Users,
        content: "Under GDPR and Australian Privacy Act, you have the right to: access your personal data, correct inaccurate data, request deletion of your data, and object to processing."
      },
      {
        title: "International Transfers",
        icon: Globe,
        content: "Your data may be transferred internationally for processing. We ensure appropriate safeguards are in place for international data transfers in compliance with applicable laws."
      },
      {
        title: "Contact Us",
        icon: AlertTriangle,
        content: "For privacy inquiries, contact our Data Protection Officer at privacy@acooya.com or via our support portal. We respond to all privacy requests within 30 days."
      }
    ]
  };

  // Modal Component
  const PolicyModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    title: string;
    icon: React.ElementType;
    lastUpdated: string;
    sections: Array<{ title: string; icon: React.ElementType; content: string }>;
  }> = ({ isOpen, onClose, title, icon: Icon, lastUpdated, sections }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="text-white/80 text-sm">Last Updated: {lastUpdated}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-4">
                {sections.map((section, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <section.icon className="w-5 h-5 text-blue-600" />
                      <h3 className="font-semibold text-gray-900">{section.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  By continuing, you agree to these terms.
                </p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  I Understand
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters with at least one number and one letter');
      return;
    }

    if (!acceptTerms) {
      setError('Please accept the terms and conditions');
      return;
    }

    setIsLoading(true);

    try {
      await register(email, password, name, role);

      // Apply pre-selected tier from pricing page if any
      if (selectedTier) {
        updateSubscription(selectedTier as any);
        setSelectedTier(null);
      }

      // Navigate based on user type
      if (role === 'client') {
        navigate('/portal');
      } else {
        // Consultants and AI developers see an application review message
        // In a real app, this would be handled differently
        navigate('/portal');
      }
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getRoleColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-100 text-blue-700 border-blue-300',
      green: 'bg-green-100 text-green-700 border-green-300',
      amber: 'bg-amber-100 text-amber-700 border-amber-300'
    };
    return colors[color] || colors.blue;
  };

  const getRoleSelectedColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'ring-2 ring-blue-500 bg-blue-50',
      green: 'ring-2 ring-green-500 bg-green-50',
      amber: 'ring-2 ring-amber-500 bg-amber-50'
    };
    return colors[color] || colors.blue;
  };

  // Get email label based on role
  const getEmailLabel = () => {
    switch (role) {
      case 'consultant':
        return 'Professional Email';
      case 'ai_agent':
        return 'Developer Email';
      default:
        return 'Work Email';
    }
  };

  const getEmailPlaceholder = () => {
    switch (role) {
      case 'consultant':
        return 'alexandra@consultingfirm.com.au';
      case 'ai_agent':
        return 'alex@developerstud.io';
      default:
        return 'alexandra@mitchell-enterprises.com';
    }
  };

  // Get CTA button text based on role
  const getCTAButtonText = () => {
    switch (role) {
      case 'consultant':
        return 'Apply to Join';
      case 'ai_agent':
        return 'Apply for Founding Developer';
      default:
        return 'Start Free Trial';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {role === 'consultant' ? 'Join the Acooya Consultant Network' :
               role === 'ai_agent' ? 'List Your AI Agent on Acooya' :
               'Create Your Client Account'}
            </h1>
            <p className="text-gray-600">
              {role === 'consultant' ? 'Free to sign up, free to list — earn only when you deliver' :
               role === 'ai_agent' ? 'Free account, free listing — keep 100% of your first AUD $5,000 as a Founding Developer' :
               'Start your 14-day free trial — no credit card required'}
            </p>
            {selectedTier && (
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                <Check className="w-4 h-4" />
                Starting with {selectedTier.charAt(0).toUpperCase() + selectedTier.slice(1)} Plan
              </div>
            )}
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  I am a...
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {roleOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setRole(option.value)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        role === option.value
                          ? `${getRoleSelectedColor(option.color)} border-transparent`
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <option.icon className={`w-6 h-6 mb-2 ${
                        role === option.value ? 'text-gray-900' : 'text-gray-400'
                      }`} />
                      <h3 className={`font-semibold ${
                        role === option.value ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {option.label}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">{option.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  placeholder="Alexandra Mitchell"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {getEmailLabel()} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  placeholder={getEmailPlaceholder()}
                />
              </div>

              {/* Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow pr-12"
                      placeholder="Min. 8 characters"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="Confirm password"
                  />
                </div>
              </div>

              {/* Consultant-specific fields */}
              {role === 'consultant' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Consulting Experience <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      >
                        <option value="">Select experience</option>
                        <option value="5-9">5–9 years</option>
                        <option value="10-14">10–14 years</option>
                        <option value="15-19">15–19 years</option>
                        <option value="20+">20+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Specialisation <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                        placeholder="e.g., Operating Model Design"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* AI Agent Developer-specific fields */}
              {role === 'ai_agent' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Agent Name or Concept <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={agentName}
                        onChange={(e) => setAgentName(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                        placeholder="e.g., Strategic Research Agent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Agent Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={agentCategory}
                        onChange={(e) => setAgentCategory(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      >
                        <option value="">Select category</option>
                        <option value="research">Research & Analysis</option>
                        <option value="strategy">Strategy & Planning</option>
                        <option value="insights">Data & Insights</option>
                        <option value="orchestration">Orchestration & Delivery</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <button
                    type="button"
                    onClick={() => setShowTermsModal(true)}
                    className="text-blue-600 hover:underline"
                  >
                    Terms of Service
                  </button>
                  {' '}and{' '}
                  <button
                    type="button"
                    onClick={() => setShowPrivacyModal(true)}
                    className="text-blue-600 hover:underline"
                  >
                    Privacy Policy
                  </button>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Creating Account...
                  </span>
                ) : (
                  getCTAButtonText()
                )}
              </button>

              {/* Application note for non-Clients */}
              {(role === 'consultant' || role === 'ai_agent') && (
                <p className="text-xs text-gray-500 text-center">
                  {role === 'consultant'
                    ? 'All consultant applications are reviewed within 5 business days. We will contact you to confirm onboarding.'
                    : 'All developer applications are reviewed within 5 business days. We will contact you to guide onboarding and agent submission.'}
                </p>
              )}
            </form>

            {/* Benefits / Programme Box based on role */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              {role === 'consultant' ? (
                <>
                  <p className="text-sm font-medium text-gray-900 mb-4">What you get as a Consultant:</p>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      'Free to sign up and list — no joining fee, no subscription',
                      'Access to enterprise clients in government, aviation, and financial services',
                      'Flexible engagement types — Advisory Sessions, Sprints, Full Engagements, Retainers',
                      '80% of every engagement fee — Acooya\'s platform facilitation fee is 20% only on completed engagements',
                      'Integrated Stripe Connect for fast, reliable payouts (14-day rolling)'
                    ].map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : role === 'ai_agent' ? (
                <>
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-amber-600" />
                      <p className="text-sm font-semibold text-amber-800">Founding Developer Programme — First 50 Developers Only</p>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        'Free to sign up and list — no joining fee, no subscription required',
                        '0% commission on your first AUD $5,000 earned (standard is 20%)',
                        'Locked 15% commission rate thereafter for 24 months',
                        'Permanent Founding Developer badge on your marketplace profile',
                        'Priority agent review — 5 business days',
                        'Direct onboarding support from Brooklyn personally'
                      ].map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2 text-sm text-amber-700">
                          <Check className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">
                    After the first 50 developers: Standard commission is 20% of gross transaction value. Optional Developer Pro plan ($29/month) reduces commission to 15%.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm font-medium text-gray-900 mb-4">What you get with your free trial:</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      '14-day free trial',
                      'No credit card required',
                      'Full access to your chosen plan',
                      'Cancel anytime'
                    ].map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Security */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <Shield className="w-4 h-4" />
            <span>AES-256 encrypted infrastructure | Built to SOC 2 standards | Australian Privacy Act aligned</span>
          </div>
        </div>
      </div>

      {/* Terms of Service Modal */}
      <PolicyModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        title="Terms of Service"
        icon={FileText}
        lastUpdated={termsContent.effectiveDate}
        sections={termsContent.sections}
      />

      {/* Privacy Policy Modal */}
      <PolicyModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        title="Privacy Policy"
        icon={Shield}
        lastUpdated={privacyContent.lastUpdated}
        sections={privacyContent.sections}
      />
    </div>
  );
};

export default RegisterPage;