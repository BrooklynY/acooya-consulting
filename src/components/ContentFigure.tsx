import React from 'react';
import { ShieldCheck, KeyRound, ArrowLeft, ArrowRight } from 'lucide-react';

/**
 * Drawn figures for insights and resources.
 *
 * A section opts in with `"figure": "<id>"` in mockData. Figures are built
 * from text and boxes, not images, so they print, scale and read aloud.
 * Every number shown here must also appear, with its source, in the
 * article text the figure sits in.
 *
 * Brand colours: Atlas blue #3498DB for phases and adoption, Nova orange
 * #F39C12 for results, charcoal #1A1A1B / #555555 / #D1D1D1. The green
 * #2ECC71 is used only on the quality key, which is the human-approval
 * moment that colour is reserved for.
 */

const BLUE = '#3498DB';
const ORANGE = '#F39C12';
const GREEN = '#2ECC71';
const CHARCOAL = '#1A1A1B';
const MID = '#555555';
const LIGHT = '#D1D1D1';

const Frame: React.FC<{ caption: string; children: React.ReactNode }> = ({ caption, children }) => (
  <figure className="my-6 rounded-xl border border-gray-200 bg-white p-4 md:p-6">
    {children}
    <figcaption className="mt-4 border-t border-gray-100 pt-3 text-xs md:text-sm leading-relaxed" style={{ color: MID }}>
      {caption}
    </figcaption>
  </figure>
);

/* ------------------------------------------------------------------ */
/* 1. Six phases, a gate after each, two keys at every gate             */
/* ------------------------------------------------------------------ */

const PHASES = [
  { name: 'Frame', gets: 'Engagement charter', gate: 'G0', gateName: 'Charter approved' },
  { name: 'Discover', gets: 'Current state and baseline', gate: 'G1', gateName: 'Findings accepted' },
  { name: 'Design', gets: 'Options paper', gate: 'G2', gateName: 'Preferred option chosen' },
  { name: 'Decide', gets: 'Business case or roadmap', gate: 'G3', gateName: 'Investment or plan approved' },
  { name: 'Pilot', gets: 'Bounded test against agreed measures', gate: 'G4', gateName: 'Proceed, adapt or stop' },
  { name: 'Embed', gets: 'Rollout and benefits handover', gate: 'G5', gateName: 'Ownership and benefits handed over' },
];

const SixPhases: React.FC = () => (
  <Frame caption="Every Acooya engagement uses the same six phases, at a depth agreed in the charter. Each phase ends at a gate that needs two approvals before the next begins.">
    <p className="mb-4 text-sm font-semibold" style={{ color: CHARCOAL }}>Six phases, a gate after each</p>

    {/* Depth brackets, wide screens only */}
    <div className="mb-2 hidden xl:grid grid-cols-6 gap-2 text-[11px] font-medium">
      <div className="col-span-2 rounded-md px-2 py-1 text-center" style={{ backgroundColor: '#EBF5FB', color: CHARCOAL }}>Sprint · 2 weeks</div>
      <div className="col-span-2" />
      <div className="col-span-2" />
    </div>
    <div className="mb-3 hidden xl:grid grid-cols-6 gap-2 text-[11px] font-medium">
      <div className="col-span-4 rounded-md px-2 py-1 text-center" style={{ backgroundColor: '#D6EAF8', color: CHARCOAL }}>Full Engagement · 4 weeks</div>
      <div className="col-span-2 rounded-md border border-dashed px-2 py-1 text-center" style={{ borderColor: LIGHT, color: MID }}>When you want them</div>
    </div>

    <ol className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 gap-2">
      {PHASES.map((p, i) => (
        <li key={p.name} className="flex flex-col">
          <div className="flex-1 rounded-lg border bg-white px-3 py-3" style={{ borderColor: LIGHT, borderTopWidth: 4, borderTopStyle: i < 4 ? 'solid' : 'dashed', borderTopColor: BLUE }}>
            <p className="text-[11px] font-medium" style={{ color: MID }}>Phase {i + 1}</p>
            <p className="text-base font-bold" style={{ color: CHARCOAL }}>{p.name}</p>
            <p className="mt-1 text-xs leading-snug" style={{ color: MID }}>{p.gets}</p>
          </div>
          <div className="mt-2 rounded-lg px-2 py-2 xl:min-h-[6rem]" style={{ backgroundColor: '#F4F4F4' }}>
            <span className="inline-block rounded px-1.5 py-0.5 text-[11px] font-bold text-white" style={{ backgroundColor: CHARCOAL }}>{p.gate}</span>
            <p className="mt-1 text-[11px] leading-snug" style={{ color: CHARCOAL }}>{p.gateName}</p>
          </div>
        </li>
      ))}
    </ol>

    <p className="mt-3 text-xs xl:hidden" style={{ color: MID }}>Sprint (2 weeks): Frame and Discover. Full Engagement (4 weeks): Frame to Decide. Pilot and Embed follow when you want them.</p>

    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      <div className="flex items-start gap-3 rounded-lg px-3 py-3" style={{ backgroundColor: '#EAFAF1' }}>
        <ShieldCheck className="h-5 w-5 flex-shrink-0" style={{ color: GREEN }} aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold" style={{ color: CHARCOAL }}>Quality key</p>
          <p className="text-xs leading-snug" style={{ color: MID }}>A named consultant approves every AI-drafted output before you see it.</p>
        </div>
      </div>
      <div className="flex items-start gap-3 rounded-lg px-3 py-3" style={{ backgroundColor: '#F4F4F4' }}>
        <KeyRound className="h-5 w-5 flex-shrink-0" style={{ color: CHARCOAL }} aria-hidden="true" />
        <div>
          <p className="text-sm font-semibold" style={{ color: CHARCOAL }}>Decision key</p>
          <p className="text-xs leading-snug" style={{ color: MID }}>Your sponsor approves the outcome of the phase before the next one begins.</p>
        </div>
      </div>
    </div>
  </Frame>
);

