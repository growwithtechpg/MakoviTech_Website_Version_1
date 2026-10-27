import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ProductDetail } from '../data/siteData';
import { ProductSchematic } from './ProductSchematic';
import { getWhatsAppUrl, getProductWhatsAppMessage } from '../config/businessConfig';

interface ProductCardProps {
  product: ProductDetail;
  onEnquire: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  const [imgError, setImgError] = useState(false);
  const whatsappUrl = getWhatsAppUrl(getProductWhatsAppMessage(product.name));

  return (
    <div className="group relative rounded-lg border border-slate-300 bg-white hover:border-sky-500 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-xl">
      {/* Image Container with Schematic and Fallback */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-200">
        {!imgError ? (
          <img
            src={product.image}
            alt={`Makovi Tech - ${product.name}`}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          /* Resilient SVG Blueprint Fallback */
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-slate-950 text-slate-500 bg-mesh-grid-dark">
            <ProductSchematic type={product.schematicType} className="w-12 h-12 text-sky-400 mb-2" />
            <span className="text-[11px] font-mono text-slate-400">Technical Wire Mesh Schematic</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Numerical Index Badge (Monospace) */}
        <div className="absolute top-3 left-3 text-xs font-mono font-bold text-white bg-slate-950/80 backdrop-blur-sm px-2 py-0.5 rounded border border-white/20">
          {product.code}
        </div>

        {/* Bespoke Corner CAD Schematic Icon */}
        <div className="absolute top-3 right-3 p-1.5 rounded bg-slate-950/80 backdrop-blur-sm border border-white/20 text-sky-400 group-hover:border-sky-400 transition-colors">
          <ProductSchematic type={product.schematicType} className="w-4 h-4" />
        </div>

        {/* Unboxed Category Kicker */}
        <div className="absolute bottom-2.5 left-3 text-[11px] font-bold text-sky-300 tracking-wide uppercase">
          {product.category}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            {product.description}
          </p>

          {/* Unboxed Application Summary with Dot Separators */}
          <div className="text-[11px] text-slate-500 font-medium mb-5">
            {product.applications.join(' · ')}
          </div>
        </div>

        {/* Dual Action Buttons: Enquire Now & WhatsApp Enquiry */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
          {/* WhatsApp Enquiry Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp enquiry about ${product.name}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/80 rounded transition-colors shadow-2xs"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-emerald-600" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>WhatsApp Enquiry</span>
        </a>

        {/* Enquire Now Button */}
        <button
          onClick={() => onEnquire(product.name)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-600 rounded transition-colors shadow-sm cursor-pointer"
          aria-label={`Enquire about ${product.name}`}
        >
          <span>Enquire Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  </div>
);
};
