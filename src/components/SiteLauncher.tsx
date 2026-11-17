/**
 * The grid launcher (home page direction, 31 Oct 2026): the four practice
 * areas on top, the rest of the site below. On a desktop it is a popover
 * under the nine-dot button; on a phone it is the menu, as a bottom sheet.
 * The sheet is rendered outside the header: the header's backdrop blur would
 * otherwise confine a fixed-position child to the header's own box.
 */
import { Link } from 'react-router-dom';
import { BarChart3, BookOpen, Cpu, CreditCard, Flag, Info, Layers, Route, Users, X, PenLine } from 'lucide-react';
import { INTAKE_URL } from '../lib/intake';
import { PRACTICE_AREAS } from '../lib/practiceAreas';

const AREA_ICON = { 'operating-model': Layers, 'delivery-enablement': Flag, 'insight-reporting': BarChart3, 'ai-transformation': Cpu } as const;
const LOGIN_URL = 'https://app.acooyaconsulting.com/login';

function AreaGrid({ onClose, size }: { onClose: () => void; size: number }) {
  return (
    <div className="bg-[#F4F7FB] rounded-[22px] px-3 pt-4 pb-3">
      <p className="mb-2.5 ml-2 text-[13px] font-semibold text-[#555555]">Practice areas</p>
      <div className="grid grid-cols-2 gap-1.5">
        {PRACTICE_AREAS.map((area) => {
          const Icon = AREA_ICON[area.id];
          return (
            <Link key={area.id} to={'/services#' + area.id} onClick={onClose} className="flex flex-col items-center gap-2 px-1.5 py-3.5 rounded-2xl text-[13px] text-center text-[#1A1A1B] hover:bg-white transition-colors">
              <span className="rounded-full flex items-center justify-center" style={{ width: size, height: size, background: area.tint }}>
                <Icon className="w-6 h-6" style={{ color: area.ink }} strokeWidth={1.8} aria-hidden="true" />
              </span>
              {area.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function LauncherPopover({ onClose }: { onClose: () => void }) {
  const tile = 'flex flex-col items-center gap-1.5 px-1 py-3 rounded-2xl text-xs text-center text-[#1A1A1B] hover:bg-[#F4F7FB] transition-colors';
  const icon = 'w-[22px] h-[22px] text-[#3A3A3C]';
  return (
    <div role="dialog" aria-label="Acooya menu" className="hidden md:block absolute top-14 right-0 w-[340px] bg-white rounded-[28px] shadow-[0_12px_40px_rgba(26,26,27,0.16)] p-3.5 z-50 font-geist">
      <AreaGrid onClose={onClose} size={48} />
      <div className="grid grid-cols-3 gap-1 px-1 pt-3 pb-1">
        <Link to="/marketplace" onClick={onClose} className={tile}><Users className={icon} strokeWidth={1.8} aria-hidden="true" />Consultants</Link>
        <Link to="/knowledge" onClick={onClose} className={tile}><BookOpen className={icon} strokeWidth={1.8} aria-hidden="true" />Resources</Link>
        <Link to="/engagements" onClick={onClose} className={tile}><Route className={icon} strokeWidth={1.8} aria-hidden="true" />How it runs</Link>
        <Link to="/pricing" onClick={onClose} className={tile}><CreditCard className={icon} strokeWidth={1.8} aria-hidden="true" />Pricing</Link>
        <Link to="/about" onClick={onClose} className={tile}><Info className={icon} strokeWidth={1.8} aria-hidden="true" />About</Link>
        <a href={INTAKE_URL} onClick={onClose} className={tile}><PenLine className={icon} strokeWidth={1.8} aria-hidden="true" />Start a Brief</a>
      </div>
    </div>
  );
}

export function LauncherSheet({ onClose }: { onClose: () => void }) {
  const row = 'min-h-[48px] flex items-center justify-between px-2 border-b border-[#F0F0EE] text-base text-[#1A1A1B]';
  const chevron = <span aria-hidden="true" className="text-[#555555]">›</span>;
  return (
    <div className="md:hidden fixed inset-0 z-[70] font-geist">
      <button type="button" aria-label="Close menu" onClick={onClose} className="absolute inset-0 w-full h-full bg-[rgba(26,26,27,0.35)]" />
      <div role="dialog" aria-label="Acooya menu" className="absolute inset-x-0 bottom-0 top-14 bg-white rounded-t-[28px] px-4 pt-2.5 pb-6 flex flex-col gap-4 overflow-y-auto shadow-[0_-8px_30px_rgba(26,26,27,0.18)]">
        <span aria-hidden="true" className="self-center w-10 h-[5px] rounded-full bg-[#D1D1D1] shrink-0" />
        <div className="flex items-center justify-between shrink-0">
          <span className="flex items-center gap-2"><img src="/acooya-mark-sm.png" alt="" className="w-6 h-6" /><span className="font-bold tracking-[0.12em] text-sm text-[#1A1A1B]">ACOOYA</span></span>
          <button type="button" aria-label="Close menu" onClick={onClose} className="w-11 h-11 rounded-full bg-[#F2F2F0] flex items-center justify-center"><X className="w-[18px] h-[18px] text-[#3A3A3C]" aria-hidden="true" /></button>
        </div>
        <div className="shrink-0"><AreaGrid onClose={onClose} size={52} /></div>
        <nav aria-label="Explore" className="flex flex-col shrink-0">
          <Link to="/marketplace" onClick={onClose} className={row}>Consultants{chevron}</Link>
          <Link to="/engagements" onClick={onClose} className={row}>How engagements work{chevron}</Link>
          <Link to="/marketplace?tab=ai" onClick={onClose} className={row}>Meet Aria{chevron}</Link>
          <Link to="/knowledge" onClick={onClose} className={row}>Resources &amp; insights{chevron}</Link>
          <Link to="/pricing" onClick={onClose} className={row}>Pricing{chevron}</Link>
          <Link to="/about" onClick={onClose} className={row + ' border-b-0'}>About{chevron}</Link>
        </nav>
        <div className="mt-auto grid grid-cols-2 gap-2.5 shrink-0">
          <a href={LOGIN_URL} className="min-h-[48px] flex items-center justify-center border border-[#D1D1D1] rounded-full text-[15px] text-[#1A1A1B]">Sign in</a>
          <Link to="/get-started" onClick={onClose} className="min-h-[48px] flex items-center justify-center rounded-full bg-[#1A1A1B] text-white text-[15px] font-semibold">Get Started</Link>
        </div>
      </div>
    </div>
  );
}
