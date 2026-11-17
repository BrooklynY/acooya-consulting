import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { INTAKE_URL } from '../lib/intake';
import { PRACTICE_AREAS } from '../lib/practiceAreas';
import ScrollManager from './ScrollManager';
import { LauncherPopover, LauncherSheet } from './SiteLauncher';

/**
 * Site chrome (home page direction, 31 Oct 2026; built 16 Nov 2026): the mark
 * beside the ACOOYA wordmark, five links, Sign in, Get Started and the grid
 * launcher; a trimmed footer with one SOC 2 line. The mark is Brooklyn's own
 * export (public/acooya-mark-sm.png, the file the platform header uses).
 */
const LOGIN_URL = 'https://app.acooyaconsulting.com/login';
const LINKEDIN_URL = 'https://www.linkedin.com/company/acooya-consulting/';

const NAV = [
  { path: '/services', label: 'Services' },
  { path: '/marketplace', label: 'Consultants' },
  { path: '/engagements', label: 'How engagements work' },
  { path: '/knowledge', label: 'Resources' },
  { path: '/pricing', label: 'Pricing' },
];

const Wordmark = ({ light = false }: { light?: boolean }) => (
  <span className="flex items-center gap-2.5">
    <img src="/acooya-mark-sm.png" alt="" className="w-7 h-7" />
    <span className={`font-bold tracking-[0.12em] text-[15px] ${light ? 'text-white' : 'text-[#1A1A1B]'}`}>ACOOYA</span>
  </span>
);

const footerLink = 'text-[#D1D1D1] hover:text-white transition-colors';

const ServicesLinks = () => (
  <>
    {PRACTICE_AREAS.map((area) => (
      <Link key={area.id} to={'/services#' + area.id} className={footerLink}>{area.title}</Link>
    ))}
  </>
);

const AcooyaLinks = () => (
  <>
    <Link to="/engagements#overview" className={footerLink}>How engagements work</Link>
    <Link to="/marketplace" className={footerLink}>Consultants</Link>
    <Link to="/knowledge#overview" className={footerLink}>Resources &amp; insights</Link>
    <Link to="/pricing#overview" className={footerLink}>Pricing</Link>
    <Link to="/about#overview" className={footerLink}>About</Link>
    <a href={LOGIN_URL} className={footerLink}>Sign in</a>
  </>
);

const ContactLinks = () => (
  <>
    <Link to="/get-started" className="text-white font-semibold hover:underline">Get Started</Link>
    <a href={INTAKE_URL} className={footerLink}>Start a Brief</a>
    <a href="mailto:contact@acooyaconsulting.com" className={footerLink}>contact@acooyaconsulting.com</a>
    <span>+61 428 112 376</span>
    <span>Sydney, NSW, Australia</span>
    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={footerLink}>LinkedIn</a>
  </>
);

