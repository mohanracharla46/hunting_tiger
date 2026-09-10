import React from 'react';
import { motion } from 'framer-motion';
import { Bug } from 'lucide-react';
import { AntIcon } from './CustomIcons';

export default function GarudaRekhaBanner({ onEnquire }) {
  return (
    <section
      style={{
        backgroundColor: 'var(--golden-yellow)',
        padding: '3.5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3rem',
            alignItems: 'center',
            backgroundColor: 'var(--charcoal)',
            color: 'var(--cream)',
            padding: '2.5rem',
            position: 'relative',
            borderRadius: '4px',
            boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
          }}
          className="garuda-split"
        >
          {/* Yellow Badge */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              backgroundColor: 'var(--tiger-red)',
              color: 'var(--white)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              padding: '0.4rem 1.25rem',
              fontSize: '1rem',
              letterSpacing: '0.05em',
            }}
          >
            BESTSELLER • ₹15 ONLY
          </div>

          <div>
            <div className="section-tag" style={{ backgroundColor: 'var(--golden-yellow)', color: 'var(--charcoal)' }}>
              SPECIALITY PEST FORMULA
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                color: 'var(--white)',
                marginBottom: '1rem',
                lineHeight: 1.05,
              }}
            >
              GARUDA REKHA <span style={{ color: 'var(--golden-yellow)' }}>3-IN-1 CHALK</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--cream)', marginBottom: '1.5rem', fontWeight: 500 }}>
              Draw a simple line. Stop crawling pests dead in their tracks. Specially formulated for kitchen countertops, cabinets, drain edges, and dark corners.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#2B2B2B', padding: '0.55rem 1rem', borderRadius: '3px' }}>
                <Bug size={18} color="var(--tiger-red)" />
                <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Kills Cockroaches</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#2B2B2B', padding: '0.55rem 1rem', borderRadius: '3px' }}>
                <AntIcon size={18} color="var(--tiger-red)" />
                <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Kills Ants</span>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-gold"
              onClick={onEnquire}
            >
              Enquire Bulk Order (MRP ₹15)
            </motion.button>
          </div>

          <div style={{ textAlign: 'center' }}>
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
              src="/images/image8.png"
              alt="Garuda Rekha 3-in-1 Roach Chalk Poster by Hunting Tiger - KSM AND CO."
              style={{
                maxHeight: '380px',
                width: '100%',
                margin: '0 auto',
                objectFit: 'contain',
                backgroundColor: 'var(--white)',
                padding: '0.5rem',
                borderRadius: '4px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              }}
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .garuda-split { grid-template-columns: 1fr !important; padding: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
