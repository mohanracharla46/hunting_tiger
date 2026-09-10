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
      className={className}
    >
      {/* Outer Prohibition Red Circle */}
      <circle cx="12" cy="12" r="9.5" stroke="var(--tiger-red)" strokeWidth="2.2" fill="none" />
      <line x1="5.3" y1="5.3" x2="18.7" y2="18.7" stroke="var(--tiger-red)" strokeWidth="2.2" strokeLinecap="round" />

      {/* Cockroach Silhouette inside */}
      <g stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {/* Body */}
        <ellipse cx="12" cy="12" rx="2" ry="3.2" fill={color} fillOpacity="0.25" />
        {/* Antennae */}
        <path d="M11 9c-.8-1.5-1.8-2.2-2.8-2.6" />
        <path d="M13 9c.8-1.5 1.8-2.2 2.8-2.6" />
        {/* Legs Left */}
        <path d="M10 10.5l-2.2-1.2" />
        <path d="M10 12h-2.5" />
        <path d="M10.2 13.5l-1.8 1.8" />
        {/* Legs Right */}
        <path d="M14 10.5l2.2-1.2" />
        <path d="M14 12h2.5" />
        <path d="M13.8 13.5l1.8 1.8" />
      </g>
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Racket Outer Rim */}
      <ellipse cx="14.5" cy="8.5" rx="5.5" ry="6.5" transform="rotate(-32 14.5 8.5)" fill={color} fillOpacity="0.15" />
      {/* Inner mesh oval */}
      <ellipse cx="14.5" cy="8.5" rx="3.5" ry="4.5" transform="rotate(-32 14.5 8.5)" strokeWidth="1.4" />

      {/* Handle */}
      <path d="M10 12.5L4.5 19c-.7.7-.7 1.8 0 2.5s1.8.7 2.5 0l6.5-5.5" strokeWidth="2.4" />

      {/* Power Buttons on Handle */}
      <circle cx="8" cy="16.5" r="0.85" fill={color} />
      <circle cx="9.5" cy="15" r="0.85" fill={color} />
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
