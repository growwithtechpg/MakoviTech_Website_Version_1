import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { PRODUCTS } from '../data/siteData';
import {
  BUSINESS_CONFIG,
  getWhatsAppUrl,
  getProductWhatsAppMessage,
} from '../config/businessConfig';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialProduct = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: initialProduct,
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  // Sync initial product and reset errors whenever modal opens
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement as HTMLElement;

      // Lock background scroll
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      setFormData((prev) => ({
        ...prev,
        requirement: initialProduct || '',
      }));
      setErrors({});
      setSubmitError(null);
      setIsSuccess(false);

      // Focus first input field with a slight delay for smooth animation
      const timer = setTimeout(() => {
        nameInputRef.current?.focus();
      }, 50);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = originalOverflow;
        if (previouslyFocusedElementRef.current && typeof previouslyFocusedElementRef.current.focus === 'function') {
          previouslyFocusedElementRef.current.focus();
        }
      };
    }
  }, [isOpen, initialProduct]);

  // Handle ESC key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    // Reset modal state
    setTimeout(() => {
      setIsSuccess(false);
      setSubmitError(null);
      setErrors({});
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        requirement: '',
        message: '',
      });
    }, 200);
  };

  const validate = (): boolean => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }

    // Email is optional: validate format only if filled
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number.';
    }

    // Product / Requirement is optional: no required check

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const reqText = formData.requirement.trim();

      /* ==========================================================================
         [PRESERVED FOR FUTURE USE] SERVERLESS API SUBMISSION (Web3Forms & Formspree)
         To easily switch back to Web3Forms or Formspree in the future:
         1. Uncomment the block below.
         2. Remove or comment out the direct mailto: handler beneath it.
         ==========================================================================
      let isOk = false;
      // 1. If Formspree endpoint is configured, submit via Formspree
      if (BUSINESS_CONFIG.formspreeEndpoint && BUSINESS_CONFIG.formspreeEndpoint.trim() !== '') {
        const response = await fetch(BUSINESS_CONFIG.formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            company: formData.company.trim() || 'Not specified',
            email: formData.email.trim() || 'Not specified',
            phone: formData.phone.trim(),
            requirement: reqText || 'Not specified',
            message: formData.message.trim(),
            _subject: `New Makovi Tech Enquiry${reqText ? ` - ${reqText}` : ''}`,
          }),
        });
        isOk = response.ok;
      } else {
        // 2. Otherwise submit directly to Web3Forms API
        const submissionData = new FormData();
        submissionData.append('access_key', BUSINESS_CONFIG.web3formsAccessKey);
        submissionData.append('name', formData.name.trim());
        submissionData.append('company', formData.company.trim() || 'Not specified');
        submissionData.append('email', formData.email.trim() || 'not-provided@makovitech.com');
        submissionData.append('phone', formData.phone.trim());
        submissionData.append('requirement', reqText || 'Not specified');
        submissionData.append('message', formData.message.trim());
        submissionData.append('subject', `New Makovi Tech Website Enquiry${reqText ? ` - ${reqText}` : ''}`);
        submissionData.append('from_name', 'Makovi Tech Website');

        const response = await fetch(BUSINESS_CONFIG.web3formsEndpoint, {
          method: 'POST',
          body: submissionData,
        });
        const result = await response.json();
        isOk = Boolean(result.success);
      }
      ========================================================================== */

      // DIRECT EMAIL (mailto:) IMPLEMENTATION:
      // Constructs a pre-populated email containing all entered and selected field values
      const recipient = BUSINESS_CONFIG.email;
      const subject = `New Website Enquiry: ${reqText || 'Wire Mesh Products'} - ${formData.name.trim()}`;

      const bodyLines = [
        `Hello Makovi Tech,`,
        ``,
        `I would like to submit the following product enquiry via your website:`,
        ``,
        `==================================================`,
        `CLIENT & CONTACT DETAILS`,
        `==================================================`,
        `Full Name:      ${formData.name.trim()}`,
        `Company Name:   ${formData.company.trim() || 'Not specified'}`,
        `Phone Number:   ${formData.phone.trim()}`,
        `Email Address:  ${formData.email.trim() || 'Not specified'}`,
        ``,
        `==================================================`,
        `PRODUCT REQUIREMENT`,
        `==================================================`,
        `Selected Product: ${reqText || 'General Enquiry / Wire Mesh Products'}`,
        ``,
        `==================================================`,
        `MESSAGE & SPECIFICATIONS`,
        `==================================================`,
        formData.message.trim(),
        ``,
        `==================================================`,
        `Sent via Makovi Tech Website Enquiry Form`,
      ];

      const emailBody = bodyLines.join('\n');
      const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

      // Open the user's default email client
      try {
        const mailLink = document.createElement('a');
        mailLink.href = mailtoUrl;
        mailLink.target = '_blank';
        mailLink.rel = 'noopener noreferrer';
        document.body.appendChild(mailLink);
        mailLink.click();
        document.body.removeChild(mailLink);
      } catch {
        window.location.href = mailtoUrl;
      }

      setIsSuccess(true);
      // Clear form after successful submission
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        requirement: '',
        message: '',
      });
      setErrors({});
    } catch {
      setSubmitError('Something went wrong while preparing your enquiry. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const currentWhatsAppMsg = getProductWhatsAppMessage(formData.requirement || 'wire mesh products');
  const currentWhatsAppUrl = getWhatsAppUrl(currentWhatsAppMsg);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      aria-describedby="enquiry-modal-desc"
    >
      {/* Dark semi-transparent backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-lg shadow-2xl overflow-hidden z-10 my-auto transform transition-all duration-300 animate-in fade-in zoom-in-95 max-h-[92vh] flex flex-col"
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-5 sm:p-6 pb-4 border-b border-slate-200 bg-slate-50/70 shrink-0">
          <div>
            <div className="text-[11px] font-bold text-sky-700 uppercase tracking-wider mb-1">
              Makovi Tech &middot; Direct Factory Enquiry
            </div>
            <h2 id="enquiry-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Send Your Enquiry
            </h2>
            <p id="enquiry-modal-desc" className="text-xs sm:text-sm text-slate-600 mt-1">
              Tell us about your requirement and our team will get back to you.
            </p>
          </div>

          {/* Close Button "×" */}
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/80 rounded transition-colors cursor-pointer shrink-0 ml-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {/* Success State */}
          {isSuccess ? (
            <div className="py-8 px-2 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                Enquiry Sent Successfully
              </h3>

              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
                Thank you for contacting <strong className="text-slate-900">{BUSINESS_CONFIG.companyName}</strong>. We will get back to you shortly.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-2.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-600 rounded transition-colors shadow-sm cursor-pointer"
                >
                  Close
                </button>

                <a
                  href={currentWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <>
              {/* Submission Error Banner */}
              {submitError && (
                <div className="mb-5 p-3.5 rounded-lg bg-rose-50 border border-rose-300 text-rose-900 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-bold">Submission Notice</div>
                    <div className="mt-0.5">{submitError}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 1. Full Name * */}
                  <div>
                    <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      ref={nameInputRef}
                      type="text"
                      id="modal-name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Patil"
                      disabled={isSubmitting}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-colors ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-300 focus:border-sky-600 focus:ring-sky-600'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* 2. Company Name */}
                  <div>
                    <label htmlFor="modal-company" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="modal-company"
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Precision Extrusions Ltd"
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 3. Email Address (Optional) */}
                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      disabled={isSubmitting}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-300 focus:border-sky-600 focus:ring-sky-600'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* 4. Phone Number * */}
                  <div>
                    <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 73856 03637"
                      disabled={isSubmitting}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-colors ${
                        errors.phone
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-300 focus:border-sky-600 focus:ring-sky-600'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* 5. Product / Requirement (Optional) */}
                <div>
                  <label htmlFor="modal-requirement" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Product / Requirement <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <select
                    id="modal-requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-sm text-slate-900 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 transition-colors cursor-pointer"
                  >
                    <option value="">Select a product (Optional)</option>
                    {PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.name}>
                        {prod.name} ({prod.category})
                      </option>
                    ))}
                    <option value="Custom Wire Mesh & Tooling Request">
                      Custom Wire Mesh &amp; Tooling Request
                    </option>
                    <option value="Industrial Application Consultation">
                      Industrial Application Consultation
                    </option>
                    <option value="General Wire Mesh Enquiry">
                      General Wire Mesh Enquiry
                    </option>
                  </select>
                  {errors.requirement && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.requirement}</span>
                    </p>
                  )}
                </div>

                {/* 6. Message * */}
                <div>
                  <label htmlFor="modal-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isSubmitting}
                    placeholder="Provide required screen diameter, mesh count/aperture, industrial application (plastics, chemical, pharma, filtration), and estimated quantity..."
                    className={`w-full px-3.5 py-2.5 bg-white border rounded text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-colors ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-300 focus:border-sky-600 focus:ring-sky-600'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-600 active:bg-sky-800 disabled:bg-slate-400 disabled:cursor-not-allowed rounded transition-all shadow-md cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>

                  {/* Secondary WhatsApp CTA inside Modal */}
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500">Prefer WhatsApp?</span>
                    <a
                      href={currentWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold underline underline-offset-2"
                    >
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-emerald-600" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
