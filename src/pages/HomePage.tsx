import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { INTAKE_URL, intakeUrl } from '../lib/intake';
import { PRACTICE_AREAS } from '../lib/practiceAreas';
import { consultingServices, knowledgeBase, insightsArticles } from '../data/mockData';
import HeroStory from '../components/HeroStory';

/**
 * Home page, Option A "front door" (chosen 31 Oct 2026, confirmed and built
 * 16 Nov 2026; design: canvas "Acooya UI Uplift — Review Before Build", 1a).
 *
 * The brief box: three situation cards, each a quote from the platform's
 * src/lib/intake/situations.ts word for word, linked by id (ids only in a
 * URL, never typed text). Change the card on the platform first. The line
 * under them names no consultant and says nothing about AI either way;
 * "A senior consultant reads every brief" is true of the intake today.
 *
 * Honesty rules carried over: the About band shows only claimable facts
 * (counted from the data, not typed); "approved by a person", because on AI
 * Agent engagements the client approves; the hero colour field uses Atlas
 * blue, Nova orange and Aria pink and never green; resources are undated.
 */
const SITUATIONS = [
  { id: 'ai-too-many-requests', quote: 'Everyone wants AI and we can’t tell which requests are worth doing.' },
  { id: 'de-numbers-not-trusted', quote: 'Over budget, past date, and the steering committee doesn’t trust the numbers.' },
  { id: 'om-savings', quote: 'We have to find 5% savings without breaking frontline services.' },
];

const HERO_WASH =
  'radial-gradient(60rem 30rem at 50% 18%, rgba(52,152,219,0.30), rgba(52,152,219,0) 70%), ' +
  'radial-gradient(34rem 22rem at 30% 40%, rgba(233,30,99,0.16), rgba(233,30,99,0) 70%), ' +
  'radial-gradient(34rem 22rem at 72% 42%, rgba(243,156,18,0.16), rgba(243,156,18,0) 70%), #F4F7FB';

// "October 15, 2026" in the data reads "15 Oct 2026" here.
const shortDate = (long: string) => {
  const m = /^(\w+) (\d{1,2}), (\d{4})$/.exec(long);
  return m ? `${m[2]} ${m[1]!.slice(0, 3)} ${m[3]}` : long;
};

const THUMB = [
  { tint: '#FCE4EC', ink: '#880E4F' },
  { tint: '#FDF0DC', ink: '#7A4A00' },
  { tint: '#E3F0FA', ink: '#0F4C75' },
];

