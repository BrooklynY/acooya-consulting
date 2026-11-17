/**
 * Cookie Policy (rewritten 16 Nov 2026).
 *
 * Says only what is true of both sites, checked against their code on
 * 16 Nov 2026 (brief-box cookie added 17 Nov 2026 with Build 2): the website
 * sets no cookies; the platform sets three (Supabase sign-in, the side-menu
 * choice, the brief-box hand-over); Vercel Web Analytics counts visits without
 * cookies (facts from Vercel's own documentation). The previous version
 * described Google Analytics, Hotjar, advertising cookies, a consent banner
 * and compliance badges, none of which existed.
 *
 * Change the code first, then this page: a new cookie, storage key or outside
 * service needs a line here before it goes live.
 */
import React from 'react';
import { Cookie, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const LAST_UPDATED = '17 November 2026';

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <section id={id} className="border-b border-gray-200 last:border-0 py-8 first:pt-0">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
    <div className="text-gray-600 leading-relaxed space-y-4">{children}</div>
  </section>
);

const PLATFORM_COOKIES = [
  { name: 'sb-…-auth-token', purpose: 'Keeps you signed in (set by Supabase, our authentication provider)', type: 'Necessary', duration: 'Up to 400 days, or until you sign out' },
  { name: 'acooya_rail_collapsed', purpose: 'Remembers whether you collapsed the side menu', type: 'Functional', duration: '1 year' },
  { name: 'acooya_brief_draft', purpose: 'Carries what you type in the home page brief box to the brief page, so you do not have to type it again', type: 'Functional', duration: 'Removed when the brief page opens, or after 10 minutes' },
];

const CookiePolicyPage: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="hero-wash text-[#1A1A1B] py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
            <Cookie className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="font-serif4 text-lg md:text-[21px] leading-[1.45] text-[#3A3A3C]">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>
    </section>

    <section className="py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 p-8 md:p-10">
          <p className="text-gray-600 leading-relaxed mb-8">
            This policy explains what Acooya Pty Ltd (ABN 83 618 415 768), trading as Acooya Consulting, stores on your device, and which other services your browser contacts, when you use our website (www.acooyaconsulting.com) and our platform (app.acooyaconsulting.com). Our <Link to="/privacy-policy" className="text-[#1F6FA8] hover:text-[#0F4C75] font-medium">Privacy Policy</Link> explains how we handle personal information more broadly.
          </p>

          <Section id="in-short" title="In short">
            <p>
              We use no advertising or tracking cookies, and we do not share browsing data with advertisers. The website sets no cookies. The platform sets three: one keeps you signed in, one remembers a layout choice, and one briefly carries what you type in the home page brief box to the brief page. We count website visits with Vercel Web Analytics, which uses no cookies.
            </p>
          </Section>

          <Section id="website" title="The website">
            <p><strong className="text-gray-900">Cookies:</strong> none.</p>
            <p>
              <strong className="text-gray-900">Browser storage.</strong> <em>Session storage</em> remembers your scroll position so that Back returns you to the same place; it is cleared when you close the tab. <em>Local storage</em> keeps any resource you bookmark, in your browser only; it is never sent to us.
            </p>
            <p>
              <strong className="text-gray-900">Counting visits.</strong> Vercel Web Analytics, provided by our hosting company, counts page views and records the page, the referring site, your country, and your browser, device and operating system type. It sets no cookies. Instead, Vercel recognises a visit from a hash of the incoming request and discards it after 24 hours, so a visitor cannot be followed from one day to the next or across websites. We see only aggregated figures.
            </p>
            <p>
              <strong className="text-gray-900">Other services your browser contacts.</strong> Google Fonts supplies our typeface and Unsplash supplies some images; each receives your IP address and browser details when your browser fetches from it. Pages that list our consultants fetch that list from our platform.
            </p>
          </Section>

          <Section id="platform" title="The platform">
            {/* Phones: one card per cookie, so no column is hidden off-screen. */}
            <div className="md:hidden space-y-3">
              {PLATFORM_COOKIES.map((c) => (
                <dl key={c.name} className="border border-gray-200 rounded-lg p-4 text-sm space-y-2">
                  <dt className="font-mono text-xs text-gray-900 break-all">{c.name}</dt>
                  <dd>{c.purpose}</dd>
                  <dd className="text-gray-500">{c.type} · {c.duration}</dd>
                </dl>
              ))}
            </div>
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-gray-50 text-left text-gray-900">
                  <tr>
                    <th className="p-3 font-semibold">Cookie</th>
                    <th className="p-3 font-semibold">What it does</th>
                    <th className="p-3 font-semibold">Type</th>
                    <th className="p-3 font-semibold">How long</th>
                  </tr>
                </thead>
                <tbody>
                  {PLATFORM_COOKIES.map((c) => (
                    <tr key={c.name} className="border-t border-gray-200 align-top">
                      <td className="p-3 font-mono text-xs text-gray-900 whitespace-nowrap">{c.name}</td>
                      <td className="p-3">{c.purpose}</td>
                      <td className="p-3">{c.type}</td>
                      <td className="p-3">{c.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>When you take out a subscription, checkout happens on Stripe's own pages, where Stripe's cookie policy applies.</p>
          </Section>

          <Section id="choices" title="Your choices">
            <p>
              Because we set only these cookies and count visits without cookies, we do not show a cookie banner. You can block or delete cookies in your browser settings; if you block the platform's sign-in cookie, you will not be able to sign in. Browser privacy tools that block analytics scripts also stop us counting your visits.
            </p>
          </Section>

          <Section id="changes" title="Changes">
            <p>If we add a cookie or a service that tracks visitors, we will update this policy before it goes live and change the date above.</p>
          </Section>
        </div>

        {/* Contact Information */}
        <div className="bg-[#F4F7FB] text-[#1A1A1B] border border-[#E4E4E4] max-w-4xl mx-auto mt-8 rounded-2xl p-8" id="contact">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Mail className="w-6 h-6" />Contact Us</h2>
          <p className="text-[#3A3A3C] mb-6">If you have any questions about this policy, please contact us:</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-[#1F6FA8]" /><span>contact@acooyaconsulting.com</span></div>
            <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#1F6FA8]" /><span>+61 428 112 376</span></div>
            <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-[#1F6FA8] mt-1" /><span>Unit 18, 224 Coward Street<br />Mascot NSW 2020<br />Australia</span></div>
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
            <Link to="/privacy-policy" className="text-[#1F6FA8] hover:text-[#0F4C75] font-medium">Privacy Policy →</Link>
            <Link to="/terms-of-service" className="text-[#1F6FA8] hover:text-[#0F4C75] font-medium">Terms of Service →</Link>
            <Link to="/" className="text-[#1F6FA8] hover:text-[#0F4C75] font-medium">Back to Home →</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default CookiePolicyPage;
