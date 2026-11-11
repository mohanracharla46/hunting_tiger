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
import AdPopupModal from './components/AdPopupModal';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import { Flame } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    return window.location.pathname === '/admin' || window.location.hash === '#admin' ? 'admin' : 'site';
  });
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    return sessionStorage.getItem('hunting_tiger_admin_auth') === 'true';
  });
  const [isDistributorModalOpen, setIsDistributorModalOpen] = useState(false);
  const [isAdModalOpen, setIsAdModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Auto-open ad popup when user opens website
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAdModalOpen(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

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

  const handleScrollToProducts = () => {
    const elem = document.getElementById('products');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
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

      {/* Floating Offer Button to re-open advertisement popup */}
      <button
        onClick={() => setIsAdModalOpen(true)}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 900,
          background: 'var(--tiger-red)',
          color: '#FFFFFF',
          border: '2px solid #FFFFFF',
          borderRadius: '30px',
          padding: '0.6rem 1.1rem',
          fontFamily: 'var(--font-display)',
          fontSize: '0.88rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
          cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(227, 30, 36, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'transform 0.2s ease, background-color 0.2s ease',
        }}
        className="floating-ad-btn"
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Flame size={18} color="var(--golden-yellow)" />
        <span>SPECIAL OFFER</span>
      </button>

      {/* Auto Ad Popup Modal */}
      <AdPopupModal
        isOpen={isAdModalOpen}
        onClose={() => setIsAdModalOpen(false)}
        onViewProducts={handleScrollToProducts}
      />

      {/* Distributor Application Modal */}
      <DistributorModal
        isOpen={isDistributorModalOpen}
        onClose={() => setIsDistributorModalOpen(false)}
      />
    </div>
  );
}


