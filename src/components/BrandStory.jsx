import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Sparkles } from 'lucide-react';

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

            <p style={{ fontSize: '1rem', marginBottom: '2rem', color: 'var(--stone-grey)' }}>
              From high-voltage rechargeable mosquito swatters to 12-hour slow-burn coils, natural herbal agarbatti incense sticks, and the famed 3-in-1 Garuda Rekha roach chalk — every product is engineered for high efficacy, affordability, and total family safety.
            </p>

            {/* Feature Points */}
            <div className="story-cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="flat-card"
                style={{ backgroundColor: 'var(--white)', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <Factory size={22} color="var(--tiger-red)" />
                  <h4 style={{ fontSize: '1.05rem' }}>Vijayawada HQ</h4>
                </div>
                <p style={{ fontSize: '0.88rem', margin: 0 }}>Directly manufactured & marketed under strict ISO quality controls.</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="flat-card"
                style={{ backgroundColor: 'var(--white)', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <Sparkles size={22} color="var(--herbal-green)" />
                  <h4 style={{ fontSize: '1.05rem' }}>Herbal First</h4>
                </div>
                <p style={{ fontSize: '0.88rem', margin: 0 }}>Natural ingredients formula safe for kids and domestic spaces.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 500px) {
          .story-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