const Layout: React.FC = () => {
  const [launcherOpen, setLauncherOpen] = useState(false);
  const location = useLocation();
  const launcherRef = useRef<HTMLDivElement>(null);
  const isHome = location.pathname === '/';
  const isActive = (path: string) => location.pathname === path;

  // The launcher closes on navigation, on Escape and on a click outside it.
  useEffect(() => { setLauncherOpen(false); }, [location.pathname, location.search, location.hash]);
  useEffect(() => {
    if (!launcherOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLauncherOpen(false); };
    const onDown = (e: MouseEvent) => {
      // Desktop only: on a phone the sheet has its own backdrop and close button.
      if (!window.matchMedia('(min-width: 768px)').matches) return;
      if (launcherRef.current && !launcherRef.current.contains(e.target as Node)) setLauncherOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    // On a phone the sheet covers the page, so the page behind it stops scrolling.
    const phone = window.matchMedia('(max-width: 767px)').matches;
    const previous = document.body.style.overflow;
    if (phone) document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
      if (phone) document.body.style.overflow = previous;
    };
  }, [launcherOpen]);

  return (
    <div className="min-h-screen bg-white">
      <ScrollManager />

      <header className={`sticky top-0 z-50 backdrop-blur-md font-geist ${isHome ? 'bg-[#F4F7FB]/85' : 'bg-white/90 border-b border-[#ECECEA]'}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-16 md:h-[72px] flex items-center gap-4">
          <Link to="/" aria-label="Acooya Consulting, home" className="flex items-center"><Wordmark /></Link>

          <nav aria-label="Main" className="hidden lg:flex items-center gap-1 ml-6">
            {NAV.map((item) => (
              <Link key={item.path} to={item.path} aria-current={isActive(item.path) ? 'page' : undefined} className={`px-3 py-2.5 rounded-lg text-sm transition-colors hover:text-[#1A1A1B] hover:bg-black/5 ${isActive(item.path) ? 'text-[#1A1A1B] font-semibold' : 'text-[#3A3A3C]'}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div ref={launcherRef} className="ml-auto flex items-center gap-1.5 md:gap-2 relative">
            <a href={LOGIN_URL} className="px-2 md:px-3.5 py-3 text-sm text-[#3A3A3C] hover:text-[#1A1A1B]">Sign in</a>
            <Link to="/get-started" className="hidden sm:inline-flex items-center min-h-[44px] px-4 rounded-full bg-[#1A1A1B] text-white text-sm font-semibold hover:bg-black transition-colors">Get Started</Link>
            <button type="button" aria-label="Acooya menu" aria-expanded={launcherOpen} onClick={() => setLauncherOpen((o) => !o)} className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${launcherOpen ? 'bg-[#E3E8EF]' : isHome ? 'bg-white/75 hover:bg-white' : 'bg-[#F2F2F0] hover:bg-[#E9E9E6]'}`}>
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><g fill="#3A3A3C"><circle cx="4" cy="4" r="2" /><circle cx="10" cy="4" r="2" /><circle cx="16" cy="4" r="2" /><circle cx="4" cy="10" r="2" /><circle cx="10" cy="10" r="2" /><circle cx="16" cy="10" r="2" /><circle cx="4" cy="16" r="2" /><circle cx="10" cy="16" r="2" /><circle cx="16" cy="16" r="2" /></g></svg>
            </button>
            {launcherOpen && <LauncherPopover onClose={() => setLauncherOpen(false)} />}
          </div>
        </div>
      </header>
      {launcherOpen && <LauncherSheet onClose={() => setLauncherOpen(false)} />}

      <main className="min-h-screen flex flex-col text-[#1A1A1B]">
        <Outlet />
      </main>

      <footer className="bg-[#1A1A1B] text-[#D1D1D1] font-geist">
        {/* Desktop and tablet: four columns */}
        <div className="hidden md:block max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-3.5">
              <Link to="/" aria-label="Acooya Consulting, home" className="flex items-center"><Wordmark light /></Link>
              <p className="font-serif4 text-base leading-normal text-[#D1D1D1]">Human-AI Synergy for Enterprise Transformation</p>
              <p className="text-[13px] text-[#A8A8A8]">Designed to SOC 2 standards · Privacy Act aligned</p>
            </div>
            <nav aria-label="Services" className="flex flex-col gap-2.5 text-sm">
              <p className="mb-1 font-semibold text-white">Services</p>
              <ServicesLinks />
            </nav>
            <nav aria-label="Acooya" className="flex flex-col gap-2.5 text-sm">
              <p className="mb-1 font-semibold text-white">Acooya</p>
              <AcooyaLinks />
            </nav>
            <div className="flex flex-col gap-2.5 text-sm">
              <p className="mb-1 font-semibold text-white">Get in touch</p>
              <ContactLinks />
            </div>
          </div>
          <div className="mt-12 pt-5 border-t border-[#333335] flex flex-wrap justify-between gap-3 text-[13px] text-[#A8A8A8]">
            <span>© 2026 Acooya Pty Ltd, trading as Acooya Consulting</span>
            <span className="flex flex-wrap gap-5">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            </span>
          </div>
        </div>

        {/* Phone: one button, then three sections that open on tap */}
        <div className="md:hidden px-5 pt-8 pb-7 flex flex-col gap-5 text-sm">
          <Link to="/" aria-label="Acooya Consulting, home" className="flex items-center"><Wordmark light /></Link>
          <Link to="/get-started" className="min-h-[48px] flex items-center justify-center rounded-full bg-white text-[#1A1A1B] font-semibold">Get Started</Link>
          <details className="border-t border-[#333335] pt-3.5">
            <summary className="min-h-[32px] text-white font-semibold cursor-pointer">Services</summary>
            <div className="flex flex-col gap-3 pt-2 pb-1"><ServicesLinks /></div>
          </details>
          <details className="border-t border-[#333335] pt-3.5">
            <summary className="min-h-[32px] text-white font-semibold cursor-pointer">Acooya</summary>
            <div className="flex flex-col gap-3 pt-2 pb-1"><AcooyaLinks /></div>
          </details>
          <details className="border-t border-[#333335] pt-3.5">
            <summary className="min-h-[32px] text-white font-semibold cursor-pointer">Get in touch</summary>
            <div className="flex flex-col gap-3 pt-2 pb-1"><ContactLinks /></div>
          </details>
          <div className="pt-3.5 border-t border-[#333335] text-xs text-[#A8A8A8] leading-relaxed">
            <p>Designed to SOC 2 standards · Privacy Act aligned</p>
            <p>© 2026 Acooya Pty Ltd, trading as Acooya Consulting</p>
            <p className="flex gap-4 mt-1">
              <Link to="/privacy-policy" className="py-2 hover:text-white">Privacy</Link>
              <Link to="/terms-of-service" className="py-2 hover:text-white">Terms</Link>
              <Link to="/cookie-policy" className="py-2 hover:text-white">Cookies</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
