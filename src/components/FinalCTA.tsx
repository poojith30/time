import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const FinalCTA: React.FC = () => {
  const ctaMessage = "Hi TUTYTICKS, I'm interested in ordering a watch. Please share the available options.";

  return (
    <section className="py-20 sm:py-28 border-b border-studio-border bg-studio-surface/40 text-center relative overflow-hidden">
      
      {/* Background Subtle Radial Blue Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] hero-radial-glow blur-3xl opacity-50 pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 z-10">
        
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-widest-tag text-studio-muted mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-watchBlue-primary subtle-blue-dot" />
          <span>TUTYTICKS · THOOTHUKUDI</span>
        </div>

        {/* Primary Closing Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl text-studio-text font-normal tracking-tight mb-4">
          Find your everyday watch.
        </h2>

        {/* Supporting text */}
        <p className="text-sm sm:text-base text-watchBlue-soft font-medium tracking-wide mb-8">
          Starting from ₹99. Delivering across Tamil Nadu with Cash on Delivery.
        </p>

        {/* WhatsApp Button with subtle upward hover and blue highlight */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getGeneralWhatsAppUrl(ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center space-x-2.5 bg-studio-panel hover:bg-studio-surface text-studio-text border border-studio-border hover:border-watchBlue-primary/60 px-8 py-4 text-xs font-medium uppercase tracking-widest transition-all duration-300 hover:shadow-blue-glow-btn hover:-translate-y-0.5 active:scale-98"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-watchBlue-primary transition-colors" />
            <span>Order via WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 text-watchBlue-soft transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Micro-assurances */}
        <p className="text-[11px] text-studio-muted mt-6 tracking-wide">
          Direct human response · Verified watches · Orders dispatched promptly from Thoothukudi
        </p>
      </div>
    </section>
  );
};
