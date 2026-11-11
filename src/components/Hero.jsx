import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Landmark, MapPin } from 'lucide-react';

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

  const heroVideos = [
    {
      src: '/videos/hero.mp4',
      badge: 'FLAGSHIP COMMERCIAL • KSM AND CO.',
      badgeBg: 'var(--golden-yellow)',
      badgeColor: 'var(--charcoal)',
      delay: 0.2,
    },
    {
      src: '/videos/hero2.mp4',
      badge: 'BRAND COMMERCIAL • TIDY TOUCH',
      badgeBg: 'var(--tiger-red)',
      badgeColor: 'var(--white)',
      delay: 0.35,
    },
  ];

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

            <motion.div
              variants={itemVariants}
              style={{
                marginBottom: '2rem',
                maxWidth: '600px',
                opacity: 0.95,
              }}
            >
              <p
                style={{
                  fontSize: '1.02rem',
                  color: 'var(--cream)',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  marginBottom: '0.75rem',
                }}
              >
                KSM AND CO has launched Hunting Tiger Brand in 2020 currently experiencing rapid growth in Pest management solutions with low price point across Andhra Pradesh and Telangana.
              </p>
              <p
                style={{
                  fontSize: '1.02rem',
                  color: 'var(--cream)',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  marginBottom: '0.75rem',
                }}
              >
                KSM AND CO; Based in South India, we specialize in engineering high-performance, heavy-duty defences designed to eradicate both flying and crawling insects.
              </p>
              <p
                style={{
                  fontSize: '1.02rem',
                  color: 'var(--cream)',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  marginBottom: 0,
                }}
              >
                Combining government-approved formulas with industrial-grade reliability, our mission is to deliver uncompromising safety and continuous protection for homes, businesses, and communities.
              </p>
            </motion.div>

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
                <Landmark size={18} color="#4EBA4E" />
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

          {/* Right Dual Video Showcase */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                width: '100%',
                maxWidth: '520px',
              }}
            >
              {heroVideos.map((video) => (
                <motion.div
                  key={video.src}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: video.delay }}
                  style={{
                    backgroundColor: 'var(--charcoal)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 9',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                  }}
                >
                  {/* Clean Video Player */}
                  <video
                    src={video.src}
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

                  {/* Badge Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      right: '0',
                      backgroundColor: video.badgeBg,
                      color: video.badgeColor,
                      padding: '0.4rem 0.9rem',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {video.badge}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
