import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Bot, Check, Mail, UserPlus, Award, Info, Shield } from 'lucide-react';

type EnquiryRole = 'client' | 'consultant' | 'developer';

const CONTACT_EMAIL = 'contact@acooyaconsulting.com';

interface ExtraField {
  key: string;
  label: string;
  placeholder: string;
  kind: 'text' | 'textarea' | 'select';
  mailLabel?: string;
  options?: string[];
}

interface RoleConfig {
  value: EnquiryRole;
  label: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  accent: string;
  accentDark: string;
  ctaTextColor: string;
  heading: string;
  subheading: string;
  emailLabel: string;
  emailPlaceholder: string;
  ctaLabel: string;
  mailSubject: string;
  extraFields: ExtraField[];
  benefitsTitle: string;
  benefits: string[];
  nextSteps: string[];
  founding?: { title: string; points: string[]; footnote: string };
}

const roleConfigs: Record<EnquiryRole, RoleConfig> = {
  client: {
    value: 'client',
    label: 'Client',
    description: 'I want to engage consultants and AI agents',
    icon: Briefcase,
    accent: '#3498DB',
    accentDark: '#1B6699',
    ctaTextColor: '#FFFFFF',
    heading: 'Book a discovery call',
    subheading: 'Free 30 minutes. No commitment, no card.',
    emailLabel: 'Work email',
    emailPlaceholder: 'alexandra@company.com.au',
    ctaLabel: 'Book a discovery call',
    mailSubject: 'Acooya discovery call enquiry',
    extraFields: [
      {
        key: 'challenge',
        label: 'What are you trying to change?',
        mailLabel: 'What they want to change',
        placeholder: 'Operating model redesign across three business units',
        kind: 'textarea',
      },
    ],
    benefitsTitle: 'What you get',
    benefits: [
      'Up to 75% lower cost than traditional consulting',
      'Human review on every AI output — always',
      'Scope as a 2-week sprint or 4-week full engagement',
    ],
    nextSteps: [
      'We aim to reply within one business day',
      'Free 30-minute discovery call — no commitment',
      'A scoped proposal: sprint or full engagement',
      'We set up your portal and walk you through it',
    ],
  },
  consultant: {
    value: 'consultant',
    label: 'Consultant',
    description: 'I offer consulting services',
    icon: Users,
    accent: '#F39C12',
    accentDark: '#B37A0C',
    ctaTextColor: '#412402',
    heading: 'Join the Acooya consultant network',
    subheading: 'Free to join, free to list — you earn only when you deliver.',
    emailLabel: 'Professional email',
    emailPlaceholder: 'alexandra@consultingfirm.com.au',
    ctaLabel: 'Apply to join',
    mailSubject: 'Acooya consultant application',
    extraFields: [
      {
        key: 'experience',
        label: 'Years of consulting experience',
        placeholder: 'Select experience',
        kind: 'select',
        options: ['5–9 years', '10–14 years', '15–19 years', '20+ years'],
      },
      {
        key: 'specialisation',
        label: 'Primary specialisation',
        placeholder: 'Operating model design',
        kind: 'text',
      },
    ],
    benefitsTitle: 'What you get as a consultant',
    benefits: [
      "80% of every engagement fee — our facilitation fee is 20%, only on completed engagements",
      'Net fees remitted within 14 business days of engagement completion',
      'Advisory sessions, sprints, full engagements, retainers',
      'Applications reviewed within 5 business days',
    ],
    nextSteps: [
      'Reviewed within 5 business days',
      'A conversation about your specialisation and fit',
      'We set up your consultant portal and profile',
      'Payout details when your first engagement is agreed',
    ],
  },
  developer: {
    value: 'developer',
    label: 'AI agent developer',
    description: 'I build AI agents for the platform',
    icon: Bot,
    accent: '#E91E63',
    accentDark: '#993556',
    ctaTextColor: '#FFFFFF',
    heading: 'List your AI agent on Acooya',
    subheading: 'Free account, free listing. Zero commission on your first A$5,000.',
    emailLabel: 'Developer email',
    emailPlaceholder: 'alex@developerstudio.io',
    ctaLabel: 'Apply for founding developer',
    mailSubject: 'Acooya founding developer application',
    extraFields: [
      {
        key: 'agentName',
        label: 'Agent name or concept',
        placeholder: 'Strategic research agent',
        kind: 'text',
      },
      {
        key: 'agentCategory',
        label: 'Agent category',
        placeholder: 'Select category',
        kind: 'select',
        options: ['Operating Model', 'Delivery Enablement', 'Insight & Reporting', 'Other'],
      },
    ],
    benefitsTitle: 'What you get as a developer',
    benefits: [
      'Free to sign up and list — no joining fee, no subscription required',
      'Advanced analytics on invocations and revenue with Developer Pro',
      'Agent review in 15 business days — priority 5-day review with founding status or Developer Pro',
    ],
    nextSteps: [
      'Reviewed within 5 business days',
      'Your founding developer place is held on confirmation',
      'Direct onboarding with Brooklyn',
      'Agent submission opens when the developer studio ships',
    ],
    founding: {
      title: 'Founding developer — first 50 developers only',
      points: [
        '0% commission on your first A$5,000 of cumulative gross transaction value',
        '15% thereafter instead of 20% — locked for 24 months from your verified listing date',
        'Permanent founding developer badge on your marketplace profile',
        'Priority review within 5 business days, and direct onboarding',
      ],
      footnote:
        'After the founding period, standard commission is 20% of gross transaction value. The optional Developer Pro plan (A$29/month) reduces this to 15%.',
    },
  },
};

const roleOrder: EnquiryRole[] = ['client', 'consultant', 'developer'];

