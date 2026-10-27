import React, { useState } from 'react';
import { ProductCategory, PRODUCTS } from '../data/siteData';
import { ProductCard } from './ProductCard';
import { Disc, HelpCircle, ArrowRight } from 'lucide-react';

interface ProductsProps {
  onEnquire: (productName: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onEnquire }) => {
  const [activeTab, setActiveTab] = useState<ProductCategory>('All Products');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'All Products') return true;
    return p.category === activeTab;
  });

  const categories: { label: string; value: ProductCategory }[] = [
    { label: `All Products (${PRODUCTS.length})`, value: 'All Products' },
    { label: 'Woven Mesh & Screens', value: 'Woven Mesh & Screens' },
    { label: 'Filtration Components', value: 'Filtration Components' },
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-[#e0f2fe] relative border-b border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-sky-200 gap-6">
          <div>
            <div className="text-xs font-bold text-sky-700 tracking-wider uppercase mb-2">
              Manufactured Range
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              Industrial Wire Mesh &amp; Filtration Products
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Manufactured in-house with dedicated wire mesh press cutting machinery, tooling dies, and precision welding equipment.
            </p>
          </div>

          {/* Segmented Filter Bar */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-[#d2ecfb] border border-sky-200 rounded-md shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveTab(cat.value)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === cat.value
                    ? 'bg-white text-slate-950 font-bold shadow-sm'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Card Responsive Grid: 3 Products + Custom Tooling Assistance Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEnquire={onEnquire}
            />
          ))}

          {/* Custom Tooling Card when 'All Products' is selected */}
          {activeTab === 'All Products' && (
            <div className="p-6 rounded-lg border border-slate-800 bg-[#090e17] text-white flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-10 h-10 rounded bg-sky-950 border border-sky-800 text-sky-400 flex items-center justify-center mb-4">
                  <HelpCircle className="w-5 h-5" />
                </div>

                <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                  Custom Engineering
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  Require Custom Sizing or Non-Standard Tooling?
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Makovi Tech operates its own press cutting dies in various sizes. We produce tailored mesh cut circles, welded filter screen geometries, and specialized disc dimensions to fit your housings.
                </p>
              </div>

              <button
                onClick={() => onEnquire('Custom Wire Mesh & Tooling Request')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded transition-colors shadow cursor-pointer"
              >
                <span>Request Custom Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Bottom Callout Bar */}
        <div className="mt-12 p-6 rounded-lg border border-sky-200 bg-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-11 h-11 rounded bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 shrink-0">
              <Disc className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-slate-900">
                Custom Die Press Cutting &amp; Screen Assembly
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                Our in-house press cutting machines with different die sizes produce exact-diameter components, spin pack filters, welded screens, and precision mesh components.
              </div>
            </div>
          </div>

          <button
            onClick={() => onEnquire('Custom Diameter & Screen Sizing')}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-600 rounded transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer shadow-sm"
          >
            Enquire Custom Diameters
          </button>
        </div>
      </div>
    </section>
  );
};
