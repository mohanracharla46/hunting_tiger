import React from 'react';

/**
 * Renders the Hunting Tiger and Tidy Touch brand logos side by side.
 */
export default function BrandLogos({ height = '46px', style = {} }) {
  return (
    <a
      href="#"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        textDecoration: 'none',
        backgroundColor: '#FFFFFF',
        padding: '0.25rem 0.6rem',
        borderRadius: '6px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
        ...style,
      }}
    >
      <img
        src="/images/logo.png"
        alt="Hunting Tiger - KSM AND CO. Vijayawada"
        style={{
          height,
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
        }}
      />
      <span
        aria-hidden="true"
        style={{
          width: '1px',
          height: '32px',
          backgroundColor: 'rgba(0, 0, 0, 0.14)',
          flexShrink: 0,
        }}
      />
      <img
        src="/images/tidy-touch-logo.jpg"
        alt="Tidy Touch - KSM AND CO."
        style={{
          height,
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </a>
  );
}

