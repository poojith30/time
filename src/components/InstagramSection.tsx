import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/products';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../utils/whatsapp';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-16 sm:py-20 border-b border-studio-border bg-studio-surface/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 pb-4 border-b border-studio-border gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-[10px] sm:text-[11px] uppercase tracking-widest-tag text-studio-muted mb-1">
              <Instagram className="w-3.5 h-3.5 text-watchBlue-primary stroke-[1.5]" />
              <span>Social Journal</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-studio-text font-normal tracking-tight uppercase">
              FROM {INSTAGRAM_HANDLE}
            </h2>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-semibold text-studio-secondary hover:text-watchBlue-soft transition-colors self-start sm:self-auto"
          >
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-studio-muted group-hover:text-watchBlue-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 4 Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-studio-surface border border-studio-border hover:border-watchBlue-primary/40 transition-colors"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-[#080A0D]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 sm:p-4 text-studio-text">
                <p className="text-[11px] leading-snug line-clamp-2 mb-1.5 font-light text-studio-secondary">
                  {post.caption}
                </p>
                <span className="text-[10px] font-mono text-watchBlue-soft tracking-wider">
                  {post.tag}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
