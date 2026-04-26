import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Building2,
  Rocket,
  BarChart3,
  Users,
  Bot,
  Zap,
  Clock,
  DollarSign,
  FileText,
  ChevronRight
} from 'lucide-react';
import { consultingServices, hybridSolutions } from '../data/mockData';

const ServicesPage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">
              Three Practice Areas for Enterprise Transformation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive consulting services powered by our unique Human-AI Synergy Model, designed to deliver measurable business outcomes at every engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/engagements" className="btn bg-white text-blue-600 hover:bg-gray-100">
                Start Your Engagement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
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

                  <Link
                    to="/engagements"
                    state={{ service: service.id }}
                    className="btn btn-primary"
                  >
                    Request This Service
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
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

      {/* Hybrid Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Most Popular</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">Hybrid Solutions: The Best of Both Worlds</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Our most requested engagements combine the strategic thinking of senior consultants with AI-powered research, analysis, and monitoring. The result? Faster insights, deeper analysis, and 40-60% cost savings compared to traditional consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {hybridSolutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    {index === 0 && <Zap className="w-5 h-5 text-white" />}
                    {index === 1 && <Building2 className="w-5 h-5 text-white" />}
                    {index === 2 && <BarChart3 className="w-5 h-5 text-white" />}
                  </div>
                  {index === 0 && <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Most Popular</span>}
                </div>

                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{solution.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Human Consultant</p>
                      <p className="text-sm">{solution.humanRole}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bot className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">AI Agent</p>
                      <p className="text-sm">{solution.aiRole}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                  <div>
                    <p className="text-sm text-gray-500">{solution.duration}</p>
                    <p className="font-bold text-lg">{solution.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-green-400 mb-1">Efficiency Gain</p>
                    <p className="font-semibold text-green-400">{solution.savings}</p>
                  </div>
                </div>

                <Link
                  to="/engagements"
                  state={{ solution: solution.id }}
                  className="btn btn-primary w-full mt-6"
                >
                  Start This Engagement
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Acooya */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">The Acooya Advantage</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">Why Leading Organisations Choose Acooya</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We've reimagined consulting from the ground up—focusing on outcomes, not just deliverables.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: '40% Faster', desc: 'AI-powered research and analysis accelerate every phase of engagement without sacrificing depth' },
              { icon: DollarSign, title: '40-60% Savings', desc: 'Hybrid model delivers premium quality at a fraction of traditional consulting costs' },
              { icon: Clock, title: '24/7 Intelligence', desc: 'AI agents continuously monitor markets, track KPIs, and flag opportunities around the clock' },
              { icon: Users, title: 'Expert Network', desc: 'Tap into our rapidly expanding ecosystem of top-tier talent, bringing proven experience from global industry leaders directly to your team' },
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
          <Link to="/engagements" className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4">
            Start Your Engagement
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
