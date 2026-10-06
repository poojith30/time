import React, { useEffect } from 'react';
import { X, ArrowUpRight, ShieldCheck, Truck } from 'lucide-react';
import { Product } from '../types/product';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  const [imageError, setImageError] = React.useState(false);

  if (!product) return null;

  const whatsappUrl = getProductWhatsAppUrl(product);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-studio-bg border border-studio-border shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 bg-studio-card/90 text-studio-secondary hover:text-studio-text hover:border-watchBlue-primary/40 transition-colors border border-studio-border focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Image Column */}
        <div className="w-full md:w-1/2 aspect-[4/5] bg-studio-surface relative overflow-hidden flex items-center justify-center">
          {imageError ? (
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 rounded-full border border-studio-border flex items-center justify-center mb-2">
                <span className="w-2 h-2 rounded-full bg-watchBlue-primary" />
              </div>
              <span className="text-sm font-serif text-studio-text mb-1">{product.name}</span>
              <span className="text-xs font-mono text-studio-caption">{product.number}</span>
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center"
            />
          )}
          <div className="absolute top-3 left-3 bg-[#080A0D]/90 px-2.5 py-1 text-[10px] font-mono tracking-wider border border-studio-border text-watchBlue-soft">
            {product.number}
          </div>
        </div>

        {/* Product Details Column */}
        <div className="w-full md:w-1/2 p-6 sm:p-7 flex flex-col justify-between overflow-y-auto bg-studio-card">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-studio-muted mb-1 flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-watchBlue-primary subtle-blue-dot" />
              <span>{product.category}</span>
            </div>
            
            <h2 id="modal-title" className="font-serif text-2xl sm:text-3xl text-studio-text font-normal mb-2">
              {product.name}
            </h2>

            {/* Price Row */}
            <div className="flex items-baseline space-x-2 mb-4">
              <span className="text-2xl font-bold font-sans text-studio-text">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-studio-caption line-through">
                  ₹{product.originalPrice}
                </span>
              )}
              <span className="text-[11px] text-watchBlue-soft font-medium">
                (COD Available)
              </span>
            </div>

            <p className="text-xs text-studio-secondary leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Key Specs */}
            <div className="space-y-2 py-3 border-t border-b border-studio-border text-xs">
              <div className="flex justify-between">
                <span className="text-studio-muted">Strap Material</span>
                <span className="text-studio-text font-medium">{product.strap}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-studio-muted">Dial Design</span>
                <span className="text-studio-text font-medium">{product.dialColor}</span>
              </div>
              {product.movement && (
                <div className="flex justify-between">
                  <span className="text-studio-muted">Movement</span>
                  <span className="text-studio-text font-medium">{product.movement}</span>
                </div>
              )}
            </div>

            {/* Micro Guarantees */}
            <div className="mt-4 space-y-1.5 text-[11px] text-studio-muted">
              <div className="flex items-center space-x-1.5">
                <Truck className="w-3.5 h-3.5 text-watchBlue-primary shrink-0" />
                <span>Delivery across Tamil Nadu</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-watchBlue-primary shrink-0" />
                <span>Verified working before dispatch from Thoothukudi</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-studio-panel hover:bg-studio-surface text-studio-text border border-studio-border hover:border-watchBlue-primary/60 py-3 px-4 text-xs uppercase tracking-wider font-semibold transition-all duration-200 hover:shadow-blue-glow-btn"
            >
              <span>Order via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-watchBlue-soft" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
