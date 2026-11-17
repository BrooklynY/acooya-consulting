import React from 'react';
import { Link } from 'react-router-dom';
import { INTAKE_URL, intakeUrl } from '../lib/intake';
import { PRACTICE_AREAS } from '../lib/practiceAreas';
import {
  ArrowRight,
  Check,
  Clock,
  ShieldCheck,
  Receipt,
  UserCheck
} from 'lucide-react';
import { consultingServices, retainerOffering } from '../data/mockData';

/**
 * Services, restyled 16 Nov 2026 to the home page's look (canvas 1a): Geist
 * with serif sub-headings, calm white ground with one pale band, charcoal
 * pill buttons, each practice area in its own colour (decided 1 Nov), and no
 * green (reserved for human-approved AI output). The words and figures are
 * unchanged: they come from the data file and the 15 Oct honesty pass.
 */
const areaOf = (id: string) => PRACTICE_AREAS.find((a) => a.id === id) ?? PRACTICE_AREAS[0];
const pillDark = 'min-h-[44px] inline-flex items-center justify-center gap-2 px-5 rounded-full bg-[#1A1A1B] hover:bg-black text-white text-sm font-semibold transition-colors';
const pillLight = 'min-h-[44px] inline-flex items-center justify-center gap-2 px-5 rounded-full border border-[#BDBDBD] bg-white hover:bg-[#F4F7FB] text-[#1A1A1B] text-sm font-semibold transition-colors';
const textLink = 'inline-flex items-center gap-1 text-sm font-medium text-[#1F6FA8] hover:text-[#0F4C75] hover:underline';

