import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight, MessageCircle, ArrowUpRight, Eye } from 'lucide-react';
import { Product } from '../types/product';
import { ProductCard } from './ProductCard';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface CollectionGridProps {
  products: Product[];
  onQuickView: (product: Product) => void;
}

export const CollectionGrid: React.FC<CollectionGridProps> = ({ products, onQuickView }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Minimal' | 'Classic' | 'Utility'>('All');
  
  // Touch swipe handling for mobile showcase
  const touchStartX = useRef<number | null>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const thumbnailStripRef = useRef<HTMLDivElement>(null);

  const currentProduct = products[currentIndex] || products[0];
  const totalProducts = products.length;

  // Navigate to specific watch index with transition
  const goToIndex = useCallback((newIndex: number, direction: 'next' | 'prev' = 'next') => {
    if (newIndex === currentIndex || transitioning) return;
    setSlideDirection(direction);
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTransitioning(false);
    }, 180);
  }, [currentIndex, transitioning]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + totalProducts) % totalProducts;
    goToIndex(prevIndex, 'prev');
  }, [currentIndex, totalProducts, goToIndex]);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % totalProducts;
    goToIndex(nextIndex, 'next');
  }, [currentIndex, totalProducts, goToIndex]);

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Keep thumbnail in view when current index changes
  useEffect(() => {
    if (thumbnailStripRef.current) {
      const activeThumb = thumbnailStripRef.current.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentIndex]);

  // Touch swipe events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  // Filtered products for lower catalog view
  const filteredProducts = products.filter((product) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Minimal') return product.category.toLowerCase().includes('minimal');
    if (activeFilter === 'Classic') return product.category.toLowerCase().includes('classic') || product.category.toLowerCase().includes('vintage') || product.category.toLowerCase().includes('dress') || product.category.toLowerCase().includes('tank') || product.category.toLowerCase().includes('gold');
    if (activeFilter === 'Utility') return product.category.toLowerCase().includes('utility') || product.category.toLowerCase().includes('pilot') || product.category.toLowerCase().includes('field') || product.category.toLowerCase().includes('mesh') || product.category.toLowerCase().includes('casual');
    return true;
  });

  const progressPercentage = (currentIndex / (totalProducts - 1)) * 100;
  const currentWhatsAppUrl = getProductWhatsAppUrl(currentProduct);

  return (
    <section id="collection" className="py-16 sm:py-20 lg:py-24 border-b border-studio-border bg-studio-surface/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-widest-tag text-studio-muted mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-watchBlue-primary subtle-blue-dot" />
            <span>Interactive Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-studio-text font-normal tracking-tight uppercase">
            12 WATCHES. ONE EVERYDAY COLLECTION.
          </h2>
          <p className="text-xs sm:text-sm text-studio-secondary mt-2 max-w-md mx-auto">
            Browse each timepiece in detail with direct WhatsApp ordering and Cash on Delivery across Tamil Nadu.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. INTERACTIVE PRODUCT SHOWCASE (FEATURED TIMEPIECE HERO VIEW)             */}
        {/* ========================================================================= */}
        <div 
          ref={showcaseRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative bg-studio-card border border-studio-border p-5 sm:p-8 lg:p-10 mb-10 shadow-card overflow-hidden"
        >
          {/* Subtle Ambient Blue Light Shift in Showcase */}
          <div 
            className={`absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[420px] h-[420px] hero-radial-glow blur-3xl pointer-events-none transition-opacity duration-500 ${
              transitioning ? 'opacity-90 scale-105' : 'opacity-40 scale-100'
            }`} 
            aria-hidden="true" 
          />

          {/* Collection Progress & Indicator Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-studio-border mb-8">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs tracking-wider uppercase text-watchBlue-soft font-semibold">
                WATCH {String(currentIndex + 1).padStart(2, '0')} / {totalProducts}
              </span>
              <span className="text-studio-border">|</span>
              <span className="text-[11px] text-studio-muted">
                {currentProduct.category}
              </span>
            </div>

            {/* Visual Progress Bar with Active Blue Indicator Dot */}
            <div className="flex items-center space-x-3 w-full sm:w-64">
              <div className="relative w-full h-[2px] bg-studio-border">
                <div 
                  className="absolute top-0 left-0 h-full bg-watchBlue-primary transition-all duration-300 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-watchBlue-primary subtle-blue-dot border border-studio-card transition-all duration-300 ease-out -ml-1.25"
                  style={{ left: `${progressPercentage}%` }}
                />
              </div>
              <span className="text-[10px] font-mono text-studio-muted shrink-0">
                {currentIndex + 1}/{totalProducts}
              </span>
            </div>
          </div>

          {/* Main Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Large Watch Image Container with Dial Motifs & Subtle Motion */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              
              {/* Dial Motif Behind Watch Image */}
              <div 
                className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full border border-studio-border/50 pointer-events-none transition-transform duration-700"
                style={{ transform: `rotate(${currentIndex * 30}deg)` }}
                aria-hidden="true"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-watchBlue-primary/70" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-watchBlue-primary/70" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-watchBlue-primary/70" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-watchBlue-primary/70" />
              </div>

              {/* Watch Image Frame with Smooth Directional Fade & Slide Transition */}
              <div className="relative w-full max-w-sm aspect-[4/5] bg-studio-surface border border-studio-border overflow-hidden p-2 group">
                <div className="relative w-full h-full overflow-hidden bg-studio-panel">
                  <img
                    src={currentProduct.image}
                    alt={`TUTYTICKS ${currentProduct.name}`}
                    key={currentProduct.id}
                    className={`w-full h-full object-cover object-center transition-all duration-200 ease-out ${
                      transitioning
                        ? slideDirection === 'next'
                          ? 'opacity-30 translate-x-2 scale-[0.98]'
                          : 'opacity-30 -translate-x-2 scale-[0.98]'
                        : 'opacity-100 translate-x-0 scale-100 group-hover:scale-[1.02]'
                    }`}
                  />

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 bg-[#080A0D]/90 backdrop-blur-xs px-2.5 py-1 text-[10px] font-mono tracking-wider border border-studio-border text-watchBlue-soft">
                    {currentProduct.number}
                  </div>

                  {currentProduct.tag && (
                    <div className="absolute top-3 right-3 bg-studio-panel border border-studio-border text-studio-text px-2 py-0.5 text-[9px] uppercase tracking-widest font-medium">
                      {currentProduct.tag}
                    </div>
                  )}

                  {/* Quick View Button */}
                  <button
                    type="button"
                    onClick={() => onQuickView(currentProduct)}
                    className="absolute bottom-3 right-3 bg-[#080A0D]/90 hover:bg-studio-surface text-studio-secondary hover:text-watchBlue-soft p-2 border border-studio-border transition-colors shadow-sm"
                    title="Inspect Full Specifications"
                    aria-label={`Inspect full specifications of ${currentProduct.name}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right: Watch Metadata, Price, Specs, and Actions */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-watchBlue-soft mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-watchBlue-primary subtle-blue-dot" />
                  <span>MODEL {currentProduct.number.split('/')[0].trim()}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-studio-text font-normal mb-3 transition-colors">
                  {currentProduct.name}
                </h3>

                {/* Price Tag with COD Label */}
                <div className="flex items-baseline space-x-3 mb-5">
                  <span className="text-3xl font-bold font-sans text-studio-text">
                    ₹{currentProduct.price}
                  </span>
                  {currentProduct.originalPrice && (
                    <span className="text-sm text-studio-caption line-through">
                      ₹{currentProduct.originalPrice}
                    </span>
                  )}
                  <span className="text-xs text-watchBlue-soft font-medium px-2 py-0.5 bg-studio-panel border border-studio-border">
                    COD Available
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-studio-secondary leading-relaxed mb-6">
                  {currentProduct.description}
                </p>

                {/* Watch Specs Table */}
                <div className="space-y-2.5 py-4 border-t border-b border-studio-border text-xs mb-8">
                  <div className="flex justify-between">
                    <span className="text-studio-muted">Strap</span>
                    <span className="text-studio-text font-medium">{currentProduct.strap}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-studio-muted">Dial</span>
                    <span className="text-studio-text font-medium">{currentProduct.dialColor}</span>
                  </div>
                  {currentProduct.movement && (
                    <div className="flex justify-between">
                      <span className="text-studio-muted">Movement</span>
                      <span className="text-studio-text font-medium">{currentProduct.movement}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-studio-muted">Dispatch Location</span>
                    <span className="text-studio-text font-medium">Thoothukudi, Tamil Nadu</span>
                  </div>
                </div>
              </div>

              {/* Order via WhatsApp & Navigation Row */}
              <div className="space-y-4">
                {/* Main WhatsApp Order Button */}
                <a
                  href={currentWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex items-center justify-center space-x-2 bg-studio-panel hover:bg-studio-surface text-studio-text border border-studio-border hover:border-watchBlue-primary/60 py-4 px-6 text-xs uppercase tracking-widest font-semibold transition-all duration-200 hover:shadow-blue-glow-btn active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-watchBlue-primary transition-colors" />
                  <span>Order via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-watchBlue-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Previous & Next Navigation Buttons */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-studio-surface hover:bg-studio-panel text-studio-secondary hover:text-studio-text border border-studio-border hover:border-studio-borderLight text-xs tracking-wider uppercase transition-colors focus:outline-none focus:border-watchBlue-primary"
                    aria-label="Previous watch in collection"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  <div className="text-[11px] font-mono text-studio-muted px-2">
                    {currentIndex + 1} of {totalProducts}
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-studio-surface hover:bg-studio-panel text-studio-secondary hover:text-studio-text border border-studio-border hover:border-studio-borderLight text-xs tracking-wider uppercase transition-colors focus:outline-none focus:border-watchBlue-primary"
                    aria-label="Next watch in collection"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* ========================================================================= */}
          {/* 2. THUMBNAIL NAVIGATION STRIP (12 WATCHES)                                */}
          {/* ========================================================================= */}
          <div className="mt-8 pt-6 border-t border-studio-border">
            <div className="flex items-center justify-between mb-3 text-[10px] uppercase tracking-widest text-studio-muted">
              <span>Collection Index (Click to view)</span>
              <span className="hidden sm:inline font-mono">Use ← / → keys to navigate</span>
            </div>

            <div 
              ref={thumbnailStripRef}
              className="flex items-center space-x-2.5 overflow-x-auto pb-2 scroll-smooth no-scrollbar"
              tabIndex={0}
              role="tablist"
              aria-label="12 Watches Thumbnail Strip"
            >
              {products.map((item, idx) => {
                const isSelected = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => goToIndex(idx, idx > currentIndex ? 'next' : 'prev')}
                    className={`group relative shrink-0 w-14 sm:w-16 rounded-none p-1 border transition-all duration-200 focus:outline-none ${
                      isSelected
                        ? 'border-watchBlue-primary bg-studio-panel shadow-blue-glow-sm ring-1 ring-watchBlue-primary/40'
                        : 'border-studio-border bg-studio-card hover:border-studio-borderLight opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="aspect-[4/5] w-full overflow-hidden bg-studio-surface relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 border border-watchBlue-primary pointer-events-none" />
                      )}
                    </div>
                    <div className="mt-1 text-center font-mono text-[9px] text-studio-secondary group-hover:text-watchBlue-soft">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. SYNCHRONIZED 12-PRODUCT GRID WITH CATEGORY FILTERS                     */}
        {/* ========================================================================= */}
        <div className="mt-16 pt-12 border-t border-studio-border">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-studio-border gap-4">
            <div>
              <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-widest-tag text-studio-muted mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-watchBlue-primary subtle-blue-dot" />
                <span>Complete Catalog View</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-studio-text font-normal tracking-tight">
                All 12 Timepieces in the Collection
              </h3>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 text-xs">
              {(['All', 'Minimal', 'Classic', 'Utility'] as const).map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-1.5 transition-all duration-200 border text-xs tracking-wide ${
                      isActive
                        ? 'border-watchBlue-primary/60 bg-studio-panel text-studio-text shadow-blue-glow-sm'
                        : 'border-studio-border bg-studio-card text-studio-muted hover:border-studio-borderLight hover:text-studio-secondary'
                    }`}
                  >
                    {filter === 'All' ? `All (12)` : filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 12-Watch Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => {
              const originalIndex = products.findIndex((p) => p.id === product.id);
              const isSelected = originalIndex === currentIndex;
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  isSelected={isSelected}
                  onSelect={() => {
                    if (originalIndex !== -1) {
                      goToIndex(originalIndex, originalIndex > currentIndex ? 'next' : 'prev');
                      // Smooth scroll up to showcase if desired
                      if (showcaseRef.current) {
                        showcaseRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }
                  }}
                  onQuickView={onQuickView}
                />
              );
            })}
          </div>

          <div className="mt-12 text-center text-xs text-studio-muted flex items-center justify-center space-x-2">
            <span className="w-1 h-1 rounded-full bg-watchBlue-primary" />
            <span>Click any timepiece to inspect in the showcase or order instantly via WhatsApp.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
