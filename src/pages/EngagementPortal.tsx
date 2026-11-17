import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Bot, Sparkles, CheckCircle, FileText, MessageSquare, Shield, Clipboard } from 'lucide-react';
import ContentFigure from '../components/ContentFigure';
import { INTAKE_URL } from '../lib/intake';

/**
 * Engagements — how working with Acooya runs, and the way in.
 *
 * Until 31 Oct 2026 this page WAS the engagement wizard: five steps that
 * composed a mailto: to contact@. The wizard is retired. Briefs now start at
 * the platform intake (app.acooyaconsulting.com/start), which emails the brief
 * server-side, suggests a starting offering from the catalog, and never puts AI
 * output in front of a prospect (Design Decisions Log fragment 31 Oct).
 *
 * This page keeps the explainer: the three ways to work, what happens after a
 * brief, and the six-phase figure. Every "start" button leaves for the intake
 * in the same tab (the 10 Oct profile-link precedent).
 */

const WAYS = [
  {
    icon: Users,
    title: 'Human Consultant',
    desc: 'A senior consultant works with you directly.',
    points: ['Senior-led', 'Fixed fee', 'Your decision at every gate'],
    cta: { label: 'Start a Brief', href: INTAKE_URL },
  },
  {
    icon: Sparkles,
    title: 'Hybrid (Best Value)',
    desc: 'A consultant leads and AI agents draft. Every AI output is reviewed before you see it.',
    points: ['Consultant-led, AI-drafted', 'Human review on every AI output', 'Fixed fee'],
    cta: { label: 'Start a Brief', href: INTAKE_URL },
  },
  {
    icon: Bot,
    title: 'AI Agent',
    desc: 'You run Acooya’s AI agents yourself on a self-service plan, and you review their output.',
    points: ['Self-service workspace', 'You review the output', 'Monthly plan, no brief needed'],
    cta: { label: 'See Plans', to: '/pricing' },
  },
] as const;

const NEXT_STEPS = [
  { icon: FileText, title: 'Brief received', desc: 'Read personally by a senior consultant' },
  { icon: Clipboard, title: 'Draft charter', desc: 'Prepared from your brief by that consultant' },
  { icon: MessageSquare, title: 'Discovery Call', desc: '30 minutes, free, to walk through it' },
  { icon: Shield, title: 'G0: you approve', desc: 'Nothing starts until you do' },
];

const EngagementPortal: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section id="overview" className="bg-[#F4F7FB] text-[#1A1A1B] py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-[#1F6FA8] font-semibold text-sm uppercase tracking-wider">Engagements</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">How Engagements Work</h1>
            <p className="font-serif4 text-lg md:text-[21px] leading-[1.45] text-[#3A3A3C] mb-8">
              Tell us what you need solved in a short brief. A senior consultant reads every brief personally and prepares a draft charter, and nothing starts until you approve it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={INTAKE_URL} className="btn btn-primary">
                Start a Brief
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Link to="/services" className="btn btn-secondary">
                See Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three ways to work */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Three ways to work with Acooya</h2>
            <p className="text-gray-600 mb-8">You choose in the brief, and you can change your mind on the Discovery Call.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {WAYS.map((w) => (
                <div key={w.title} className="p-8 rounded-2xl border-2 border-gray-200 flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-[#E3F0FA] flex items-center justify-center mb-4">
                    <w.icon className="w-7 h-7 text-[#1F6FA8]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{w.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{w.desc}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {w.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1F6FA8] flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    {'href' in w.cta ? (
                      <a href={w.cta.href} className="inline-flex items-center gap-1 text-sm text-[#1F6FA8] font-medium hover:underline">{w.cta.label}<ArrowRight className="w-4 h-4" /></a>
                    ) : (
                      <Link to={w.cta.to} className="inline-flex items-center gap-1 text-sm text-[#1F6FA8] font-medium hover:underline">{w.cta.label}<ArrowRight className="w-4 h-4" /></Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-center mb-8">What Happens After You Send a Brief?</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {NEXT_STEPS.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#E3F0FA] flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-[#1F6FA8]" />
                  </div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How every engagement runs: the same figure as insight 3 and kb7. Moved from Home 19 Oct 2026; it describes what follows kickoff. */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-4">How every engagement runs</h3>
            <p className="text-gray-600 text-center mb-4 max-w-2xl mx-auto">Six phases, a gate after each, and two approvals at every gate. How many phases you need is agreed at the start and written into the charter.</p>
            <ContentFigure id="six-phases" />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#F4F7FB] text-[#1A1A1B] py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready when you are</h2>
          <p className="font-serif4 text-lg md:text-[21px] leading-[1.45] text-[#3A3A3C] mb-8 max-w-2xl mx-auto">A few minutes to describe the problem. No commitment until you approve a charter.</p>
          <a href={INTAKE_URL} className="btn btn-primary">
            Start a Brief
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default EngagementPortal;
