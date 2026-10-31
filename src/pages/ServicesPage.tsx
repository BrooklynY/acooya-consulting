import React from 'react';
import { Link } from 'react-router-dom';
import { INTAKE_URL, intakeUrl } from '../lib/intake';
import {
  ArrowRight,
  CheckCircle,
  Building2,
  Rocket,
  BarChart3, Workflow,
  Clock,
  ShieldCheck,
  Receipt,
  UserCheck,
  FileText,
  ChevronRight
} from 'lucide-react';
import { consultingServices, retainerOffering } from '../data/mockData';

const ServicesPage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">
              Four Practice Areas for Enterprise Transformation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive consulting services powered by our unique Human-AI Synergy Model, designed to deliver measurable business outcomes at every engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={INTAKE_URL} className="btn bg-white text-blue-600 hover:bg-gray-100">
                Start a Brief
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Link to="/about" className="btn border-2 border-white/30 text-white hover:bg-white/10">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-32">
            {consultingServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
                    {service.icon === 'building' && <Building2 className="w-5 h-5" />}
                    {service.icon === 'rocket' && <Rocket className="w-5 h-5" />}
                    {service.icon === 'chart' && <BarChart3 className="w-5 h-5" />}
                    {service.icon === 'workflow' && <Workflow className="w-5 h-5" />}
                    <span className="font-semibold">Service</span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{service.shortDescription}</p>
                  <p className="text-gray-600 mb-8">{service.fullDescription}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-500 mb-1">Investment Range</p>
                      <p className="font-semibold text-lg">{service.priceRange}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-500 mb-1">Typical Duration</p>
                      <p className="font-semibold text-lg">{service.duration}</p>
                    </div>
                  </div>

                  <a
                    href={intakeUrl(service.id)}
                    className="btn btn-primary"
                  >
                    Start a Brief
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
                    <h3 className="font-semibold mb-6 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      Key Features
                    </h3>
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-semibold mb-6 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-purple-600" />
                      Deliverables
                    </h3>
                    <ul className="space-y-4">
                      {service.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded bg-purple-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs text-purple-600 font-bold">{i + 1}</span>
                          </div>
                          <span className="text-gray-700">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog offerings */}
      <section id="offerings" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">The Catalog</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">Ten offerings, one way of working</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Every offering is a Sprint, a Full Engagement or a Retainer, and runs on the same six phases. A named senior consultant leads it; AI agents draft evidence that the consultant reviews before you see it.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {consultingServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl border border-gray-200 p-6">
                <Link to={'/services#' + service.id} className="text-lg font-semibold text-gray-900 hover:text-blue-600">{service.title}</Link>
                <ul className="mt-4 space-y-4">
                  {service.offerings.map((offering) => (
                    <li key={offering.name} className="border-t border-gray-100 pt-4">
                      <p className="font-medium text-gray-900">{offering.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{offering.type} · {offering.phases}</p>
                      <p className="text-sm text-gray-600 mt-2">{offering.summary}</p>
                      <a href={intakeUrl(service.id)} className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium mt-2 hover:underline">Discuss this offering<ArrowRight className="w-4 h-4" /></a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white rounded-2xl border border-gray-200 p-6 md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">After any engagement</p>
              <p className="font-medium text-gray-900 mt-1">{retainerOffering.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">{retainerOffering.type} · {retainerOffering.phases}</p>
              <p className="text-sm text-gray-600 mt-2">{retainerOffering.summary}</p>
            </div>
            <a href={INTAKE_URL} className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium mt-4 md:mt-0 flex-shrink-0 hover:underline">Discuss this offering<ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
      </section>

      {/* Why Choose Acooya */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">The Acooya Advantage</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">Why Work With Acooya</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">What you can check on every engagement.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: 'Human review on every AI output', desc: 'A named consultant approves every AI-drafted deliverable before you see it, and the platform enforces it' },
              { icon: Receipt, title: 'Fixed fees', desc: 'Priced by engagement type and published up front on our Pricing page' },
              { icon: Clock, title: 'On-Demand Intelligence', desc: 'AI agents research, analyse, and draft on request — grounded in your engagement documents, with human review before anything reaches you' },
              { icon: UserCheck, title: 'Senior-led', desc: 'Every engagement is led by a named senior consultant, with a public profile you can read first' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation to discover how Acooya can transform your business.
          </p>
          <a href={INTAKE_URL} className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4">
            Start a Brief
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
