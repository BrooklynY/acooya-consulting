import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Users,
  Bot,
  Shield,
  Zap,
  BarChart3,
  Building2,
  Rocket,
  Brain,
  Clock,
  DollarSign,
  Star,
  ChevronRight,
  Play,
  FileText,
  Lock,
  Award,
  Briefcase
} from 'lucide-react';
import { stats, testimonials, partnershipConcept, consultingServices, aiAgents, humanConsultants } from '../data/mockData';

const LogoIcon = () => (
  <img src="/icon_final.png" alt="Acooya Consulting" className="w-20 h-20 object-contain" />
);

const HomePage: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">AI-Powered Consulting Platform</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Where Human Expertise
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Meets AI Intelligence
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                Acooya Consulting bridges world-class human consultants with purpose-built AI agents to deliver faster, deeper, and more impactful outcomes for your organisation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/engagements" className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                  Start Your Engagement
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/services" className="btn border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                  Explore Services
                </Link>
              </div>

              <div className="flex items-center gap-8 mt-10 pt-10 border-t border-white/10">
                <div className="flex -space-x-3">
                  {/* Aviation Symbol */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                    </svg>
                  </div>
                  {/* Financial Services Symbol */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-white flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                    </svg>
                  </div>
                  {/* Government Symbol */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 border-2 border-white flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Trusted by leaders from different industries, including</p>
                  <p className="font-semibold">Aviation, Financial Services & Government</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                {/* Logo Section - 4-Bird Icon */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <img
                    src="/icon_4bird.png"
                    alt="Human-AI Synergy"
                    className="w-16 h-16 object-contain align-middle"
                  />
                  <div>
                    <h3 className="font-semibold text-xl text-white">Human-AI Synergy</h3>
                    <p className="text-sm text-gray-300">Real-time collaboration</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Brooklyn Yang</p>
                      <p className="text-xs text-gray-400">Business Architecture & Operating Design</p>
                    </div>
                    <span className="badge badge-green">Active</span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Atlas AI Agent</p>
                      <p className="text-xs text-gray-400">Analysis & Research</p>
                    </div>
                    <span className="badge badge-blue">Processing</span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Phase 2 Report</p>
                      <p className="text-xs text-gray-400">Generated 2 min ago</p>
                    </div>
                    <span className="badge badge-green">Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Upcoming Target</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-3">
                  {stat.icon === 'users' && <Users className="w-6 h-6" />}
                  {stat.icon === 'briefcase' && <Rocket className="w-6 h-6" />}
                  {stat.icon === 'award' && <Award className="w-6 h-6" />}
                  {stat.icon === 'bot' && <Bot className="w-6 h-6" />}
                  {stat.icon === 'star' && <Star className="w-6 h-6" />}
                  {stat.icon === 'zap' && <Zap className="w-6 h-6" />}
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Concept Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">The Human-AI Synergy Model</span>
            <h2 className="section-title mt-4">Bridging Expertise with Intelligence</h2>
          </div>

          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16">
            Acooya is built around the Human-AI Synergy Model—a revolutionary partnership framework that combines the strategic thinking, emotional intelligence, and domain expertise of world-class consultants with the analytical power, speed, and scalability of purpose-built AI agents.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'zap',
                title: 'Speed & Scale',
                description: 'AI agents handle research, analysis, and reporting at 10x speed while humans focus on strategy and judgment',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: 'brain',
                title: 'Deeper Insights',
                description: 'AI augments human analysis with pattern recognition across millions of data points humans couldn\'t process',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: 'clock',
                title: 'Continuous Value',
                description: 'AI agents work 24/7, providing ongoing monitoring and support between human consulting sessions',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: 'dollar',
                title: 'Cost Efficiency',
                description: 'Hybrid engagements deliver 40-60% cost savings versus traditional consulting while maintaining quality',
                color: 'from-amber-500 to-orange-500'
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                  {benefit.icon === 'zap' && <Zap className="w-7 h-7 text-white" />}
                  {benefit.icon === 'brain' && <Brain className="w-7 h-7 text-white" />}
                  {benefit.icon === 'clock' && <Clock className="w-7 h-7 text-white" />}
                  {benefit.icon === 'dollar' && <DollarSign className="w-7 h-7 text-white" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-center mb-4">From Kickoff to Impact in 4 Weeks</h3>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Our streamlined engagement process gets you from initial brief to actionable strategy faster than traditional consulting firms.</p>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { phase: 'Discovery', duration: 'Days 1-5', description: 'Deep-dive workshops to understand your challenges, goals, and competitive landscape' },
                { phase: 'AI Research', duration: 'Days 6-12', description: 'Purpose-built agents analyse market data, competitor intelligence, and industry trends' },
                { phase: 'Strategy', duration: 'Days 13-18', description: 'Expert consultants synthesise AI insights into strategic recommendations' },
                { phase: 'Validation', duration: 'Days 19-24', description: 'Rigorous testing and refinement of recommendations with your leadership team' },
                { phase: 'Delivery', duration: 'Days 25-28', description: 'Comprehensive strategy document with implementation roadmap and KPIs' },
              ].map((step, index) => (
                <div key={index} className="relative">
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 -translate-x-1/2"></div>
                  )}
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 relative z-10 h-full">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center text-sm font-bold mb-3">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold mb-1">{step.phase}</h4>
                    <p className="text-xs text-gray-500 mb-2">{step.duration}</p>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">Three Core Practice Areas</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Comprehensive consulting services designed for the modern enterprise, powered by our unique Human-AI Synergy Model
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'building',
                title: 'Business Architecture',
                description: 'Transform your organisational structure for maximum efficiency and AI readiness',
                features: ['Operating Model Design', 'Digital Transformation', 'Change Management']
              },
              {
                icon: 'rocket',
                title: 'Delivery Enablement',
                description: 'Empower your teams with AI-augmented tools and methodologies',
                features: ['Program Management', 'Agile Transformation', 'PMO Setup']
              },
              {
                icon: 'chart',
                title: 'Strategic Insights',
                description: 'Make data-driven decisions with AI-powered analytics and reporting',
                features: ['Market Intelligence', 'Competitive Analysis', 'Growth Strategy']
              }
            ].map((service, index) => (
              <Link
                key={index}
                to="/services"
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon === 'building' && <Building2 className="w-7 h-7 text-white" />}
                  {service.icon === 'rocket' && <Rocket className="w-7 h-7 text-white" />}
                  {service.icon === 'chart' && <BarChart3 className="w-7 h-7 text-white" />}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-blue-400 text-sm font-medium mt-6">
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Consultants & AI Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Talent</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">The Perfect Blend of Human Intelligence and AI Power</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Every engagement combines the strategic thinking of world-class consultants with the speed and scalability of purpose-built AI agents
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Human Consultants */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Expert Consultants</h3>
                  <p className="text-gray-600">Trusted by industry leaders globally</p>
                </div>
              </div>

              <div className="space-y-4">
                {humanConsultants.slice(0, 3).map((consultant) => (
                  <div key={consultant.id} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-blue-300 transition-colors">
                    {consultant.id === 'h0' ? (
                      <img
                        src={consultant.image}
                        alt={consultant.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="font-semibold">{consultant.name}</h4>
                      <p className="text-sm text-gray-600">{consultant.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{consultant.experience}</p>
                    </div>
                    <span className={`badge ${
                      consultant.availability === 'Available Now'
                        ? 'badge-green'
                        : consultant.availability === 'Joining Soon'
                          ? 'badge-purple'
                          : 'badge-orange'
                    }`}>
                      {consultant.availability}
                    </span>
                  </div>
                ))}
              </div>

              <Link to="/marketplace" className="btn btn-secondary w-full mt-6">
                Meet Our Consultants
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* AI Agents */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">AI Agents</h3>
                  <p className="text-gray-600">Purpose-built for consulting excellence</p>
                </div>
              </div>

              <div className="space-y-4">
                {aiAgents.slice(0, 3).map((agent) => (
                  <div key={agent.id} className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-purple-300 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{agent.name}</h4>
                          <p className="text-sm text-gray-600">{agent.category}</p>
                        </div>
                      </div>
                      <span className="badge badge-purple">Launching Soon</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {agent.capabilities.slice(0, 2).map((cap, i) => (
                        <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/marketplace" className="btn btn-primary w-full mt-6">
                Explore All AI Agents
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider">Proven Impact</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">The Outcomes We Deliver</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 relative">
              <div className="absolute top-6 left-8 text-8xl text-white/20">"</div>
              <div className="relative">
                <p className="text-xl lg:text-2xl mb-8 leading-relaxed">
                  {testimonials[activeTestimonial].quote}
                </p>
                <div className="flex items-center justify-center">
                  <p className="text-lg text-white/80 italic">
                    — {testimonials[activeTestimonial].title}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Enterprise Security</span>
                <h2 className="text-3xl font-bold mt-4 mb-6">Built for the Enterprise</h2>
                <p className="text-gray-600 mb-8">
                  Acooya is built from the ground up with security and compliance at its core. We understand that your data is your most valuable asset, and we treat it accordingly.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Shield, title: 'SOC 2 Type II Standard', desc: 'Designed and built to SOC 2 Type II standards. Independent certification is on our roadmap' },
                    { icon: Lock, title: 'Enterprise-Grade Encryption', desc: 'AES-256 encryption at rest. TLS 1.3 encryption in transit. Your data is protected at every layer' },
                    { icon: FileText, title: 'Privacy Act & GDPR Aligned', desc: 'Built to meet Australian Privacy Act and GDPR requirements. Privacy-first architecture with documented data handling practices' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <h4 className="font-semibold mb-6">Security Features</h4>
                <div className="grid grid-cols-2 gap-4">
                  {['Data Encryption', 'Access Control', 'Audit Logging', 'Backup & Recovery', 'Secure Development Practices', 'Data Breach Notification Process', 'Dependency & Security Monitoring', 'Security-First Architecture'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container-custom text-center">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Get Started Today</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join our successful enterprises that have accelerated their growth with Acooya's Human-AI Synergy Model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/engagements" className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4">
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/pricing" className="btn border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4">
              View Pricing Plans
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-8">No credit card required • 30-minute call • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