const GetStartedPage: React.FC = () => {
  const [role, setRole] = useState<EnquiryRole>('client');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [extras, setExtras] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const config = roleConfigs[role];

  const selectRole = (next: EnquiryRole) => {
    setRole(next);
    setExtras({});
    setSubmitted(false);
  };

  const setExtra = (key: string, value: string) => {
    setExtras((current) => ({ ...current, [key]: value }));
  };

  const buildMailto = () => {
    const lines: string[] = [];
    lines.push(`Role: ${config.label}`);
    lines.push(`Name: ${name}`);
    lines.push(`Email: ${email}`);
    config.extraFields.forEach((field) => {
      lines.push(`${field.mailLabel || field.label}: ${extras[field.key] || ''}`);
    });
    lines.push('');
    lines.push('Sent from the Acooya Get Started page.');
    const body = encodeURIComponent(lines.join('\n'));
    const subject = encodeURIComponent(config.mailSubject);
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = buildMailto();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Get started with Acooya</h1>
            <p className="text-gray-600">Tell us who you are and we&apos;ll take it from there.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">I am a...</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {roleOrder.map((key) => {
                  const option = roleConfigs[key];
                  const isSelected = role === key;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => selectRole(option.value)}
                      className="p-4 rounded-xl border-2 transition-all text-left"
                      style={{
                        borderColor: isSelected ? option.accent : '#E5E7EB',
                        backgroundColor: isSelected ? `${option.accent}0F` : 'transparent',
                      }}
                    >
                      <option.icon
                        className="w-6 h-6 mb-2"
                        style={{ color: isSelected ? option.accent : '#9CA3AF' }}
                      />
                      <h3 className="font-semibold text-gray-900">{option.label}</h3>
                      <p className="text-xs text-gray-500 mt-1">{option.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {submitted ? (
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: config.accent }} />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      Your message is ready to send
                    </h2>
                    <p className="text-sm text-gray-600">
                      We&apos;ve opened a pre-filled draft in your mail app. It won&apos;t reach us
                      until you press send.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-medium text-gray-900 mb-3">What happens next</p>
                  <ol className="space-y-2">
                    {config.nextSteps.map((step, index) => (
                      <li key={step} className="flex items-start gap-3 text-sm text-gray-700">
                        <span
                          className="font-semibold flex-shrink-0"
                          style={{ color: config.accentDark }}
                        >
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {config.founding && (
                  <div
                    className="rounded-lg p-4 mt-4"
                    style={{ backgroundColor: `${config.accent}12` }}
                  >
                    <p className="text-sm text-gray-700">
                      <Info
                        className="w-4 h-4 inline mr-2 -mt-1"
                        style={{ color: config.accentDark }}
                      />
                      The developer portal is invitation-only while we build the studio. Applying
                      now secures your founding place and your commission terms.
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium"
                  style={{ color: config.accentDark }}
                >
                  Back to the form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{config.heading}</h2>
                  <p className="text-gray-600">{config.subheading}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full name <span className="text-red-500">*</span>
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {config.emailLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder={config.emailPlaceholder}
                  />
                </div>

                {config.extraFields.map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label} <span className="text-red-500">*</span>
                    </label>
                    {field.kind === 'select' ? (
                      <select
                        value={extras[field.key] || ''}
                        onChange={(e) => setExtra(field.key, e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white"
                      >
                        <option value="">{field.placeholder}</option>
                        {(field.options || []).map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : field.kind === 'textarea' ? (
                      <textarea
                        value={extras[field.key] || ''}
                        onChange={(e) => setExtra(field.key, e.target.value)}
                        required
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        type="text"
                        value={extras[field.key] || ''}
                        onChange={(e) => setExtra(field.key, e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: config.accent, color: config.ctaTextColor }}
                >
                  {config.ctaLabel}
                </button>

                <div className="border-t border-gray-200 pt-5">
                  <p className="text-sm font-medium text-gray-900 mb-3">{config.benefitsTitle}</p>
                  <ul className="space-y-2">
                    {config.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: config.accentDark }}
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {config.founding && (
                  <div
                    className="rounded-lg p-4"
                    style={{ backgroundColor: `${config.accent}12` }}
                  >
                    <p className="text-sm font-semibold text-gray-900 mb-3">
                      <Award
                        className="w-4 h-4 inline mr-2 -mt-1"
                        style={{ color: config.accentDark }}
                      />
                      {config.founding.title}
                    </p>
                    <ul className="space-y-2">
                      {config.founding.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: config.accentDark }}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-gray-500 mt-3">{config.founding.footnote}</p>
                  </div>
                )}
              </form>
            )}
          </div>

          <div className="mt-6 space-y-2 text-center">
            <p className="text-sm text-gray-600">
              <Mail className="w-4 h-4 inline mr-2 -mt-1" />
              Submitting opens a pre-filled message in your mail app — nothing is sent
              automatically.
            </p>
            <p className="text-sm text-gray-600">
              <UserPlus className="w-4 h-4 inline mr-2 -mt-1" />
              Self-serve accounts open at launch. For now we set up your portal personally during
              onboarding.
            </p>
            <p className="text-xs text-gray-500 pt-2">
              <Shield className="w-3 h-3 inline mr-1 -mt-0.5" />
              AES-256 encrypted infrastructure · Designed to SOC 2 Type II standards · Australian
              Privacy Act aligned
            </p>
            <p className="text-sm text-gray-600 pt-2">
              Already have an account?{' '}
              <a
                href="https://app.acooyaconsulting.com/login"
                className="font-medium"
                style={{ color: '#3498DB' }}
              >
                Sign in
              </a>
              {' · '}
              <Link to="/pricing" className="font-medium" style={{ color: '#3498DB' }}>
                See pricing
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;