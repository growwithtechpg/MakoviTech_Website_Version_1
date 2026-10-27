import React from 'react';
import {
  Layers,
  ShieldCheck,
  UtensilsCrossed,
  Flame,
  Filter,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { INDUSTRIES } from '../data/siteData';

interface ApplicationsProps {
  onEnquire: (industryName: string) => void;
}

export const Applications: React.FC<ApplicationsProps> = ({ onEnquire }) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Filter':
        return <Filter className="w-5 h-5" />;
      default:
        return <Filter className="w-5 h-5" />;
    }
  };

  return (
    <section id="applications" className="py-20 md:py-28 bg-[#e8f5fe] relative border-b border-sky-200 bg-mesh-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-sky-700 tracking-wider uppercase mb-2">
            Target Sectors
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
            Industries We Serve
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Makovi Tech stainless steel wire mesh, extruder disc filters, round cut circles, and welded filter packs are engineered for demanding filtration and processing operations.
          </p>
        </div>

        {/* Balanced Grid: 3 Industries + Matching CTA Slot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.id}
              className="p-6 rounded-lg border border-sky-200 bg-white hover:border-sky-500 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded bg-sky-100 border border-sky-200 text-sky-700 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    {getIndustryIcon(industry.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-sky-700">
                    {industry.code}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                  {industry.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {industry.description}
                </p>

                {/* Applied Products */}
                <div className="pt-2 pb-4 border-t border-sky-100">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Applied Products
                  </div>
                  <div className="text-xs text-slate-700 font-medium leading-tight">
                    {industry.appliedProducts}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-sky-100">
                <button
                  onClick={() => onEnquire(`${industry.name} Application Enquiry`)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-sky-700 hover:text-sky-800 py-1 transition-colors cursor-pointer"
                >
                  <span>Enquire for {industry.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* 6th Slot: Application Matching CTA Card */}
          <div className="p-6 rounded-lg border border-slate-800 bg-[#090e17] text-white flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-10 h-10 rounded bg-sky-950 border border-sky-800 text-sky-400 flex items-center justify-center mb-4">
                <HelpCircle className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-white mb-2">
                Need Wire Mesh for Your Process Line?
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Tell us your processing medium, filtration conditions, or target disc dimensions. We will prepare exact-size components for your plant.
              </p>
            </div>

            <button
              onClick={() => onEnquire('Industrial Application Consultation')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded transition-colors shadow cursor-pointer"
            >
              <span>Consult Engineering Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
