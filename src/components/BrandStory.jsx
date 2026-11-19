import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Timer, Sparkles } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="story-grid"
        >
          {/* Product Collage Media */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            style={{ position: 'relative' }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: 'var(--white)',
                padding: '1rem',
                position: 'relative',
                boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
                borderRadius: '4px',
              }}
            >
              <img
                src="/images/image1.png"
                alt="Hunting Tiger Official Product Family Basket - Marketed by KSM AND CO. Vijayawada"
                style={{ width: '100%', height: 'auto', objectFit: 'contain', maxHeight: '520px', display: 'block' }}
              />
            </motion.div>
          </motion.div>

          {/* Heritage Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="section-tag">HERITAGE & PROTECTION</div>
            <h2 className="section-heading" style={{ marginBottom: '1.5rem', color: 'var(--charcoal)' }}>
              NO FUSS. NO COMPROMISE.<br />
              <span className="text-tiger-red">PURE PEST PROTECTION.</span>
            </h2>

            <p style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: 'var(--charcoal)', fontWeight: 500 }}>
              Marketed by <strong>KSM AND CO.</strong> (Nagarjuna Nagar, Vijayawada, AP), <strong>Hunting Tiger</strong> was forged to solve everyday pest hassles for millions of Indian households.
            </p>

            <p style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--stone-grey)' }}>
              Anti-Mosquito Agarbatti (Govt Approved formula), Rechargeable Mosquito Bats/Racquets - with Warranty, Full night Protection Coils and 3-IN-1 Cockroach Chalk - engineered for relentless Pest Protection by KSM AND CO. Vijayawada.
            </p>

            {/* Feature Cards Grid */}
            <div
              className="story-feature-cards"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.85rem',
                marginTop: '1.5rem',
              }}
            >
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
                className="flat-card story-card"
                style={{
                  backgroundColor: 'var(--white)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  padding: '1.1rem 0.85rem',
                  borderRadius: '6px',
                  borderTop: '3px solid var(--tiger-red)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.45rem',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(227, 30, 36, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.2rem',
                  }}
                >
                  <ShieldCheck size={22} color="var(--tiger-red)" />
                </div>
                <h4
                  style={{
                    fontSize: '0.95rem',
                    margin: 0,
                    color: 'var(--charcoal)',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  Warranty
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--stone-grey)', margin: 0, lineHeight: 1.35 }}>
                  Guaranteed warranty on rechargeable bats
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
                className="flat-card story-card"
                style={{
                  backgroundColor: 'var(--white)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  padding: '1.1rem 0.85rem',
                  borderRadius: '6px',
                  borderTop: '3px solid var(--golden-yellow)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.45rem',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(245, 166, 35, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.2rem',
                  }}
                >
                  <Timer size={22} color="var(--golden-yellow)" />
                </div>
                <h4
                  style={{
                    fontSize: '0.95rem',
                    margin: 0,
                    color: 'var(--charcoal)',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  Full-Night Protection
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--stone-grey)', margin: 0, lineHeight: 1.35 }}>
                  12-hour continuous slow-burn shield
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
                className="flat-card story-card"
                style={{
                  backgroundColor: 'var(--white)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  padding: '1.1rem 0.85rem',
                  borderRadius: '6px',
                  borderTop: '3px solid var(--herbal-green)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.45rem',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(47, 107, 47, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.2rem',
                  }}
                >
                  <Sparkles size={22} color="var(--herbal-green)" />
                </div>
                <h4
                  style={{
                    fontSize: '0.95rem',
                    margin: 0,
                    color: 'var(--charcoal)',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  Friendly Aroma
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--stone-grey)', margin: 0, lineHeight: 1.35 }}>
                  Pleasant herbal soothing fragrance
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 600px) {
          .story-feature-cards { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
        }
      `}</style>
    </section>
  );
}
