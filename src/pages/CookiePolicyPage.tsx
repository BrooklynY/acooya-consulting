import React from 'react';
import { Cookie, Shield, Settings, Eye, Globe, Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
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

const CookiePolicyPage: React.FC = () => {
  const lastUpdated = "13 April 2026";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <Cookie className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl text-blue-100 mb-2">Last Updated: {lastUpdated}</p>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Acooya Consulting uses cookies and similar technologies to enhance your browsing experience, personalise content, and analyse site traffic. This policy explains what cookies are, how we use them, and your choices.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <a href="#overview" className="text-blue-600 hover:text-blue-800 font-medium">Overview</a>
            <a href="#what-are-cookies" className="text-gray-600 hover:text-blue-800">What Are Cookies</a>
            <a href="#how-we-use" className="text-gray-600 hover:text-blue-800">How We Use</a>
            <a href="#types" className="text-gray-600 hover:text-blue-800">Cookie Types</a>
            <a href="#third-party" className="text-gray-600 hover:text-blue-800">Third-Party</a>
            <a href="#your-choices" className="text-gray-600 hover:text-blue-800">Your Choices</a>
            <a href="#international" className="text-gray-600 hover:text-blue-800">International</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-800">Contact</a>
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
                Privacy Act Compliant
              </div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                <Globe className="w-4 h-4" />
                GDPR Compliant
              </div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Cookie className="w-4 h-4" />
                ePrivacy Directive
              </div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                <Settings className="w-4 h-4" />
                CCPA Compliant
              </div>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="overview">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Acooya Consulting Pty Ltd ABN 83 618 415 768 ("Acooya", "we", "us", or "our") uses cookies and similar tracking technologies when you visit our website at <strong>www.acooya.com</strong> (the "Platform") or use our services. This Cookie Policy explains what cookies are, the types of cookies we use, why we use them, and your rights to control them.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                This policy complies with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Australian Privacy Act 1988</strong> and <strong>Australian Privacy Principles (APPs)</strong></li>
                <li><strong>General Data Protection Regulation (GDPR)</strong> - European Union</li>
                <li><strong>ePrivacy Directive (Cookie Directive)</strong> - European Union</li>
                <li><strong>California Consumer Privacy Act (CCPA)</strong> - California, USA</li>
                <li><strong>Privacy and Electronic Communications Regulations (PECR)</strong> - United Kingdom</li>
              </ul>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">What We Collect</h4>
                    <p className="text-sm text-blue-700">
                      When you visit our Platform, we may collect information about your visit through cookies and similar technologies. This information helps us understand how you use our Platform and allows us to improve your experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Are Cookies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="what-are-cookies">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-amber-600" />
                </div>
                What Are Cookies?
              </h2>

              <AccordionItem title="Cookie Basics" defaultOpen={true}>
                <p className="mb-4">
                  Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">How Cookies Work</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>You visit a website</li>
                    <li>The website sends a cookie to your browser</li>
                    <li>Your browser stores the cookie on your device</li>
                    <li>When you return, the website reads the cookie to "remember" you</li>
                  </ol>
                </div>
              </AccordionItem>

              <AccordionItem title="Similar Technologies">
                <p className="mb-4">
                  Besides cookies, we may use other similar tracking technologies:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Local Storage</h4>
                    <p className="text-sm text-gray-600">Data stored in your browser's local storage, which persists even after you close your browser</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Session Storage</h4>
                    <p className="text-sm text-gray-600">Data stored temporarily during your browsing session, deleted when you close your browser</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Web Beacons</h4>
                    <p className="text-sm text-gray-600">Small images embedded in web pages that help us understand how you interact with our content</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Pixel Tags</h4>
                    <p className="text-sm text-gray-600">Small code snippets that track user behaviour and measure the success of marketing campaigns</p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="First-Party vs Third-Party">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">First-Party Cookies</h4>
                    <p className="text-sm text-blue-700 mb-2">Set by Acooya Consulting directly</p>
                    <ul className="text-xs text-blue-600 space-y-1">
                      <li>• Essential for site functionality</li>
                      <li>• Remember your preferences</li>
                      <li>• Support core features</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Third-Party Cookies</h4>
                    <p className="text-sm text-purple-700 mb-2">Set by our partners and service providers</p>
                    <ul className="text-xs text-purple-600 space-y-1">
                      <li>• Analytics and tracking</li>
                      <li>• Advertising and marketing</li>
                      <li>• Social media integration</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
            </div>

            {/* How We Use Cookies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="how-we-use">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-green-600" />
                </div>
                How We Use Cookies
              </h2>

              <AccordionItem title="Why We Use Cookies" defaultOpen={true}>
                <p className="mb-4">
                  We use cookies for several important purposes:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Authentication</h4>
                      <p className="text-sm text-gray-600">Keep you logged in securely and remember your account details</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Security</h4>
                      <p className="text-sm text-gray-600">Protect your account and detect unauthorized access attempts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Functionality</h4>
                      <p className="text-sm text-gray-600">Remember your preferences, settings, and display preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Analytics</h4>
                      <p className="text-sm text-gray-600">Understand how visitors use our Platform to improve it</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Personalisation</h4>
                      <p className="text-sm text-gray-600">Deliver relevant content and recommendations based on your interests</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Marketing</h4>
                      <p className="text-sm text-gray-600">Show relevant advertisements and measure campaign effectiveness</p>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Data We Collect">
                <p className="mb-4">
                  Through cookies and similar technologies, we may collect:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Technical Information</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• IP address</li>
                      <li>• Browser type and version</li>
                      <li>• Operating system</li>
                      <li>• Device type</li>
                      <li>• Time zone</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Usage Information</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Pages visited</li>
                      <li>• Time spent on pages</li>
                      <li>• Links clicked</li>
                      <li>• Search queries</li>
                      <li>• Engagement history</li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>
            </div>

            {/* Types of Cookies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="types">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                Types of Cookies We Use
              </h2>

              <AccordionItem title="Essential Cookies" defaultOpen={true}>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-blue-700">
                    <strong>Required:</strong> These cookies are essential for the Platform to function properly. They enable core features like security, account authentication, and session management. You cannot opt out of essential cookies as the Platform would not work without them.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 rounded-tl-lg">Cookie Name</th>
                        <th className="text-left p-3">Purpose</th>
                        <th className="text-left p-3 rounded-tr-lg">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-mono text-xs">session_id</td>
                        <td className="p-3">Maintains your login session</td>
                        <td className="p-3">Session</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-mono text-xs">csrf_token</td>
                        <td className="p-3">Security protection against CSRF attacks</td>
                        <td className="p-3">Session</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-mono text-xs">auth_token</td>
                        <td className="p-3">Authenticates you across pages</td>
                        <td className="p-3">30 days</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-mono text-xs">preferences</td>
                        <td className="p-3">Stores your display and language preferences</td>
                        <td className="p-3">1 year</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-xs">security_flags</td>
                        <td className="p-3">Detects authentication abuse</td>
                        <td className="p-3">Session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AccordionItem>

              <AccordionItem title="Performance Cookies">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-green-700">
                    <strong>Analytics:</strong> These cookies help us understand how visitors interact with our Platform by collecting and reporting information anonymously. This helps us improve the user experience.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 rounded-tl-lg">Cookie Name</th>
                        <th className="text-left p-3">Purpose</th>
                        <th className="text-left p-3 rounded-tr-lg">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-mono text-xs">_ga</td>
                        <td className="p-3">Google Analytics - distinguishes users</td>
                        <td className="p-3">2 years</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-mono text-xs">_gid</td>
                        <td className="p-3">Google Analytics - distinguishes users</td>
                        <td className="p-3">24 hours</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-mono text-xs">_gat</td>
                        <td className="p-3">Google Analytics - throttles request rate</td>
                        <td className="p-3">1 minute</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-xs">_hjid</td>
                        <td className="p-3">Hotjar - sets user ID for heatmaps</td>
                        <td className="p-3">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AccordionItem>

              <AccordionItem title="Functionality Cookies">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-purple-700">
                    <strong>Optional:</strong> These cookies enable enhanced functionality and personalisation. They remember your choices and provide improved features.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 rounded-tl-lg">Cookie Name</th>
                        <th className="text-left p-3">Purpose</th>
                        <th className="text-left p-3 rounded-tr-lg">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-mono text-xs">language</td>
                        <td className="p-3">Remembers your language preference</td>
                        <td className="p-3">1 year</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-mono text-xs">theme</td>
                        <td className="p-3">Remembers your light/dark theme preference</td>
                        <td className="p-3">1 year</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-mono text-xs">recent_searches</td>
                        <td className="p-3">Stores recent search queries for convenience</td>
                        <td className="p-3">30 days</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-xs">bookmarks</td>
                        <td className="p-3">Stores your saved items and bookmarks</td>
                        <td className="p-3">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AccordionItem>

              <AccordionItem title="Marketing Cookies">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-orange-700">
                    <strong>Advertising:</strong> These cookies track your browsing habits to deliver targeted advertising. They are used by advertising partners to build a profile of your interests and show relevant ads on other websites.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 rounded-tl-lg">Cookie Name</th>
                        <th className="text-left p-3">Purpose</th>
                        <th className="text-left p-3 rounded-tr-lg">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-mono text-xs">_fbp</td>
                        <td className="p-3">Facebook Pixel - tracks ad conversions</td>
                        <td className="p-3">3 months</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-mono text-xs">_gcl_au</td>
                        <td className="p-3">Google Ads - tracks conversions</td>
                        <td className="p-3">3 months</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-mono text-xs">IDE</td>
                        <td className="p-3">DoubleClick - delivers targeted ads</td>
                        <td className="p-3">2 years</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-xs">li_mc</td>
                        <td className="p-3">LinkedIn - tracks ad engagement</td>
                        <td className="p-3">6 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AccordionItem>
            </div>

            {/* Third-Party Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="third-party">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-teal-600" />
                </div>
                Third-Party Services
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                We use third-party services that may set their own cookies on your device. These third parties have their own privacy and cookie policies.
              </p>

              <AccordionItem title="Analytics Providers" defaultOpen={true}>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      We use Google Analytics to understand how visitors use our Platform. Google Analytics collects information about page visits, time spent, and navigation paths.
                    </p>
                    <p className="text-xs text-gray-500">
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy Policy</a> | <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics Opt-out</a>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Hotjar</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      We use Hotjar to understand user behaviour through heatmaps and session recordings, helping us improve user experience.
                    </p>
                    <p className="text-xs text-gray-500">
                      <a href="https://www.hotjar.com/legal/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Hotjar Privacy Policy</a> | <a href="https://www.hotjar.com/legal/compliance/opt-out/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Hotjar Opt-out</a>
                    </p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Advertising Partners">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Google Ads</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      We use Google Ads to deliver targeted advertisements based on your interactions with our Platform.
                    </p>
                    <p className="text-xs text-gray-500">
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ads Privacy Policy</a> | <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ads Settings</a>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Facebook & Instagram</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      We use Meta's platforms to deliver personalised advertisements and track conversion from social media campaigns.
                    </p>
                    <p className="text-xs text-gray-500">
                      <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Meta Privacy Policy</a> | <a href="https://www.facebook.com/help/contact/367438723733304" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook Ad Preferences</a>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">LinkedIn</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      We use LinkedIn's advertising platform to reach professionals and track engagement with our B2B campaigns.
                    </p>
                    <p className="text-xs text-gray-500">
                      <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn Privacy Policy</a> | <a href="https://www.linkedin.com/psettings/enhanced-advertising" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn Ad Settings</a>
                    </p>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Social Media">
                <p className="mb-4">
                  Our Platform may include social media features (e.g., LinkedIn, Twitter share buttons). These features may set cookies to track your interaction.
                </p>
                <p className="text-sm text-gray-500">
                  When you interact with social media features, the respective social media platform's privacy policy applies. We recommend reviewing their policies to understand how they use your data.
                </p>
              </AccordionItem>

              <AccordionItem title="Payment Processors">
                <p className="mb-4">
                  When you make payments through our Platform, payment processors (such as Stripe) may set cookies to process transactions securely and prevent fraud.
                </p>
                <p className="text-sm text-gray-500">
                  <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Stripe Privacy Policy</a>
                </p>
              </AccordionItem>
            </div>

            {/* Your Choices */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="your-choices">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-orange-600" />
                </div>
                Your Choices and Rights
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                You have several options to manage your cookie preferences and control how your data is used.
              </p>

              <AccordionItem title="Cookie Consent Banner" defaultOpen={true}>
                <p className="mb-4">
                  When you first visit our Platform, you will see a cookie consent banner that allows you to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your preferences by category</li>
                  <li>Access detailed cookie information</li>
                </ul>
                <p className="text-sm text-gray-500">
                  You can change your preferences at any time by clicking the "Cookie Settings" link in our footer.
                </p>
              </AccordionItem>

              <AccordionItem title="Browser Settings">
                <p className="mb-4">
                  You can manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Clear cookies when you close the browser</li>
                  <li>Allow cookies only from websites you trust</li>
                  <li>Receive notifications when cookies are set</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Browser-Specific Instructions</h4>
                  <div className="grid md:grid-cols-2 gap-2 text-sm">
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Chrome</a>
                    <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Firefox</a>
                    <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a>
                    <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Edge</a>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Industry Opt-Out Tools">
                <p className="mb-4">
                  You can opt out of targeted advertising through industry opt-out tools:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Digital Advertising Alliance</h4>
                    <p className="text-sm text-gray-600 mb-2">Opt out of targeted ads from participating companies</p>
                    <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">Visit DAA Opt-Out</a>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Network Advertising Initiative</h4>
                    <p className="text-sm text-gray-600 mb-2">Opt out of targeted advertising networks</p>
                    <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">Visit NAI Opt-Out</a>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">European Interactive Digital Advertising Alliance</h4>
                    <p className="text-sm text-gray-600 mb-2">For users in Europe</p>
                    <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">Visit EDAA</a>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Google Analytics Opt-Out</h4>
                    <p className="text-sm text-gray-600 mb-2">Install the browser add-on to opt out of Google Analytics</p>
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">Download Add-On</a>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Mobile Device Settings">
                <p className="mb-4">
                  If you access our Platform via a mobile device, you can manage cookies through:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>iOS:</strong> Settings → Privacy → Advertising → Limit Ad Tracking</li>
                  <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalisation</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="Your Privacy Rights">
                <p className="mb-4">
                  Depending on your location, you may have additional rights regarding cookies and tracking:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Australia</h4>
                    <p className="text-sm text-blue-700">Right to request access to cookie data and opt out of tracking</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">European Union</h4>
                    <p className="text-sm text-purple-700">Right to object to processing, data portability, and erasure</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">California</h4>
                    <p className="text-sm text-orange-700">Right to know about data collection and opt out of "sale"</p>
                  </div>
                </div>
              </AccordionItem>
            </div>

            {/* International Requirements */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" id="international">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-indigo-600" />
                </div>
                International Compliance
              </h2>

              <AccordionItem title="European Union (GDPR & ePrivacy)" defaultOpen={true}>
                <p className="mb-4">
                  For users in the European Union, we comply with:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li><strong>GDPR Article 6:</strong> Lawful basis for processing (consent, legitimate interest)</li>
                  <li><strong>GDPR Article 7:</strong> Conditions for consent (freely given, specific, informed, unambiguous)</li>
                  <li><strong>GDPR Article 13:</strong> Information provided when collecting data from cookies</li>
                  <li><strong>ePrivacy Directive:</strong> Prior consent requirement for non-essential cookies</li>
                </ul>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-700">
                    <strong>Note:</strong> We require explicit consent before setting non-essential cookies on devices of EU users.
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem title="United Kingdom">
                <p className="mb-4">
                  For UK users, we comply with UK GDPR and the Privacy and Electronic Communications Regulations (PECR):
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cookie consent requirements under PECR</li>
                  <li>Right to opt out of cookies and tracking</li>
                  <li>Clear information about cookie purposes</li>
                  <li>Pre-ticked boxes or bundled consent are not permitted</li>
                </ul>
              </AccordionItem>

              <AccordionItem title="California (CCPA & CalOPPA)">
                <p className="mb-4">
                  For California residents, we comply with:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>CCPA:</strong> Right to know, delete, and opt out of sale of personal information</li>
                  <li><strong>CalOPPA:</strong> Requirements for privacy policy visibility and updates</li>
                  <li><strong>"Do Not Sell My Personal Information"</strong> right</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  Note: We do not "sell" personal information as defined under CCPA. We share data with advertising partners, which may be considered a "sale" in some interpretations.
                </p>
              </AccordionItem>

              <AccordionItem title="Australia (Privacy Act & APPs)">
                <p className="mb-4">
                  For Australian users, we comply with:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Privacy Act 1988 (Cth):</strong> Collection and use of personal information</li>
                  <li><strong>Australian Privacy Principles:</strong> Particularly APP 3 (collection), APP 5 (notification), APP 6 (use/disclosure)</li>
                  <li><strong>Spam Act 2003:</strong> Electronic marketing and cookies used for this purpose</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> While Australia does not have a mandatory cookie consent law like the EU, we follow best practices and respect user preferences regarding tracking.
                  </p>
                </div>
              </AccordionItem>
            </div>

            {/* Cookie Policy Updates */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Updates</h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
                <li>New cookies or tracking technologies we use</li>
                <li>Changes to our third-party service providers</li>
                <li>New features or services on our Platform</li>
                <li>Changes in privacy laws and regulations</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                When we update this policy, we will update the "Last Updated" date at the top of this page. For significant changes, we will provide more prominent notice (e.g., email notification or a banner on our Platform).
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-2xl p-8" id="contact">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6" />
                Contact Us
              </h2>

              <p className="text-blue-100 mb-6">
                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Privacy & Cookie Enquiries</h3>
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
                  <h3 className="font-semibold mb-4">Cookie Settings</h3>
                  <p className="text-blue-100 mb-4">
                    To update your cookie preferences at any time:
                  </p>
                  <button className="bg-white text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Cookie Settings
                  </button>
                  <p className="text-blue-200 text-sm mt-4">
                    Note: Changes may take effect immediately, but may require you to log in again for some settings.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Policies */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">Related Policies</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800 font-medium">
                Privacy Policy →
              </Link>
              <Link to="/terms-of-service" className="text-blue-600 hover:text-blue-800 font-medium">
                Terms of Service →
              </Link>
              <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
                Back to Home →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8">
        <div className="container-custom text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;