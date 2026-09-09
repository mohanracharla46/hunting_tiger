import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, PhoneCall, MapPin, Mail, Clock, CheckCircle2 } from 'lucide-react';

export default function ContactSection({ selectedProduct }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    product: selectedProduct ? selectedProduct.name : 'General Enquiry',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-title-wrapper"
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div className="section-tag section-tag-red">DIRECT CONNECT</div>
          <h2 className="section-heading">
            GET IN TOUCH WITH <span className="text-tiger-red">KSM AND CO.</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '1.05rem' }}>
            Have a product inquiry, retail question, or bulk order requirement? Send a message directly to our marketing team in Vijayawada.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'stretch',
          }}
          className="contact-split"
        >
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: 'var(--white)',
              padding: '2.5rem',
              borderRadius: '4px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
            }}
          >
            {!formSubmitted ? (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--charcoal)', marginBottom: '1.5rem', paddingBottom: '0.5rem' }}>
                  QUICK ENQUIRY FORM
                </h3>

                <div className="form-group">
                  <label className="form-label">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="form-control"
                      placeholder="10-digit mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">City / Location *</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="e.g. Vijayawada"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Product Interest</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message / Requirement</label>
                  <textarea
                    rows={4}
                    className="form-control"
                    placeholder="Provide details on bulk quantity or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <Send size={18} /> Submit Enquiry
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ textAlign: 'center', padding: '3rem 1rem' }}
              >
                <CheckCircle2 size={64} color="var(--tiger-red)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                  ENQUIRY SUBMITTED!
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--stone-grey)', marginBottom: '1.5rem' }}>
                  Thank you <strong>{formData.name}</strong>. Our Vijayawada desk will reach out to you shortly at <strong>{formData.phone}</strong>.
                </p>
                <button className="btn btn-outline-dark" onClick={() => setFormSubmitted(false)}>
                  Send Another Enquiry
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Details & Basket Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--charcoal)',
                color: 'var(--cream)',
                padding: '2rem',
                borderRadius: '4px',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', color: 'var(--white)', marginBottom: '1.25rem' }}>
                OFFICIAL COMPANY ADDRESS
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <MapPin size={22} color="var(--tiger-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--golden-yellow)' }}>KSM AND CO.</strong><br />
                    Commercial Highway Complex, Near Benz Circle,<br />
                    Vijayawada, Andhra Pradesh, India
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <PhoneCall size={20} color="var(--golden-yellow)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <div><strong>K V R Murthy:</strong> +91 7842338899</div>
                    <div><strong>K Prem Chandra:</strong> +91 9010137013</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Mail size={20} color="var(--golden-yellow)" style={{ flexShrink: 0 }} />
                  <span>ksmandcovijayawada@gmail.com</span>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <Clock size={20} color="var(--golden-yellow)" style={{ flexShrink: 0 }} />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Product Basket Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                backgroundColor: 'var(--white)',
                padding: '1rem',
                textAlign: 'center',
                borderRadius: '4px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              }}
            >
              <img
                src="/images/image9.png"
                alt="Hunting Tiger Official Product Lineup - KSM AND CO."
                style={{ maxHeight: '240px', width: 'auto', margin: '0 auto', display: 'block' }}
              />
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--charcoal)', fontWeight: 700, marginTop: '0.5rem' }}>
                MARKETED BY KSM AND CO., VIJAYAWADA
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-split { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
