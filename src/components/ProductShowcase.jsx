import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';
import { IncenseIcon, MosquitoBatIcon, CoilIcon, CockroachChalkIcon } from './CustomIcons';

export default function ProductShowcase({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('incense');

  const categories = [
    { id: 'incense', prefix: 'A.', label: 'Anti Mosquito Agarbatti', icon: IncenseIcon },
    { id: 'bats', prefix: 'B.', label: 'Mosquito Bats & Racquets', icon: MosquitoBatIcon },
    { id: 'coils', prefix: 'C.', label: 'Mosquito Coils', icon: CoilIcon },
    { id: 'chalk', prefix: 'D.', label: '3-in-1 Cockroach Chalk', icon: CockroachChalkIcon },
  ];

  const productsData = {
    bats: [
      {
        id: 'bat-std',
        name: 'Hunting Tiger Rechargeable Bat (Model CB100)',
        mrp: '₹395.00',
        warranty: '3 Months Warranty',
        benefit: 'Heavy-duty ABS chassis, high-voltage mesh & 8-hour rechargeable battery.',
        specs: ['Model No. CB100', '8 Hours Recharge', 'ISO 9001:2015 Certified'],
        image: '/images/image5.png',
        badge: 'POPULAR MODEL',
        color: 'var(--charcoal)',
        textColor: 'var(--cream)',
      },
      {
        id: 'bat-boxed',
        name: 'Hunting Tiger Anti-Mosquito Racquet Set',
        mrp: '₹599.00',
        warranty: '1 Year Warranty',
        benefit: 'Retail box set including FREE 2 pcs Herbal Incense Sticks & heavy battery.',
        specs: ['1 Year Full Warranty', 'FREE 2 Pcs Herbal Incense', 'Heavy-Duty Battery'],
        image: '/images/image6.png',
        badge: 'FREE GIFT PACK',
        color: 'var(--deep-navy)',
        textColor: 'var(--cream)',
      },
      {
        id: 'bat-lineup',
        name: 'Hunting Tiger Multi-Mesh Racket Series',
        mrp: '₹395 - ₹599',
        warranty: 'ISO Certified',
        benefit: 'Available in Black, Pink, and Yellow heavy-duty safety mesh variants.',
        specs: ['Triple Mesh Protection', 'Ergonomic Grip', 'Instant Zapping'],
        image: '/images/image9.png',
        badge: 'FULL COLOR RANGE',
        color: 'var(--charcoal)',
        textColor: 'var(--cream)',
      },
    ],
    coils: [
      {
        id: 'coil-10-4',
        name: 'Hunting Tiger 10+4 FREE Mosquito Coils',
        mrp: '₹40.00',
        stat: '12 HOURS PROTECTION',
        benefit: '14 Heavy-duty red coils + metal stand clips in signature blue & orange box.',
        specs: ['10+4 Coils Free Promo', '12 Hours Continuous Burn', 'Slow Smoke Diffusion'],
        image: '/images/image7.png',
        badge: '10 + 4 FREE PROMO',
        color: 'var(--deep-navy)',
        textColor: 'var(--cream)',
      },
      {
        id: 'coil-30',
        name: 'Hunting Tiger 30-Coil Power Booster',
        mrp: '₹85.00',
        stat: '12 HOURS PROTECTION',
        benefit: 'Bulk 30-coil power booster display box for full month bedroom & patio defense.',
        specs: ['30 Power Booster Coils', '12 Hours Protection', 'Wind Resistant Formula'],
        image: '/images/image7.png',
        badge: '30 COILS BOOSTER',
        color: 'var(--charcoal)',
        textColor: 'var(--cream)',
      },
    ],
    incense: [
      {
        id: 'incense-range-1',
        name: 'Hunting Tiger Herbal Agarbatti Range',
        mrp: '₹5 / ₹10 / ₹15',
        badge: 'HERBAL COLLECTION',
        benefit: 'Natural herbal agarbatti sticks available in ₹5 (5 Sticks), ₹10 (10 Sticks), and ₹15 packs.',
        specs: ['Made with Herbal Ingredients', '0% Synthetic Chemicals', 'Spreads Pleasant Environment'],
        image: '/images/image2.png',
        color: 'var(--herbal-green)',
        textColor: 'var(--cream)',
      },
      {
        id: 'incense-range-2',
        name: 'Hunting Tiger Neem & Jasmine Agarbatti',
        mrp: '₹15.00',
        badge: 'NEEM & JASMINE',
        benefit: 'Premium ₹15 agarbatti pack enriched with added Neem Herbal & Jasmine Fragrance.',
        specs: ['Added Neem Herbal', 'Real Jasmine Fragrance', 'Long 10 Sticks Pack'],
        image: '/images/image3.png',
        color: 'var(--herbal-green)',
        textColor: 'var(--cream)',
      },
      {
        id: 'garuda-incense-box',
        name: 'Garuda Rekha Herbal Incense Box',
        mrp: '₹15.00',
        badge: 'GARUDA EDITION',
        benefit: 'Speciality ₹15 herbal agarbatti box with Garuda wings logo formula.',
        specs: ['Sticks - 10, Strips - 12', 'Natural Repellent Formula', 'Ayurvedic Botanical Blend'],
        image: '/images/image4.png',
        color: 'var(--charcoal)',
        textColor: 'var(--cream)',
      },
    ],
    chalk: [
      {
        id: 'garuda-chalk-box',
        name: 'Garuda Rekha 3-in-1 Roach Chalk Display',
        mrp: '₹15.00',
        badge: '3-IN-1 FORMULA',
        benefit: 'Kills Cockroaches and Ants instantly upon line contact.',
        specs: ['Kills Cockroaches', 'Kills Ants', 'Counter Display Box Pack'],
        image: '/images/image8.png',
        color: 'var(--golden-yellow)',
        textColor: 'var(--charcoal)',
      },
    ],
  };

  return (
    <section id="products" className="section-padding bg-cream">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-title-wrapper"
          style={{ textAlign: 'center' }}
        >
          <div className="section-tag section-tag-red">PRODUCT CATALOG</div>
          <h2 className="section-heading">
            RUGGED PRODUCTS. <span className="text-tiger-red">ZERO PESTS.</span>
          </h2>
          <p style={{ maxWidth: '650px', margin: '0.5rem auto 0', fontSize: '1.05rem' }}>
            Tested and distributed across thousands of retail counters by KSM AND CO., Vijayawada. Select a category below to explore official packaging and specs.
          </p>
        </motion.div>

        {/* Category Switcher Bar */}
        <div
          className="category-switcher-bar"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCategory(cat.id)}
                className="category-tab-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  padding: '0.75rem 1.4rem',
                  backgroundColor: isActive ? 'var(--tiger-red)' : 'var(--white)',
                  color: isActive ? 'var(--white)' : 'var(--charcoal)',
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  transition: 'all 0.15s ease',
                }}
              >
                <span>{cat.prefix}</span>
                <Icon size={24} color={isActive ? 'var(--white)' : 'var(--tiger-red)'} />
                <span>{cat.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Animated Product Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '2rem',
            }}
          >
            {productsData[activeCategory].map((prod) => (
              <motion.div
                key={prod.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
                style={{
                  backgroundColor: prod.color,
                  color: prod.textColor,
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                }}
              >
                {/* Card Top Header / Badge */}
                <div
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    padding: '0.75rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span className="flat-badge badge-yellow">{prod.badge}</span>
                  {prod.warranty && (
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--golden-yellow)',
                      }}
                    >
                      {prod.warranty}
                    </span>
                  )}
                  {prod.stat && (
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: 'var(--golden-yellow)',
                      }}
                    >
                      {prod.stat}
                    </span>
                  )}
                </div>

                {/* Product Media */}
                <div style={{ padding: '1.25rem', textAlign: 'center', backgroundColor: 'var(--white)' }}>
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    src={prod.image}
                    alt={prod.name}
                    style={{
                      maxHeight: '340px',
                      width: '100%',
                      margin: '0 auto',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                {/* Product Content */}
                <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.35rem', color: prod.textColor, margin: 0 }}>{prod.name}</h3>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.4rem',
                          fontWeight: 700,
                          color: 'var(--golden-yellow)',
                          marginLeft: '0.5rem',
                          flexShrink: 0,
                        }}
                      >
                        {prod.mrp}
                      </div>
                    </div>

                    <p style={{ fontSize: '0.95rem', color: prod.textColor, opacity: 0.9, marginBottom: '1rem', lineHeight: 1.4 }}>
                      {prod.benefit}
                    </p>

                    <div style={{ paddingTop: '0.5rem', marginBottom: '1.5rem' }}>
                      {prod.specs.map((sp, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                          <Check size={14} color="var(--golden-yellow)" />
                          <span>{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                    onClick={() => onSelectProduct(prod)}
                  >
                    <ShoppingBag size={18} /> Request Dealer Quote
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .category-switcher-bar { width: 100%; gap: 0.5rem !important; }
          .category-tab-btn { width: 100%; justify-content: center; padding: 0.65rem 1rem !important; font-size: 0.95rem !important; }
        }
      `}</style>
    </section>
  );
}
