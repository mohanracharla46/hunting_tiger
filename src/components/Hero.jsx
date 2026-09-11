import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Leaf, MapPin } from 'lucide-react';

export default function Hero({ onOpenEnquiry }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section
      style={{
        backgroundColor: 'var(--deep-navy)',
        color: 'var(--cream)',
        paddingTop: '7.5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.1rem, 6.5vw, 4.8rem)',
                lineHeight: 1.05,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em',
              }}
            >
              BUILT TO HUNT.<br />
              <span style={{ color: 'var(--golden-yellow)' }}>TRUSTED TO PROTECT.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              style={{
                fontSize: '1.18rem',
                color: 'var(--cream)',
                marginBottom: '2.25rem',
                maxWidth: '560px',
                lineHeight: 1.6,
                fontWeight: 400,
                opacity: 0.95,
              }}
            >
              Heavy-duty electric mosquito swatter rackets, 12-hour protection coils, herbal incense sticks, and 3-in-1 Garuda Rekha chalk — engineered for relentless pest protection by <strong>KSM AND CO.  Vijayawada</strong>.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-btn-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#products"
                className="btn btn-primary"
                style={{ padding: '0.95rem 2rem', fontSize: '1.15rem' }}
              >
                View Product Range <ArrowRight size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#where-to-buy"
                className="btn btn-secondary"
                style={{ padding: '0.95rem 2rem', fontSize: '1.15rem' }}
              >
                Find a Dealer
              </motion.a>
            </motion.div>

            {/* Flat Trust Badges Strip */}
            <motion.div
              variants={itemVariants}
              className="hero-trust-strip"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                paddingTop: '0.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '3px',
                  fontSize: '0.88rem',
                  color: 'var(--cream)',
                }}
              >
                <ShieldCheck size={18} color="var(--golden-yellow)" />
                <span><strong>ISO 9001:2015</strong> Certified</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '3px',
                  fontSize: '0.88rem',
                  color: 'var(--cream)',
                }}
              >
                <Leaf size={18} color="#4EBA4E" />
                <span><strong>Govt Approved</strong> Formula</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '3px',
                  fontSize: '0.88rem',
                  color: 'var(--cream)',
                }}
              >
                <MapPin size={18} color="var(--tiger-red)" />
                <span><strong>AP & TS</strong> Network</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Square Big Video Showcase matching left height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <div
              style={{
                backgroundColor: 'var(--charcoal)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                position: 'relative',
                width: '100%',
                maxWidth: '500px',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                borderRadius: '4px',
              }}
            >
              {/* Clean Square Video Player - Default Muted, Autoplay, Loop with Browser Controls Suppressed */}
              <video
                src="/videos/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                disableRemotePlayback
                controlsList="nodownload no-supported-media-actions noplaybackrate nofullscreen"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              />

              {/* Bold Badge Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  backgroundColor: 'var(--golden-yellow)',
                  color: 'var(--charcoal)',
                  padding: '0.6rem 1.25rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '0.05em',
                }}
              >
                FLAGSHIP COMMERCIAL • KSM AND CO.
              </div>
            </div>
          </motion.div>
        </div>
      </div>


      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; justify-items: center; }
          .hero-grid p { margin-left: auto; margin-right: auto; }
          .hero-grid div:first-child { display: flex; flex-direction: column; align-items: center; width: 100%; }
        }
        @media (max-width: 600px) {
          .hero-btn-group { width: 100%; flex-direction: column; gap: 0.75rem !important; }
          .hero-btn-group a { width: 100% !important; justify-content: center !important; padding: 0.85rem 1rem !important; font-size: 1rem !important; box-sizing: border-box !important; }
          .hero-trust-strip { justify-content: center; width: 100%; }
          .hero-trust-strip > div { width: 100%; justify-content: center; box-sizing: border-box; }
        }
      `}</style>
    </section>
  );
}
