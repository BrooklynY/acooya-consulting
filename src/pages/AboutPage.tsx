import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Users,
  Bot,
  Award,
  Globe,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Zap,
  BarChart3,
  Building2,
  Rocket,
  Star,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Code2,
  Database,
  Settings,
  ArrowUpRight,
  X,
  Send,
  Link2,
  Eye,
  Server,
  Lock
} from 'lucide-react';
import { stats, testimonials, partnershipConcept } from '../data/mockData';

const leadershipRoles = [
  {
    id: 'cto',
    title: 'Chief Technology Officer',
    color: 'blue',
    icon: Code2,
    description: 'We are recruiting a world-class technology leader to drive Acooya\'s AI infrastructure, platform architecture, and engineering excellence.'
  },
  {
    id: 'cdio',
    title: 'Chief Data & Insight Officer',
    color: 'purple',
    icon: Database,
    description: 'We are recruiting a data and insight leader to shape how Acooya turns complex information into strategic advantage for our clients.'
  },
  {
    id: 'coo',
    title: 'Chief Operating Officer',
    color: 'green',
    icon: Settings,
    description: 'We are recruiting an operations leader to scale Acooya\'s delivery model and client experience globally.'
  }
];

const InterestModal: React.FC<{ role: typeof leadershipRoles[0]; isOpen: boolean; onClose: () => void }> = ({ role, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    currentRole: '',
    experience: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
    green: 'bg-green-600 hover:bg-green-700'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              We've received your interest in the {role.title} position. Our team will review your details and reach out within 5 business days.
            </p>
            <button onClick={onClose} className="btn btn-primary">
              Close
            </button>
          </div>
        ) : (
          <>
            <div className={`p-6 rounded-t-2xl bg-gradient-to-r ${
              role.color === 'blue' ? 'from-blue-500 to-blue-600' :
              role.color === 'purple' ? 'from-purple-500 to-purple-600' :
              'from-green-500 to-green-600'
            } text-white`}>
              <role.icon className="w-10 h-10 mb-3" />
              <h3 className="text-xl font-bold">{role.title}</h3>
              <p className="text-white/90 text-sm mt-2">{role.description}</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="input"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    className="input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="input"
                    placeholder="+1 234 567 8900"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile</label>
                  <input
                    type="url"
                    className="input"
                    placeholder="linkedin.com/in/yourprofile"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Role & Company *</label>
                <input
                  type="text"
                  required
                  className="input"
                  placeholder="e.g., VP of Engineering at TechCorp"
                  value={formData.currentRole}
                  onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
                <select
                  required
                  className="input"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                >
                  <option value="">Select experience level</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10-15">10-15 years</option>
                  <option value="15-20">15-20 years</option>
                  <option value="20+">20+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Why You're Interested</label>
                <textarea
                  rows={3}
                  className="input resize-none"
                  placeholder="Share what excites you about this opportunity and what you'd bring to Acooya..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className={`btn w-full text-white ${colorClasses[role.color as keyof typeof colorClasses]}`}>
                <Send className="w-4 h-4 mr-2" />
                Submit Application
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to Acooya's privacy policy. We will handle your information with utmost confidentiality.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const AboutPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<typeof leadershipRoles[0] | null>(null);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section id="overview" className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">About Acooya</span>
            <h1 className="text-4xl lg:text-6xl font-bold mt-4 mb-6">
              Pioneering the Future of Consulting
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed">
              We're building the bridge between world-class human expertise and AI-powered intelligence to create consulting outcomes that were previously impossible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/engagements" className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-4">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/services" className="btn border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6">
                Born from Frustration with Traditional Consulting
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Too many organisations pay too much, wait too long, and receive too little from traditional consulting firms. After 14 years on the inside, I decided to build something better.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Acooya combines world-class strategic expertise with purpose-built AI agents — delivering deeper insights, faster delivery, and 40–60% lower costs than the traditional model.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The consulting industry is overdue for reinvention. <span className="font-semibold text-blue-600">Acooya is that reinvention.</span>
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                    <Target className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                    <p className="text-gray-600 text-sm">
                      Democratise access to world-class strategic thinking through human-AI collaboration.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                    <Lightbulb className="w-10 h-10 text-purple-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                    <p className="text-gray-600 text-sm">
                      Every organisation—from startups to enterprises—deserves transformative strategic guidance.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6">
                    <Heart className="w-10 h-10 text-pink-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Our Values</h3>
                    <p className="text-gray-600 text-sm">
                      Excellence, innovation, integrity, security, and genuine partnership in everything we do.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                    <Globe className="w-10 h-10 text-green-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Our Promise</h3>
                    <p className="text-gray-600 text-sm">
                      40–60% lower cost than traditional consulting — not a claim, a design principle built into every engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Where We Are Today</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2026', label: 'Founded', icon: Rocket },
              { value: '3', label: 'Sectors Served — Government, Aviation, Finance', icon: Globe },
              { value: '4', label: 'AI Agents Launching', icon: Bot },
              { value: '1', label: 'Standard — Exceptional Values & Results', icon: Award },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Leadership Team</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">Founded with Purpose. Built for the Future.</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Acooya is actively building a world-class leadership team. If you are an experienced executive who believes in the power of human-AI collaboration, we would love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Brooklyn Yang - Founder (with photo) */}
            <div className="text-center group">
              <div className="relative mb-6">
                <img
                  src="/brooklyn-yang.jpg"
                  alt="Brooklyn Yang"
                  className="w-48 h-48 rounded-2xl mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <a
                  href="https://www.linkedin.com/in/brooklynyang/"
                  className="absolute bottom-4 right-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
              <h3 className="text-xl font-bold">Brooklyn Yang</h3>
              <p className="text-blue-600 font-medium mb-2">Founder</p>
              <p className="text-sm text-gray-600">Thought Leader and Lead Consultant</p>
            </div>

            {/* CTO - Recruiting */}
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-100">
              <div className="w-24 h-24 rounded-2xl mx-auto bg-blue-600 flex items-center justify-center mb-6 shadow-lg">
                <Code2 className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-1">Chief Technology Officer</h3>
              <p className="text-sm text-gray-600 mb-4">We are recruiting a world-class technology leader to drive Acooya's AI infrastructure, platform architecture, and engineering excellence.</p>
              <button
                onClick={() => setSelectedRole(leadershipRoles[0])}
                className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
              >
                Express Interest <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* CDIO - Recruiting */}
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-100">
              <div className="w-24 h-24 rounded-2xl mx-auto bg-purple-600 flex items-center justify-center mb-6 shadow-lg">
                <Database className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-1">Chief Data & Insight Officer</h3>
              <p className="text-sm text-gray-600 mb-4">We are recruiting a data and insight leader to shape how Acooya turns complex information into strategic advantage for our clients.</p>
              <button
                onClick={() => setSelectedRole(leadershipRoles[1])}
                className="inline-flex items-center text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors"
              >
                Express Interest <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* COO - Recruiting */}
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-100">
              <div className="w-24 h-24 rounded-2xl mx-auto bg-green-600 flex items-center justify-center mb-6 shadow-lg">
                <Settings className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-1">Chief Operating Officer</h3>
              <p className="text-sm text-gray-600 mb-4">We are recruiting an operations leader to scale Acooya's delivery model and client experience globally.</p>
              <button
                onClick={() => setSelectedRole(leadershipRoles[2])}
                className="inline-flex items-center text-green-600 font-medium text-sm hover:text-green-700 transition-colors"
              >
                Express Interest <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Modal */}
      {selectedRole && (
        <InterestModal
          role={selectedRole}
          isOpen={!!selectedRole}
          onClose={() => setSelectedRole(null)}
        />
      )}

      {/* Technology */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Technology</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6">
                Enterprise-Grade AI Built for Strategic Consulting
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our platform combines cutting-edge AI technology with rigorous security and compliance standards, ensuring you get the best of both worlds—powerful insights with enterprise-grade protection.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Bot, title: 'Purpose-Built AI Agents', desc: 'Specialised agents built around consulting methodologies and best-practice frameworks' },
                  { icon: Shield, title: 'Enterprise Security', desc: 'Built to SOC 2 Type II standards. Designed for GDPR and Australian Privacy Act compliance. AES-256 encryption throughout.' },
                  { icon: Zap, title: 'Real-Time Intelligence', desc: 'Instant analysis, research, and response generation 24/7' },
                  { icon: BarChart3, title: 'Advanced Analytics', desc: 'Comprehensive insights and KPI tracking for engagement performance' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="font-bold mb-6">Built on Enterprise Infrastructure</h3>
              <div className="space-y-4">
                {[
                  { icon: Bot, color: 'text-blue-400', title: 'AI & Agent Framework', desc: 'Purpose-built agent workflows on enterprise LLM infrastructure' },
                  { icon: Lock, color: 'text-green-400', title: 'Security Architecture', desc: 'AES-256 encryption, role-based access controls, full audit logging' },
                  { icon: Zap, color: 'text-yellow-400', title: 'Real-Time Processing', desc: 'Live data pipelines delivering insights as they emerge' },
                  { icon: Link2, color: 'text-purple-400', title: 'Open Integration', desc: 'API-first design connecting with your existing enterprise tools' },
                  { icon: Server, color: 'text-cyan-400', title: 'Australian Data Residency', desc: 'Data hosted in Australian data centres for compliance-sensitive clients' },
                  { icon: Eye, color: 'text-pink-400', title: 'Full Observability', desc: 'Complete traceability of every AI output for governance and accountability' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <item.icon className={`w-8 h-8 ${item.color} flex-shrink-0 mt-1`} />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-600 mt-4">Book a free 30-minute strategy consultation—no commitment required</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Mail className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">contact@acooyaconsulting.com</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <Phone className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+61 428 112 376</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">Sydney, NSW, Australia</p>
              </div>
            </div>

            <form className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="input" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="input" placeholder="your@email.com" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input type="text" className="input" placeholder="Your company" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                <textarea rows={4} className="input resize-none" placeholder="Tell us about your challenges and goals..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">We typically respond within 2 business hours</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
