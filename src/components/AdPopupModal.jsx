import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { AgarbattiIcon, MosquitoBatIcon, CoilIcon, CockroachChalkIcon } from './CustomIcons';

export default function AdPopupModal({ isOpen, onClose, onViewProducts }) {
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
              <X size={19} />
            </button>

            {/* Top Announcement Bar */}
            <div className="ad-top-banner">
              <span className="ad-live-pill">
                <span className="ad-pulse-dot"></span> LIVE ANNOUNCEMENT
              </span>
              <span className="ad-top-tagline">AP & TELANGANA DISTRIBUTOR NETWORK</span>
            </div>

            {/* Main Content Body */}
            <div className="ad-body">
              {/* Brand Header */}
              <div className="ad-header">
                <img
                  src="/images/logo.png"
                  alt="Hunting Tiger"
                  className="ad-brand-logo"
                />

                <h2 className="ad-title">
                  <span className="ad-title-prefix">Protect Homes with</span>
                  <span className="ad-highlight-red">HUNTING TIGER</span>
                </h2>

                <ul className="ad-subtitle-list">
                  <li>Join South India's fastest-growing mosquito repellant brand.</li>
                </ul>
              </div>

              {/* Offer Highlight Box */}
              <div className="ad-offer-card">
                <div className="ad-offer-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Sparkles size={20} color="var(--golden-yellow)" />
                    <span className="ad-offer-title">WE OFFER PREMIUM PRODUCTS LIKE :</span>
                  </div>
                </div>

                <div className="ad-features-grid">
                  <div className="ad-feature-item">
                    <div className="ad-feature-icon-box">
                      <AgarbattiIcon size={24} color="var(--tiger-red)" />
                    </div>
                    <div>
                      <h4>Anti Mosquito Agarbatti</h4>
                      <p>Instant Protection from Harmful Mosquitos.</p>
                    </div>
                  </div>

                  <div className="ad-feature-item">
                    <div className="ad-feature-icon-box">
                      <MosquitoBatIcon size={24} color="var(--tiger-red)" />
                    </div>
                    <div>
                      <h4>Heavy Duty Bats/Racquets</h4>
                      <p>Rechargeable Mosquito Bats with warranty</p>
                    </div>
                  </div>

                  <div className="ad-feature-item">
                    <div className="ad-feature-icon-box">
                      <CoilIcon size={24} color="var(--tiger-red)" />
                    </div>
                    <div>
                      <h4>Mosquito Coils</h4>
                      <p>Full night Protection</p>
                    </div>
                  </div>

                  <div className="ad-feature-item">
                    <div className="ad-feature-icon-box">
                      <CockroachChalkIcon size={24} color="var(--tiger-red)" />
                    </div>
                    <div>
                      <h4>3 in 1 Cockroach Chalk</h4>
                      <p>Kills Cockroaches, Ants, and Bedbugs.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="ad-actions">
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
          top: 0.35rem;
          right: 0.6rem;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.18);
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
          border-color: var(--tiger-red);
          transform: rotate(90deg);
        }

        .ad-top-banner {
          background: var(--charcoal);
          color: #FFFFFF;
          min-height: 44px;
          padding: 0.6rem 3.1rem 0.6rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.9rem;
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
          flex-shrink: 0;
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
          padding: 1.5rem 1.75rem 1.65rem;
          background: linear-gradient(180deg, #FFFFFF 0%, #F7F4EE 100%);
        }

        .ad-header {
          text-align: center;
          margin-bottom: 1.2rem;
        }

        .ad-brand-logo {
          height: 58px;
          width: auto;
          object-fit: contain;
          margin: 0 auto 0.6rem;
          display: block;
        }

        .ad-title {
          display: flex;
          align-items: baseline;
          justify-content: center;
          flex-wrap: nowrap;
          gap: 0.42rem;
          white-space: nowrap;
          word-break: keep-all;
          text-transform: none;
          margin-bottom: 0.45rem;
          line-height: 1.15;
        }

        .ad-title-prefix {
          font-family: 'Plus Jakarta Sans', var(--font-body);
          font-size: clamp(0.86rem, 3.1vw, 1.32rem);
          font-weight: 600;
          color: var(--charcoal);
          letter-spacing: -0.015em;
          text-transform: none;
        }

        .ad-highlight-red {
          font-family: var(--font-display);
          font-size: clamp(1.12rem, 4.2vw, 1.95rem);
          font-weight: 700;
          color: var(--tiger-red);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          position: relative;
        }

        .ad-subtitle-list {
          list-style: disc;
          list-style-position: inside;
          margin: 0.25rem auto 0;
          padding: 0;
          text-align: center;
          font-size: 0.94rem;
          color: var(--stone-grey);
          max-width: 520px;
          line-height: 1.45;
        }

        .ad-subtitle-list li::marker {
          color: var(--tiger-red);
          font-size: 1.05em;
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
          justify-content: flex-start;
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
          text-transform: uppercase;
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

        .ad-actions {
          display: flex;
          justify-content: center;
          margin-bottom: 0.75rem;
        }

        .ad-btn-sec {
          width: 100%;
          max-width: 320px;
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
            padding: 1.2rem;
          }
          .ad-features-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
          .ad-btn-sec {
            max-width: 100%;
          }
          .ad-top-banner {
            font-size: 0.75rem;
            min-height: 40px;
            padding: 0.5rem 2.8rem 0.5rem 0.9rem;
            gap: 0.6rem;
          }
          .ad-modal-close-btn {
            top: 0.28rem;
            right: 0.5rem;
            width: 30px;
            height: 30px;
          }
          .ad-brand-logo {
            height: 50px;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
