import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  ExternalLink,
  PhoneCall,
  Send,
  Copy,
  Check,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Settings2,
} from 'lucide-react';
import {
  BUSINESS_CONFIG,
  DISPLAY_PHONE,
  TEL_URL,
  GOOGLE_MAPS_URL,
  getWhatsAppUrl,
  getEmailMailtoUrl,
} from '../config/businessConfig';

interface ContactProps {
  onOpenEnquiryModal: (productName?: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenEnquiryModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#e0f2fe] relative border-b border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-sky-700 tracking-wider uppercase mb-2">
            Direct Commercial Contact
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-3 text-balance">
            Let's Discuss Your Wire Mesh Requirement
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Connect with Makovi Tech for stainless steel wire mesh, welded filter screens, spin pack filters, and custom industrial manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: 4 Premium Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* CARD 1 — EMAIL */}
              <div className="p-5 rounded-lg border border-sky-200 bg-white shadow-sm flex flex-col justify-between hover:border-sky-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded bg-sky-100 border border-sky-200 text-sky-700 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-sky-700 font-bold uppercase tracking-wider">
                      CARD 01 &middot; EMAIL
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Official Email
                  </h3>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email}`}
                    className="text-sm font-semibold text-sky-700 hover:text-sky-800 break-all underline underline-offset-2"
                  >
                    {BUSINESS_CONFIG.email}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1">
                    For technical specifications, drawings &amp; formal quote requests.
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200 flex items-center gap-2">
                  <a
                    href={getEmailMailtoUrl()}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-600 rounded transition-colors shadow-2xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Us</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded transition-colors cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700 text-[11px]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* CARD 2 — PHONE */}
              <div className="p-5 rounded-lg border border-sky-200 bg-white shadow-sm flex flex-col justify-between hover:border-sky-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded bg-sky-100 border border-sky-200 text-sky-700 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-sky-700 font-bold uppercase tracking-wider">
                      CARD 02 &middot; PHONE
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Phone / Direct Line
                  </h3>
                  <div className="text-base font-bold text-slate-900 font-mono tracking-tight">
                    {DISPLAY_PHONE}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Speak directly with our technical production &amp; dispatch team.
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200">
                  <a
                    href={TEL_URL}
                    aria-label="Call Makovi Tech"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors shadow-2xs"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* CARD 3 — WHATSAPP */}
              <div className="p-5 rounded-lg border border-emerald-300 bg-white shadow-sm flex flex-col justify-between hover:border-emerald-400 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-800 font-bold uppercase tracking-wider">
                      CARD 03 &middot; WHATSAPP
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    WhatsApp Chat
                  </h3>
                  <div className="text-base font-bold text-slate-900 font-mono tracking-tight">
                    {DISPLAY_PHONE}
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Instant chat for quick dimensions, samples, or immediate technical queries.
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-emerald-200">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded transition-colors shadow-2xs"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 hidden lg:block text-[11px] text-slate-500 font-mono">
            DIRECT FACTORY DISPATCH &middot; STANDARD &amp; CUSTOM DIAMETERS
          </div>
        </div>

        {/* Right Column: Premium CTA Area for Opening Modal */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="p-8 sm:p-10 rounded-xl border border-sky-200 bg-white shadow-sm relative overflow-hidden">
              {/* Subtle background industrial accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-100 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4">
                <Settings2 className="w-3.5 h-3.5 text-sky-700" />
                <span>Custom Engineering &amp; Sizing</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Have a Wire Mesh Requirement?
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-xl">
                Tell us what you need and our team will get back to you. We provide factory-direct pricing, custom cutting dies, exact-diameter circular screens, and tailored filtration assemblies.
              </p>

              {/* Value Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Exact diameter mesh screen disc cutting</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Welded wire mesh filter cylinders &amp; packs</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Precision die-cut circular mesh discs</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>Spin pack filters for polymer extrusion</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => onOpenEnquiryModal()}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-600 active:bg-sky-800 rounded transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send an Enquiry</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-emerald-600" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Guarantees */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] text-slate-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
                  <span>Prompt Quote Response</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  <span>Factory-Direct Specification Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
