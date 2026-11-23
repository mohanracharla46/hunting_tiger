import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';
import { AgarbattiIcon, MosquitoBatIcon, CoilIcon, CockroachChalkIcon } from './CustomIcons';

function ProductCard({ prod, isSingle, onSelectProduct }) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const current = prod.variants ? prod.variants[selectedVariantIndex] : prod;
  const currentBadge = current.badge || prod.badge;
  const currentWarranty = current.warranty || prod.warranty;
  const currentStat = current.stat || prod.stat;
  const currentName = current.name || prod.name;
  const currentMrp = current.mrp || prod.mrp;
  const currentBenefit = current.benefit || prod.benefit;
  const currentSpecs = current.specs || prod.specs;
  const currentImage = current.image || prod.image;
  const currentColor = current.color || prod.color;
  const currentTextColor = current.textColor || prod.textColor;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      style={{
        backgroundColor: currentColor,
        color: currentTextColor,
        borderRadius: '6px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Card Top Header / Badge */}
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.25)',
          padding: '0.85rem 1.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span className="flat-badge badge-yellow">{currentBadge}</span>
        {currentWarranty && (
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--golden-yellow)',
            }}
          >
            {currentWarranty}
          </span>
        )}
        {currentStat && (
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              fontWeight: 700,
              color: 'var(--golden-yellow)',
            }}
          >
            {currentStat}
          </span>
        )}
      </div>

      {/* Body: Split 2-col on laptop for single-product view, vertical stack otherwise */}
      <div className={`product-card-body ${isSingle ? 'product-card-body-split' : ''}`}>
        {/* Product Media (One side in laptop view) */}
        <div
          className="product-media-container"
          style={{
            padding: isSingle ? '2rem 1.5rem' : '1.25rem',
            textAlign: 'center',
            backgroundColor: 'var(--white)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            src={currentImage}
            alt={currentName}
            style={{
              maxHeight: isSingle ? '380px' : '340px',
              width: '100%',
              margin: '0 auto',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Product Content (One side in laptop view) */}
        <div
          className="product-content-container"
          style={{
            padding: isSingle ? '2rem 2.25rem' : '1.5rem',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            {/* Price & Pack Selector Options if variants exist */}
            {prod.variants && prod.variants.length > 1 && (
              <div style={{ marginBottom: '1.2rem' }}>
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-display)',
                    color: 'var(--golden-yellow)',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  SELECT PACK / PRICE:
                </div>
                <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                  {prod.variants.map((v, vIdx) => {
                    const isSelected = vIdx === selectedVariantIndex;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariantIndex(vIdx)}
                        style={{
                          padding: '0.5rem 0.95rem',
                          borderRadius: '4px',
                          border: isSelected ? '2px solid var(--golden-yellow)' : '1px solid rgba(255, 255, 255, 0.25)',
                          backgroundColor: isSelected ? 'var(--golden-yellow)' : 'rgba(255, 255, 255, 0.08)',
                          color: isSelected ? 'var(--charcoal)' : 'var(--cream)',
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          letterSpacing: '0.03em',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          boxShadow: isSelected ? '0 2px 8px rgba(245, 166, 35, 0.35)' : 'none',
                        }}
                      >
                        {v.optionLabel || v.mrp}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ fontSize: isSingle ? '1.5rem' : '1.35rem', color: currentTextColor, margin: 0 }}>{currentName}</h3>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: isSingle ? '1.6rem' : '1.4rem',
                  fontWeight: 700,
                  color: 'var(--golden-yellow)',
                  flexShrink: 0,
                }}
              >
                {currentMrp}
              </div>
            </div>

            <p style={{ fontSize: '0.98rem', color: currentTextColor, opacity: 0.9, marginBottom: '1.25rem', lineHeight: 1.5 }}>
              {currentBenefit}
            </p>

            <div style={{ paddingTop: '0.25rem', marginBottom: '1.75rem' }}>
              {currentSpecs.map((sp, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                  <Check size={16} color="var(--golden-yellow)" />
                  <span>{sp}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.9rem' }}
            onClick={() => onSelectProduct({ ...prod, ...current })}
          >
            <ShoppingBag size={18} /> Request Dealer Quote
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductShowcase({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('incense');

  const categories = [
    { id: 'incense', prefix: '', label: 'Anti Mosquito Agarbatti', icon: AgarbattiIcon },
    { id: 'bats', prefix: '', label: 'Mosquito Bats & Racquets', icon: MosquitoBatIcon },
    { id: 'coils', prefix: '', label: 'Mosquito Coils', icon: CoilIcon },
    { id: 'chalk', prefix: '', label: '3-in-1 Cockroach Chalk', icon: CockroachChalkIcon },
  ];

  const productsData = {
    bats: [
      {
        id: 'bat-ht111',
        name: 'Hunting Tiger Rechargeable Bat (Model HT-111)',
        mrp: '₹399.00',
        warranty: '3 Months Warranty',
        benefit: 'Black rechargeable mosquito bat with 8-hour recharge and heavy-duty safety mesh.',
        specs: ['Model No. HT-111', '3 Months Warranty', '8 Hours Recharge • ISO 9001:2015'],
        image: '/images/mosquito-bat-ht111.png',
        badge: '3 MONTHS WARRANTY',
        color: 'var(--deep-navy)',
        textColor: 'var(--cream)',
      },
      {
        id: 'bat-ht222',
        name: 'Hunting Tiger Rechargeable Bat (Model HT-222)',
        mrp: '₹499.00',
        warranty: '6 Months Warranty',
        benefit: 'Orange & black rechargeable mosquito bat with 8-hour charge and heavy-duty safety mesh.',
        specs: ['Model No. HT-222', '6 Months Warranty', '8 Hours Charge • ISO 9001:2015'],
        image: '/images/mosquito-bat-ht222.png',
        badge: '6 MONTHS WARRANTY',
        color: 'var(--charcoal)',
        textColor: 'var(--cream)',
      },
      {
        id: 'bat-ht500',
        name: 'Hunting Tiger Rechargeable Bat (Model HT500)',
        mrp: '₹595.00',
        warranty: '6 Months Warranty',
        benefit: 'Pink & white rechargeable mosquito bat with 8-hour charge and heavy-duty safety mesh.',
        specs: ['Model No. HT500', '6 Months Warranty', '8 Hours Recharge • ISO 9001:2015'],
        image: '/images/mosquito-bat-ht500.png',
        badge: '6 MONTHS WARRANTY',
        color: 'var(--deep-navy)',
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
        color: 'var(--charcoal)',
        textColor: 'var(--cream)',
      },
    ],
    coils: [
      {
        id: 'mosquito-coils',
        name: 'Hunting Tiger Mosquito Coils',
        image: '/images/mosquito-coils.png',
        color: 'var(--deep-navy)',
        textColor: 'var(--cream)',
        variants: [
          {
            id: 'coil-10-4',
            name: 'Hunting Tiger 10+4 FREE Mosquito Coils',
            mrp: '₹40.00',
            optionLabel: '₹40.00 (10+4 Coils)',
            badge: '10 + 4 FREE PROMO',
            stat: '12 HOURS PROTECTION',
            benefit: '14 Heavy-duty red coils + metal stand clips in signature blue & orange box.',
            specs: ['Coils - 10+4 Free Promo', '12 Hours Protection', 'Slow Smoke Diffusion'],
          },
          {
            id: 'coil-30',
            name: 'Hunting Tiger 30-Coil Power Booster',
            mrp: '₹99.00',
            optionLabel: '₹99.00 (30 Coils)',
            badge: '30 COILS BOOSTER',
            stat: '12 HOURS PROTECTION',
            benefit: 'Bulk 30-coil power booster display box for 12-hour bedroom & patio defense.',
            specs: ['Coils - 30 Power Booster', '12 Hours Protection', 'Wind Resistant Formula'],
          },
        ],
      },
    ],
    incense: [
      {
        id: 'anti-mosquito-agarbatti',
        name: 'Hunting Tiger Anti-Mosquito Agarbatti',
        mrp: '₹5 / ₹130',
        badge: 'GOVT APPROVED FORMULA',
        benefit: 'Government-approved anti-mosquito agarbatti available in 4 Sticks (MRP ₹5) and 26 Strips Box (MRP ₹130).',
        specs: ['Sticks 4 — MRP: ₹5', 'Strips 26 — MRP: ₹130', 'Government Approved Formula'],
        image: '/images/anti-mosquito-agarbatti.jpg',
        color: 'var(--herbal-green)',
        textColor: 'var(--cream)',
      },
      {
        id: 'anti-mosquito-agarbatti-10',
        name: 'Hunting Tiger Anti-Mosquito Agarbatti (₹10 Pack)',
        mrp: '₹10 / ₹130',
        badge: 'GOVT APPROVED FORMULA',
        benefit: 'Government-approved anti-mosquito agarbatti available in 9 Sticks (MRP ₹10.00) and 13 Strips Box (MRP ₹130.00).',
        specs: ['Sticks 9 — MRP: ₹10.00', 'Strips 13 — MRP: ₹130.00', 'Government Approved Formula'],
        image: '/images/anti-mosquito-agarbatti-10.png',
        color: 'var(--deep-navy)',
        textColor: 'var(--cream)',
      },
      {
        id: 'anti-mosquito-agarbatti-20',
        name: 'Hunting Tiger Anti-Mosquito Agarbatti (₹20 Pack)',
        mrp: '₹20 / ₹300',
        badge: 'GOVT APPROVED FORMULA',
        benefit: 'Government-approved anti-mosquito agarbatti available in 10 Sticks (MRP ₹20.00) and 15 Strips Box (MRP ₹300.00).',
        specs: ['Sticks 10 — MRP: ₹20.00', 'Strips 15 — MRP: ₹300.00', 'Government Approved Formula'],
        image: '/images/anti-mosquito-agarbatti-20.png',
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
            className={`product-showcase-grid product-grid-${activeCategory} product-grid-count-${productsData[activeCategory].length}`}
            style={{
              display: 'grid',
              gridTemplateColumns:
                productsData[activeCategory].length === 1
                  ? '1fr'
                  : productsData[activeCategory].length === 4
                  ? 'repeat(2, 1fr)'
                  : 'repeat(auto-fit, minmax(min(360px, 100%), 1fr))',
              gap: '2rem',
              maxWidth:
                productsData[activeCategory].length === 1
                  ? '960px'
                  : productsData[activeCategory].length === 4
                  ? '1140px'
                  : 'none',
              margin:
                productsData[activeCategory].length === 1 || productsData[activeCategory].length === 4
                  ? '0 auto'
                  : '0',
              width: '100%',
            }}
          >
            {productsData[activeCategory].map((prod) => (
              <ProductCard
                key={prod.id}
                prod={prod}
                isSingle={productsData[activeCategory].length === 1}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .product-card-body-split {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          flex-grow: 1;
        }

        @media (max-width: 850px) {
          .product-grid-count-4 {
            grid-template-columns: 1fr !important;
          }
          .product-card-body-split {
            grid-template-columns: 1fr !important;
          }
          .product-content-container {
            padding: 1.5rem !important;
          }
        }

        @media (max-width: 600px) {
          .category-switcher-bar { width: 100%; gap: 0.5rem !important; }
          .category-tab-btn { width: 100%; justify-content: center; padding: 0.65rem 1rem !important; font-size: 0.95rem !important; }
        }
      `}</style>
    </section>
  );
}
