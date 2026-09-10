import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Header({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Products', href: '#products' },
    { label: 'Why Hunting Tiger', href: '#why-us' },
    { label: 'Where to Buy', href: '#where-to-buy' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: 'var(--golden-yellow)',
        borderBottom: scrolled ? '3px solid var(--tiger-red)' : '2px solid rgba(0,0,0,0.12)',
        boxShadow: scrolled ? '0 4px 16px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.06)',
        transition: 'all 0.3s ease',
        padding: '0.75rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo - Image contains full brand mark */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/images/logo.png"
            alt="Hunting Tiger - KSM AND CO. Vijayawada"
            style={{
              height: '52px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--charcoal)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--tiger-red)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--charcoal)')}
            >
              {item.label}
            </a>
          ))}
          
          <button className="btn btn-primary" onClick={onOpenEnquiry}>
            <PhoneCall size={18} /> Enquire Now
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--charcoal)',
            cursor: 'pointer',
            display: 'none',
          }}
          className="mobile-toggle-btn"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--golden-yellow)',
            borderTop: '2px solid var(--tiger-red)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--charcoal)',
                textTransform: 'uppercase',
              }}
            >
              {item.label}
            </a>
          ))}
          <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => { setMobileMenuOpen(false); onOpenEnquiry(); }}>
            <PhoneCall size={18} /> Enquire Now
          </button>
        </div>
      )}

      {/* Responsive Inline CSS overrides */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
