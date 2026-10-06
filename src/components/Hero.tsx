import React, { useState, useEffect } from 'react';
import { ArrowDown, MessageCircle, ArrowRight } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  // Desktop subtle cursor-follow state (limited to a few pixels)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only enable on desktop screens
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Maximum 4px movement to keep it ultra restrained
    const deltaX = ((e.clientX - centerX) / (rect.width / 2)) * 4;
    const deltaY = ((e.clientY - centerY) / (rect.height / 2)) * 4;
    setMouseOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Dial rotation on scroll (subtle)
  const dialRotation = (scrollY * 0.05) % 360;

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden border-b border-studio-border bg-studio-bg">
      
      {/* Background Subtle Ambient Blue Light */}
      <div 
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none hero-radial-glow blur-3xl opacity-70 -z-0"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Location & Brand Identity Badge with Live Dial Indicator */}
            <div className="inline-flex items-center space-x-3 text-[11px] font-medium tracking-widest-tag uppercase text-studio-muted mb-4 sm:mb-6">
              <span className="flex items-center space-x-1.5 bg-studio-surface border border-studio-border px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-watchBlue-primary subtle-blue-dot animate-pulse-subtle" />
                <span className="text-studio-secondary">Thoothukudi · Tamil Nadu</span>
              </span>

              {/* Mechanism badge */}
              <div className="hidden sm:flex items-center space-x-1.5 text-[10px] text-studio-caption font-mono">
                <span className="w-2.5 h-[1px] bg-studio-border" />
                <span>60s Sweep Movement</span>
              </div>
            </div>

            {/* Compact Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-serif font-normal text-studio-text tracking-tight leading-[1.14] mb-4">
              Everyday watches, <br className="hidden sm:inline" />
              <span className="italic font-light text-studio-secondary">made accessible.</span>
            </h1>

            {/* Price & Location Subheading */}
            <div className="flex items-center space-x-2 text-sm sm:text-base font-medium text-watchBlue-soft tracking-wide mb-3">
              <span>₹99–₹999</span>
              <span className="text-studio-caption">·</span>
              <span className="text-studio-secondary font-normal">Thoothukudi</span>
              <span className="text-studio-caption">·</span>
              <span className="text-studio-secondary font-normal">Tamil Nadu</span>
            </div>

            {/* Brand Essence Sentence */}
            <p className="text-sm sm:text-base text-studio-secondary font-normal leading-relaxed max-w-lg mb-8">
              Stylish watches for everyday life, with delivery across Tamil Nadu. Simple WhatsApp ordering with Cash on Delivery support.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#featured"
                className="group relative inline-flex items-center justify-center space-x-2 bg-studio-panel hover:bg-studio-surface text-studio-text border border-studio-border hover:border-watchBlue-primary/60 px-6 py-3.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:shadow-blue-glow-btn active:scale-98"
              >
                <span>Explore Watches</span>
                <ArrowRight className="w-3.5 h-3.5 text-watchBlue-soft transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={getGeneralWhatsAppUrl("Hi TUTYTICKS, I'm interested in ordering a watch. Please share the available options.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center space-x-2 bg-transparent text-studio-text border border-studio-border hover:border-studio-borderLight hover:bg-studio-surface/60 px-6 py-3.5 text-xs font-medium uppercase tracking-wider transition-all duration-200 active:scale-98"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:text-watchBlue-primary transition-colors" />
                <span>Order via WhatsApp</span>
              </a>
            </div>

            {/* Trust Micro-Indicators */}
            <div className="mt-10 sm:mt-12 pt-6 border-t border-studio-border flex items-center justify-between text-[11px] text-studio-muted uppercase tracking-wider">
              <span className="hover:text-studio-text transition-colors">COD Available</span>
              <span className="text-studio-border">/</span>
              <span className="hover:text-studio-text transition-colors">All 38 Districts in TN</span>
              <span className="text-studio-border">/</span>
              <span className="hover:text-studio-text transition-colors">Direct WhatsApp Desk</span>
            </div>
          </div>

          {/* Right Column: Watch Studio Display with Dial Motif & Ambient Light */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Background Watch-Dial Motif (Fine circular lines, tick marks, rotating with scroll) */}
            <div 
              className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] lg:w-[500px] lg:h-[500px] rounded-full border border-studio-border/50 pointer-events-none transition-transform duration-700 ease-out"
              style={{ transform: `rotate(${dialRotation}deg)` }}
              aria-hidden="true"
            >
              {/* Inner dashed ring */}
              <div className="absolute inset-5 rounded-full border border-studio-border/30 border-dashed" />
              
              {/* Fine tick marks along 12, 3, 6, 9 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-watchBlue-primary/60" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-watchBlue-primary/60" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-3 bg-watchBlue-primary/60" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-3 bg-watchBlue-primary/60" />

              {/* Minimal numerals */}
              <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[9px] font-mono text-studio-muted">12</span>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-mono text-studio-muted">06</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] font-mono text-studio-muted">03</span>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[9px] font-mono text-studio-muted">09</span>
            </div>

            {/* Interactive Watch Display Frame */}
            <div
              className="relative w-full max-w-md cursor-pointer select-none"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
              }}
            >
              {/* Soft radial blue light source behind the watch image */}
              <div 
                className={`absolute inset-0 -m-6 rounded-2xl hero-radial-glow transition-opacity duration-700 pointer-events-none ${
                  isHovered ? 'opacity-100' : 'opacity-60'
                }`} 
                aria-hidden="true" 
              />

              {/* Watch Image Container */}
              <div className="relative bg-studio-card border border-studio-border p-3 sm:p-5 shadow-card transition-all duration-300 hover:border-watchBlue-primary/40">
                <div className="relative aspect-watch-portrait overflow-hidden bg-studio-surface flex items-center justify-center">
                  {imageError ? (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-full border border-studio-border flex items-center justify-center mb-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-watchBlue-primary subtle-blue-dot" />
                      </div>
                      <span className="text-base font-serif text-studio-text mb-1">Classic Obsidian</span>
                      <span className="text-xs font-mono text-studio-caption">01 / 12</span>
                    </div>
                  ) : (
                    <img
                      src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1000&auto=format&fit=crop&q=85"
                      alt="TUTYTICKS Classic Obsidian Watch in Studio Display"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                      loading="eager"
                    />
                  )}
                  
                  {/* Subtle Badge Tag */}
                  <div className="absolute top-3 left-3 bg-[#080A0D]/90 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-widest text-studio-secondary border border-studio-border flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-watchBlue-primary shadow-[0_0_6px_#4DA3FF]" />
                    <span>Collection 01</span>
                  </div>

                  {/* Active Real-Time Sweep Indicator overlay in corner */}
                  <div className="absolute bottom-3 right-3 bg-[#080A0D]/90 backdrop-blur-xs px-2.5 py-1 text-[9px] font-mono tracking-wider text-watchBlue-soft border border-studio-border flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-watchBlue-primary animate-pulse" />
                    <span>SWEEP CALIBRE</span>
                  </div>
                </div>

                {/* Minimalist Caption Below Hero Photography */}
                <div className="mt-3.5 flex items-center justify-between text-xs font-medium">
                  <span className="font-serif italic text-sm text-studio-text">
                    01 / Classic Obsidian
                  </span>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-watchBlue-soft font-sans font-semibold text-sm">₹399</span>
                    <span className="text-[10px] text-studio-muted line-through">₹599</span>
                  </div>
                </div>
              </div>

              {/* Floating Craft & Heritage Badge */}
              <div className="hidden sm:block absolute -bottom-5 -left-5 bg-studio-panel border border-studio-border p-3.5 shadow-card max-w-[210px]">
                <p className="text-[10px] uppercase tracking-widest text-watchBlue-soft mb-1 flex items-center space-x-1">
                  <span className="w-1 h-1 rounded-full bg-watchBlue-primary" />
                  <span>Local Craft</span>
                </p>
                <p className="text-xs text-studio-secondary font-serif italic leading-snug">
                  From Thoothukudi, for everyday Tamil Nadu.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt with fine tick line */}
      <div className="hidden md:flex flex-col items-center justify-center mt-12 gap-2">
        <a
          href="#why-tutyticks"
          className="text-studio-muted hover:text-studio-text transition-colors p-2 flex flex-col items-center text-[10px] uppercase tracking-widest gap-1"
          aria-label="Scroll to Why TUTYTICKS"
        >
          <span>Discover</span>
          <ArrowDown className="w-3 h-3 text-watchBlue-soft animate-bounce" />
        </a>
      </div>
    </section>
  );
};
