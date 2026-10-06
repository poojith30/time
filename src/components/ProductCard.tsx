import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { Product } from '../types/product';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  isSelected?: boolean;
  onSelect?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isSelected = false,
  onSelect,
  onQuickView,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const whatsappUrl = getProductWhatsAppUrl(product);

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(product);
    }
  };

  return (
    <article
      onClick={handleCardClick}
      className={`group flex flex-col bg-studio-card border overflow-hidden transition-all duration-300 relative cursor-pointer ${
        isSelected
          ? 'border-watchBlue-primary shadow-blue-glow-sm ring-1 ring-watchBlue-primary/40'
          : 'border-studio-border hover:border-studio-borderLight hover:shadow-card'
      }`}
    >
      {/* Subtle ambient blue light behind the image on hover or when selected */}
      <div
        className={`absolute inset-0 card-ambient-glow transition-opacity duration-500 pointer-events-none -z-0 ${
          isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        aria-hidden="true"
      />

      {/* Standardized Aspect Ratio Image Container (Fixed 4:5 ratio) */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-studio-surface z-10">
        {/* Placeholder Skeleton until Image is Fully Loaded */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-studio-surface animate-pulse flex items-center justify-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-studio-caption">
              TUTYTICKS
            </span>
          </div>
        )}

        {/* Fallback Display if Image Fails to Load */}
        {imageError ? (
          <div className="absolute inset-0 bg-studio-surface flex flex-col items-center justify-center p-4 text-center border border-studio-border">
            <div className="w-10 h-10 rounded-full border border-studio-border flex items-center justify-center mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-watchBlue-primary" />
            </div>
            <span className="text-[11px] font-serif text-studio-text mb-1">{product.name}</span>
            <span className="text-[10px] font-mono text-studio-caption">{product.number}</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={`TUTYTICKS ${product.name}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-1 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Number Badge (brightens on hover or when selected) */}
        <div
          className={`absolute top-2.5 left-2.5 bg-[#080A0D]/90 backdrop-blur-xs px-2 py-0.5 text-[10px] font-mono tracking-wider border transition-colors ${
            isSelected
              ? 'text-watchBlue-soft border-watchBlue-primary/60'
              : 'text-studio-secondary group-hover:text-watchBlue-soft border-studio-border group-hover:border-watchBlue-primary/40'
          }`}
        >
          WATCH {product.number.split('/')[0].trim()}
        </div>

        {/* Optional Tag (e.g. "Best Seller") */}
        {product.tag && (
          <div className="absolute top-2.5 right-2.5 bg-studio-panel border border-studio-border text-studio-text px-2 py-0.5 text-[9px] uppercase tracking-widest font-medium">
            {product.tag}
          </div>
        )}

        {/* Subtle Quick View Overlay Trigger */}
        {onQuickView && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="absolute bottom-2.5 right-2.5 bg-[#080A0D]/90 hover:bg-studio-surface text-studio-secondary hover:text-watchBlue-soft p-1.5 border border-studio-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm focus:opacity-100"
            title="Quick Details"
            aria-label={`View details of ${product.name}`}
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Card Content & Details */}
      <div className="p-4 sm:p-4.5 flex flex-col flex-grow justify-between border-t border-studio-border z-10 bg-studio-card">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-serif text-lg text-studio-text font-normal leading-snug group-hover:text-watchBlue-soft transition-colors">
              {product.name}
            </h3>
          </div>

          <p className="text-[11px] text-studio-muted line-clamp-1 mb-3">
            {product.strap} · {product.dialColor}
          </p>
        </div>

        {/* Price & WhatsApp Action */}
        <div className="pt-3 border-t border-studio-border/60 flex items-center justify-between">
          <div className="flex items-baseline space-x-1.5">
            <span className="text-base sm:text-lg font-semibold text-studio-text font-sans">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-studio-caption line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* WhatsApp Button with subtle blue highlight */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="group/btn inline-flex items-center space-x-1 text-xs font-medium text-studio-secondary hover:text-watchBlue-soft transition-all duration-200 py-1 pl-2 group-hover:-translate-y-0.5"
            aria-label={`Order ${product.name} via WhatsApp`}
          >
            <span className="text-[11px] uppercase tracking-wider font-semibold">Order</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-studio-caption group-hover/btn:text-watchBlue-primary transition-colors transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
};
