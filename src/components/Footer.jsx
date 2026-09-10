import React from 'react';
import { Phone, Mail, Share2, Globe, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--charcoal)', color: 'var(--cream)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
            gap: '3rem',
            marginBottom: '3rem',
          }}
          className="footer-grid"
        >
          {/* Brand Col */}
          <div>
            <a href="#" style={{ display: 'inline-block', textDecoration: 'none', marginBottom: '1.25rem' }}>
              <img
                src="/images/logo.png"
                alt="Hunting Tiger - KSM AND CO. Vijayawada"
                style={{
                  height: '52px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  backgroundColor: 'var(--white)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '2px',
                }}
              />
            </a>
            <p style={{ fontSize: '0.9rem', color: '#A0A09A', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Heavy-duty household pest protection products. From electric mosquito swatter racquets to 12-hour protection coils, herbal incense sticks, and 3-in-1 Garuda Rekha roach chalk.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="#"
                aria-label="Share"
                style={{
                  backgroundColor: '#2A2A2A',
                  color: 'var(--white)',
                  padding: '0.6rem',
                  display: 'inline-flex',
                  borderRadius: '2px',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--tiger-red)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2A2A2A')}
              >
                <Globe size={18} />
              </a>
              <a
                href="#"
                aria-label="Message"
                style={{
                  backgroundColor: '#2A2A2A',
                  color: 'var(--white)',
                  padding: '0.6rem',
                  display: 'inline-flex',
                  borderRadius: '2px',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--tiger-red)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2A2A2A')}
              >
                <MessageSquare size={18} />
              </a>
              <a
                href="#"
                aria-label="Share"
                style={{
                  backgroundColor: '#2A2A2A',
                  color: 'var(--white)',
                  padding: '0.6rem',
                  display: 'inline-flex',
                  borderRadius: '2px',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--tiger-red)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2A2A2A')}
              >
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--white)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
              <li><a href="#products" style={{ color: '#C0C0BA' }}>Product Range</a></li>
              <li><a href="#about" style={{ color: '#C0C0BA' }}>Brand Story</a></li>
              <li><a href="#why-us" style={{ color: '#C0C0BA' }}>Why Hunting Tiger</a></li>
              <li><a href="#where-to-buy" style={{ color: '#C0C0BA' }}>Where to Buy</a></li>
              <li><a href="#contact" style={{ color: '#C0C0BA' }}>Distributor Contact</a></li>
            </ul>
          </div>

          {/* Product Lines */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--white)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              PRODUCT LINES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
              <li><a href="#products" style={{ color: '#C0C0BA' }}>Mosquito Bats / Rackets</a></li>
              <li><a href="#products" style={{ color: '#C0C0BA' }}>10+4 FREE 12-Hr Coils</a></li>
              <li><a href="#products" style={{ color: '#C0C0BA' }}>Herbal Agarbatti Sticks</a></li>
              <li><a href="#products" style={{ color: '#C0C0BA' }}>Garuda Rekha 3-in-1 Chalk</a></li>
              <li><a href="#products" style={{ color: '#C0C0BA' }}>30-Coil Power Booster</a></li>
            </ul>
          </div>

          {/* Corporate Info */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--white)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              MARKETED BY
            </h4>
            <div style={{ fontSize: '0.92rem', color: '#C0C0BA', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <strong style={{ color: 'var(--golden-yellow)', fontSize: '1rem' }}>KSM AND CO.</strong><br />
                Ward 2A, 48-18-5/1, Road No 5,<br />
                Nagarjuna Nagar, OPP-KVKR Municipal Park,<br />
                Vijayawada, Krishna (District), AP - Code 37<br />
                <span style={{ color: 'var(--golden-yellow)', fontWeight: 600, fontSize: '0.85rem' }}>
                  GSTIN/UIN: 37CBRPK8835R1ZD
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <Phone size={16} color="var(--tiger-red)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div><strong>K V R Murthy:</strong> +91 7842338899</div>
                  <div><strong>K Prem Chandra:</strong> +91 9010137013</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="var(--tiger-red)" style={{ flexShrink: 0 }} />
                <span>ksmandcovijayawada@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#888882',
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>HUNTING TIGER</strong>. Marketed exclusively by <strong>KSM AND CO., Vijayawada</strong>. Designed & Developed by <strong>Nkxus Pvt. Ltd.</strong>
          </div>
          <div>
            ISO 9001:2015 Certified FMCG Household Brand
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 550px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