const HomePage: React.FC = () => {
  const priceOf = (id: string) => consultingServices.find((s) => s.id === id)?.priceRange ?? '';
  const offeringCount = consultingServices.reduce((n, s) => n + s.offerings.length, 0);
  const scorecard = knowledgeBase.find((r) => r.id === 'kb3');

  // Phone: which practice-area card is in view, for the dots under the row.
  const rowRef = useRef<HTMLDivElement>(null);
  const [card, setCard] = useState(0);
  const onRowScroll = () => {
    const row = rowRef.current;
    if (!row) return;
    const step = row.scrollWidth / PRACTICE_AREAS.length;
    setCard(Math.min(PRACTICE_AREAS.length - 1, Math.round(row.scrollLeft / step)));
  };

  const pill = 'min-h-[44px] inline-flex items-center gap-2 px-[18px] rounded-full bg-white/70 hover:bg-white text-[#1A1A1B] text-sm transition-colors';

  return (
    <div className="font-geist text-[#1A1A1B] bg-white">
      {/* Hero: the brief box */}
      <section className="px-5 md:px-6 pb-10 md:pb-24" style={{ background: HERO_WASH }}>
        <div className="max-w-[860px] mx-auto pt-9 md:pt-[72px] text-center">
          <h1 className="text-[36px] leading-[1.08] md:text-[clamp(2.4rem,5vw,4rem)] md:leading-[1.05] font-bold tracking-[-0.02em]">Human-AI Synergy for Enterprise Transformation</h1>
          <p className="mt-3.5 md:mt-5 mx-auto max-w-[640px] font-serif4 text-lg md:text-[21px] leading-[1.45] text-[#3A3A3C]">Senior consultants and AI agents work together as one team, with human review on every output.</p>

          <div className="mt-7 md:mt-10 mx-auto max-w-[640px] bg-white md:bg-white/80 border border-[#D1D1D1] rounded-[22px] p-3.5 md:p-[18px] text-left shadow-[0_8px_30px_rgba(26,26,27,0.08)]">
            <h2 className="mb-3 text-[15px] font-semibold">What’s happening in your organisation?</h2>
            <div className="flex flex-col gap-2">
              {SITUATIONS.map((s) => (
                <a key={s.id} href={`${INTAKE_URL}?situation=${s.id}`} className="block px-3.5 py-3 rounded-xl bg-[#F4F7FB] hover:bg-[#E9EEF5] text-[#1A1A1B] text-sm leading-snug transition-colors">“{s.quote}”</a>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3.5">
              <span className="text-[13px] leading-snug text-[#555555]">Not quite your situation? Tell us in your own words. A senior consultant reads every brief.</span>
              <a href={INTAKE_URL} className="shrink-0 min-h-[44px] inline-flex items-center justify-center px-5 rounded-full bg-[#1A1A1B] hover:bg-black text-white text-sm font-semibold transition-colors">Start a Brief</a>
            </div>
          </div>

          {/* Desktop: three ways in. Phone: start from a practice area. */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 mt-6">
            <Link to="/engagements" className={pill}>How engagements work</Link>
            <Link to="/marketplace" className={pill}>Meet the consultants</Link>
            <Link to="/marketplace?tab=ai" className={pill}><span className="w-2 h-2 rounded-full bg-[#E91E63]" aria-hidden="true"></span>Meet Aria, our first AI agent</Link>
          </div>
          <div className="md:hidden flex gap-2 overflow-x-auto mt-[18px] -mx-5 px-5 pb-1" aria-label="Start a brief by practice area">
            {PRACTICE_AREAS.map((area) => (
              <a key={area.id} href={intakeUrl(area.id)} className="flex-none min-h-[44px] inline-flex items-center gap-2 px-3.5 rounded-full bg-white/80 text-[#1A1A1B] text-sm">
                <span className="w-2 h-2 rounded-sm" style={{ background: area.dot }} aria-hidden="true"></span>{area.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* The story under the brief box: the interim for the film (13 Nov 2026) */}
      <section className="hidden md:block px-6 pt-[72px]" aria-label="How an engagement runs">
        <div className="max-w-[640px] mx-auto rounded-3xl shadow-[0_8px_30px_rgba(26,26,27,0.08)] border border-[#E4E4E4]">
          <HeroStory />
        </div>
      </section>

      {/* Four practice areas: a grid on a desktop, a swipe row on a phone */}
      <section id="areas" className="max-w-7xl mx-auto pt-10 md:pt-[72px] pb-2 md:pb-6 md:px-6 lg:px-8 md:text-center">
        <div className="flex items-baseline justify-between px-5 md:px-0 md:block">
          <h2 className="text-[22px] md:text-[28px] font-semibold">Four practice areas</h2>
          <span className="md:hidden text-[13px] text-[#555555]">Swipe</span>
        </div>
        <p className="hidden md:block mt-2 mb-8 text-base text-[#555555]">Each starts as a fixed-fee Sprint and can grow into a Full Engagement.</p>
        <div ref={rowRef} onScroll={onRowScroll} className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-px-5 px-5 pt-4 pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:overflow-visible md:p-0 text-left">
          {PRACTICE_AREAS.map((area) => (
            <Link key={area.id} to={'/services#' + area.id} className="flex-none w-[280px] snap-start md:w-auto flex flex-col border border-[#E4E4E4] rounded-[20px] overflow-hidden bg-white text-[#1A1A1B] hover:border-[#BDBDBD] transition-colors">
              <div className="h-[130px] md:h-[150px] flex items-end p-[18px] md:p-5" style={{ background: area.tint }}>
                <span className="font-serif4 text-[28px] md:text-[30px] leading-[1.05]" style={{ color: area.ink }}>{area.title}</span>
              </div>
              <div className="flex flex-col gap-2 px-[18px] md:px-5 pt-3.5 md:pt-[18px] pb-[18px] md:pb-[22px]">
                <span className="text-sm leading-normal text-[#3A3A3C]">{area.blurb}</span>
                <span className="text-[13px] text-[#555555]">{priceOf(area.id)}</span>
              </div>
            </Link>
          ))}
        </div>
        <div aria-hidden="true" className="md:hidden flex justify-center gap-1.5 pt-2">
          {PRACTICE_AREAS.map((area, i) => (
            <span key={area.id} className={`h-1.5 rounded-full transition-all ${i === card ? 'w-[18px] bg-[#1A1A1B]' : 'w-1.5 bg-[#D1D1D1]'}`}></span>
          ))}
        </div>
      </section>

      {/* Latest thinking */}
      <section id="thinking" className="max-w-[1040px] mx-auto px-5 md:px-6 pt-9 md:pt-[72px] pb-2 md:pb-6">
        <h2 className="text-[22px] md:text-[28px] font-semibold md:text-center">Latest thinking</h2>
        <p className="hidden md:block mt-2 mb-9 text-center text-base text-[#555555]">Insights · Templates · Methods we actually use</p>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-14 md:gap-y-7 mt-1.5 md:mt-0">
          {insightsArticles.slice(0, 3).map((insight, i) => (
            <Link key={insight.id} to={'/insight/' + insight.id} className="group flex items-center md:items-start gap-3.5 md:gap-5 md:justify-between py-3.5 md:py-0 border-b border-[#F0F0EE] md:border-0 text-[#1A1A1B]">
              <span className="order-2 md:order-1 flex flex-col gap-1 md:gap-2.5">
                <span className="text-[15px] md:text-base font-semibold leading-[1.3] group-hover:underline">{insight.title}</span>
                <span className="text-xs md:text-[13px] text-[#555555]">Insight · {shortDate(insight.date)}</span>
              </span>
              <span className="order-1 md:order-2 flex-none w-14 h-14 md:w-[88px] md:h-[88px] rounded-xl md:rounded-[14px] flex items-center justify-center font-serif4 text-xs md:text-[15px]" style={{ background: THUMB[i % THUMB.length]!.tint, color: THUMB[i % THUMB.length]!.ink }}>Insight</span>
            </Link>
          ))}
          {scorecard && (
            <Link to={'/resource/' + scorecard.id} className="group flex items-center md:items-start gap-3.5 md:gap-5 md:justify-between py-3.5 md:py-0 text-[#1A1A1B]">
              <span className="order-2 md:order-1 flex flex-col gap-1 md:gap-2.5">
                <span className="text-[15px] md:text-base font-semibold leading-[1.3] group-hover:underline">{scorecard.title}</span>
                <span className="text-xs md:text-[13px] text-[#555555]">Resource · leads to the {scorecard.relatedService.label}</span>
              </span>
              <span className="order-1 md:order-2 flex-none w-14 h-14 md:w-[88px] md:h-[88px] rounded-xl md:rounded-[14px] flex items-center justify-center font-serif4 text-xs md:text-[15px] bg-[#EDEDED] text-[#1A1A1B]">Resource</span>
            </Link>
          )}
        </div>
        <div className="text-center mt-5 md:mt-9">
          <Link to="/knowledge" className="inline-flex items-center min-h-[44px] px-[18px] border border-[#D1D1D1] rounded-full text-sm text-[#1A1A1B] hover:bg-[#F4F7FB] transition-colors">View all {knowledgeBase.length} resources and {insightsArticles.length} insights</Link>
        </div>
      </section>

      {/* About band: claimable facts only */}
      <section id="how" className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 pt-9 md:pt-[88px] pb-10 md:pb-24 grid md:grid-cols-2 gap-4 md:gap-12 items-start">
        <div>
          <p className="text-[40px] md:text-[56px] font-bold tracking-[-0.02em] leading-none">Acooya</p>
          <p className="mt-1.5 md:mt-3 font-serif4 text-[19px] md:text-2xl leading-[1.3]">A senior-led, AI-augmented consultancy in Sydney</p>
        </div>
        <div className="flex flex-col gap-5 md:gap-7">
          <p className="text-[15px] md:text-base leading-[1.65] text-[#3A3A3C]">Every engagement runs through six phases, Frame, Discover, Design, Decide, Pilot and Embed, with a decision gate after each. Agents produce the evidence; people make the decisions. Nothing an AI drafts reaches you until a person has approved it.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[18px] md:gap-5">
            <div><p className="font-serif4 text-[30px] md:text-4xl leading-tight">{PRACTICE_AREAS.length}</p><p className="mt-0.5 md:mt-1 text-[13px] text-[#555555]">Practice areas</p></div>
            <div><p className="font-serif4 text-[30px] md:text-4xl leading-tight">{offeringCount}</p><p className="mt-0.5 md:mt-1 text-[13px] text-[#555555]">Launch offerings</p></div>
            <div><p className="font-serif4 text-[30px] md:text-4xl leading-tight whitespace-nowrap">G0–G5</p><p className="mt-0.5 md:mt-1 text-[13px] text-[#555555]">Decision gates per engagement</p></div>
            <div><p className="font-serif4 text-[30px] md:text-4xl leading-tight">Every</p><p className="mt-0.5 md:mt-1 text-[13px] text-[#555555]">AI output approved by a person, enforced in the database</p></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
