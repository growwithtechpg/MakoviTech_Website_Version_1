import React from 'react';
import { PhoneCall } from 'lucide-react';
import { TEL_URL, DISPLAY_PHONE } from '../config/businessConfig';

interface CallNowButtonProps {
  variant?: 'primary' | 'secondary' | 'subtle' | 'header';
  className?: string;
  showNumber?: boolean;
}

export const CallNowButton: React.FC<CallNowButtonProps> = ({
  variant = 'secondary',
  className = '',
  showNumber = false,
}) => {
  let baseStyle = 'inline-flex items-center justify-center gap-2 font-semibold transition-all whitespace-nowrap cursor-pointer rounded';

  switch (variant) {
    case 'primary':
      baseStyle += ' px-5 py-3 text-sm text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 shadow-md shadow-sky-950/40';
      break;
    case 'secondary':
      baseStyle += ' px-4 py-2.5 text-xs text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700';
      break;
    case 'subtle':
      baseStyle += ' px-4 py-2 text-xs text-sky-400 hover:text-white bg-sky-950/40 hover:bg-sky-900/60 border border-sky-800/60';
      break;
    case 'header':
      baseStyle += ' px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700';
      break;
  }

  return (
    <a
      href={TEL_URL}
      aria-label="Call Makovi Tech"
      className={`${baseStyle} ${className}`}
    >
      <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
      <span>Call Now</span>
      {showNumber && (
        <span className="text-slate-400 font-normal font-mono text-[11px] ml-0.5">
          ({DISPLAY_PHONE})
        </span>
      )}
    </a>
  );
};
