import React from 'react';
import { Scissors } from 'lucide-react';
import { COMPANY_INFO, MANUFACTURING_CAPABILITIES, MANUFACTURING_STEPS } from '../data/siteData';

interface ManufacturingProps {
  onEnquire: (subject?: string) => void;
}

export const Manufacturing: React.FC<ManufacturingProps> = ({ onEnquire }) => {
  return (
    <section id="manufacturing" className="py-20 md:py-28 bg-[#e0f2fe] bg-mesh-grid-light relative border-b border-sky-200 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Technical Narrative & 5 Capability Rows */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-xs font-bold text-sky-700 tracking-wider uppercase mb-2">
              In-House Tooling &amp; Facility
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight text-balance">
              Precision Cutting for Industrial Applications
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              {COMPANY_INFO.manufacturingText}
            </p>

            {/* 5 Numbered Capability Rows */}
            <div className="space-y-3.5 mb-8">
              {MANUFACTURING_CAPABILITIES.map((cap) => (
                <div
                  key={cap.code}
                  className="p-3.5 rounded border border-sky-200 bg-white hover:border-sky-300 shadow-xs transition-colors flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-mono font-bold">{cap.code}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={() => onEnquire('Cutting Dies & Disc Sizing Enquiry')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-600 rounded transition-colors shadow-sm cursor-pointer"
              >
                <Scissors className="w-3.5 h-3.5" />
                <span>Enquire About Die Sizes &amp; Diameters</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3-Step Process Strip & Technical Summary */}
          <div className="lg:col-span-6 space-y-6">
            {/* 3-Step Technical Process Strip */}
            <div className="p-6 rounded-lg border border-sky-200 bg-white shadow-sm">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center justify-between pb-3 border-b border-slate-200">
                <span>Fabrication Sequence</span>
                <span className="text-[11px] font-mono font-bold text-sky-700">PRESS TOOLING</span>
              </div>

              <div className="space-y-4">
                {MANUFACTURING_STEPS.map((step) => (
                  <div key={step.step} className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-4">
                    <div className="w-16 shrink-0 text-xs font-mono font-bold text-sky-700 bg-sky-100/80 border border-sky-200 rounded px-2 py-1 text-center">
                      {step.step}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 mb-1">
                        {step.title}
                      </div>
                      <div className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>IN-HOUSE TOOLING &amp; DIES</span>
                <span className="text-sky-700 font-bold">BURR-FREE PRESS CUTTING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
