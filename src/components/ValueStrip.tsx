import React from 'react';
import { Tag, Banknote, MapPin, MessageCircle } from 'lucide-react';

export const ValueStrip: React.FC = () => {
  const values = [
    {
      icon: Tag,
      eyebrow: 'Fair Pricing',
      title: '₹99–₹999',
      subtitle: 'Budget-friendly watches without inflated brand markups.',
      index: '01',
    },
    {
      icon: Banknote,
      eyebrow: 'Payment',
      title: 'COD Available',
      subtitle: 'Cash on delivery or secure online payment options.',
      index: '02',
    },
    {
      icon: MapPin,
      eyebrow: 'Logistics',
      title: 'Tamil Nadu',
      subtitle: 'Carefully packaged and dispatched across all 38 districts.',
      index: '03',
    },
    {
      icon: MessageCircle,
      eyebrow: 'Direct Desk',
      title: 'WhatsApp Ordering',
      subtitle: 'Direct one-on-one conversation to confirm your watch.',
      index: '04',
    },
  ];

  return (
    <section id="why-tutyticks" className="border-b border-studio-border bg-studio-surface/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Subtle Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-1.5 text-[10px] sm:text-[11px] uppercase tracking-widest-tag text-studio-muted mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-watchBlue-primary" />
            <span>Why TUTYTICKS</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-studio-text font-normal">
            Thoughtful simplicity, from order to wrist.
          </h2>
        </div>

        {/* 4-Column Fine-Border Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-studio-border divide-y sm:divide-y-0 sm:divide-x divide-studio-border bg-studio-card">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.index}
                className="group p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 hover:bg-studio-cardHover relative"
              >
                {/* Subtle top tick line that lights on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-transparent group-hover:bg-watchBlue-primary/40 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-studio-muted group-hover:text-watchBlue-soft transition-colors">
                      {item.index} / {item.eyebrow}
                    </span>
                    <Icon className="w-4 h-4 text-watchBlue-primary/80 stroke-[1.5] group-hover:text-watchBlue-soft transition-colors" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-studio-text font-normal mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-studio-muted leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
