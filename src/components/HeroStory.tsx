/**
 * HeroStory — the home page's interim story (13 Nov 2026).
 *
 * The Acooya delivery framework end to end, Frame to Embed, with a small
 * picture per phase and the same three-part strip under each: AI drafts, the
 * consultant approves, the client decides (the two-key rule). It opens on the
 * brief box, because intake is the Frame phase. Phase content is Service
 * Catalog v1.0 §2.1: change the catalog first, this second.
 * It stands in for the screen-recorded film until the new home page ships.
 *
 * Honesty rules: an illustration of the framework, not a client engagement, and
 * no invented figures; Aria is named only where she works today (evidence from
 * documents); later phases say "AI drafts" because no other agent is live; no
 * AI reads the brief (31 Oct rule); no model names (Pricing Model §07); green
 * (#2ECC71) appears only beside the consultant's approval.
 *
 * Accessibility: it advances every 5 s but has a visible pause control and
 * phase buttons (WCAG 2.2.2); it pauses while hovered or focused; with
 * prefers-reduced-motion it does not advance or type on its own; the caption
 * is announced politely.
 */
import { useEffect, useState } from 'react';
import { ArrowUp, Check, Pause, Play } from 'lucide-react';

const ARIA = '#E91E63';
const APPROVED = '#2ECC71';
const STEP_MS = 5000;
const BRIEF = 'Two divisions were merged into us, and nobody knows who does what by 1 July.';