/* ------------------------------------------------------------------ */
/* 2. The automation line                                               */
/* ------------------------------------------------------------------ */

const LANES = [
  { name: 'Human-only', rule: 'A person decides.', example: 'a fraud decision, or a finding on the cause of a safety incident.', fill: CHARCOAL, text: '#FFFFFF', sub: 'rgba(255,255,255,0.85)' },
  { name: 'AI-assisted', rule: 'AI drafts, a person approves.', example: 'a reply to a complaint, or a first classification of a case.', fill: '#D6EAF8', text: CHARCOAL, sub: MID },
  { name: 'Automated', rule: 'Runs without a person, and can be reversed.', example: 'retrieving a policy, or routing a case to the right team.', fill: '#FFFFFF', text: CHARCOAL, sub: MID },
];

const AutomationLine: React.FC = () => (
  <Frame caption="The line is set activity by activity, and the business signs it. It is a decision about consequences, not a property of the technology.">
    <p className="mb-3 text-sm font-semibold" style={{ color: CHARCOAL }}>Where the human line sits</p>

    <div className="mb-3 flex items-center justify-between gap-2 text-[11px] font-medium" style={{ color: MID }}>
      <span className="flex items-center gap-1"><ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />Higher consequence, hard to reverse</span>
      <span className="flex items-center gap-1 text-right">Lower consequence, reversible<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></span>
    </div>

    <ol className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {LANES.map((l) => (
        <li key={l.name} className="rounded-lg border px-3 py-3" style={{ backgroundColor: l.fill, borderColor: l.fill === '#FFFFFF' ? LIGHT : l.fill }}>
          <p className="text-base font-bold" style={{ color: l.text }}>{l.name}</p>
          <p className="mt-1 text-sm font-medium" style={{ color: l.text }}>{l.rule}</p>
          <p className="mt-2 text-xs leading-snug" style={{ color: l.sub }}>For example: {l.example}</p>
        </li>
      ))}
    </ol>

    <div className="mt-3 rounded-lg border border-dashed px-3 py-3" style={{ borderColor: MID }}>
      <p className="text-sm font-semibold" style={{ color: CHARCOAL }}>Rules stay outside the model</p>
      <p className="text-xs leading-snug" style={{ color: MID }}>Matching rules, tolerances and approval limits live in systems and decision tables an auditor can read, whichever lane the activity is in.</p>
    </div>
  </Frame>
);

/* ------------------------------------------------------------------ */
/* 3. Adoption vs results                                               */
/* ------------------------------------------------------------------ */

const SURVEYS = [
  {
    heading: 'All organisations',
    source: 'McKinsey, The state of AI in 2025',
    bars: [
      { label: 'Use AI regularly in at least one business function', value: 88, color: BLUE },
      { label: 'Report any impact on earnings (EBIT) from AI', value: 39, color: ORANGE },
    ],
  },
  {
    heading: 'Professional services',
    source: 'Thomson Reuters Institute, 2026 AI in Professional Services Report',
    bars: [
      { label: 'Use AI organisation-wide', value: 40, color: BLUE },
      { label: 'Know their organisation tracks return on AI investment', value: 18, color: ORANGE },
    ],
  },
];

const AdoptionResults: React.FC = () => (
  <Frame caption="Two surveys of different populations, so compare within each pair, not across them. Blue is use; orange is measured value.">
    <p className="mb-4 text-sm font-semibold" style={{ color: CHARCOAL }}>Use is common; measured value is not</p>
    <div className="space-y-5">
      {SURVEYS.map((s) => (
        <div key={s.heading}>
          <p className="text-sm font-semibold" style={{ color: CHARCOAL }}>{s.heading}</p>
          <p className="mb-2 text-[11px]" style={{ color: MID }}>{s.source}</p>
          <div className="space-y-2">
            {s.bars.map((b) => (
              <div key={b.label}>
                <div className="mb-1 flex items-baseline justify-between gap-3">
                  <span className="text-xs leading-snug" style={{ color: CHARCOAL }}>{b.label}</span>
                  <span className="text-sm font-bold tabular-nums" style={{ color: CHARCOAL }}>{b.value}%</span>
                </div>
                <div className="h-3 w-full rounded-full" style={{ backgroundColor: '#F1F1F1' }} role="presentation">
                  <div className="h-3 rounded-full" style={{ width: b.value + '%', backgroundColor: b.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Frame>
);

/* ------------------------------------------------------------------ */

const FIGURES: Record<string, React.FC> = {
  'six-phases': SixPhases,
  'automation-line': AutomationLine,
  'adoption-results': AdoptionResults,
};

const ContentFigure: React.FC<{ id?: string }> = ({ id }) => {
  if (!id) return null;
  const Figure = FIGURES[id];
  return Figure ? <Figure /> : null;
};

export default ContentFigure;
