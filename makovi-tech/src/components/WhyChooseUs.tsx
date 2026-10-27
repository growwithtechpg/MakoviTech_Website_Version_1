import React from 'react';
import { BENTO_VALUE_PROPOSITIONS } from '../data/siteData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#e8f5fe] relative border-b border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-sky-700 tracking-wider uppercase mb-2">
            Factual Differentiators
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
            Why Choose Makovi Tech
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Direct B2B supply of woven wire mesh products, extruder screens, and exact-size components backed by in-house press cutting dies.
          </p>
        </div>

        {/* 6-Column Asymmetric Bento Grid (2 cards span 3 cols, next 3 span 2 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {BENTO_VALUE_PROPOSITIONS.map((item) => (
            <div
              key={item.code}
              className={`${item.span} p-6 sm:p-7 rounded-lg border border-sky-200 bg-white hover:border-sky-500 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded">
                    FEATURE {item.code}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">
                    {item.metricLabel}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">
                  {item.metricValue}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  VERIFIED FACT
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
