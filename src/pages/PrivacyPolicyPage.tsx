import React from 'react';
import { Shield, Eye, Lock, Users, FileText, Globe, Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
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

const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = "13 April 2026";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100 mb-2">Last Updated: {lastUpdated}</p>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Acooya Consulting is committed to protecting your privacy and ensuring compliance with Australian Privacy Principles (APPs), the General Data Protection Regulation (GDPR), and other international privacy standards.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <a href="#overview" className="text-blue-600 hover:text-blue-800 font-medium">Overview</a>
            <a href="#information-collection" className="text-gray-600 hover:text-blue-800">Information We Collect</a>
            <a href="#use-information" className="text-gray-600 hover:text-blue-800">How We Use Information</a>
            <a href="#data-protection" className="text-gray-600 hover:text-blue-800">Data Protection</a>
            <a href="#your-rights" className="text-gray-600 hover:text-blue-800">Your Rights</a>
            <a href="#international" className="text-gray-600 hover:text-blue-800">International Transfers</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-800">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">

            {/* Compliance Badges */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                Australian Privacy Act 1988 Compliant
              </div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                <Globe className="w-4 h-4" />
                GDPR Compliant
              </div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Lock className="w-4 h-4" />
                CCPA Compliant
              </div>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="overview">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Acooya Consulting Pty Ltd ABN 83 618 415 768 ("Acooya", "we", "us", or "our") is committed to protecting the privacy of individuals who visit our website, use our platform, or engage with our consulting services. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in accordance with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>The <strong>Privacy Act 1988</strong> (Cth) and the <strong>Australian Privacy Principles (APPs)</strong></li>
                <li>The <strong>General Data Protection Regulation (GDPR)</strong> for European users</li>
                <li>The <strong>California Consumer Privacy Act (CCPA)</strong> for California residents</li>
                <li>Other applicable international privacy laws and regulations</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                By using our services, you consent to the collection and use of information in accordance with this policy. If you do not agree with our policies, please do not use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="information-collection">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-blue-600" />
                </div>
                Information We Collect
              </h2>

              <AccordionItem title="Personal Information" defaultOpen={true}>
                <p className="mb-4">We collect the following types of personal information:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Identity Information</h4>
                    <ul className="text-sm space-y-1">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Physical address</li>
                      <li>Date of birth</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Account Information</h4>
                    <ul className="text-sm space-y-1">
                      <li>Username and password</li>
                      <li>Profile information</li>
                      <li>Company/organisation details</li>
                      <li>Job title and role</li>
                      <li>Professional certifications</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Financial Information</h4>
                    <ul className="text-sm space-y-1">
                      <li>Payment card details (processed securely)</li>
                      <li>Billing address</li>
                      <li>Transaction history</li>
                      <li>Tax identification numbers</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Usage Information</h4>
                    <ul className="text-sm space-y-1">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Device information</li>
                      <li>Pages visited</li>
                      <li>Engagement history</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Sensitive Information">
                <p className="mb-4">
                  Under the Australian Privacy Principles, sensitive information requires higher protection. We may collect sensitive information only with your explicit consent and when necessary for our services, including:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Professional qualifications and certifications</li>
                  <li>Industry-specific qualifications</li>
                  <li>Background check information (where required for consulting engagements)</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  Note: We do not collect sensitive information about political opinions, religious beliefs, trade union membership, or sexual orientation unless voluntarily provided and necessary for service delivery.
                </p>
              </AccordionItem>

              <AccordionItem title="Information from Third Parties">
                <p className="mb-4">We may receive information about you from third parties, including:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Business partners and service providers</li>
                  <li>Publicly available sources (LinkedIn, company websites)</li>
                  <li>Professional networks and associations</li>
                  <li>Identity verification services</li>
                </ul>
              </AccordionItem>
            </div>

            {/* How We Use Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="use-information">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-green-600" />
                </div>
                How We Use Your Information
              </h2>

              <AccordionItem title="Primary Purposes" defaultOpen={true}>
                <p className="mb-4">We use your personal information for the following primary purposes:</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Service Delivery</h4>
                      <p className="text-sm text-gray-600">Facilitating consulting engagements between clients and service providers (human consultants and AI agents)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Account Management</h4>
                      <p className="text-sm text-gray-600">Creating and managing your account, processing registrations, and providing customer support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Payment Processing</h4>
                      <p className="text-sm text-gray-600">Processing payments, issuing invoices, and managing financial transactions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Communication</h4>
                      <p className="text-sm text-gray-600">Sending service-related notifications, updates, and marketing communications (with consent)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Platform Improvement</h4>
                      <p className="text-sm text-gray-600">Analysing usage patterns to improve our services, website, and user experience</p>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Legal Basis for Processing (GDPR)">
                <p className="mb-4">For users in the European Economic Area (EEA), we process your personal data under the following legal bases:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Contract Performance</h4>
                    <p className="text-sm text-blue-700">Processing necessary to fulfil our contract with you</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Legitimate Interests</h4>
                    <p className="text-sm text-blue-700">Our legitimate business interests that don't override your rights</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Consent</h4>
                    <p className="text-sm text-blue-700">Where you have given clear consent for specific processing</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Legal Obligation</h4>
                    <p className="text-sm text-blue-700">Processing required to comply with legal obligations</p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Marketing Communications">
                <p className="mb-4">
                  With your consent, we may send you marketing communications about our services, promotions, and industry insights. You can opt out at any time by:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Clicking the "unsubscribe" link in any marketing email</li>
                  <li>Updating your communication preferences in your account settings</li>
                  <li>Contacting our privacy team at privacy@acooya.com</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  Note: We will never sell your personal information to third parties for marketing purposes.
                </p>
              </AccordionItem>
            </div>

            {/* Data Protection & Security */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="data-protection">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-purple-600" />
                </div>
                Data Protection & Security
              </h2>

              <AccordionItem title="Security Measures" defaultOpen={true}>
                <p className="mb-4">We implement comprehensive security measures to protect your personal information:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <Lock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Encryption</h4>
                    <p className="text-sm text-gray-600">256-bit AES encryption for data at rest and TLS 1.3 for data in transit</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Access Control</h4>
                    <p className="text-sm text-gray-600">Role-based access control (RBAC) with multi-factor authentication</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Monitoring</h4>
                    <p className="text-sm text-gray-600">24/7 security monitoring and intrusion detection systems</p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="SOC 2 Type II Compliance">
                <p className="mb-4">
                  Our platform is built on infrastructure that meets SOC 2 Type II compliance requirements, ensuring:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Security:</strong> Protection against unauthorized access</li>
                  <li><strong>Availability:</strong> System operational as committed</li>
                  <li><strong>Confidentiality:</strong> Protection of confidential information</li>
                  <li><strong>Processing Integrity:</strong> Accurate and authorized processing</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Data Retention">
                <p className="mb-4">
                  We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 rounded-tl-lg">Data Type</th>
                        <th className="text-left p-3 rounded-tr-lg">Retention Period</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">Account Information</td>
                        <td className="p-3">Duration of account + 7 years</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Transaction Records</td>
                        <td className="p-3">7 years (legal requirement)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Engagement Transcripts</td>
                        <td className="p-3">Duration of engagement + 5 years</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Communication Records</td>
                        <td className="p-3">3 years after last interaction</td>
                      </tr>
                      <tr>
                        <td className="p-3">Marketing Preferences</td>
                        <td className="p-3">Until consent is withdrawn</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AccordionItem>

              <AccordionItem title="Data Breach Response">
                <p className="mb-4">
                  In the event of a data breach that is likely to result in serious harm, we will notify:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>Australian users:</strong> The Office of the Australian Information Commissioner (OAIC) within 72 hours</li>
                  <li><strong>EU users:</strong> The relevant supervisory authority as required by GDPR</li>
                  <li><strong>California residents:</strong> As required by the California Privacy Rights Act</li>
                  <li><strong>Affected individuals:</strong> Directly, as soon as practicable</li>
                </ul>
              </AccordionItem>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="your-rights">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                Your Rights
              </h2>

              <AccordionItem title="Australian Privacy Principles Rights" defaultOpen={true}>
                <p className="mb-4">Under the Australian Privacy Act 1988, you have the right to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Access</h4>
                    <p className="text-sm text-blue-700">Request access to your personal information</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Correction</h4>
                    <p className="text-sm text-blue-700">Request correction of inaccurate information</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Anonymity</h4>
                    <p className="text-sm text-blue-700">Request to use a pseudonym (where practicable)</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Complaint</h4>
                    <p className="text-sm text-blue-700">Make a complaint about privacy breaches</p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="GDPR Rights (EEA Users)">
                <p className="mb-4">If you are located in the European Economic Area, you have additional rights under GDPR:</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Right to be Informed</h4>
                      <p className="text-sm text-gray-600">Know how your data is processed (this policy)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Right of Access</h4>
                      <p className="text-sm text-gray-600">Receive a copy of your personal data</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Right to Rectification</h4>
                      <p className="text-sm text-gray-600">Have inaccurate data corrected</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Right to Erasure</h4>
                      <p className="text-sm text-gray-600">Request deletion of your data ("right to be forgotten")</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">5</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Right to Restrict Processing</h4>
                      <p className="text-sm text-gray-600">Limit how we use your data</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">6</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Right to Data Portability</h4>
                      <p className="text-sm text-gray-600">Receive your data in a portable format</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">7</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Right to Object</h4>
                      <p className="text-sm text-gray-600">Object to processing based on legitimate interests</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">8</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Rights Related to Automated Decision-Making</h4>
                      <p className="text-sm text-gray-600">Not be subject to solely automated decisions</p>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="CCPA Rights (California Residents)">
                <p className="mb-4">
                  If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>Right to Know:</strong> Request disclosure of personal information collected, used, disclosed, or sold</li>
                  <li><strong>Right to Delete:</strong> Request deletion of personal information</li>
                  <li><strong>Right to Opt-Out:</strong> Opt out of the sale of personal information</li>
                  <li><strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising your rights</li>
                  <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information</li>
                  <li><strong>Right to Limit Use:</strong> Limit use of sensitive personal information</li>
                </ul>
                <p className="text-sm text-gray-500">
                  Note: We do not sell personal information. We may share data with service providers as defined under CCPA, but this is not considered a "sale" under the Act.
                </p>
              </AccordionItem>

              <AccordionItem title="How to Exercise Your Rights">
                <p className="mb-4">To exercise any of your privacy rights, you can:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Email
                    </h4>
                    <p className="text-sm">contact@acooyaconsulting.com</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Phone
                    </h4>
                    <p className="text-sm">+61 428 112 376</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  We will respond to all requests within 30 days (Australian Privacy Act) or as required by applicable law.
                </p>
              </AccordionItem>
            </div>

            {/* International Data Transfers */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="international">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-teal-600" />
                </div>
                International Data Transfers
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Acooya Consulting operates globally and may transfer your personal information to countries outside your home country. When we transfer data internationally, we ensure appropriate safeguards are in place:
              </p>

              <AccordionItem title="Transfer Mechanisms" defaultOpen={true}>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Standard Contractual Clauses (SCCs)</h4>
                    <p className="text-sm text-blue-700">For transfers from EEA to non-adequate countries, we use EU Commission-approved Standard Contractual Clauses</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Adequacy Decisions</h4>
                    <p className="text-sm text-blue-700">Transfers to countries with adequate data protection (EU, UK, Canada, Japan, etc.) as recognized by relevant authorities</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Binding Corporate Rules</h4>
                    <p className="text-sm text-blue-700">For intra-group transfers, we apply approved Binding Corporate Rules</p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Data Storage Locations">
                <p className="mb-4">Your data may be stored and processed in:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Australia:</strong> Primary data centre (Sydney)</li>
                  <li><strong>United States:</strong> Cloud infrastructure for global performance</li>
                  <li><strong>European Union:</strong> Frankfurt and Dublin for EU users</li>
                  <li><strong>Asia-Pacific:</strong> Singapore for regional users</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  Specific storage locations depend on your geographic location and service requirements.
                </p>
              </AccordionItem>
            </div>

            {/* Cookies & Tracking */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-amber-600" />
                </div>
                Cookies & Tracking Technologies
              </h2>

              <AccordionItem title="Types of Cookies We Use" defaultOpen={true}>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                    <p className="text-sm text-gray-600 mb-2">Required for the website to function. Cannot be disabled.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Session management</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Security</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Load balancing</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Performance Cookies</h4>
                    <p className="text-sm text-gray-600 mb-2">Help us understand how visitors interact with our website.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Analytics</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Error tracking</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Functional Cookies</h4>
                    <p className="text-sm text-gray-600 mb-2">Remember your preferences and settings.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Language preferences</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Theme settings</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600 mb-2">Used to deliver relevant advertisements (with consent).</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Targeted advertising</span>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Social media integration</span>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Managing Cookies">
                <p className="mb-4">You can manage your cookie preferences through:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Our Cookie Consent Banner when you first visit</li>
                  <li>Your browser settings (all cookies)</li>
                  <li>Your account settings (marketing cookies)</li>
                  <li>Industry opt-out tools (e.g., aboutads.info, youronlinechoices.com)</li>
                </ul>
              </AccordionItem>
            </div>

            {/* Third-Party Sharing */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing & Disclosure</h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                We do not sell your personal information. We may share your information with:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
                  <p className="text-sm text-gray-600">Cloud hosting, payment processing, analytics, customer support</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Business Partners</h4>
                  <p className="text-sm text-gray-600">Consultants and AI agents involved in your engagements</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
                  <p className="text-sm text-gray-600">When required by law, court order, or government request</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-2xl p-8" id="contact">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6" />
                Contact Our Privacy Team
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">General Privacy Enquiries</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-300" />
                      <span>contact@acooyaconsulting.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-300" />
                      <span>+61 428 112 376</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-300 mt-1" />
                      <span>Unit 18, 224 Coward Street<br />Mascot NSW 2020<br />Australia</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Data Protection Officer</h3>
                  <p className="text-blue-200 mb-4">
                    Our Data Protection Officer can assist with complex privacy matters, especially those involving international data transfers or GDPR compliance.
                  </p>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-300" />
                    <span>contact@acooyaconsulting.com</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-blue-800 mt-8 pt-8">
                <h3 className="font-semibold mb-4">Regulatory Authorities</h3>
                <p className="text-blue-200 mb-4">You also have the right to contact relevant supervisory authorities:</p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong className="block mb-1">Australia</strong>
                    <span className="text-blue-200">Office of the Australian Information Commissioner (OAIC)</span>
                  </div>
                  <div>
                    <strong className="block mb-1">European Union</strong>
                    <span className="text-blue-200">Your local Data Protection Authority</span>
                  </div>
                  <div>
                    <strong className="block mb-1">California</strong>
                    <span className="text-blue-200">California Privacy Protection Agency</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="mt-8 text-center text-sm text-gray-500">
              <p className="mb-2">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws.
              </p>
              <p>
                We will notify you of material changes by posting the updated policy on our website and updating the "Last Updated" date.
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

export default PrivacyPolicyPage;
