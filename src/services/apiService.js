// API Service for Hunting Tiger Website & Admin Dashboard
// Integrates with Laravel Backend endpoints & includes localStorage fallback when offline

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Helper for localStorage keys
const STORAGE_KEYS = {
  ENQUIRIES: 'hunting_tiger_enquiries',
  APPLICATIONS: 'hunting_tiger_applications',
};

// Initial Seed Data for fallback demoing
const SEED_ENQUIRIES = [
  {
    id: 1,
    full_name: 'Rajesh Kumar',
    phone: '9848022334',
    state: 'Andhra Pradesh',
    district_city: 'NTR (Vijayawada)',
    product_interest: 'Anti Mosquito Agarbatti',
    message: 'Required 500 packs for retail shop in One Town, Vijayawada.',
    created_at: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
  },
  {
    id: 2,
    full_name: 'Srinivas Rao',
    phone: '9440188722',
    state: 'Telangana',
    district_city: 'Khammam',
    product_interest: 'Rechargeable Mosquito Bat',
    message: 'Please send bulk price list for distributor inquiry.',
    created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
];

const SEED_APPLICATIONS = [
  {
    id: 1,
    business_name: 'Sri Lakshmi Agencies',
    contact_person: 'Venkateswara Rao',
    phone: '9000123456',
    state: 'Andhra Pradesh',
    district_city: 'Guntur',
    primary_interest: 'All Product Lines',
    created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
];

// Helper to get local data
const getLocalData = (key, seed) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw);
  } catch (e) {
    return seed;
  }
};

// Helper to save local data
const setLocalData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('LocalStorage write error:', e);
  }
};

/**
 * Submit Enquiry Form
 */
export async function submitEnquiry(payload) {
  try {
    const response = await fetch(`${API_BASE_URL}/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        full_name: payload.full_name,
        phone: payload.phone,
        state: payload.state,
        district_city: payload.district_city,
        product_interest: payload.product_interest || '',
        message: payload.message || '',
      }),
    });

    if (response.ok) {
      const data = await response.json();
      // Also update local storage for smooth fallback display
      const current = getLocalData(STORAGE_KEYS.ENQUIRIES, SEED_ENQUIRIES);
      setLocalData(STORAGE_KEYS.ENQUIRIES, [data.data || payload, ...current]);
      return data;
    }
  } catch (err) {
    console.warn('Backend API unreachable, using LocalStorage fallback for Enquiry submission:', err);
  }

  // Fallback mode
  const current = getLocalData(STORAGE_KEYS.ENQUIRIES, SEED_ENQUIRIES);
  const newEntry = {
    id: Date.now(),
    ...payload,
    created_at: new Date().toISOString(),
  };
  const updated = [newEntry, ...current];
  setLocalData(STORAGE_KEYS.ENQUIRIES, updated);

  return {
    success: true,
    message: 'Enquiry submitted successfully',
    data: newEntry,
  };
}

/**
 * Get All Enquiries
 */
export async function getEnquiries() {
  try {
    const response = await fetch(`${API_BASE_URL}/enquiries`, {
      headers: { 'Accept': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      if (data && data.data) {
        setLocalData(STORAGE_KEYS.ENQUIRIES, data.data);
        return data.data;
      }
    }
  } catch (err) {
    console.warn('Backend API unreachable, returning LocalStorage Enquiries:', err);
  }

  return getLocalData(STORAGE_KEYS.ENQUIRIES, SEED_ENQUIRIES);
}

/**
 * Delete Enquiry
 */
export async function deleteEnquiry(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/enquiries/${id}`, {
      method: 'DELETE',
      headers: { 'Accept': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      // update local
      const current = getLocalData(STORAGE_KEYS.ENQUIRIES, SEED_ENQUIRIES);
      const filtered = current.filter((item) => item.id !== id);
      setLocalData(STORAGE_KEYS.ENQUIRIES, filtered);
      return data;
    }
  } catch (err) {
    console.warn('Backend API unreachable, deleting from LocalStorage:', err);
  }

  // Fallback mode
  const current = getLocalData(STORAGE_KEYS.ENQUIRIES, SEED_ENQUIRIES);
  const filtered = current.filter((item) => item.id !== id);
  setLocalData(STORAGE_KEYS.ENQUIRIES, filtered);
  return { success: true, message: 'Enquiry deleted successfully' };
}

/**
 * Submit Distributor Application
 */
export async function submitDistributorApplication(payload) {
  try {
    const response = await fetch(`${API_BASE_URL}/distributor-applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        business_name: payload.business_name,
        contact_person: payload.contact_person,
        phone: payload.phone,
        state: payload.state,
        district_city: payload.district_city,
        primary_interest: payload.primary_interest,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const current = getLocalData(STORAGE_KEYS.APPLICATIONS, SEED_APPLICATIONS);
      setLocalData(STORAGE_KEYS.APPLICATIONS, [data.data || payload, ...current]);
      return data;
    }
  } catch (err) {
    console.warn('Backend API unreachable, using LocalStorage fallback for Application:', err);
  }

  // Fallback mode
  const current = getLocalData(STORAGE_KEYS.APPLICATIONS, SEED_APPLICATIONS);
  const newEntry = {
    id: Date.now(),
    ...payload,
    created_at: new Date().toISOString(),
  };
  const updated = [newEntry, ...current];
  setLocalData(STORAGE_KEYS.APPLICATIONS, updated);

  return {
    success: true,
    message: 'Distributor application submitted successfully',
    data: newEntry,
  };
}

/**
 * Get All Distributor Applications
 */
export async function getDistributorApplications() {
  try {
    const response = await fetch(`${API_BASE_URL}/distributor-applications`, {
      headers: { 'Accept': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      if (data && data.data) {
        setLocalData(STORAGE_KEYS.APPLICATIONS, data.data);
        return data.data;
      }
    }
  } catch (err) {
    console.warn('Backend API unreachable, returning LocalStorage Applications:', err);
  }

  return getLocalData(STORAGE_KEYS.APPLICATIONS, SEED_APPLICATIONS);
}

/**
 * Delete Distributor Application
 */
export async function deleteDistributorApplication(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/distributor-applications/${id}`, {
      method: 'DELETE',
      headers: { 'Accept': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      const current = getLocalData(STORAGE_KEYS.APPLICATIONS, SEED_APPLICATIONS);
      const filtered = current.filter((item) => item.id !== id);
      setLocalData(STORAGE_KEYS.APPLICATIONS, filtered);
      return data;
    }
  } catch (err) {
    console.warn('Backend API unreachable, deleting application from LocalStorage:', err);
  }

  // Fallback mode
  const current = getLocalData(STORAGE_KEYS.APPLICATIONS, SEED_APPLICATIONS);
  const filtered = current.filter((item) => item.id !== id);
  setLocalData(STORAGE_KEYS.APPLICATIONS, filtered);
  return { success: true, message: 'Distributor application deleted successfully' };
}
