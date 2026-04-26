import React from 'react';
import { FileText, Scale, Users, Shield, CreditCard, AlertTriangle, Globe, Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-900">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      {isOpen && <div className="pb-6 text-gray-600 leading-relaxed">{children}</div>}
    </div>
  );
};

const TermsOfServicePage: React.FC = () => {
  const lastUpdated = "13 April 2026";
  const effectiveDate = "13 April 2026";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-purple-100 mb-2">Last Updated: {lastUpdated}</p>
            <p className="text-purple-200 max-w-2xl mx-auto">
              These Terms of Service govern your use of Acooya Consulting's platform and services. By accessing or using our services, you agree to be bound by these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <a href="#acceptance" className="text-blue-600 hover:text-blue-800 font-medium">Acceptance</a>
            <a href="#services" className="text-gray-600 hover:text-blue-800">Our Services</a>
            <a href="#accounts" className="text-gray-600 hover:text-blue-800">User Accounts</a>
            <a href="#consultants" className="text-gray-600 hover:text-blue-800">Service Providers</a>
            <a href="#payments" className="text-gray-600 hover:text-blue-800">Payments</a>
            <a href="#intellectual-property" className="text-gray-600 hover:text-blue-800">Intellectual Property</a>
            <a href="#liability" className="text-gray-600 hover:text-blue-800">Liability</a>
            <a href="#disputes" className="text-gray-600 hover:text-blue-800">Disputes</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-800">Contact</a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">

            {/* Compliance Notice */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-12 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">International Compliance Notice</h3>
                  <p className="text-sm text-gray-600">
                    These Terms comply with Australian Consumer Law (ACL), the Contracts Review Act 1980 (NSW), GDPR requirements for European users, and other applicable international laws. Consumer guarantees under ACL cannot be excluded.
                  </p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="acceptance">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-blue-600" />
                Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Acooya Consulting. These Terms of Service ("Terms") are a legally binding agreement between you ("you", "your", or "User") and Acooya Consulting Pty Ltd ABN 83 618 415 768 ("Acooya", "we", "us", or "our"), governing your access to and use of our platform, services, and related applications.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing, browsing, or using our website at <strong>www.acooyaconsulting.com</strong> (the "Platform") or any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Platform.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Important</h4>
                    <p className="text-sm text-yellow-700">
                      If you are under 18 years of age, you must have your parent or guardian's permission to use our services. By using our Platform, you represent that you have obtained such permission.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                These Terms may be updated from time to time. Continued use of our services after any changes constitutes acceptance of the modified Terms. We encourage you to review these Terms regularly.
              </p>
            </div>

            {/* Definitions */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Definitions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">"Client"</h4>
                  <p className="text-sm text-gray-600">Any individual or organisation that engages Service Providers through the Platform</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">"Service Provider"</h4>
                  <p className="text-sm text-gray-600">Human consultants, AI agents, or both who offer services through the Platform</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">"Engagement"</h4>
                  <p className="text-sm text-gray-600">A contracted service relationship between a Client and Service Provider</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">"AI Agent"</h4>
                  <p className="text-sm text-gray-600">Automated digital workforce tools developed by AI Developers on our Platform</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">"Platform Fee"</h4>
                  <p className="text-sm text-gray-600">The commission charged by Acooya for using our services</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">"Secure Workspace"</h4>
                  <p className="text-sm text-gray-600">The encrypted environment where Engagements are conducted</p>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="services">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-green-600" />
                Our Services
              </h2>

              <AccordionItem title="Platform Services" defaultOpen={true}>
                <p className="mb-4">
                  Acooya Consulting operates a digital marketplace that facilitates connections between Clients seeking consulting services and Service Providers who offer such services. Our Platform enables:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Discovery and selection of human consultants and AI agents</li>
                  <li>Engagement management and secure workspace provision</li>
                  <li>Payment processing and transaction management</li>
                  <li>Engagement transcript generation and history retention</li>
                  <li>Communication facilitation between parties</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Service Categories">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Business Architecture</h4>
                    <p className="text-sm text-blue-700">Operating model design, organisational structure, process optimisation</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Delivery Enablement</h4>
                    <p className="text-sm text-green-700">Project management, implementation support, change management</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Strategic Insights</h4>
                    <p className="text-sm text-purple-700">Market analysis, reporting, decision support, research</p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="AI Agent Services">
                <p className="mb-4">
                  Our Platform supports AI-powered consulting tools developed by approved AI Developers. When you engage an AI Agent:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>AI Agents operate within defined parameters set by their developers</li>
                  <li>AI Developer terms and limitations apply to AI Agent services</li>
                  <li>Human oversight may be required for certain engagements</li>
                  <li>AI outputs are subject to review and validation</li>
                </ul>
                <p className="text-sm text-gray-500">
                  Note: AI Agent services are designed to augment, not replace, human expertise. Complex decisions should involve human consultants.
                </p>
              </AccordionItem>

              <AccordionItem title="Service Availability">
                <p className="mb-4">
                  We endeavour to provide uninterrupted access to our Platform, but we do not guarantee continuous availability. Service availability may be affected by:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Scheduled maintenance (with reasonable notice)</li>
                  <li>Emergency repairs or security incidents</li>
                  <li>Third-party service provider issues</li>
                  <li>Force majeure events</li>
                </ul>
              </AccordionItem>
            </div>

            {/* User Accounts */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="accounts">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-purple-600" />
                User Accounts
              </h2>

              <AccordionItem title="Account Registration" defaultOpen={true}>
                <p className="mb-4">
                  To access certain features of our Platform, you must create an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information to keep it accurate</li>
                  <li>Not impersonate any person or entity</li>
                  <li>Not use a username that infringes on others' rights</li>
                  <li>Be solely responsible for all activity under your account</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Account Types">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Client Accounts</h4>
                    <p className="text-sm text-blue-700">For individuals or organisations seeking consulting services. Clients can browse, engage Service Providers, manage payments, and track engagement history.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Consultant Accounts</h4>
                    <p className="text-sm text-green-700">For human consulting professionals. Consultants can create profiles, offer services, manage engagements, and receive payments.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">AI Developer Accounts</h4>
                    <p className="text-sm text-purple-700">For developers creating AI agents. Developers can build, deploy, and manage AI Agents on the Platform.</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Founder Accounts</h4>
                    <p className="text-sm text-orange-700">For founding team members with administrative access and enhanced platform features.</p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Account Security">
                <p className="mb-4">
                  You are responsible for maintaining the confidentiality of your account credentials. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Keep your password secure and confidential</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Log out after each session (especially on shared devices)</li>
                  <li>Enable multi-factor authentication where available</li>
                </ul>
                <p className="text-sm text-gray-500">
                  We are not liable for any loss or damage arising from unauthorized use of your credentials.
                </p>
              </AccordionItem>

              <AccordionItem title="Account Termination">
                <p className="mb-4">
                  We reserve the right to suspend or terminate accounts that:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Violate these Terms or applicable laws</li>
                  <li>Engage in fraudulent or deceptive conduct</li>
                  <li>Harassment or abuse of other users</li>
                  <li>Infringement of intellectual property rights</li>
                  <li>Non-payment of fees or charges</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  You may terminate your account at any time by contacting us. Termination does not affect obligations incurred prior to termination.
                </p>
              </AccordionItem>
            </div>

            {/* Service Provider Terms */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="consultants">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-teal-600" />
                Service Provider Terms
              </h2>

              <AccordionItem title="Eligibility Requirements" defaultOpen={true}>
                <p className="mb-4">To become a Service Provider on our Platform, you must:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Human Consultants</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Be at least 18 years old</li>
                      <li>• Have relevant qualifications or experience</li>
                      <li>• Pass identity verification</li>
                      <li>• Agree to Consultant Terms</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">AI Developers</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Be at least 18 years old</li>
                      <li>• Demonstrate technical capability</li>
                      <li>• Pass developer verification</li>
                      <li>• Agree to Developer Terms</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Service Obligations">
                <p className="mb-4">Service Providers agree to:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Provide services with due skill, care, and diligence</li>
                  <li>Respond to Client enquiries within agreed timeframes</li>
                  <li>Maintain accurate profile and service information</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not engage in false, misleading, or deceptive conduct</li>
                  <li>Respect Client confidentiality and data protection</li>
                  <li>Maintain professional indemnity insurance (recommended)</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Quality Standards">
                <p className="mb-4">
                  We maintain quality standards through:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Rating System</h4>
                    <p className="text-sm text-blue-700">Clients rate Service Providers after engagements. Low ratings may result in reduced visibility or account review.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Verification Process</h4>
                    <p className="text-sm text-blue-700">Identity, qualifications, and background checks (where applicable) help ensure trust on the Platform.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Dispute Resolution</h4>
                    <p className="text-sm text-blue-700">We provide mechanisms to resolve disputes between Clients and Service Providers.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Compliance Audits</h4>
                    <p className="text-sm text-blue-700">Periodic reviews ensure ongoing compliance with Platform standards and Terms.</p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Exclusivity and Competition">
                <p className="mb-4">
                  Service Providers are generally free to offer services on other platforms. However:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Exclusive arrangements may apply if separately agreed in writing</li>
                  <li>Non-solicitation obligations may exist during active Engagements</li>
                  <li>Intellectual property created on Platform may have usage restrictions</li>
                </ul>
              </AccordionItem>
            </div>

            {/* Payments */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="payments">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-green-600" />
                Payments and Billing
              </h2>

              <AccordionItem title="1. General Payment Terms" defaultOpen={true}>
                <p className="mb-4">
                  Acooya Consulting Pty Ltd ("Acooya", "we", "us") operates a three-sided platform connecting Clients, Human Consultants, and AI-Agent Developers (collectively "Users"). This section sets out the fees, billing practices, and payment terms applicable to each user group.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>All fees are denominated in Australian Dollars (AUD) and are exclusive of Goods and Services Tax (GST) unless stated otherwise.</li>
                  <li>GST of 10% applies to all fees charged to Australian-registered entities.</li>
                  <li>Tax invoices are issued automatically upon each billing event.</li>
                  <li>Acooya reserves the right to amend fees at any time with thirty (30) days' prior written notice to affected Users.</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="2. Client Subscription Fees">
                <p className="mb-4">
                  Clients access the Acooya platform through one of three subscription tiers. Pricing is published at <strong>acooyaconsulting.com/pricing</strong>.
                </p>

                <h4 className="font-semibold text-gray-900 mb-3">Subscription Tiers</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-3">Plan</th>
                        <th className="text-left p-3">Monthly</th>
                        <th className="text-left p-3">Annual Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Growth</td>
                        <td className="p-3">AUD $49/month</td>
                        <td className="p-3">AUD $500/year</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Professional</td>
                        <td className="p-3">AUD $149/month</td>
                        <td className="p-3">AUD $1,524/year</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Enterprise</td>
                        <td className="p-3">AUD $499/month</td>
                        <td className="p-3">AUD $5,088/year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Billing:</strong> Annual plans are billed in full at the commencement of each annual billing cycle. Monthly plans are billed on a rolling 30-day cycle from the date of subscription commencement. Annual plans save 15% compared to monthly billing.
                </p>

                <h4 className="font-semibold text-gray-900 mb-3 mt-6">AI Agent Credits</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Each plan includes a monthly allowance of AI agent credits. Credits are measured based on task complexity — ensuring you only pay for what your task actually requires.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-3">Plan</th>
                        <th className="text-left p-3">Monthly Credits</th>
                        <th className="text-left p-3">Overage Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Growth</td>
                        <td className="p-3">200 credits</td>
                        <td className="p-3">AUD $0.22 per credit</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Professional</td>
                        <td className="p-3">1,000 credits</td>
                        <td className="p-3">AUD $0.15 per credit</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Enterprise</td>
                        <td className="p-3">5,000 credits</td>
                        <td className="p-3">AUD $0.07 per credit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Task Tiers:</strong> Micro tasks (0.5 credits): Quick, single-step tasks such as summaries, simple Q&A, or formatting. Standard tasks (1 credit): Multi-step tasks such as research briefs, strategy memos, or KPI reports. Deep tasks (3 credits): Complex analyses such as full competitive landscapes, strategic reports, or orchestrated multi-agent workflows.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                  <li>Overage charges are calculated at the end of each billing cycle and charged to the Client's payment method within three (3) business days.</li>
                  <li>Clients will receive an automated notification when they reach 80% of their monthly allowance.</li>
                  <li>Your credit cost is always shown before a task runs — no surprises.</li>
                </ul>

                <h4 className="font-semibold text-gray-900 mb-3 mt-6">Free Trial</h4>
                <p className="text-sm text-gray-600">
                  Growth and Professional plans include a 14-day free trial. No payment details are required to commence a trial. Trials not cancelled before the end of the 14-day period will automatically convert to a paid monthly subscription. Clients will receive a reminder notification at day 12 of their trial.
                </p>
              </AccordionItem>

              <AccordionItem title="3. Human Consultant Fees">
                <p className="mb-4">
                  Where Clients engage Human Consultants through the platform for advisory services, the following terms apply:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>Indicative hourly rates</strong> range from AUD $250 to AUD $450 per hour, depending on consultant seniority, engagement complexity, and duration.</li>
                  <li><strong>Fixed-price engagement packages</strong> are available and are quoted individually through the platform's engagement workflow prior to commencement.</li>
                  <li>Acooya collects consultant fees on behalf of Consultants and retains a <strong>platform facilitation fee of 20%</strong> of gross consultant fees on all engagements booked through the platform.</li>
                  <li><strong>Net fees are remitted to Consultants</strong> within fourteen (14) business days of engagement completion via Stripe Connect to their nominated Australian bank account.</li>
                </ul>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Tax Responsibilities</h4>
                  <p className="text-sm text-yellow-700">
                    Consultants are solely responsible for their own income tax, GST, and superannuation obligations arising from remitted amounts. Acooya does not withhold tax on consultant remittances.
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem title="4. AI-Agent Developer Fees">
                <p className="mb-4">
                  Acooya operates an open marketplace for AI agents built by independent developers. To support a thriving developer ecosystem, Acooya applies a phased fee model designed to remove barriers for new developers while sustaining a fair commercial arrangement as the marketplace grows.
                </p>

                <h4 className="font-semibold text-gray-900 mb-3 mt-4">Developer Account and Listing</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Creating a developer account and listing AI agents on the Acooya Marketplace is <strong>free</strong>. There are no upfront fees, subscription fees, or listing fees required to participate as a developer on the platform. Acooya reserves the right to introduce listing fees in future with thirty (30) days' prior notice.
                </p>

                <h4 className="font-semibold text-gray-900 mb-3 mt-6">Founding Developer Programme</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Developers who join the Acooya Marketplace during the platform's founding period (the first fifty (50) verified developers) receive the following benefits, which are locked for a period of twenty-four (24) months from their verified listing date:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 mb-4">
                  <li>Zero marketplace commission on the first AUD $5,000 of cumulative gross transaction value generated through their listed agents.</li>
                  <li>"Founding Developer" recognition on their marketplace profile, permanently.</li>
                  <li>Priority placement in marketplace search results during the founding period.</li>
                  <li>Direct onboarding support from an Acooya consultant.</li>
                </ul>

                <h4 className="font-semibold text-gray-900 mb-3 mt-6">Marketplace Commission</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Upon completion of a paid transaction between a Client and a Developer's listed agent, Acooya retains a marketplace commission. The applicable commission rate is determined by the developer's programme tier at the time of transaction:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-3">Programme Tier</th>
                        <th className="text-left p-3">Commission Rate</th>
                        <th className="text-left p-3">Eligibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Founding Developer (first $5k)</td>
                        <td className="p-3">0%</td>
                        <td className="p-3">First 50 developers, on first AUD $5,000 earned</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Founding Developer (above $5k)</td>
                        <td className="p-3">15%</td>
                        <td className="p-3">First 50 developers, after first AUD $5,000 earned</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Standard Developer</td>
                        <td className="p-3">20%</td>
                        <td className="p-3">All developers joining after the founding period</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Developer Pro (optional)</td>
                        <td className="p-3">15%</td>
                        <td className="p-3">Developers subscribed to the Developer Pro plan</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Commission is deducted automatically from each transaction before the net amount is transferred to the Developer via Stripe Connect.
                </p>

                <h4 className="font-semibold text-gray-900 mb-3 mt-6">Developer Pro Plan (Optional)</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Developers may optionally subscribe to the Developer Pro plan at <strong>AUD $29/month</strong> (or AUD $290/year, saving approximately 17%). The Developer Pro plan includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 mb-4">
                  <li>Reduced marketplace commission of 15% (instead of 20%) on all transactions.</li>
                  <li>Advanced analytics dashboard showing invocation volume, revenue, client engagement metrics, and performance benchmarks.</li>
                  <li>Priority agent review queue (submissions reviewed within 5 business days versus standard 15 business days).</li>
                  <li>Featured placement in relevant marketplace category pages.</li>
                  <li>Early access to new platform features and API capabilities.</li>
                </ul>
                <p className="text-sm text-gray-500 italic">
                  The Developer Pro plan is not required to list agents or receive payments. It is an optional enhancement for developers seeking faster growth through the platform.
                </p>

                <h4 className="font-semibold text-gray-900 mb-3 mt-6">Revenue Remittance to Developers</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Developer earnings (gross transaction value less Acooya's commission) are remitted via Stripe Connect on a fourteen (14) day rolling basis.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 mb-4">
                  <li>Stripe's standard transfer fees (currently 0.25% + AUD $0.25 per payout) are deducted from each remittance.</li>
                  <li>Developers must complete Stripe Connect onboarding, including identity verification, before receiving any remittance.</li>
                  <li>Developers are solely responsible for all tax obligations on amounts received.</li>
                </ul>

                <h4 className="font-semibold text-gray-900 mb-3 mt-6">Developer Verification</h4>
                <p className="text-sm text-gray-600">
                  All developers must complete Acooya's developer verification process before their agents are listed on the marketplace. Verification is provided at no charge and covers identity, technical capability review, and agent compliance assessment. Acooya reserves the right to decline or revoke developer verification at its sole discretion without liability.
                </p>
              </AccordionItem>

              <AccordionItem title="5. Payment Processing">
                <p className="mb-4">
                  All payments are processed through <strong>Stripe</strong>. Acooya does not store, transmit, or have access to payment card details.
                </p>
                <h4 className="font-semibold text-gray-900 mb-3">Accepted Payment Methods</h4>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Visa</li>
                  <li>Mastercard</li>
                  <li>American Express</li>
                  <li>BECS direct debit for Australian bank accounts</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Enterprise Clients may request invoice-based billing on net-30 payment terms, subject to Acooya's credit assessment at its discretion.
                </p>
              </AccordionItem>

              <AccordionItem title="6. Late Payments">
                <p className="mb-4">
                  Subscription fees not received within seven (7) days of the due date will result in platform access being suspended. Access is restored upon receipt of all outstanding amounts.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Accounts suspended for more than sixty (60) days may be terminated and data handled in accordance with Acooya's Data Retention Policy.</li>
                  <li>Acooya reserves the right to charge interest on overdue amounts at 10% per annum, calculated daily from the due date.</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="7. Refunds and Cancellations">
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>Monthly subscriptions</strong> may be cancelled at any time via the Client portal. No refund is provided for the current billing period upon cancellation.</li>
                  <li><strong>Annual subscriptions cancelled within 14 days</strong> of the annual commencement date are eligible for a full refund less any invocations consumed.</li>
                  <li><strong>Annual subscriptions cancelled after 14 days</strong> are non-refundable, and access continues until the end of the paid period.</li>
                  <li><strong>Enterprise contracts</strong> are governed by the specific cancellation and refund terms set out in the applicable Enterprise Service Agreement, which supersedes this clause.</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="8. Disputed Charges">
                <p className="mb-4">
                  Billing disputes must be submitted in writing to <strong>contact@acooyaconsulting.com</strong> within thirty (30) days of the disputed charge appearing on the Client's statement.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Acooya will investigate and respond within ten (10) business days.</li>
                  <li>Acooya is not liable for charges resulting from unauthorised access to a User's account where the User has failed to maintain appropriate account security.</li>
                </ul>
              </AccordionItem>
            </div>

            {/* Intellectual Property */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="intellectual-property">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>

              <AccordionItem title="Platform Intellectual Property" defaultOpen={true}>
                <p className="mb-4">
                  All content, materials, and intellectual property on our Platform, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Logo, branding, and visual identity</li>
                  <li>Website design, text, and code</li>
                  <li>Software, algorithms, and functionality</li>
                  <li>Documentation and training materials</li>
                  <li>Trademarks, service marks, and trade names</li>
                </ul>
                <p className="text-sm text-gray-500">
                  are owned by or licensed to Acooya Consulting and protected by Australian and international intellectual property laws.
                </p>
              </AccordionItem>

              <AccordionItem title="User-Generated Content">
                <p className="mb-4">
                  Users retain ownership of content they create and contribute to the Platform. However, by posting content, you grant us:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>A non-exclusive, royalty-free license to use, display, and distribute</li>
                  <li>Right to modify content as necessary for Platform operation</li>
                  <li>Right to sublicense to other users as part of service delivery</li>
                  <li>Perpetual, worldwide license to use content for platform promotion</li>
                </ul>
                <p className="text-sm text-gray-500">
                  You warrant that you have the right to share such content and that it does not infringe on others' rights.
                </p>
              </AccordionItem>

              <AccordionItem title="Client Deliverables">
                <p className="mb-4">
                  Ownership of deliverables created during engagements depends on the engagement terms:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Work Made for Hire</h4>
                    <p className="text-sm text-blue-700">Where separately agreed, deliverables become Client property upon payment.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Licensed Deliverables</h4>
                    <p className="text-sm text-gray-600">Service Providers may retain rights but grant Client license to use.</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Specific ownership terms should be documented in each engagement agreement.
                </p>
              </AccordionItem>

              <AccordionItem title="AI Agent Intellectual Property">
                <p className="mb-4">
                  For AI Agents developed on our Platform:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Developers retain ownership of their AI Agent technology</li>
                  <li>Developers grant us license to operate and display AI Agents on Platform</li>
                  <li>Clients receive license to use AI Agent outputs for intended purposes</li>
                  <li>Output ownership is typically assigned to Client unless otherwise agreed</li>
                </ul>
              </AccordionItem>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="liability">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                Limitation of Liability
              </h2>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-red-800 mb-2">Consumer Guarantees</h4>
                <p className="text-sm text-red-700">
                  Under Australian Consumer Law, certain guarantees cannot be excluded, restricted, or modified. These Terms do not attempt to exclude such guarantees. Where liability cannot be excluded, our liability is limited as provided below.
                </p>
              </div>

              <AccordionItem title="Platform Liability" defaultOpen={true}>
                <p className="mb-4">
                  To the maximum extent permitted by law, Acooya Consulting's liability is limited:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Direct Damages</h4>
                    <p className="text-sm text-gray-600">Our total liability for direct damages is limited to the fees paid by you in the 12 months preceding the claim.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Indirect Damages</h4>
                    <p className="text-sm text-gray-600">We are not liable for indirect, consequential, or punitive damages including lost profits or business opportunities.</p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Service Provider Liability">
                <p className="mb-4">
                  We are not responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Acts or omissions of Service Providers (they are independent contractors)</li>
                  <li>Quality of services delivered by Service Providers</li>
                  <li>Disputes between Clients and Service Providers (beyond mediation)</li>
                  <li>Service Provider compliance with their own professional obligations</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  Service Providers are solely responsible for their services and should have appropriate insurance coverage.
                </p>
              </AccordionItem>

              <AccordionItem title="Indemnification">
                <p className="mb-4">
                  You agree to indemnify and hold harmless Acooya Consulting and its officers, directors, and employees from:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Claims arising from your use of the Platform</li>
                  <li>Breach of these Terms by you</li>
                  <li>Violation of any law or third-party rights</li>
                  <li>Engagement with Service Providers (including AI Agents)</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Force Majeure">
                <p className="mb-4">
                  Neither party is liable for failure to perform obligations due to events beyond reasonable control, including:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Natural disasters, acts of God</li>
                  <li>War, terrorism, civil unrest</li>
                  <li>Government actions, regulations</li>
                  <li>Circuit failures, internet disruptions</li>
                  <li>Pandemics, public health emergencies</li>
                </ul>
              </AccordionItem>
            </div>

            {/* Disputes and Governing Law */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="disputes">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Scale className="w-6 h-6 text-indigo-600" />
                Disputes and Governing Law
              </h2>

              <AccordionItem title="Governing Law" defaultOpen={true}>
                <p className="mb-4">
                  These Terms are governed by and construed in accordance with the laws of:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Primary Jurisdiction</h4>
                    <p className="text-sm text-blue-700">New South Wales, Australia (where Acooya is registered)</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Consumer Protections</h4>
                    <p className="text-sm text-purple-700">Applicable consumer protection laws of your location</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  For EU users, this does not affect your rights under GDPR or consumer protection directives.
                </p>
              </AccordionItem>

              <AccordionItem title="Dispute Resolution Process">
                <p className="mb-4">
                  Before initiating legal proceedings, parties agree to follow this escalation process:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Direct Negotiation</h4>
                      <p className="text-sm text-gray-600">Parties attempt to resolve dispute through good-faith negotiation (14 days)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Platform Mediation</h4>
                      <p className="text-sm text-gray-600">Acooya provides mediation services to facilitate resolution (14 days)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Arbitration</h4>
                      <p className="text-sm text-gray-600">Dispute submitted to binding arbitration (Australian Disputes Centre or similar)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Court Proceedings</h4>
                      <p className="text-sm text-gray-600">If arbitration fails, either party may seek court intervention</p>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Class Action Waiver">
                <p className="mb-4">
                  By agreeing to these Terms, you and Acooya mutually agree:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>To resolve disputes only on an individual basis</li>
                  <li>Not to participate in class actions or representative proceedings</li>
                  <li>That each party may only bring claims in their individual capacity</li>
                </ul>
                <p className="text-sm text-gray-500">
                  This class action waiver may not apply in certain jurisdictions. If a court finds it unenforceable, the remaining provisions remain in effect.
                </p>
              </AccordionItem>

              <AccordionItem title="Time Limitations">
                <p className="mb-4">
                  Any claim arising from these Terms must be brought within:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Australia:</strong> 6 years from date of breach (or 1 year for consumer claims)</li>
                  <li><strong>European Union:</strong> As per local limitation periods (typically 3 years)</li>
                  <li><strong>Other jurisdictions:</strong> As applicable under local law</li>
                </ul>
              </AccordionItem>
            </div>

            {/* Additional Terms */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Terms</h2>

              <AccordionItem title="Confidentiality" defaultOpen={true}>
                <p className="mb-4">
                  Users agree to maintain confidentiality of:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Proprietary information shared during engagements</li>
                  <li>Trade secrets, business strategies, and financial information</li>
                  <li>Client data and personal information</li>
                  <li>Platform algorithms and technical specifications</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  Confidentiality obligations survive termination of your account and these Terms.
                </p>
              </AccordionItem>

              <AccordionItem title="Prohibited Activities">
                <p className="mb-4">
                  Users must not:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Content Violations</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Spam, malware, or malicious code</li>
                      <li>• Defamatory, abusive, or harassing content</li>
                      <li>• Copyright or trademark infringement</li>
                      <li>• False or misleading information</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Platform Misuse</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Unauthorized access attempts</li>
                      <li>• Reverse engineering the Platform</li>
                      <li>• Data scraping or automated queries</li>
                      <li>• Circumventing security measures</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Data Protection Compliance">
                <p className="mb-4">
                  We comply with applicable data protection laws including:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Australian Privacy Act 1988 and Australian Privacy Principles</li>
                  <li>General Data Protection Regulation (GDPR) for EU users</li>
                  <li>California Consumer Privacy Act (CCPA) for California residents</li>
                  <li>Other applicable international data protection laws</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  Our Privacy Policy, available separately, provides detailed information about how we collect, use, and protect your personal information.
                </p>
              </AccordionItem>

              <AccordionItem title="Export Controls">
                <p className="mb-4">
                  Our Platform and services may be subject to export control laws. You agree:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Not to use our services in violation of any export restrictions</li>
                  <li>To comply with sanctions programs administered by your government</li>
                  <li>Not to provide access to prohibited persons or entities</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Notices">
                <p className="mb-4">
                  All notices under these Terms should be sent to:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">Acooya Consulting Pty Ltd</p>
                  <p>Unit 18, 224 Coward Street</p>
                  <p>Mascot NSW 2020</p>
                  <p>Australia</p>
                  <p className="mt-2">Email: contact@acooyaconsulting.com</p>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Notices are deemed received within 24 hours if sent by email, or 5 business days if sent by post.
                </p>
              </AccordionItem>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white rounded-2xl p-8" id="contact">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6" />
                Contact Us
              </h2>

              <p className="text-indigo-200 mb-6">
                If you have any questions about these Terms of Service, please contact our legal team.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">General Legal Enquiries</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-indigo-300" />
                      <span>contact@acooyaconsulting.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-indigo-300" />
                      <span>+61 428 112 376</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-indigo-300 mt-1" />
                      <span>Unit 18, 224 Coward Street<br />Mascot NSW 2020<br />Australia</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Business Hours</h3>
                  <p className="text-indigo-200 mb-2">Monday - Friday: 9:00 AM - 6:00 PM AEST</p>
                  <p className="text-indigo-200">Saturday - Sunday: Closed</p>
                  <p className="text-indigo-300 text-sm mt-4">
                    Response times may vary. We endeavour to respond to all enquiries within 2 business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Acknowledgement */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-900 mb-3">Acknowledgement</h3>
              <p className="text-sm text-blue-700 mb-4">
                By using Acooya Consulting's Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
              <p className="text-xs text-blue-600">
                Last Updated: {lastUpdated} | Effective Date: {effectiveDate}
              </p>
            </div>

            {/* Policy Updates */}
            <div className="mt-8 text-center text-sm text-gray-500">
              <p className="mb-2">
                We may update these Terms from time to time to reflect changes in our services, applicable laws, or business practices.
              </p>
              <p>
                Material changes will be notified via email or prominent notice on our Platform. Continued use constitutes acceptance of updated Terms.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;