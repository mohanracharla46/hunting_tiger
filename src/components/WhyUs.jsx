import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BadgeCheck, Sparkles, Timer } from 'lucide-react';

export default function WhyUs() {
  const usps = [
    {
      num: '01',
      icon: CheckCircle2,
      title: 'GOVT APPROVED FORMULA',
      highlight: 'Certified Safe Formula',
      desc: 'Government-approved pest control formulation, rigorously tested and certified for safe home usage and maximum effectiveness.',
      borderColor: 'var(--tiger-red)',
      iconColor: 'var(--tiger-red)',
      iconBg: 'rgba(227, 30, 36, 0.15)',
    },
    {
      num: '02',
      icon: BadgeCheck,
      title: 'ISO 9001:2015 CERTIFIED',
      highlight: 'Strict Quality Standard',
      desc: 'Manufactured and quality-tested under ISO standard protocols for safety, insulation, and high voltage output.',
      borderColor: 'var(--golden-yellow)',
      iconColor: 'var(--golden-yellow)',
      iconBg: 'rgba(245, 166, 35, 0.15)',
    },
    {
      num: '03',
      icon: Sparkles,
      title: 'HERBAL INGREDIENTS',
      highlight: '100% Botanical Blend',
      desc: 'Formulated with natural botanical extracts, neem, and ayurvedic repellent oils safe for homes with children.',
      borderColor: '#4EBA4E',
      iconColor: '#4EBA4E',
      iconBg: 'rgba(78, 186, 78, 0.15)',
    },
    {
      num: '04',
      icon: Timer,
      title: '12-HOUR PROTECTION',
      highlight: 'Uninterrupted Overnight',
      desc: 'Slow-burn coils and heavy-duty battery racquets built to deliver uninterrupted overnight pest defense.',
      borderColor: 'var(--golden-yellow)',
      iconColor: 'var(--golden-yellow)',
      iconBg: 'rgba(245, 166, 35, 0.15)',
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-charcoal" style={{ color: 'var(--cream)', position: 'relative' }}>
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
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
                whileHover={{ y: -8 }}
                style={{
                  backgroundColor: '#1E1E1E',
                  padding: '2.25rem 1.75rem',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                }}
              >
                {/* Number Watermark */}
                <span
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.5rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.4rem',
                    fontWeight: 700,
                    color: 'rgba(255, 255, 255, 0.08)',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {usp.num}
                </span>

                <div>
                  {/* Icon Circular Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      backgroundColor: usp.iconBg,
                      border: `1px solid ${usp.borderColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <Icon size={26} color={usp.iconColor} strokeWidth={2} />
                  </motion.div>

                  <h3
                    style={{
                      fontSize: '1.3rem',
                      color: 'var(--white)',
                      marginBottom: '0.35rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {usp.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-display)',
                      color: usp.borderColor,
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    {usp.highlight}
                  </div>

                  <p style={{ fontSize: '0.95rem', color: '#B8B8B2', lineHeight: 1.55, margin: 0 }}>
                    {usp.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
