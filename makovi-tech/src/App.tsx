/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MovingSlider } from './components/MovingSlider';
import { About } from './components/About';
import { Products } from './components/Products';
import { Applications } from './components/Applications';
import { Manufacturing } from './components/Manufacturing';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { EnquiryModal } from './components/EnquiryModal';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState<boolean>(false);
  const [enquiryProduct, setEnquiryProduct] = useState<string>('');

  const handleOpenEnquiryModal = (productName?: string) => {
    setEnquiryProduct(productName || '');
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
  };

  const handleExploreProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#e0f2fe] flex flex-col font-sans selection:bg-sky-600 selection:text-white text-slate-900">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onNavigateToContact={handleOpenEnquiryModal} />

      <main className="flex-1">
        {/* 2. Hero Section with Interactive Auto-Advancing Visual Slider */}
        <Hero
          onNavigateToContact={() => handleOpenEnquiryModal()}
          onExploreProducts={handleExploreProducts}
        />

        {/* 3. Moving Production Marquee Slider Ribbon */}
        <MovingSlider onSelectProduct={handleOpenEnquiryModal} />

        {/* 4. About Us Profile */}
        <About />

        {/* 5. Products Portfolio (5 Core Products + Custom Die Request) */}
        <Products onEnquire={handleOpenEnquiryModal} />

        {/* 6. Industries & Applications */}
        <Applications onEnquire={handleOpenEnquiryModal} />

        {/* 7. Manufacturing Capability (Press Cutting & Die Sizes) */}
        <Manufacturing onEnquire={handleOpenEnquiryModal} />

        {/* 8. Why Choose Makovi Tech (Bento Grid) */}
        <WhyChooseUs />

        {/* 9. Contact Section with 4 Cards & Modal Enquiry Trigger */}
        <Contact onOpenEnquiryModal={handleOpenEnquiryModal} />
      </main>

      {/* 10. Dark Industrial Footer */}
      <Footer onEnquire={handleOpenEnquiryModal} />

      {/* 11. Accessible Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />

      {/* 12. Centralized Accessible Enquiry Popup Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiryModal}
        initialProduct={enquiryProduct}
      />
    </div>
  );
}
