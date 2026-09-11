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
