import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Clock, ShieldCheck, Truck } from 'lucide-react';

export default function WhyUs() {
  const usps = [
    {
      icon: Leaf,
      title: 'HERBAL INGREDIENTS',
      desc: 'Formulated with natural botanical extracts, neem, and ayurvedic repellent oils safe for homes with children.',
    },
    {
      icon: Clock,
      title: '12-HOUR PROTECTION',
      desc: 'Slow-burn coils and heavy-duty battery racquets built to deliver uninterrupted overnight pest defense.',
    },
    {
      icon: ShieldCheck,
      title: 'ISO 9001:2015 CERTIFIED',
      desc: 'Manufactured and quality-tested under ISO standard protocols for safety, insulation, and high voltage output.',
    },
    {
      icon: Truck,
      title: 'TRUSTED PAN-INDIA',
      desc: 'Distributed by KSM AND CO., Vijayawada across a robust retail network of 10,000+ stockists and dealers.',
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-charcoal" style={{ color: 'var(--cream)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-title-wrapper"
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="section-tag section-tag-red">WHY HUNTING TIGER</div>
          <h2 className="section-heading" style={{ color: 'var(--white)' }}>
            BUILT FOR INDIAN HOMES. <span style={{ color: 'var(--golden-yellow)' }}>PROVEN IN PERFORMANCE.</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}
        >
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                style={{
                  backgroundColor: '#242424',
                  padding: '2rem 1.5rem',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    backgroundColor: 'var(--tiger-red)',
                    color: 'var(--white)',
                    padding: '0.75rem',
                    marginBottom: '1.25rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '3px',
                  }}
                >
                  <Icon size={32} strokeWidth={2} color="var(--white)" />
                </motion.div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--white)',
                    marginBottom: '0.75rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  {usp.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#B0B0AA', lineHeight: 1.5, margin: 0 }}>
                  {usp.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
