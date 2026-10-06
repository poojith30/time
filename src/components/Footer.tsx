import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  WHATSAPP_DISPLAY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  getGeneralWhatsAppUrl,
} from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-studio-bg pt-16 pb-12 text-studio-muted border-t border-studio-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-studio-border">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-2.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-watchBlue-primary subtle-blue-dot" />
              <h3 className="font-serif text-2xl font-normal tracking-wider text-studio-text">
                TUTYTICKS
              </h3>
            </div>
            
            <p className="text-xs uppercase tracking-widest text-studio-muted mb-3 font-mono">
              Thoothukudi · Tamil Nadu
            </p>
            <p className="text-xs text-studio-secondary leading-relaxed max-w-sm mb-4">
              ₹99–₹999 · COD Available · Tamil Nadu Delivery. Thoughtfully designed budget timepieces for everyday life.
            </p>
            <div className="inline-block px-2.5 py-1 bg-studio-surface text-[10px] uppercase tracking-widest text-watchBlue-soft border border-studio-border">
              Made for Tamil Nadu
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-widest text-studio-muted mb-4 font-mono">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#collection" className="hover:text-studio-text transition-colors">
                  Watches
                </a>
              </li>
              <li>
                <a href="#why-tutyticks" className="hover:text-studio-text transition-colors">
                  Why TUTYTICKS
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-studio-text transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-1 hover:text-studio-text transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-studio-caption group-hover:text-watchBlue-primary transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-1 hover:text-studio-text transition-colors"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 text-studio-caption group-hover:text-watchBlue-primary transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-widest text-studio-muted mb-4 font-mono">
              Order & Inquiries
            </p>
            <div className="space-y-3.5 text-xs">
              <div>
                <span className="text-studio-caption block text-[10px] uppercase">Phone / WhatsApp</span>
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-studio-text hover:text-watchBlue-soft transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>

              <div>
                <span className="text-studio-caption block text-[10px] uppercase">Instagram</span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-studio-text hover:text-watchBlue-soft transition-colors"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </div>

              <div>
                <span className="text-studio-caption block text-[10px] uppercase">Location</span>
                <span className="text-studio-secondary">
                  Thoothukudi, Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-studio-caption gap-2">
          <p>© {new Date().getFullYear()} TUTYTICKS. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-watchBlue-primary" />
            <span className="tracking-wide text-studio-muted">
              Designed with care in Thoothukudi
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
