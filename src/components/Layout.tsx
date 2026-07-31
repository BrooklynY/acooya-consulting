import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X, Shield, Lock, LogIn, UserPlus, CreditCard } from 'lucide-react';

const Logo = () => (
  <img src="/logo_white.png" alt="Acooya Consulting" className="h-20 w-auto" />
);

const FooterLogo = () => (
  <img src="/logo_dark.png" alt="Acooya Consulting" className="h-20 w-auto" />
);

const Layout: React.FC = ({ children }: { children?: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/marketplace', label: 'Marketplace' },
    { path: '/engagements', label: 'Engagements' },
    { path: '/knowledge', label: 'Resources' },
    { path: '/about', label: 'About' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <Shield className="w-4 h-4" />
          <span>Designed to SOC 2 Type II standards — enterprise-grade security by design</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/pricing"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <CreditCard className="w-4 h-4" />
                Pricing
              </Link>

              <a
                href="https://app.acooyaconsulting.com/login"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </a>
              <Link
                to="/get-started"
                className="btn btn-primary text-sm"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-3 rounded-lg font-medium ${
                      isActive(item.path)
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200 mt-4 space-y-2">
                  <Link
                    to="/pricing"
                    className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <CreditCard className="w-5 h-5" />
                    Pricing
                  </Link>
                  <a
                    href="https://app.acooyaconsulting.com/login"
                    className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LogIn className="w-5 h-5" />
                    Sign In
                  </a>
                  <Link
                    to="/get-started"
                    className="btn btn-primary w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <UserPlus className="w-5 h-5 mr-2" />
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="mb-6">
                <FooterLogo />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bridging human expertise with AI intelligence to deliver exceptional consulting outcomes for forward-thinking organisations.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Lock className="w-4 h-4" />
                  Designed to SOC 2 Standards
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4" />
                  Privacy Act & GDPR Aligned
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/services#operating-model" className="hover:text-white transition-colors">Operating Model</Link></li>
                <li><Link to="/services#delivery-enablement" className="hover:text-white transition-colors">Delivery Enablement</Link></li>
                <li><Link to="/services#insight-reporting" className="hover:text-white transition-colors">Insight & Reporting</Link></li>
                <li><Link to="/marketplace" className="hover:text-white transition-colors">Human Consultants</Link></li>
                <li><Link to="/marketplace?tab=ai" className="hover:text-white transition-colors">AI Agents</Link></li>
              </ul>
            </div>

            {/* Platform */}
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/engagements#overview" className="hover:text-white transition-colors">Engagement Portal</Link></li>
                <li><a href="https://app.acooyaconsulting.com/login" className="hover:text-white transition-colors">Customer Portal</a></li>
                <li><Link to="/knowledge#overview" className="hover:text-white transition-colors">Resources</Link></li>
                <li><Link to="/pricing#overview" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/about#overview" className="hover:text-white transition-colors">About Acooya</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-400">
               <li><a href="mailto:contact@acooyaconsulting.com" className="hover:text-white transition-colors">contact@acooyaconsulting.com</a></li>
                <li>+61 428 112 376</li>
                <li>Sydney, NSW, Australia</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <a href="https://www.linkedin.com/company/acooya-consulting/?viewAsMember=true" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2026 Acooya Consulting. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;