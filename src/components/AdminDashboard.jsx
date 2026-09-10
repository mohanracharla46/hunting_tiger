import React, { useState, useEffect } from 'react';
import {
  Inbox,
  Building2,
  Trash2,
  RefreshCw,
  Search,
  ArrowLeft,
  LogOut,
  Layers,
  AlertTriangle,
  Eye,
  X,
} from 'lucide-react';
import {
  getEnquiries,
  deleteEnquiry,
  getDistributorApplications,
  deleteDistributorApplication,
} from '../services/apiService';

export default function AdminDashboard({ onBackToSite, onLogout }) {
  const [activeTab, setActiveTab] = useState('enquiries'); // 'enquiries' | 'applications'
  const [enquiries, setEnquiries] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDetail, setSelectedDetail] = useState(null); // Item modal view
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [enqList, appList] = await Promise.all([
        getEnquiries(),
        getDistributorApplications(),
      ]);
      setEnquiries(enqList || []);
      setApplications(appList || []);
    } catch (err) {
      console.error('Error fetching admin dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteEnquiry = async (id) => {
    await deleteEnquiry(id);
    setEnquiries((prev) => prev.filter((item) => item.id !== id));
    setDeleteConfirmId(null);
    if (selectedDetail && selectedDetail.id === id) setSelectedDetail(null);
  };

  const handleDeleteApplication = async (id) => {
    await deleteDistributorApplication(id);
    setApplications((prev) => prev.filter((item) => item.id !== id));
    setDeleteConfirmId(null);
    if (selectedDetail && selectedDetail.id === id) setSelectedDetail(null);
  };

  // Filtered lists
  const filteredEnquiries = enquiries.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      (item.full_name || '').toLowerCase().includes(q) ||
      (item.phone || '').toLowerCase().includes(q) ||
      (item.state || '').toLowerCase().includes(q) ||
      (item.district_city || '').toLowerCase().includes(q) ||
      (item.product_interest || '').toLowerCase().includes(q) ||
      (item.message || '').toLowerCase().includes(q)
    );
  });

  const filteredApplications = applications.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      (item.business_name || '').toLowerCase().includes(q) ||
      (item.contact_person || '').toLowerCase().includes(q) ||
      (item.phone || '').toLowerCase().includes(q) ||
      (item.state || '').toLowerCase().includes(q) ||
      (item.district_city || '').toLowerCase().includes(q) ||
      (item.primary_interest || '').toLowerCase().includes(q)
    );
  });

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Top Navbar Header */}
      <header
        style={{
          backgroundColor: 'var(--charcoal)',
          color: 'var(--white)',
          padding: '1rem 0',
          borderBottom: '4px solid var(--tiger-red)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img
              src="/images/logo.png"
              alt="Hunting Tiger Logo"
              style={{ height: '42px', backgroundColor: 'var(--golden-yellow)', padding: '2px 8px', borderRadius: '4px' }}
            />
            <div>
              <h1 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', margin: 0, letterSpacing: '0.04em' }}>
                ADMIN DASHBOARD & FORM MANAGEMENT
              </h1>
              <div style={{ fontSize: '0.75rem', color: 'var(--golden-yellow)' }}>
                KSM AND CO. • Vijayawada Control Desk
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button
              onClick={onBackToSite}
              className="btn"
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                color: 'var(--white)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              <ArrowLeft size={16} /> Back to Website
            </button>

            {onLogout && (
              <button
                onClick={onLogout}
                className="btn"
                style={{
                  backgroundColor: '#b91c1c',
                  color: 'var(--white)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 700,
                }}
              >
                <LogOut size={16} /> Logout
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="container" style={{ marginTop: '2rem' }}>
        {/* Metric Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--white)',
              padding: '1.5rem',
              borderRadius: '8px',
              borderLeft: '4px solid var(--tiger-red)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--stone-grey)', fontWeight: 600 }}>
                QUICK ENQUIRIES
              </span>
              <Inbox size={22} color="var(--tiger-red)" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--charcoal)', marginTop: '0.5rem' }}>
              {enquiries.length}
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'var(--white)',
              padding: '1.5rem',
              borderRadius: '8px',
              borderLeft: '4px solid var(--herbal-green)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--stone-grey)', fontWeight: 600 }}>
                DISTRIBUTOR APPS
              </span>
              <Building2 size={22} color="var(--herbal-green)" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--charcoal)', marginTop: '0.5rem' }}>
              {applications.length}
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'var(--white)',
              padding: '1.5rem',
              borderRadius: '8px',
              borderLeft: '4px solid var(--golden-yellow)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--stone-grey)', fontWeight: 600 }}>
                TOTAL SUBMISSIONS
              </span>
              <Layers size={22} color="var(--charcoal)" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--charcoal)', marginTop: '0.5rem' }}>
              {enquiries.length + applications.length}
            </div>
          </div>
        </div>

        {/* Toolbar & Controls */}
        <div
          style={{
            backgroundColor: 'var(--white)',
            borderRadius: '8px',
            padding: '1.25rem',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            marginBottom: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            justify: 'space-between',
          }}
        >
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => setActiveTab('enquiries')}
              className="btn"
              style={{
                backgroundColor: activeTab === 'enquiries' ? 'var(--tiger-red)' : '#f1f5f9',
                color: activeTab === 'enquiries' ? 'var(--white)' : 'var(--charcoal)',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderRadius: '6px',
              }}
            >
              <Inbox size={18} /> Quick Enquiries ({enquiries.length})
            </button>

            <button
              onClick={() => setActiveTab('applications')}
              className="btn"
              style={{
                backgroundColor: activeTab === 'applications' ? 'var(--herbal-green)' : '#f1f5f9',
                color: activeTab === 'applications' ? 'var(--white)' : 'var(--charcoal)',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderRadius: '6px',
              }}
            >
              <Building2 size={18} /> Distributor Applications ({applications.length})
            </button>
          </div>

          {/* Search & Refresh */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexGrow: 1, maxWidth: '450px' }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <Search
                size={18}
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}
              />
              <input
                type="text"
                className="form-control"
                placeholder={`Search ${activeTab === 'enquiries' ? 'enquiries' : 'applications'}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ paddingLeft: '2.4rem', height: '42px', fontSize: '0.9rem' }}
              />
            </div>

            <button
              onClick={fetchData}
              title="Refresh Data"
              className="btn btn-outline-dark"
              style={{ height: '42px', padding: '0 0.85rem' }}
            >
              <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div
          style={{
            backgroundColor: 'var(--white)',
            borderRadius: '8px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            overflow: 'hidden',
          }}
        >
          {activeTab === 'enquiries' ? (
            /* Enquiries Table */
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '2px solid #e2e8f0', color: 'var(--charcoal)' }}>
                    <th style={{ padding: '1rem' }}># ID</th>
                    <th style={{ padding: '1rem' }}>Name</th>
                    <th style={{ padding: '1rem' }}>Phone</th>
                    <th style={{ padding: '1rem' }}>State / City</th>
                    <th style={{ padding: '1rem' }}>Product Interest</th>
                    <th style={{ padding: '1rem' }}>Message</th>
                    <th style={{ padding: '1rem' }}>Date</th>
                    <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEnquiries.length === 0 ? (
                    <tr>
                      <td colSpan={8} style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                        No quick enquiries found.
                      </td>
                    </tr>
                  ) : (
                    filteredEnquiries.map((item, idx) => (
                      <tr key={item.id || idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '1rem', fontWeight: 600, color: '#64748b' }}>#{item.id}</td>
                        <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--charcoal)' }}>
                          {item.full_name}
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <a href={`tel:${item.phone}`} style={{ color: 'var(--tiger-red)', textDecoration: 'none', fontWeight: 600 }}>
                            {item.phone}
                          </a>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <div>{item.district_city}</div>
                          <small style={{ color: '#64748b' }}>{item.state}</small>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <span
                            style={{
                              backgroundColor: '#fef3c7',
                              color: '#92400e',
                              padding: '0.25rem 0.6rem',
                              borderRadius: '4px',
                              fontWeight: 600,
                              fontSize: '0.8rem',
                            }}
                          >
                            {item.product_interest || 'General'}
                          </span>
                        </td>
                        <td style={{ padding: '1rem', maxWidth: '220px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {item.message || '-'}
                        </td>
                        <td style={{ padding: '1rem', fontSize: '0.8rem', color: '#64748b' }}>
                          {formatDate(item.created_at)}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'right' }}>
                          <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                            <button
                              onClick={() => setSelectedDetail({ type: 'enquiry', data: item })}
                              className="btn"
                              style={{ padding: '0.4rem', backgroundColor: '#e2e8f0', color: 'var(--charcoal)' }}
                              title="View Details"
                            >
                              <Eye size={16} />
                            </button>

                            <button
                              onClick={() => setDeleteConfirmId({ type: 'enquiry', id: item.id })}
                              className="btn"
                              style={{ padding: '0.4rem', backgroundColor: '#fee2e2', color: '#b91c1c' }}
                              title="Delete Record"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            /* Distributor Applications Table */
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '2px solid #e2e8f0', color: 'var(--charcoal)' }}>
                    <th style={{ padding: '1rem' }}># ID</th>
                    <th style={{ padding: '1rem' }}>Business Name</th>
                    <th style={{ padding: '1rem' }}>Contact Person</th>
                    <th style={{ padding: '1rem' }}>Phone</th>
                    <th style={{ padding: '1rem' }}>State / District</th>
                    <th style={{ padding: '1rem' }}>Primary Interest</th>
                    <th style={{ padding: '1rem' }}>Date</th>
                    <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.length === 0 ? (
                    <tr>
                      <td colSpan={8} style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                        No distributor applications found.
                      </td>
                    </tr>
                  ) : (
                    filteredApplications.map((item, idx) => (
                      <tr key={item.id || idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '1rem', fontWeight: 600, color: '#64748b' }}>#{item.id}</td>
                        <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--charcoal)' }}>
                          {item.business_name}
                        </td>
                        <td style={{ padding: '1rem' }}>{item.contact_person}</td>
                        <td style={{ padding: '1rem' }}>
                          <a href={`tel:${item.phone}`} style={{ color: 'var(--herbal-green)', textDecoration: 'none', fontWeight: 600 }}>
                            {item.phone}
                          </a>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <div>{item.district_city}</div>
                          <small style={{ color: '#64748b' }}>{item.state}</small>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <span
                            style={{
                              backgroundColor: '#dcfce7',
                              color: '#15803d',
                              padding: '0.25rem 0.6rem',
                              borderRadius: '4px',
                              fontWeight: 600,
                              fontSize: '0.8rem',
                            }}
                          >
                            {item.primary_interest}
                          </span>
                        </td>
                        <td style={{ padding: '1rem', fontSize: '0.8rem', color: '#64748b' }}>
                          {formatDate(item.created_at)}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'right' }}>
                          <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                            <button
                              onClick={() => setSelectedDetail({ type: 'application', data: item })}
                              className="btn"
                              style={{ padding: '0.4rem', backgroundColor: '#e2e8f0', color: 'var(--charcoal)' }}
                              title="View Details"
                            >
                              <Eye size={16} />
                            </button>

                            <button
                              onClick={() => setDeleteConfirmId({ type: 'application', id: item.id })}
                              className="btn"
                              style={{ padding: '0.4rem', backgroundColor: '#fee2e2', color: '#b91c1c' }}
                              title="Delete Record"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedDetail && (
        <div className="modal-overlay" onClick={() => setSelectedDetail(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '540px' }}>
            <button className="modal-close" onClick={() => setSelectedDetail(null)}>
              <X size={24} />
            </button>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem' }}>
              {selectedDetail.type === 'enquiry' ? 'Quick Enquiry Details' : 'Distributor Application Details'}
            </h3>

            {selectedDetail.type === 'enquiry' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div><strong>Full Name:</strong> {selectedDetail.data.full_name}</div>
                <div><strong>Phone:</strong> <a href={`tel:${selectedDetail.data.phone}`}>{selectedDetail.data.phone}</a></div>
                <div><strong>State:</strong> {selectedDetail.data.state}</div>
                <div><strong>District / City:</strong> {selectedDetail.data.district_city}</div>
                <div><strong>Product Interest:</strong> {selectedDetail.data.product_interest || 'N/A'}</div>
                <div>
                  <strong>Message / Requirement:</strong>
                  <p style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '4px', marginTop: '0.25rem', whiteSpace: 'pre-wrap' }}>
                    {selectedDetail.data.message || 'No additional message provided.'}
                  </p>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  Submitted on: {formatDate(selectedDetail.data.created_at)}
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div><strong>Business Name:</strong> {selectedDetail.data.business_name}</div>
                <div><strong>Contact Person:</strong> {selectedDetail.data.contact_person}</div>
                <div><strong>Phone:</strong> <a href={`tel:${selectedDetail.data.phone}`}>{selectedDetail.data.phone}</a></div>
                <div><strong>State:</strong> {selectedDetail.data.state}</div>
                <div><strong>District / City:</strong> {selectedDetail.data.district_city}</div>
                <div><strong>Primary Interest:</strong> {selectedDetail.data.primary_interest}</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  Submitted on: {formatDate(selectedDetail.data.created_at)}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="modal-overlay" onClick={() => setDeleteConfirmId(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '400px', textAlign: 'center' }}>
            <AlertTriangle size={48} color="#b91c1c" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Confirm Deletion</h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
              Are you sure you want to delete this record (#{deleteConfirmId.id})? This action cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <button className="btn btn-outline-dark" onClick={() => setDeleteConfirmId(null)}>
                Cancel
              </button>
              <button
                className="btn"
                style={{ backgroundColor: '#b91c1c', color: 'var(--white)' }}
                onClick={() => {
                  if (deleteConfirmId.type === 'enquiry') {
                    handleDeleteEnquiry(deleteConfirmId.id);
                  } else {
                    handleDeleteApplication(deleteConfirmId.id);
                  }
                }}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
