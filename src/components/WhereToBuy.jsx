import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Phone, Mail, Award, ArrowUpRight } from 'lucide-react';

export default function WhereToBuy({ onOpenDistributorModal }) {
  const regions = [
    { state: 'Andhra Pradesh', hubs: 'Vijayawada HQ, Visakhapatnam, Guntur, Tirupati, Kurnool, Rajahmundry', count: '4,500+ Outlets' },
    { state: 'Telangana', hubs: 'Hyderabad, Warangal, Nizamabad, Karimnagar, Khammam', count: '2,800+ Outlets' },
  ];

  return (
    <section id="where-to-buy" className="section-padding bg-cream">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="buy-grid"
        >
          {/* Left Distribution Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-tag section-tag-red">RETAIL NETWORK & STOCKISTS</div>
            <h2 className="section-heading" style={{ marginBottom: '1.5rem', color: 'var(--charcoal)' }}>
              AVAILABLE AT OVER <span className="text-tiger-red">10,000+ STORES</span> NATIONWIDE.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--stone-grey)', marginBottom: '2rem' }}>
              Hunting Tiger products are supplied to leading kirana stores, supermarkets, electrical outlets, and general merchants through our central distribution hub <strong>Vijayawada</strong>.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {regions.map((reg, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    backgroundColor: 'var(--white)',
                    padding: '1.1rem 1.25rem',
                    borderRadius: '4px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--charcoal)' }}>{reg.state}</h4>
                    <span className="flat-badge badge-yellow">{reg.count}</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--stone-grey)', margin: 0 }}>
                    <strong>Key Hubs:</strong> {reg.hubs}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary"
              onClick={onOpenDistributorModal}
            >
              <Building2 size={20} /> Become a Regional Distributor <ArrowUpRight size={18} />
            </motion.button>
          </motion.div>

          {/* Right HQ Card & Regional Hub Map Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              backgroundColor: 'var(--deep-navy)',
              color: 'var(--cream)',
              padding: '2.5rem',
              position: 'relative',
              borderRadius: '4px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--golden-yellow)',
                color: 'var(--charcoal)',
                display: 'inline-block',
                padding: '0.4rem 0.8rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
                borderRadius: '2px',
              }}
            >
              CENTRAL MARKETING HEADQUARTERS
            </div>

            <h3 style={{ fontSize: '1.8rem', color: 'var(--white)', marginBottom: '1rem' }}>
              KSM AND CO.
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.98rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={22} color="var(--golden-yellow)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  Ward 2A, 48-18-5/1, Road No 5,<br />
                  Nagarjuna Nagar, OPP-KVKR Municipal Park,<br />
                  Vijayawada, Krishna (District),<br />
                  State Name: Andhra Pradesh (Code: 37)<br />
                  <div style={{ marginTop: '0.35rem', color: 'var(--golden-yellow)', fontWeight: 700, letterSpacing: '0.03em' }}>
                    GSTIN/UIN: 37CBRPK8835R1ZD
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Phone size={20} color="var(--golden-yellow)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div><strong>K V R Murthy:</strong> +91 7842338899</div>
                  <div><strong>K Prem Chandra:</strong> +91 9010137013</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={20} color="var(--golden-yellow)" style={{ flexShrink: 0 }} />
                <span>ksmandcovijayawada@gmail.com</span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#0F1A36',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                borderRadius: '4px',
              }}
            >
              <Award size={36} color="var(--golden-yellow)" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '0.2rem' }}>
                  WHOLESALE & BULK ORDERS
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--cream)', margin: 0, opacity: 0.85 }}>
                  Attractive dealer margins, fast dispatch from Vijayawada warehouse, and branded promotional stands provided.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .buy-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
