import React from 'react';
import { Compass } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-studio-border bg-studio-bg relative overflow-hidden">
      
      {/* Background Subtle Radial Blue Glow */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none hero-radial-glow blur-3xl opacity-40 -z-0"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Editorial Product / Craft Imagery */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative bg-studio-card p-3 sm:p-4 border border-studio-border shadow-card group">
              
              {/* Subtle ambient light on hover */}
              <div className="absolute inset-0 card-ambient-glow opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative aspect-[4/5] overflow-hidden bg-studio-surface">
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80"
                  alt="TUTYTICKS Thoothukudi Craftsmanship"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Coordinates and Pearl City Tag */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-studio-muted">
                <span className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-watchBlue-primary subtle-blue-dot" />
                  <span>Pearl City Roots</span>
                </span>
                <span className="font-mono text-studio-caption">8.7642° N, 78.1348° E</span>
              </div>
            </div>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] font-medium tracking-widest-tag uppercase text-studio-muted mb-3">
              <Compass className="w-3.5 h-3.5 text-watchBlue-primary stroke-[1.5]" />
              <span>THOOTHUKUDI · TAMIL NADU</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-studio-text font-normal tracking-tight mb-6">
              FROM THOOTHUKUDI
            </h2>

            <div className="space-y-4 text-studio-secondary text-sm sm:text-base leading-relaxed">
              <p className="text-studio-text font-medium text-base sm:text-lg">
                TUTYTICKS brings stylish and affordable watches to everyday customers, starting from ₹99. Based in Thoothukudi, we deliver across Tamil Nadu with simple WhatsApp ordering and COD availability.
              </p>
              <p className="text-xs sm:text-sm text-studio-muted">
                We believe a dependable, handsome timepiece shouldn't require paying luxury markups. Every model in our 12-piece lineup is selected for its balance of understated styling, dependable quartz movement, and honest pricing.
              </p>
            </div>

            {/* Subtle local quote */}
            <div className="mt-8 pt-6 border-t border-studio-border flex items-center gap-4">
              <div className="w-8 h-[1px] bg-watchBlue-primary/60" />
              <p className="font-serif italic text-base sm:text-lg text-studio-text">
                "From Thoothukudi, for everyday Tamil Nadu."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
