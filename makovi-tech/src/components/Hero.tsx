import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { COMPANY_INFO, SITE_IMAGES } from '../data/siteData';
import { TEL_URL, getWhatsAppUrl } from '../config/businessConfig';

interface HeroProps {
  onNavigateToContact: () => void;
  onExploreProducts: () => void;
}

const HERO_IMAGE = {
  tag: 'WOVEN MESH',
  title: 'Stainless Steel Wire Mesh',
  subtitle: 'High-grade woven stainless steel wire mesh for industrial screening & filtration',
  image: SITE_IMAGES.stainlessSteelWireMesh,
  alt: 'Stainless steel wire mesh rolls and sheets',
};

export const Hero: React.FC<HeroProps> = ({ onNavigateToContact }) => {
  return (
    <section
      id="home"
      className="relative min-h-[94vh] pt-28 pb-16 md:pt-36 md:pb-20 flex flex-col justify-center overflow-hidden border-b border-sky-200 bg-[#e0f2fe] bg-mesh-grid-light"
    >
      {/* Background Soft Subtle Ambient Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Kicker per Zero-Pill Discipline */}
            <div className="text-xs font-bold text-sky-700 tracking-wider uppercase mb-3">
              {COMPANY_INFO.kicker}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6 text-balance">
              {COMPANY_INFO.tagline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {COMPANY_INFO.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={onNavigateToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-600 active:bg-sky-800 rounded transition-all shadow-md whitespace-nowrap cursor-pointer"
              >
                <span>Send an Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Makovi Tech on WhatsApp"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded transition-all shadow-xs whitespace-nowrap cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>

              <a
                href={TEL_URL}
                aria-label="Call Makovi Tech"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-slate-800 hover:text-slate-950 bg-white hover:bg-slate-100 border border-slate-300 rounded transition-all whitespace-nowrap shadow-xs cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-sky-700" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-slate-300 bg-white shadow-xl group">
              {/* Technical Framing Corner Accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-sky-600 z-20 pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-sky-600 z-20 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-sky-600 z-20 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-sky-600 z-20 pointer-events-none" />

              {/* Top Bar with Tag */}
              <div className="absolute top-3 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-sky-800 bg-sky-50/90 backdrop-blur-md border border-sky-200 px-2.5 py-1 rounded uppercase font-semibold">
                    {HERO_IMAGE.tag}
                  </span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="aspect-[16/11] relative overflow-hidden bg-slate-100">
                <img
                  src={HERO_IMAGE.image}
                  alt={HERO_IMAGE.alt}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              {/* Caption Bar */}
              <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex items-center justify-between relative z-20">
                <div className="min-h-[44px] flex flex-col justify-center">
                  <div className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide">
                    {HERO_IMAGE.title}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    {HERO_IMAGE.subtitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3-Column Summary Bar */}
        <div className="mt-12 pt-8 border-t border-sky-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded border border-sky-200 bg-white/95 shadow-xs">
            <div className="text-xs font-mono font-bold text-sky-700 mb-1">
              01. CORE FOCUS
            </div>
            <div className="text-sm font-bold text-slate-900 mb-0.5">
              Wire Mesh &amp; Filters
            </div>
            <div className="text-xs text-slate-600">
              Stainless steel wire mesh, welded filter screens &amp; spin packs.
            </div>
          </div>

          <div className="p-4 rounded border border-sky-200 bg-white/95 shadow-xs">
            <div className="text-xs font-mono font-bold text-sky-700 mb-1">
              02. IN-HOUSE FACILITY
            </div>
            <div className="text-sm font-bold text-slate-900 mb-0.5">
              Press Cutting Machines
            </div>
            <div className="text-xs text-slate-600">
              Dedicated circular cutting dies stamping exact-size diameter components.
            </div>
          </div>

          <div className="p-4 rounded border border-sky-200 bg-white/95 shadow-xs">
            <div className="text-xs font-mono font-bold text-sky-700 mb-1">
              03. SECTORS SERVED
            </div>
            <div className="text-sm font-bold text-slate-900 mb-0.5">
              Industrial Filtration &amp; Processing
            </div>
            <div className="text-xs text-slate-600">
              Plastics &amp; chemicals, pharmaceuticals, and food processing.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
