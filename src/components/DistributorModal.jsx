import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Building2 } from 'lucide-react';

export default function DistributorModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    cityState: '',
    experienceYears: '',
    categoryInterest: 'All Product Lines',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close modal">
              <X size={24} />
            </button>

            {!submitted ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <Building2 size={24} color="var(--tiger-red)" />
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--charcoal)', margin: 0 }}>
                    BECOME A DISTRIBUTOR
                  </h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--stone-grey)', marginBottom: '1.5rem' }}>
                  Join KSM AND CO.’s nationwide dealer network. Fill out the application below for direct wholesale pricing and stockist terms.
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Business / Firm Name *</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="e.g. Sri Rama Traders"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Contact Person *</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Full Name"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="form-control"
                        placeholder="10-digit Mobile"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">City & State *</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="e.g. Vijayawada, AP"
                        value={formData.cityState}
                        onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Primary Interest</label>
                    <select
                      className="form-control"
                      value={formData.categoryInterest}
                      onChange={(e) => setFormData({ ...formData, categoryInterest: e.target.value })}
                    >
                      <option value="All Product Lines">All Hunting Tiger Products</option>
                      <option value="Electric Mosquito Bats">Electric Mosquito Bats / Rackets</option>
                      <option value="12-Hour Mosquito Coils">12-Hour Mosquito Coils</option>
                      <option value="Herbal Incense Sticks">Herbal Agarbatti / Incense</option>
                      <option value="Garuda Rekha Roach Chalk">Garuda Rekha 3-in-1 Roach Chalk</option>
                    </select>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '1rem' }}
                  >
                    Submit Distributorship Application
                  </motion.button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ textAlign: 'center', padding: '2rem 1rem' }}
              >
                <CheckCircle2 size={64} color="var(--herbal-green)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                  APPLICATION RECEIVED!
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--stone-grey)', marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.contactPerson}</strong>. Our regional distribution desk from <strong>KSM AND CO., Vijayawada</strong> will review your details and contact you via <strong>{formData.phone}</strong> within 24 business hours.
                </p>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
