import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types/product';
import { ProductCard } from './ProductCard';

interface FeaturedWatchesProps {
  products: Product[];
  onQuickView: (product: Product) => void;
}

export const FeaturedWatches: React.FC<FeaturedWatchesProps> = ({ products, onQuickView }) => {
  // Show first 6 products as the featured / latest release
  const featuredList = products.slice(0, 6);

  return (
    <section id="featured" className="py-16 sm:py-20 lg:py-24 border-b border-studio-border bg-studio-bg relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with fine tick mark detail */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 pb-5 border-b border-studio-border">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-[10px] sm:text-[11px] uppercase tracking-widest-tag text-studio-muted mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-watchBlue-primary subtle-blue-dot" />
              <span>Curated Releases</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-studio-text font-normal tracking-tight">
              LATEST WATCHES
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-studio-secondary max-w-xs mt-2 sm:mt-0 font-normal">
            Refined dials designed for daily wear. Dispatched from Thoothukudi with COD.
          </p>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {featuredList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Action Link to Full Collection */}
        <div className="mt-12 text-center">
          <a
            href="#collection"
            className="group inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-medium text-studio-secondary hover:text-watchBlue-soft transition-colors py-2 border-b border-studio-border hover:border-watchBlue-primary"
          >
            <span>View Complete 12-Piece Collection</span>
            <ArrowRight className="w-3.5 h-3.5 text-studio-muted group-hover:text-watchBlue-primary transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