const ServicesPage: React.FC = () => {
  return (
    <div className="font-geist text-[#1A1A1B] bg-white">
      {/* Hero */}
      <section className="hero-wash px-5 md:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#1F6FA8]">Our Services</span>
            <h1 className="mt-3 text-[34px] leading-[1.08] md:text-5xl md:leading-[1.05] font-bold tracking-[-0.02em]">
              Four Practice Areas for Enterprise Transformation
            </h1>
            <p className="mt-4 mb-8 font-serif4 text-lg md:text-[21px] leading-[1.45] text-[#3A3A3C]">
              Comprehensive consulting services powered by our unique Human-AI Synergy Model, designed to deliver measurable business outcomes at every engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={INTAKE_URL} className={pillDark}>
                Start a Brief
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <Link to="/about" className={pillLight}>
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="px-5 md:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-28">
          {consultingServices.map((service, index) => {
            const area = areaOf(service.id);
            return (
              <div key={service.id} id={service.id} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-4 text-[13px] font-semibold" style={{ background: area.tint, color: area.ink }}>
                    <span className="w-2 h-2 rounded-sm" style={{ background: area.dot }} aria-hidden="true"></span>
                    <span>Service</span>
                  </div>

                  <h2 className="font-serif4 text-[34px] md:text-[44px] leading-[1.05] mb-4" style={{ color: area.ink }}>{service.title}</h2>
                  <p className="text-lg md:text-xl leading-snug text-[#3A3A3C] mb-5">{service.shortDescription}</p>
                  <p className="text-[15px] md:text-base leading-[1.65] text-[#555555] mb-7">{service.fullDescription}</p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-7">
                    <div className="border border-[#E4E4E4] rounded-2xl p-4">
                      <p className="text-[13px] text-[#555555] mb-1">Investment Range</p>
                      <p className="font-semibold text-lg">{service.priceRange}</p>
                    </div>
                    <div className="border border-[#E4E4E4] rounded-2xl p-4">
                      <p className="text-[13px] text-[#555555] mb-1">Typical Duration</p>
                      <p className="font-semibold text-lg leading-snug">{service.duration}</p>
                    </div>
                  </div>

                  <a href={intakeUrl(service.id)} className={pillDark + ' w-full sm:w-auto'}>
                    Start a Brief
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="border border-[#E4E4E4] rounded-[20px] overflow-hidden">
                    <div className="h-2" style={{ background: area.tint }} aria-hidden="true"></div>
                    <div className="p-6 md:p-8">
                      <h3 className="font-semibold mb-5">Key Features</h3>
                      <ul className="space-y-3.5 mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: area.ink }} aria-hidden="true" />
                            <span className="text-[15px] text-[#3A3A3C]">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <h3 className="font-semibold mb-5">Deliverables</h3>
                      <ul className="space-y-3.5">
                        {service.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: area.tint }}>
                              <span className="text-xs font-bold" style={{ color: area.ink }}>{i + 1}</span>
                            </div>
                            <span className="text-[15px] text-[#3A3A3C]">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Catalog offerings */}
      <section id="offerings" className="bg-[#F4F7FB] px-5 md:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="md:text-center mb-8 md:mb-12">
            <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#1F6FA8]">The Catalog</span>
            <h2 className="text-[26px] md:text-4xl font-bold tracking-[-0.01em] mt-3">Ten offerings, one way of working</h2>
            <p className="text-[15px] md:text-base leading-[1.6] text-[#555555] mt-3 max-w-2xl md:mx-auto">Every offering is a Sprint, a Full Engagement or a Retainer, and runs on the same six phases. A named senior consultant leads it; AI agents draft evidence that the consultant reviews before you see it.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {consultingServices.map((service) => {
              const area = areaOf(service.id);
              return (
                <div key={service.id} className="bg-white rounded-[20px] border border-[#E4E4E4] p-5 md:p-6">
                  <Link to={'/services#' + service.id} className="inline-flex items-center gap-2 text-lg font-semibold text-[#1A1A1B] hover:underline">
                    <span className="w-2.5 h-2.5 rounded-sm" style={{ background: area.dot }} aria-hidden="true"></span>{service.title}
                  </Link>
                  <ul className="mt-4 space-y-4">
                    {service.offerings.map((offering) => (
                      <li key={offering.name} className="border-t border-[#F0F0EE] pt-4">
                        <p className="font-medium text-[#1A1A1B]">{offering.name}</p>
                        <p className="text-xs text-[#555555] mt-0.5">{offering.type} · {offering.phases}</p>
                        <p className="text-sm text-[#555555] mt-2">{offering.summary}</p>
                        <a href={intakeUrl(service.id)} className={textLink + ' mt-2 py-1.5'}>Discuss this offering<ArrowRight className="w-4 h-4" aria-hidden="true" /></a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-4 md:mt-5 bg-white rounded-[20px] border border-[#E4E4E4] p-5 md:p-6 md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[#555555]">After any engagement</p>
              <p className="font-medium text-[#1A1A1B] mt-1">{retainerOffering.name}</p>
              <p className="text-xs text-[#555555] mt-0.5">{retainerOffering.type} · {retainerOffering.phases}</p>
              <p className="text-sm text-[#555555] mt-2">{retainerOffering.summary}</p>
            </div>
            <a href={INTAKE_URL} className={textLink + ' mt-3 md:mt-0 py-1.5 flex-shrink-0'}>Discuss this offering<ArrowRight className="w-4 h-4" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      {/* Why Choose Acooya */}
      <section className="px-5 md:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="md:text-center mb-8 md:mb-12">
            <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#1F6FA8]">The Acooya Advantage</span>
            <h2 className="text-[26px] md:text-4xl font-bold tracking-[-0.01em] mt-3">Why Work With Acooya</h2>
            <p className="text-[15px] md:text-base text-[#555555] mt-3 max-w-2xl md:mx-auto">What you can check on every engagement.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { icon: ShieldCheck, title: 'Human review on every AI output', desc: 'A named consultant approves every AI-drafted deliverable before you see it, and the platform enforces it' },
              { icon: Receipt, title: 'Fixed fees', desc: 'Priced by engagement type and published up front on our Pricing page' },
              { icon: Clock, title: 'On-Demand Intelligence', desc: 'AI agents research, analyse, and draft on request — grounded in your engagement documents, with human review before anything reaches you' },
              { icon: UserCheck, title: 'Senior-led', desc: 'Every engagement is led by a named senior consultant, with a public profile you can read first' },
            ].map((item, index) => (
              <div key={index} className="rounded-[20px] p-5 md:p-6 border border-[#E4E4E4]">
                <div className="w-12 h-12 rounded-full bg-[#F4F7FB] flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#1A1A1B]" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-snug mb-2">{item.title}</h3>
                <p className="text-sm leading-[1.55] text-[#555555]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="band-wash px-5 md:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[26px] md:text-4xl font-bold tracking-[-0.01em] mb-4">Ready to Get Started?</h2>
          <p className="font-serif4 text-lg md:text-[21px] leading-[1.45] text-[#3A3A3C] mb-8 max-w-2xl mx-auto">
            Tell us what you are working on in a short brief. A senior consultant reads it and replies by email.
          </p>
          <a href={INTAKE_URL} className={pillDark + ' w-full sm:w-auto'}>
            Start a Brief
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
