import React from 'react';

// Icon 1: Incense / Agarbatti Sticks with Smoke
export function IncenseIcon({ size = 28, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* 3 Smoke Waves */}
      <path d="M8.5 2c-.6.8-.6 1.7 0 2.5s.6 1.7 0 2.5" />
      <path d="M12 1c-.7.8-.7 1.7 0 2.5s.7 1.7 0 2.5" />
      <path d="M15.5 2c-.6.8-.6 1.7 0 2.5s.6 1.7 0 2.5" />

      {/* 3 Agarbatti Sticks */}
      <line x1="9" y1="8" x2="11" y2="15" />
      <line x1="12" y1="7" x2="12" y2="15" />
      <line x1="15" y1="8" x2="13" y2="15" />

      {/* Stand Base */}
      <path d="M9.5 15h5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-.5A1.5 1.5 0 0 1 9.5 15z" fill={color} fillOpacity="0.2" />
      <path d="M9 17.5h6v1.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19v-1.5z" />
      <path d="M8 22h8" strokeWidth="2.2" />
    </svg>
  );
}

// Icon 1B: Angled Agarbatti Sticks in Holder with Ember & Smoke (clean small-size variant)
export function AgarbattiIcon({ size = 28, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Incense Holder Dish & Base */}
      <path d="M6.5 20.5c0-1.5 1.1-2.5 2.5-2.5s2.5 1 2.5 2.5" fill={color} fillOpacity="0.18" />
      <path d="M3 20.5h13" strokeWidth="2" />

      {/* Diagonal Agarbatti Sticks */}
      <line x1="8.5" y1="18.2" x2="16.5" y2="6.8" strokeWidth="1.9" />
      <line x1="10" y1="18.5" x2="19.4" y2="10.6" strokeWidth="1.8" />

      {/* Glowing Ember Tips */}
      <circle cx="16.8" cy="6.4" r="0.9" fill={color} stroke="none" />
      <circle cx="19.8" cy="10.2" r="0.9" fill={color} stroke="none" />

      {/* Gentle Aroma Smoke Curls */}
      <path d="M16.8 4.6c-.7-.8.7-1.6 0-2.5" strokeWidth="1.5" />
      <path d="M20.2 8.4c-.6-.7.6-1.5 0-2.3" strokeWidth="1.5" />
    </svg>
  );
}

// Icon 2: Mosquito Coil on Stand with Smoke
export function CoilIcon({ size = 28, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Coil Stand Base */}
      <path d="M8 19l-2 3h12l-2-3" />
      <path d="M10 19v-2.5h4V19" fill={color} fillOpacity="0.2" />

      {/* Spiral Coil Rings */}
      <ellipse cx="11.5" cy="11.5" rx="8" ry="4" strokeWidth="1.8" />
      <ellipse cx="11.5" cy="11.5" rx="5.5" ry="2.7" strokeWidth="1.8" />
      <ellipse cx="11.5" cy="11.5" rx="3" ry="1.4" strokeWidth="1.8" />

      {/* Smoke Rising Right */}
      <path d="M18.5 9.5c.6-.8.6-1.7 0-2.5" />
      <path d="M20.5 8c.6-.8.6-1.7 0-2.5" />
    </svg>
  );
}

// Icon 3: Anti-Cockroach Prohibition Circle (Chalk)
export function CockroachChalkIcon({ size = 28, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Outer Prohibition Circle */}
      <circle cx="12" cy="12" r="9.5" strokeWidth="2" />
      
      {/* Red/Color Cross Line (Diagonal Slash) */}
      <line x1="5.3" y1="5.3" x2="18.7" y2="18.7" strokeWidth="2.2" />

      {/* Cockroach Body & Shell */}
      <ellipse cx="12" cy="12" rx="2.5" ry="4" fill={color} fillOpacity="0.2" strokeWidth="1.6" />
      <path d="M10 10.5h4" strokeWidth="1.2" />
      <path d="M9.8 13.5h4.4" strokeWidth="1.2" />

      {/* Head & Antennae */}
      <circle cx="12" cy="7" r="1" fill={color} stroke="none" />
      <path d="M11.5 6.5C10 5 8.5 4.5 7 4.5" strokeWidth="1.4" />
      <path d="M12.5 6.5C14 5 15.5 4.5 17 4.5" strokeWidth="1.4" />

      {/* 6 Cockroach Legs */}
      <path d="M9.8 9.5L7.2 8.5" strokeWidth="1.5" />
      <path d="M9.5 12L6.5 12" strokeWidth="1.5" />
      <path d="M9.8 14.5L7.2 16" strokeWidth="1.5" />

      <path d="M14.2 9.5L16.8 8.5" strokeWidth="1.5" />
      <path d="M14.5 12L17.5 12" strokeWidth="1.5" />
      <path d="M14.2 14.5L16.8 16" strokeWidth="1.5" />
    </svg>
  );
}

// Icon 4: Mosquito Electric Bat / Racquet
export function MosquitoBatIcon({ size = 28, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Outer Oval Racquet Frame */}
      <ellipse cx="11.5" cy="7.5" rx="5.5" ry="6.5" strokeWidth="2" fill={color} fillOpacity="0.08" />

      {/* Grid Mesh Lines (Vertical & Horizontal) */}
      <line x1="9.5" y1="2" x2="9.5" y2="13" strokeWidth="1" opacity="0.7" />
      <line x1="11.5" y1="1.2" x2="11.5" y2="13.8" strokeWidth="1" opacity="0.7" />
      <line x1="13.5" y1="2" x2="13.5" y2="13" strokeWidth="1" opacity="0.7" />

      <line x1="7" y1="4.5" x2="16" y2="4.5" strokeWidth="1" opacity="0.7" />
      <line x1="6.3" y1="7.5" x2="16.7" y2="7.5" strokeWidth="1" opacity="0.7" />
      <line x1="7" y1="10.5" x2="16" y2="10.5" strokeWidth="1" opacity="0.7" />

      {/* Neck Connector */}
      <path d="M9 13.5l1.5 2h2l1.5-2" strokeWidth="1.8" />

      {/* Handle */}
      <path d="M10.2 15.5v5.5a1 1 0 0 0 1 1h1.6a1 1 0 0 0 1-1v-5.5" strokeWidth="2" fill={color} fillOpacity="0.15" />

      {/* Power Switch on Handle */}
      <rect x="11" y="17" width="1" height="2.5" rx="0.5" fill={color} stroke="none" />

      {/* Electric Zap / Spark Symbol on Top Right */}
      <path d="M20 2.5l-1.8 3h2.2l-1.8 3.5" strokeWidth="1.5" />
    </svg>
  );
}

// Icon 5: Ant Icon
export function AntIcon({ size = 18, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Head */}
      <circle cx="12" cy="6" r="2" fill={color} />
      {/* Thorax */}
      <ellipse cx="12" cy="11" rx="1.5" ry="2" fill={color} />
      {/* Abdomen */}
      <ellipse cx="12" cy="18" rx="2.5" ry="3.5" fill={color} />
      {/* Antennae */}
      <path d="M10.5 5L8.5 3" />
      <path d="M13.5 5L15.5 3" />
      {/* Legs Left */}
      <path d="M10.5 10L7 9" />
      <path d="M10.5 11.5L6.5 12" />
      <path d="M10.5 13L7 15" />
      {/* Legs Right */}
      <path d="M13.5 10L17 9" />
      <path d="M13.5 11.5L17.5 12" />
      <path d="M13.5 13L17 15" />
    </svg>
  );
}

// Icon 6: Whatsapp Icon
export function WhatsappIcon({ size = 20, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
