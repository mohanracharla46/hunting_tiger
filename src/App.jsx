import React, { useState, useEffect } from 'react';
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
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    return window.location.pathname === '/admin' || window.location.hash === '#admin' ? 'admin' : 'site';
  });
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    return sessionStorage.getItem('hunting_tiger_admin_auth') === 'true';
  });
  const [isDistributorModalOpen, setIsDistributorModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync URL changes with view state
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/admin' || window.location.hash === '#admin') {
        setCurrentView('admin');
      } else {
        setCurrentView('site');
      }
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateToAdmin = () => {
    setCurrentView('admin');
    if (window.location.pathname !== '/admin') {
      try {
        window.history.pushState({}, '', '/admin');
      } catch {
        window.location.hash = 'admin';
      }
    }
  };

  const navigateToSite = () => {
    setCurrentView('site');
    if (window.location.pathname === '/admin') {
      try {
        window.history.pushState({}, '', '/');
      } catch {
        window.location.hash = '';
      }
    }
  };

  const handleAdminLogout = () => {
    sessionStorage.removeItem('hunting_tiger_admin_auth');
    setIsAdminAuthenticated(false);
    navigateToSite();
  };

  const handleOpenEnquiry = () => {
    if (currentView !== 'site') {
      navigateToSite();
      setTimeout(() => {
        const contactElem = document.getElementById('contact');
        if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    handleOpenEnquiry();
  };

  if (currentView === 'admin') {
    if (!isAdminAuthenticated) {
      return (
        <AdminLogin
          onLoginSuccess={() => setIsAdminAuthenticated(true)}
          onBackToSite={navigateToSite}
        />
      );
    }
    return (
      <AdminDashboard
        onBackToSite={navigateToSite}
        onLogout={handleAdminLogout}
      />
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        onOpenEnquiry={() => setIsDistributorModalOpen(true)}
      />
      
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


