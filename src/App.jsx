import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import ProductShowcase from './components/ProductShowcase';
import GarudaRekhaBanner from './components/GarudaRekhaBanner';
import WhyUs from './components/WhyUs';
import WhereToBuy from './components/WhereToBuy';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DistributorModal from './components/DistributorModal';

export default function App() {
  const [isDistributorModalOpen, setIsDistributorModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenEnquiry = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    handleOpenEnquiry();
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header onOpenEnquiry={() => setIsDistributorModalOpen(true)} />
      
      <main style={{ flexGrow: 1 }}>
        <Hero onOpenEnquiry={handleOpenEnquiry} />
        <BrandStory />
        <ProductShowcase onSelectProduct={handleSelectProduct} />
        <GarudaRekhaBanner onEnquire={() => setIsDistributorModalOpen(true)} />
        <WhyUs />
        <WhereToBuy onOpenDistributorModal={() => setIsDistributorModalOpen(true)} />
        <ContactSection selectedProduct={selectedProduct} />
      </main>

      <Footer />

      <DistributorModal
        isOpen={isDistributorModalOpen}
        onClose={() => setIsDistributorModalOpen(false)}
      />
    </div>
  );
}
