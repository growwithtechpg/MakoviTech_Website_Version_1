import React from 'react';
import { Mail, MapPin, ExternalLink, ArrowUp, PhoneCall } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/siteData';
import {
  BUSINESS_CONFIG,
  DISPLAY_PHONE,
  TEL_URL,
  GOOGLE_MAPS_URL,
  getWhatsAppUrl,
  getEmailMailtoUrl,
} from '../config/businessConfig';

interface FooterProps {
  onEnquire: (productName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onEnquire }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand & Summary */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <span className="text-base font-extrabold tracking-tight text-white uppercase">
                {BUSINESS_CONFIG.companyName}
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs mb-6 max-w-sm">
              {COMPANY_INFO.aboutText}
            </p>

            <div className="text-[11px] text-slate-500 font-mono space-y-1">
              <div>Woven Wire Mesh &amp; Press Cutting Precision</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, '#home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => scrollToSection(e, '#products')}
                  className="hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#applications"
                  onClick={(e) => scrollToSection(e, '#applications')}
                  className="hover:text-white transition-colors"
                >
                  Applications
                </a>
              </li>
              <li>
                <a
                  href="#manufacturing"
                  onClick={(e) => scrollToSection(e, '#manufacturing')}
                  className="hover:text-white transition-colors"
                >
                  Manufacturing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact &amp; Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* 5 Manufactured Products */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Manufactured Products
            </div>
            <ul className="space-y-2 text-[12px]">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <button
                    onClick={() => onEnquire(prod.name)}
                    className="hover:text-sky-400 text-slate-400 transition-colors text-left cursor-pointer"
                  >
                    {prod.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </div>

            <div className="space-y-2.5 pt-1">
              {/* Phone */}
              <div className="flex items-center gap-2 text-xs">
                <PhoneCall className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a
                  href={TEL_URL}
                  aria-label="Call Makovi Tech"
                  className="font-mono text-slate-200 hover:text-sky-400 transition-colors"
                >
                  {DISPLAY_PHONE}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a
                  href={getEmailMailtoUrl()}
                  className="text-sky-400 hover:text-sky-300 underline underline-offset-2 break-all"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2 text-xs">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-emerald-400 shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: {DISPLAY_PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; 2026 {BUSINESS_CONFIG.companyName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
