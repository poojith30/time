import React, { useState } from 'react';
import { PRODUCTS } from './data/products';
import { Product } from './types/product';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedWatches } from './components/FeaturedWatches';
import { CollectionGrid } from './components/CollectionGrid';
import { ValueStrip } from './components/ValueStrip';
import { BrandStory } from './components/BrandStory';
import { InstagramSection } from './components/InstagramSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';

export const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseQuickView = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-studio-bg text-studio-text flex flex-col font-sans selection:bg-watchBlue-deep selection:text-white">
      {/* Refined Navigation Bar */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Featured Watches (LATEST WATCHES - 6 products) */}
        <FeaturedWatches
          products={PRODUCTS}
          onQuickView={handleQuickView}
        />

        {/* 3. 12-Watch Collection Preview with Collection Index line */}
        <CollectionGrid
          products={PRODUCTS}
          onQuickView={handleQuickView}
        />

        {/* 4. Why TUTYTICKS Feature Strip */}
        <ValueStrip />

        {/* 5. Local Brand Story (FROM THOOTHUKUDI) */}
        <BrandStory />

        {/* 6. Instagram Section (FROM @TUTYTICKS_WATCH) */}
        <InstagramSection />

        {/* 7. Final WhatsApp CTA */}
        <FinalCTA />
      </main>

      {/* 8. Minimal Dark Footer */}
      <Footer />

      {/* Minimal Watch Details Modal */}
      <QuickViewModal
        product={selectedProduct}
        onClose={handleCloseQuickView}
      />
    </div>
  );
};

export default App;
