import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, getSubscriptionFeatures } from '../contexts/AuthContext';
import { SubscriptionTier } from '../types/auth';
import { Link } from 'react-router-dom';
import {
  Check, X, Shield, Zap, Users, Bot, ArrowRight,
  ChevronDown, ChevronUp, MessageSquare,
  HelpCircle, Star, Clock, FileText, Headphones, Building
} from 'lucide-react';

const tiers: Array<{
  id: SubscriptionTier;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  highlighted: boolean;
  color: string;
  icon: React.ElementType;
}> = [
  {
    id: 'starter',
    name: 'Growth',
    tagline: 'Perfect for small teams getting started with consulting',
    monthlyPrice: 49,
    annualPrice: 500,
    highlighted: false,
    color: 'slate',
    icon: Building
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'For growing businesses that need advanced capabilities',
    monthlyPrice: 149,
    annualPrice: 1524,
    highlighted: true,
    color: 'blue',
    icon: Zap
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Custom solutions for large organisations',
    monthlyPrice: 499,
    annualPrice: 5088,
    highlighted: false,
    color: 'purple',
    icon: Building
  }
];

const featureComparison = [
  {
    category: 'Engagements & Usage',
    icon: FileText,
    features: [
      { name: 'Active engagements', starter: 'Up to 3', professional: 'Up to 15', enterprise: 'Unlimited' },
      { name: 'Users per organisation', starter: 'Up to 3', professional: 'Up to 15', enterprise: 'Unlimited' },
      { name: 'Concurrent projects', starter: '1', professional: '5', enterprise: 'Unlimited' },
      { name: 'Engagement history retention', starter: '6 months', professional: '2 years', enterprise: 'Unlimited' },
      { name: 'Engagement transcripts', starter: true, professional: true, enterprise: true }
    ]
  },
  {
    category: 'AI Agent Credits',
    icon: Bot,
    features: [
      { name: 'Monthly AI Agent Credits', starter: '200', professional: '1,000', enterprise: '5,000' },
      { name: 'Overage rate per additional credit', starter: 'AUD $0.22', professional: 'AUD $0.15', enterprise: 'AUD $0.07' },
      { name: 'Credit usage notifications (80% and 95%)', starter: true, professional: true, enterprise: true },
      { name: 'Pre-task credit confirmation', starter: true, professional: true, enterprise: true }
    ]
  },
  {
    category: 'AI Agents',
    icon: Bot,
    features: [
      { name: 'Aria (Research Agent)', starter: true, professional: true, enterprise: true },
      { name: 'Nova (Analytics Agent)', starter: true, professional: true, enterprise: true },
      { name: 'Atlas (Advisory Agent)', starter: false, professional: true, enterprise: true },
      { name: 'Zenith (Orchestration Agent)', starter: false, professional: true, enterprise: true },
      { name: 'Custom AI agent development', starter: false, professional: false, enterprise: true },
      { name: 'AI agent marketplace access', starter: true, professional: true, enterprise: true }
    ]
  },
  {
    category: 'Human Consultants',
    icon: Users,
    features: [
      { name: 'Human consultant access', starter: 'Standard', professional: 'Priority (senior)', enterprise: 'Exclusive' },
      { name: 'Consultant engagement pricing', starter: "Standard 'from' pricing", professional: "Priority senior 'from' pricing", enterprise: 'Custom scoped rates' },
      { name: 'Fixed-price packages', starter: true, professional: true, enterprise: true },
      { name: 'Dedicated lead consultant', starter: false, professional: false, enterprise: true },
      { name: 'Quarterly strategic reviews', starter: false, professional: true, enterprise: true },
      { name: 'On-site workshops', starter: false, professional: false, enterprise: true }
    ]
  },
  {
    category: 'Workspace & Collaboration',
    icon: MessageSquare,
    features: [
      { name: 'Secure encrypted workspace', starter: true, professional: true, enterprise: true },
      { name: 'Team collaboration', starter: false, professional: true, enterprise: true },
      { name: 'Document collaboration', starter: false, professional: true, enterprise: true },
      { name: 'Advanced analytics dashboard', starter: false, professional: true, enterprise: true },
      { name: 'Australian data residency (ap-southeast-2)', starter: false, professional: false, enterprise: true }
    ]
  },
  {
    category: 'Security & Compliance',
    icon: Shield,
    features: [
      { name: 'Built to SOC 2 Type II', starter: true, professional: true, enterprise: true },
      { name: 'High Availability / Enterprise-grade infrastructure', starter: true, professional: true, enterprise: true },
      { name: 'Custom integrations', starter: '—', professional: '—', enterprise: 'Scoped on request' },
      { name: 'Privacy Act & GDPR aligned', starter: true, professional: true, enterprise: true },
      { name: 'Engagement SLA', starter: false, professional: false, enterprise: true },
      { name: 'Dedicated Customer Success Manager', starter: false, professional: false, enterprise: true }
    ]
  },
  {
    category: 'Reporting & Insights',
    icon: MessageSquare,
    features: [
      { name: 'Monthly reports', starter: true, professional: true, enterprise: true },
      { name: 'Weekly reports & analytics', starter: false, professional: true, enterprise: true },
      { name: 'Real-time dashboards', starter: false, professional: false, enterprise: true },
      { name: 'Executive reporting', starter: false, professional: false, enterprise: true }
    ]
  },
  {
    category: 'Support',
    icon: Headphones,
    features: [
      { name: 'Email support', starter: '48-hour response', professional: '24-hour response', enterprise: 'White-glove concierge' },
      { name: '24/7 priority support', starter: false, professional: true, enterprise: true },
      { name: 'Resources and frameworks library', starter: true, professional: true, enterprise: true },
      { name: 'Executive briefings', starter: false, professional: false, enterprise: true }
    ]
  }
];

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes. Growth and Professional plans include a 14-day free trial with no credit card required. During the trial you get full access to your chosen plan\'s features, including AI agent credits (50 credits on Growth, 200 credits on Professional) and one free human consultant interaction. You will receive a reminder on Day 12. If you do not cancel before Day 14, your account automatically converts to a monthly subscription. Enterprise clients receive a guided demonstration instead of a self-serve trial.'
  },
  {
    q: 'How are AI agent credits measured?',
    a: 'Credits are measured based on task complexity — ensuring you only pay for what your task actually requires. Micro tasks (0.5 credits): Quick, single-step tasks such as summaries, simple Q&A, or formatting. Standard tasks (1 credit): Multi-step tasks such as research briefs, strategy memos, or KPI reports. Deep tasks (3 credits): Complex analyses such as full competitive landscapes, strategic reports, or orchestrated multi-agent workflows. Your credit cost is always shown before a task runs.'
  },
  {
    q: 'Can I change plans later?',
    a: 'Yes. You can upgrade or downgrade at any time from your account settings. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle. Annual plans can be upgraded at any time — the price difference is prorated.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept Visa, Mastercard, American Express, and BECS direct debit for Australian bank accounts. Enterprise clients may request invoice-based billing on net-30 terms, subject to approval. All payments are processed securely via Stripe.'
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'Your data remains accessible for 30 days after cancellation for export. After 30 days it is permanently deleted in accordance with our Data Retention Policy. We never sell or transfer your data to third parties.'
  },
  {
    q: 'Are you a consultant looking to join Acooya?',
    a: 'We are actively building our consultant network. Signing up and listing on the Acooya marketplace is completely free — no joining fee, no subscription required. Acooya earns only when your engagement is completed, via a 20% facilitation fee. If you have 10+ years of consulting experience and a passion for human-AI collaboration, contact us at contact@acooyaconsulting.com to express your interest.'
  },
  {
    q: 'Are you an AI agent developer?',
    a: 'Creating a developer account and listing your agents is completely free. Founding Developer spots — zero commission on your first AUD $5,000 earned, then a locked 15% commission rate — are limited to the first 50 verified developers. The optional Developer Pro plan ($29/month) offers reduced commission (15%) and advanced analytics.'
  },
  {
    q: 'Do you offer discounts for nonprofits?',
    a: 'Yes. Registered nonprofit organisations may be eligible for a 20% discount on Growth and Professional plans. Contact contact@acooyaconsulting.com with your organisation details and proof of nonprofit registration to apply.'
  }
];

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [showAllFeatures, setShowAllFeatures] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<SubscriptionTier | null>(null);
  const { user, updateSubscription, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSelectPlan = async (tierId: SubscriptionTier) => {
    if (tierId === currentTier) {
      navigate('/portal');
      return;
    }
    setIsLoading(tierId);

    if (!isAuthenticated) {
      // Store the selected tier in sessionStorage for after registration
      sessionStorage.setItem('selectedTier', tierId);
      navigate('/register');
      return;
    }

    updateSubscription(tierId);
    navigate('/portal');
  };

  const currentTier = user?.subscription || 'starter';

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
    if (value === false) return <X className="w-5 h-5 text-gray-300 mx-auto" />;
    return <span className="text-sm font-medium text-gray-700">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            Built for all sizes of organisations worldwide
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Choose the plan that fits your organisation. All plans include access to our Human-AI Synergy platform with world-class consultants and purpose-built AI agents.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label="Toggle billing period"
            >
              <span
                className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  isAnnual ? 'left-8' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                Save 15%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div id="overview" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          {tiers.map((tier) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
            const monthlyEquivalent = isAnnual ? Math.round(tier.annualPrice / 12) : tier.monthlyPrice;
            const features = getSubscriptionFeatures(tier.id);
            const isCurrent = currentTier === tier.id;
            const Icon = tier.icon;

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col bg-white rounded-2xl ${
                  tier.highlighted
                    ? 'ring-2 ring-blue-600 shadow-2xl md:scale-105 z-10'
                    : 'shadow-lg border border-gray-200'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {/* Tier Header */}
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      tier.highlighted
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                        : tier.color === 'slate'
                        ? 'bg-slate-100'
                        : 'bg-purple-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        tier.highlighted ? 'text-white' : tier.color === 'slate' ? 'text-slate-600' : 'text-purple-600'
                      }`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{tier.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900">
                        ${monthlyEquivalent.toLocaleString()}
                      </span>
                      <span className="text-gray-500">/mo</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-gray-500 mt-1">
                        ${price.toLocaleString()} billed annually
                      </p>
                    )}
                    {!isAnnual && (
                      <p className="text-sm text-green-600 mt-1 font-medium">
                        Or ${Math.round(tier.annualPrice / 12).toLocaleString()}/mo billed annually
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleSelectPlan(tier.id)}
                    disabled={isLoading === tier.id}
                    className={`w-full py-3 px-4 rounded-xl font-semibold transition-all mb-6 flex items-center justify-center gap-2 cursor-pointer ${
                      tier.highlighted
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]'
                        : tier.id === currentTier
                        ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98]'
                        : tier.id === 'enterprise'
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]'
                        : 'bg-gradient-to-r from-slate-600 to-gray-700 text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]'
                    } ${isLoading === tier.id ? 'opacity-75 cursor-wait' : ''}`}
                  >
                    {isLoading === tier.id ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : tier.id === 'starter' ? (
                      <>
                        Start Free Trial
                        <ArrowRight className="w-4 h-4" />
                      </>
                    ) : tier.id === currentTier ? (
                      <>
                        Current Plan
                        <ArrowRight className="w-4 h-4" />
                      </>
                    ) : tier.id === 'enterprise' ? (
                      <>
                        Get Started with Enterprise
                        <ArrowRight className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Start Free Trial
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Features */}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 mb-4">What's included:</p>
                    <ul className="space-y-3">
                      {(showAllFeatures === tier.id ? features : features.slice(0, 6)).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                      {features.length > 6 && (
                        <li>
                          <button
                            onClick={() => setShowAllFeatures(showAllFeatures === tier.id ? null : tier.id)}
                            className="flex items-center gap-2 text-sm text-blue-600 font-medium hover:text-blue-700"
                          >
                            {showAllFeatures === tier.id ? (
                              <>
                                Show less features
                                <ChevronUp className="w-4 h-4" />
                              </>
                            ) : (
                              <>
                                View all features
                                <ChevronDown className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Proposition Comparison Banner */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-green-200">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                40–60% lower cost than traditional consulting — built into every engagement
              </h3>
              <p className="text-gray-600">
                Compare Acooya engagement pricing against traditional consulting firms
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-3 font-semibold text-gray-700">Traditional Firm</th>
                    <th className="text-center p-3 font-semibold text-green-700 bg-green-100">Acooya</th>
                    <th className="text-center p-3 font-semibold text-green-700 bg-green-100">You Save</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">Advisory Session: $1,200–1,800</td>
                    <td className="p-3 text-center font-medium text-green-700 bg-green-50">from $450</td>
                    <td className="p-3 text-center font-medium text-green-700 bg-green-50">Up to 64%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">Sprint Engagement: $15k–25k</td>
                    <td className="p-3 text-center font-medium text-green-700 bg-green-50">from $4,500</td>
                    <td className="p-3 text-center font-medium text-green-700 bg-green-50">Up to 70%</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-700">Full Engagement: $45k–120k</td>
                    <td className="p-3 text-center font-medium text-green-700 bg-green-50">from $12,000</td>
                    <td className="p-3 text-center font-medium text-green-700 bg-green-50">Up to 75%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Credit Explanation Block */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-200">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              How AI Agent Credits Work
            </h3>
            <p className="text-gray-600 mb-4">
              Credits are your monthly AI agent currency. Each task uses credits based on its complexity — ensuring you only pay for what your task actually requires.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Micro tasks (0.5 credits)</strong> — Quick, single-step tasks such as summaries, simple Q&A, or data formatting.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Standard tasks (1 credit)</strong> — Multi-step tasks such as research briefs, strategy memos, competitive summaries, or KPI reports.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Deep tasks (3 credits)</strong> — Complex, multi-source analyses such as full competitive landscapes, strategic reports, or orchestrated workflows involving multiple agents.</span>
              </li>
            </ul>
            <p className="text-sm italic text-gray-500">
              Your credit cost is always shown before a task runs — no surprises. Credits reset monthly and do not roll over.
            </p>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-gray-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center">
                Compare All Features
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-4 font-semibold text-gray-900 w-2/5 md:w-1/4">Feature</th>
                    <th className="text-center p-4 font-semibold text-slate-600 w-1/5">Growth</th>
                    <th className="text-center p-4 font-semibold text-blue-600 bg-blue-50/50 w-1/5">Professional</th>
                    <th className="text-center p-4 font-semibold text-purple-600 w-1/5">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((section, sectionIdx) => (
                    <React.Fragment key={section.category}>
                      <tr className="bg-gray-50">
                        <td colSpan={4} className="p-4">
                          <div className="flex items-center gap-2">
                            <section.icon className="w-5 h-5 text-gray-500" />
                            <span className="font-semibold text-gray-900">{section.category}</span>
                          </div>
                        </td>
                      </tr>
                      {section.features.map((feature, featureIdx) => (
                        <tr key={feature.name} className={featureIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                          <td className="p-4 text-sm text-gray-700 pl-8">{feature.name}</td>
                          <td className="p-4 text-center">
                            {renderFeatureValue(feature.starter)}
                          </td>
                          <td className="p-4 text-center bg-blue-50/30">
                            {renderFeatureValue(feature.professional)}
                          </td>
                          <td className="p-4 text-center">
                            {renderFeatureValue(feature.enterprise)}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Built to SOC 2 standards</h4>
                <p className="text-xs md:text-sm text-gray-600">Enterprise-grade security</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">High Availability</h4>
                <p className="text-xs md:text-sm text-gray-600">Enterprise-grade infrastructure</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Human Experts</h4>
                <p className="text-xs md:text-sm text-gray-600">World-class consultants</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Bot className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Specialist AI Agents</h4>
                <p className="text-xs md:text-sm text-gray-600">Purpose-built for consulting</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-medium text-gray-900 text-sm md:text-base">{faq.q}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="px-4 md:px-5 pb-4 md:pb-5 text-sm md:text-base text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Consulting?
          </h3>
          <p className="text-gray-600 mb-8">
            Join the first wave of organisations transforming their consulting experience with Acooya's Human-AI Synergy platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate(isAuthenticated ? '/portal' : '/register')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
            >
              {isAuthenticated ? 'Go to Your Portal' : 'Start Free Trial'}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/marketplace')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors border border-gray-300"
            >
              <HelpCircle className="w-5 h-5" />
              Talk to Sales
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
