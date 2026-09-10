import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Building2 } from 'lucide-react';

const AP_DISTRICTS = [
  'Alluri Sitharama Raju',
  'Anakapalli',
  'Ananthapuramu',
  'Annamayya',
  'Bapatla',
  'Chittoor',
  'East Godavari',
  'Eluru',
  'Guntur',
  'Kakinada',
  'Konaseema (Dr. B.R. Ambedkar Konaseema)',
  'NTR (Vijayawada)',
  'Nandyal',
  'Palnadu',
  'Parvathipuram Manyam',
  'Prakasam',
  'Sri Potti Sriramulu Nellore',
  'Sri Sathya Sai',
  'Srikakulam',
  'Tirupati',
  'Visakhapatnam',
  'Vizianagaram',
  'West Godavari',
  'YSR Kadapa',
];

const TELANGANA_DISTRICTS = [
  'Adilabad',
  'Bhadradri Kothagudem',
  'Hanumakonda',
  'Hyderabad',
  'Jagtial',
  'Jangaon',
  'Jayashankar Bhupalpally',
  'Jogulamba Gadwal',
  'Kamareddy',
  'Karimnagar',
  'Khammam',
  'Kumuram Bheem Asifabad',
  'Mahabubabad',
  'Mahabubnagar',
  'Mancherial',
  'Medak',
  'Medchal-Malkajgiri',
  'Mulugu',
  'Nagarkurnool',
  'Nalgonda',
  'Narayanpet',
  'Nirmal',
  'Nizamabad',
  'Peddapalli',
  'Rajanna Sircilla',
  'Ranga Reddy',
  'Sangareddy',
  'Siddipet',
  'Suryapet',
  'Vikarabad',
  'Wanaparthy',
  'Warangal',
  'Yadadri Bhuvanagiri',
];

export default function DistributorModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    state: '',
    city: '',
    categoryInterest: 'All Product Lines',
  });

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData((prev) => ({
      ...prev,
      state: selectedState,
      city: '',
    }));
  };

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
                  <div className="modal-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
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

                  <div className="modal-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">State *</label>
                      <select
                        required
                        className="form-control"
                        value={formData.state}
                        onChange={handleStateChange}
                      >
                        <option value="">Select State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">District / City *</label>
                      {formData.state === 'Andhra Pradesh' ? (
                        <select
                          required
                          className="form-control"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        >
                          <option value="">Select District</option>
                          {AP_DISTRICTS.map((dist) => (
                            <option key={dist} value={dist}>
                              {dist}
                            </option>
                          ))}
                        </select>
                      ) : formData.state === 'Telangana' ? (
                        <select
                          required
                          className="form-control"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        >
                          <option value="">Select District</option>
                          {TELANGANA_DISTRICTS.map((dist) => (
                            <option key={dist} value={dist}>
                              {dist}
                            </option>
                          ))}
                        </select>
                      ) : formData.state === 'Others' ? (
                        <input
                          type="text"
                          required
                          className="form-control"
                          placeholder="Enter city / district"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                      ) : (
                        <select className="form-control" disabled value="">
                          <option value="">Select State First</option>
                        </select>
                      )}
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
                      <option value="Anti Mosquito Agarbatti">Anti Mosquito Agarbatti</option>
                      <option value="Mosquito Bats & Racquets">Mosquito Bats & Racquets</option>
                      <option value="Mosquito Coils">Mosquito Coils</option>
                      <option value="3-in-1 Cockroach Chalk">3-in-1 Cockroach Chalk</option>
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

      <style>{`
        @media (max-width: 550px) {
          .modal-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </AnimatePresence>
  );
}
