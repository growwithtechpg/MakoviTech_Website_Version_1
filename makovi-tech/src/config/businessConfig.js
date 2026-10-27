/**
 * Centralized Business & Contact Configuration for Makovi Tech
 * All contact functionality (Email, Phone, WhatsApp, Web3Forms, Maps) references this file.
 */

export const BUSINESS_CONFIG = {
  companyName: "Makovi Tech",
  email: "makovitech@gmail.com",
  phone: "7385603637",
  whatsapp: "917385603637",
  // Form services preserved for future use (currently disabled in favor of direct mailto:)
  formspreeEndpoint: "",
  web3formsAccessKey: "cca15e82-0590-468c-b702-9d9d2ad75647",
  web3formsEndpoint: "https://api.web3forms.com/submit",
  address: "PR 504, Vishwajeet Meadows, Bacbin Road, Ambernath (E), Thane - 421 501, Maharashtra, India",
};

/** Formatted display representations */
export const DISPLAY_PHONE = "+91 73856 03637";
export const TEL_URL = `tel:+91${BUSINESS_CONFIG.phone}`;

/** Google Maps search URL */
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BUSINESS_CONFIG.companyName}, ${BUSINESS_CONFIG.address}`
)}`;

/** Default messaging */
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Makovi Tech, I am interested in your wire mesh products. I would like to discuss my requirement.";

export const DEFAULT_EMAIL_SUBJECT = "Enquiry for Makovi Tech";
export const DEFAULT_EMAIL_BODY = `Hello Makovi Tech,

I would like to enquire about your wire mesh products.

Please share more information regarding my requirement.

Thank you.`;

/**
 * Generates properly encoded WhatsApp URL
 * @param {string} [message]
 * @returns {string}
 */
export function getWhatsAppUrl(message) {
  const text = message || DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}

/**
 * Opens WhatsApp in a new browser tab
 * @param {string} [message]
 */
export function openWhatsApp(message) {
  const url = getWhatsAppUrl(message);
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

/**
 * Generates product-specific WhatsApp pre-filled text
 * @param {string} productName
 * @returns {string}
 */
export function getProductWhatsAppMessage(productName) {
  return `Hello Makovi Tech, I am interested in your ${productName}. Please share more details.`;
}

/**
 * Generates mailto URL with subject and pre-filled body
 * @param {string} [subject]
 * @param {string} [body]
 * @returns {string}
 */
export function getEmailMailtoUrl(subject, body) {
  const emailSubject = subject || DEFAULT_EMAIL_SUBJECT;
  const emailBody = body || DEFAULT_EMAIL_BODY;
  return `mailto:${BUSINESS_CONFIG.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
}