const Pill = ({ children, tone }: { children: React.ReactNode; tone: 'blue' | 'amber' | 'dark' }) => {
  const tones = { blue: 'bg-blue-50 text-blue-800', amber: 'bg-amber-50 text-amber-800', dark: 'bg-gray-900 text-white' };
  return <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${tones[tone]}`}>{children}</span>;
};

const Row = ({ children, right }: { children: React.ReactNode; right?: React.ReactNode }) => (
  <div className="flex items-center justify-between gap-2 px-3 py-1.5 border border-gray-200 rounded-lg bg-white text-[12px]"><span className="min-w-0 truncate">{children}</span>{right}</div>
);

const Bar = ({ label, width }: { label: string; width: string }) => (
  <div className="grid grid-cols-[84px_1fr] items-center gap-2 text-[12px]"><span className="text-gray-600">{label}</span><span className="h-2 rounded-full bg-gray-200"><span className="block h-2 rounded-full bg-gray-700" style={{ width }}></span></span></div>
);

const Tick = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 text-[12px]"><span className="w-4 h-4 rounded-full bg-gray-900 flex items-center justify-center"><Check className="w-3 h-3 text-white" /></span>{children}</div>
);

type Phase = { name: string; caption: string; gate: string; ai: string; decide: string; picture: (typed: string) => JSX.Element };

/** Dots filled per option for Cost, Risk, Fit: shapes only, not data. */
const OPTION_SCORES = [[1, 2, 2], [2, 1, 3], [3, 3, 1]];

/** Service Catalog v1.0 §2.1 (13 Oct 2026): six phases, a gate after each. */
const PHASES: Phase[] = [
  {
    name: 'Frame',
    caption: 'Frame: you describe the problem. A senior consultant turns it into a charter.',
    gate: 'G0 · Charter approved',
    ai: 'A summary of the documents you share',
    decide: 'The question, scope and depth',
    picture: (typed) => (
      <div className="flex flex-col gap-2">
        <div className="border border-gray-200 rounded-2xl bg-white shadow-sm pl-4 pr-2 py-2 flex items-end justify-between gap-2">
          <span className="text-[14px] leading-snug py-1 min-h-[2.75rem]">{typed}<span className="inline-block w-0.5 h-4 bg-gray-900 ml-0.5 align-[-2px] motion-safe:animate-pulse"></span></span>
          <span className="w-9 h-9 shrink-0 rounded-full bg-gray-900 flex items-center justify-center"><ArrowUp className="w-4 h-4 text-white" /></span>
        </div>
        <Row right={<Pill tone="blue">Draft charter</Pill>}>Goes to a senior consultant. No AI reads it.</Row>
      </div>
    ),
  },
  {
    name: 'Discover',
    caption: 'Discover: Aria gathers the evidence from your documents. Your consultant checks it.',
    gate: 'G1 · Findings accepted',
    ai: 'Aria: evidence from your documents',
    decide: 'Whether the findings stand',
    picture: () => (
      <div className="flex flex-col gap-1.5">
        <Row right={<Pill tone="blue">Ready</Pill>}>Monthly operations report</Row>
        <Row right={<Pill tone="amber">Protected · held back from AI</Pill>}>Staff roster extract</Row>
        <Row right={<span className="text-[11px] text-gray-500 whitespace-nowrap">source named</span>}><span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: ARIA }}></span>Finding 1 · measured data</span></Row>
      </div>
    ),
  },
  {
    name: 'Design',
    caption: 'Design: the realistic options, set out and compared.',
    gate: 'G2 · Preferred option chosen',
    ai: 'First-draft options and appraisal tables',
    decide: 'The preferred option',
    picture: () => (
      <div className="grid grid-cols-3 gap-2">
        {['Option A', 'Option B', 'Option C'].map((o, i) => (
          <div key={o} className={`rounded-lg bg-white px-2.5 py-2 flex flex-col gap-1.5 border ${i === 1 ? 'border-gray-900' : 'border-gray-200'}`}>
            <span className="text-[12px] font-semibold">{o}</span>
            {['Cost', 'Risk', 'Fit'].map((c, j) => (
              <span key={c} className="flex items-center justify-between text-[11px] text-gray-600">{c}<span className="flex gap-0.5">{[0, 1, 2].map((d) => (<span key={d} className={`w-1.5 h-1.5 rounded-full ${d < OPTION_SCORES[i]![j]! ? 'bg-gray-700' : 'bg-gray-200'}`}></span>))}</span></span>
            ))}
          </div>
        ))}
      </div>
    ),
  },
  {
    name: 'Decide',
    caption: 'Decide: a business case sized to the decision, and a roadmap.',
    gate: 'G3 · Investment or plan approved',
    ai: 'Financial model and roadmap drafts',
    decide: 'Whether to invest',
    picture: () => (
      <div className="border border-gray-200 rounded-lg bg-white px-3 py-2.5 flex flex-col gap-2">
        <span className="text-[12px] font-semibold">Business case · proportionate to the risk</span>
        <Bar label="Cost" width="45%" />
        <Bar label="Benefit" width="70%" />
        <Bar label="Roadmap" width="85%" />
      </div>
    ),
  },
  {
    name: 'Pilot',
    caption: 'Pilot: a bounded test, judged against measures you set.',
    gate: 'G4 · Proceed, adapt or stop',
    ai: 'Pilot data analysis and report drafts',
    decide: 'Proceed, adapt or stop',
    picture: () => (
      <div className="flex flex-col gap-1.5">
        <Row right={<span className="text-[11px] text-gray-500">measured</span>}>Measure agreed at the last gate</Row>
        <Row right={<span className="text-[11px] text-gray-500">measured</span>}>Second measure, same test</Row>
        <div className="flex gap-1.5 pt-0.5">{['Proceed', 'Adapt', 'Stop'].map((x) => (<span key={x} className="text-[12px] px-3 py-1 rounded-full border border-gray-300 bg-white">{x}</span>))}</div>
      </div>
    ),
  },
  {
    name: 'Embed',
    caption: 'Embed: rollout, benefits handed to their owner, lessons kept.',
    gate: 'G5 · Ownership and benefits handed over',
    ai: 'Tracking and status report drafts',
    decide: 'That ownership has passed to you',
    picture: () => (
      <div className="border border-gray-200 rounded-lg bg-white px-3 py-2.5 flex flex-col gap-2">
        <Tick>Rollout and change support</Tick>
        <Tick>Benefits handed to a named owner</Tick>
        <Tick>Lessons recorded</Tick>
      </div>
    ),
  },
];

const Key = ({ color, title, text }: { color: string; title: string; text: string }) => (
  <div className="flex flex-col gap-0.5 min-w-0">
    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold"><span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }}></span>{title}</span>
    <span className="text-[11px] leading-snug text-gray-600">{text}</span>
  </div>
);

export default function HeroStory() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const running = !paused && !held && !reduced;
  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => setStep((s) => (s + 1) % PHASES.length), STEP_MS);
    return () => window.clearTimeout(t);
  }, [running, step]);

  // The brief types itself while Frame is showing; shown whole with reduced motion.
  useEffect(() => {
    if (step !== 0) return;
    if (reduced) { setChars(BRIEF.length); return; }
    setChars(0);
    const t = window.setInterval(() => setChars((c) => (c >= BRIEF.length ? c : c + 1)), 32);
    return () => window.clearInterval(t);
  }, [step, reduced]);

  const current = PHASES[step]!;

  return (
    <div className="relative bg-white text-gray-900 rounded-3xl p-6 border border-white/20 shadow-2xl" onMouseEnter={() => setHeld(true)} onMouseLeave={() => setHeld(false)} onFocus={() => setHeld(true)} onBlur={() => setHeld(false)}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <img src="/icon_4bird.png" alt="" className="w-11 h-11 object-contain" />
          <div>
            <h3 className="font-semibold text-lg leading-tight">How an engagement runs</h3>
            <p className="text-sm text-gray-700">People lead. AI does the legwork.</p>
            <p className="text-xs text-gray-500 mt-0.5">Illustration · six phases, a gate after each. You choose how far to go.</p>
          </div>
        </div>
        <button type="button" onClick={() => setPaused((p) => !p)} aria-label={paused ? 'Play the illustration' : 'Pause the illustration'} className="shrink-0 w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50">
          {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
        </button>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden">
        <div className="h-[290px] px-5 pt-4 relative">
          {PHASES.map((ph, i) => (
            <div key={ph.name} aria-hidden={i !== step} className={`absolute inset-x-5 top-4 flex flex-col gap-3 transition-all duration-500 ${i === step ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
              <div className="flex items-baseline justify-between gap-2"><span className="text-[20px] font-semibold leading-none">{ph.name}</span><span className="text-[12px] text-gray-500">Phase {i + 1} of {PHASES.length}</span></div>
              <div className="h-[118px]">{ph.picture(BRIEF.slice(0, chars))}</div>
              <div className="border-t border-gray-200 pt-2.5 grid grid-cols-3 gap-3">
                <Key color={ARIA} title="AI drafts" text={ph.ai} />
                <Key color={APPROVED} title="Consultant approves" text="Every AI draft, before you see it" />
                <Key color="#1A1A1B" title="You decide" text={ph.decide} />
              </div>
              <span className="text-[12px] font-semibold text-gray-700">Gate {ph.gate}</span>
            </div>
          ))}
        </div>
        <p aria-live="polite" className="m-0 px-5 py-3 min-h-[4rem] flex items-center bg-gray-900 text-white text-sm leading-snug">{current.caption}</p>
      </div>

      <div className="mt-4 grid grid-cols-6 gap-1.5" role="group" aria-label="Phases">
        {PHASES.map((ph, i) => (
          <button key={ph.name} type="button" onClick={() => { setStep(i); setPaused(true); }} aria-current={i === step ? 'step' : undefined} className="flex flex-col items-center gap-1.5 min-h-[44px] pt-1 text-[11px] text-gray-500 hover:text-gray-900">
            <span className={`h-1 w-full rounded-full ${i < step ? 'bg-gray-400' : i === step ? 'bg-gray-900' : 'bg-gray-200'}`}></span>
            <span className={i === step ? 'text-gray-900 font-semibold' : ''}>{ph.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
