import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ShieldCheck, Flame, ArrowRight, Award, Zap } from 'lucide-react';
import { IncenseIcon, MosquitoBatIcon, CockroachChalkIcon } from './CustomIcons';

export default function AdPopupModal({ isOpen, onClose, onClaimOffer, onViewProducts }) {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    let interval = null;
    if (isOpen && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOpen, timer]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="modal-overlay ad-popup-overlay"
          onClick={onClose}
          style={{
            zIndex: 10000,
            backdropFilter: 'blur(6px)',
            backgroundColor: 'rgba(15, 15, 20, 0.85)',
          }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="ad-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="ad-modal-close-btn"
              onClick={onClose}
              aria-label="Close advertisement"
            >
              <X size={22} />
            </button>

            {/* Top Announcement Bar */}
            <div className="ad-top-banner">
              <span className="ad-live-pill">
                <span className="ad-pulse-dot"></span> LIVE ANNOUNCEMENT
              </span>
              <span className="ad-top-tagline">AP & TELANGANA DISTRIBUTOR NETWORK 2026</span>
            </div>

            {/* Main Content Body */}
            <div className="ad-body">
              {/* Brand Header */}
              <div className="ad-header">
                <div className="ad-brand-badge">
                  <Flame size={18} className="ad-icon-red" />
                  <span>KSM AND CO. OFFICIAL PROMO</span>
                </div>

                <h2 className="ad-title">
                  PROTECT HOMES WITH <span className="ad-highlight-red">HUNTING TIGER</span>
                </h2>

                <p className="ad-subtitle">
                  Join South India's fastest-growing mosquito defense brand. Premium Quality Agarbatti, Mosquito Racquets, Coils & Garuda Rekha Chalk!
                </p>
              </div>

              {/* Offer Highlight Box */}
              <div className="ad-offer-card">
                <div className="ad-offer-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Sparkles size={20} color="var(--golden-yellow)" />
                    <span className="ad-offer-title">EXCLUSIVE DEALER & WHOLESALE BENEFITS</span>
                  </div>
                  <div className="ad-timer-badge">
                    <Zap size={14} color="#FFE066" />
                    <span>Special Margin Season</span>
                  </div>
                </div>

                <div className="ad-features-grid">
                  <div className="ad-feature-item">
                    <div className="ad-feature-icon-box">
                      <IncenseIcon size={24} color="var(--tiger-red)" />
                    </div>
                    <div>
                      <h4>100% Herbal Agarbatti</h4>
                      <p>Instant herbal smoke protection for family safety</p>
                    </div>
                  </div>

                  <div className="ad-feature-item">
                    <div className="ad-feature-icon-box">
                      <MosquitoBatIcon size={24} color="var(--tiger-red)" />
                    </div>
                    <div>
                      <h4>Heavy Duty Racquets</h4>
                      <p>High voltage rechargeable shock net technology</p>
                    </div>
                  </div>

                  <div className="ad-feature-item">
                    <div className="ad-feature-icon-box">
                      <CockroachChalkIcon size={24} color="var(--tiger-red)" />
                    </div>
                    <div>
                      <h4>Garuda Rekha 3-in-1 Chalk</h4>
                      <p>Kills Cockroaches, Ants & Bedbugs rapidly</p>
                    </div>
                  </div>

                  <div className="ad-feature-item">
                    <div className="ad-feature-icon-box" style={{ background: '#FFF3C4' }}>
                      <Award size={24} color="#D97706" />
                    </div>
                    <div>
                      <h4>Maximum Dealer Margins</h4>
                      <p>Direct factory prices & regional stockist support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="ad-trust-bar">
                <div className="ad-trust-item">
                  <ShieldCheck size={18} color="var(--herbal-green)" />
                  <span>Lab Tested & Safe</span>
                </div>
                <div className="ad-trust-divider">•</div>
                <div className="ad-trust-item">
                  <ShieldCheck size={18} color="var(--herbal-green)" />
                  <span>Marketed by KSM AND CO., Vijayawada</span>
                </div>
              </div>

              {/* Actions */}
              <div className="ad-actions">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onClose();
                    onClaimOffer();
                  }}
                  className="btn btn-primary ad-btn-main"
                >
                  <span>BECOME A DISTRIBUTOR NOW</span>
                  <ArrowRight size={20} />
                </motion.button>

                <button
                  onClick={() => {
                    onClose();
                    onViewProducts();
                  }}
                  className="btn btn-outline-dark ad-btn-sec"
                >
                  EXPLORE OUR PRODUCTS
                </button>
              </div>

              {/* Footer link to skip */}
              <div className="ad-footer-note">
                <button className="ad-skip-btn" onClick={onClose}>
                  Skip & Continue Browsing Website
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Styled JSX embedded for Ad Popup */}
      <style>{`
        .ad-popup-overlay {
          padding: 1rem;
        }

        .ad-modal-card {
          position: relative;
          width: 100%;
          max-width: 620px;
          background: #FFFFFF;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(227, 30, 36, 0.15);
        }

        .ad-modal-close-btn {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.4);
          border: none;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: background-color 0.2s, transform 0.2s;
        }

        .ad-modal-close-btn:hover {
          background: var(--tiger-red);
          transform: rotate(90deg);
        }

        .ad-top-banner {
          background: var(--charcoal);
          color: #FFFFFF;
          padding: 0.6rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-family: var(--font-display);
          font-size: 0.85rem;
          letter-spacing: 0.05em;
        }

        .ad-live-pill {
          background: var(--tiger-red);
          color: #FFFFFF;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          text-transform: uppercase;
        }

        .ad-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #FFFFFF;
          animation: adPulse 1.2s infinite ease-in-out;
        }

        @keyframes adPulse {
          0% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.3); }
          100% { opacity: 0.3; transform: scale(0.8); }
        }

        .ad-top-tagline {
          color: var(--golden-yellow);
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ad-body {
          padding: 1.75rem;
          background: linear-gradient(180deg, #FFFFFF 0%, #F7F4EE 100%);
        }

        .ad-header {
          text-align: center;
          margin-bottom: 1.25rem;
        }

        .ad-brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #FEE2E2;
          color: var(--tiger-red);
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.8rem;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          margin-bottom: 0.75rem;
          letter-spacing: 0.05em;
        }

        .ad-title {
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          color: var(--charcoal);
          margin-bottom: 0.4rem;
          line-height: 1.1;
        }

        .ad-highlight-red {
          color: var(--tiger-red);
          position: relative;
        }

        .ad-subtitle {
          font-size: 0.95rem;
          color: var(--stone-grey);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.4;
        }

        .ad-offer-card {
          background: #FFFFFF;
          border: 2px solid #E5E0D4;
          border-radius: 8px;
          padding: 1.25rem;
          margin-bottom: 1.25rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }

        .ad-offer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #E5E0D4;
          padding-bottom: 0.75rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .ad-offer-title {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--charcoal);
          letter-spacing: 0.03em;
        }

        .ad-timer-badge {
          background: var(--charcoal);
          color: #FFFFFF;
          font-size: 0.75rem;
          font-family: var(--font-display);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .ad-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .ad-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .ad-feature-icon-box {
          width: 42px;
          height: 42px;
          min-width: 42px;
          background: #FEE2E2;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ad-feature-item h4 {
          font-size: 0.9rem;
          color: var(--charcoal);
          margin-bottom: 0.15rem;
          line-height: 1.2;
        }

        .ad-feature-item p {
          font-size: 0.78rem;
          color: var(--stone-grey);
          line-height: 1.25;
        }

        .ad-trust-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          font-size: 0.85rem;
          color: var(--charcoal);
          font-weight: 600;
          flex-wrap: wrap;
        }

        .ad-trust-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .ad-trust-divider {
          color: var(--tiger-red);
        }

        .ad-actions {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .ad-btn-main {
          flex: 1.6;
          box-shadow: 0 4px 15px rgba(227, 30, 36, 0.3);
        }

        .ad-btn-sec {
          flex: 1;
        }

        .ad-footer-note {
          text-align: center;
        }

        .ad-skip-btn {
          background: none;
          border: none;
          color: var(--stone-grey);
          font-size: 0.82rem;
          text-decoration: underline;
          cursor: pointer;
          transition: color 0.2s;
        }

        .ad-skip-btn:hover {
          color: var(--tiger-red);
        }

        @media (max-width: 600px) {
          .ad-body {
            padding: 1.25rem;
          }
          .ad-features-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
          .ad-actions {
            flex-direction: column;
          }
          .ad-top-banner {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
