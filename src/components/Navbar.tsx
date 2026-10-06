import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, MessageSquare } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('collection');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section for subtle blue indicator
      const sections = ['collection', 'why-tutyticks', 'about', 'instagram'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'collection', label: 'Watches', href: '#collection' },
    { id: 'why-tutyticks', label: 'Why TUTYTICKS', href: '#why-tutyticks' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'instagram', label: 'Instagram', href: '#instagram' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080A0D]/90 backdrop-blur-md border-b border-studio-border py-3.5 shadow-subtle'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Name with subtle mechanical indicator */}
            <a
              href="#"
              className="group flex items-center space-x-3 focus:outline-none"
              aria-label="TUTYTICKS Home"
            >
              {/* Miniature watch dial with smooth continuous second hand */}
              <div className="relative w-6 h-6 rounded-full border border-studio-border bg-studio-surface/80 flex items-center justify-center shrink-0">
                <span className="w-1 h-1 rounded-full bg-watchBlue-primary shadow-[0_0_6px_#4DA3FF]" />
                <div
                  className="watch-second-hand absolute top-1 left-[11px] w-[1px] h-[8px] bg-watchBlue-primary/80 origin-bottom"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-normal tracking-wider text-studio-text transition-colors group-hover:text-watchBlue-soft">
                  TUTYTICKS
                </span>
                <span className="text-[9px] uppercase tracking-widest text-studio-muted -mt-1 hidden sm:block">
                  Thoothukudi
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links with subtle blue active dot */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-studio-secondary">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`transition-colors text-[13px] tracking-wide relative py-1 flex items-center gap-1.5 ${
                      isActive ? 'text-studio-text' : 'hover:text-studio-text'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-watchBlue-primary shadow-[0_0_8px_#4DA3FF]" />
                    )}
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Action: WhatsApp CTA & Mobile Menu Toggle */}
            <div className="flex items-center space-x-3">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center space-x-1.5 bg-studio-panel hover:bg-studio-surface text-studio-text border border-studio-border hover:border-watchBlue-primary/50 px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200 hover:shadow-blue-glow-btn active:scale-95 focus:outline-none"
                aria-label="Contact TUTYTICKS on WhatsApp"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 group-hover:bg-watchBlue-primary transition-colors" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-studio-muted group-hover:text-watchBlue-soft transition-colors" />
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-studio-secondary hover:text-studio-text focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Navigation (Dark OLED optimized) */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[#080A0D] border-l border-studio-border p-6 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="pt-16">
          <div className="flex items-center justify-between pb-4 border-b border-studio-border mb-6">
            <span className="text-[10px] uppercase tracking-widest text-studio-muted">
              Navigation
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-studio-muted hover:text-studio-text"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-xl text-studio-text hover:text-watchBlue-soft transition-colors py-1 border-b border-studio-border/50 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-studio-caption">→</span>
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-studio-border">
            <p className="text-[10px] uppercase tracking-wider text-watchBlue-soft mb-2">
              Everyday Watches
            </p>
            <p className="text-xs text-studio-muted leading-relaxed">
              ₹99–₹999 · Cash on Delivery available across Tamil Nadu.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-studio-border">
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center space-x-2 w-full bg-studio-panel hover:bg-studio-surface text-studio-text border border-studio-border hover:border-watchBlue-primary/40 py-3 text-xs uppercase tracking-wider font-medium transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-watchBlue-primary" />
            <span>Chat on WhatsApp</span>
          </a>
          <p className="text-[10px] text-center text-studio-caption mt-3">
            Thoothukudi, Tamil Nadu · +91 72001 91827
          </p>
        </div>
      </aside>
    </>
  );
};
