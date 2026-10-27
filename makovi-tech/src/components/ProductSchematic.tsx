import React from 'react';

interface ProductSchematicProps {
  type: string;
  className?: string;
}

export const ProductSchematic: React.FC<ProductSchematicProps> = ({ type, className = 'w-6 h-6' }) => {
  switch (type) {
    case 'mesh-roll':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="10" cy="16" rx="5" ry="10" strokeDasharray="2 2" />
          <path d="M10 6 L24 6 C27 6 29 10 29 16 C29 22 27 26 24 26 L10 26" />
          <ellipse cx="24" cy="16" rx="5" ry="10" />
          <line x1="14" y1="10" x2="22" y2="10" strokeDasharray="1 1" />
          <line x1="14" y1="16" x2="22" y2="16" strokeDasharray="1 1" />
          <line x1="14" y1="22" x2="22" y2="22" strokeDasharray="1 1" />
        </svg>
      );
    case 'screen-grid':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="5" width="22" height="22" rx="2" />
          <line x1="11" y1="5" x2="11" y2="27" />
          <line x1="16" y1="5" x2="16" y2="27" />
          <line x1="21" y1="5" x2="21" y2="27" />
          <line x1="5" y1="11" x2="27" y2="11" />
          <line x1="5" y1="16" x2="27" y2="16" />
          <line x1="5" y1="21" x2="27" y2="21" />
        </svg>
      );
    case 'welded-filter':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="6" width="20" height="20" rx="1" />
          <circle cx="11" cy="11" r="1.5" fill="currentColor" />
          <circle cx="21" cy="11" r="1.5" fill="currentColor" />
          <circle cx="11" cy="21" r="1.5" fill="currentColor" />
          <circle cx="21" cy="21" r="1.5" fill="currentColor" />
          <circle cx="16" cy="16" r="1.5" fill="currentColor" />
          <line x1="6" y1="16" x2="26" y2="16" strokeDasharray="2 2" />
          <line x1="16" y1="6" x2="16" y2="26" strokeDasharray="2 2" />
        </svg>
      );
    case 'gasket-ring':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="16" cy="16" r="12" />
          <circle cx="16" cy="16" r="6" strokeDasharray="2 2" />
          <line x1="16" y1="4" x2="16" y2="10" />
          <line x1="16" y1="22" x2="16" y2="28" />
          <line x1="4" y1="16" x2="10" y2="16" />
          <line x1="22" y1="16" x2="28" y2="16" />
        </svg>
      );
    case 'spin-pack':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="16,4 28,11 28,21 16,28 4,21 4,11" />
          <circle cx="16" cy="16" r="6" strokeDasharray="2 2" />
          <line x1="16" y1="10" x2="16" y2="22" />
          <line x1="10" y1="16" x2="22" y2="16" />
        </svg>
      );
    case 'extruder-disc':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="16" cy="16" r="12" />
          <circle cx="16" cy="16" r="9" strokeDasharray="2 2" />
          <circle cx="16" cy="16" r="5" strokeDasharray="1 1" />
          <line x1="4" y1="16" x2="28" y2="16" />
          <line x1="16" y1="4" x2="16" y2="28" />
        </svg>
      );
    case 'circle-cut':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="16" cy="16" r="11" />
          <line x1="8" y1="16" x2="24" y2="16" />
          <line x1="16" y1="8" x2="16" y2="24" />
          <path d="M12 9 L20 23" strokeDasharray="2 2" />
          <path d="M9 20 L23 12" strokeDasharray="2 2" />
        </svg>
      );
    case 'filter-pack':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="16" cy="13" r="10" />
          <circle cx="16" cy="16" r="10" strokeDasharray="2 2" />
          <circle cx="16" cy="19" r="10" strokeDasharray="1 1" />
          <circle cx="16" cy="16" r="3" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="16" cy="16" r="11" />
          <rect x="10" y="10" width="12" height="12" strokeDasharray="2 2" />
        </svg>
      );
  }
};
