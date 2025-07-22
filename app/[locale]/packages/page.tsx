'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/packages/HeroSection';
import PackagesGrid from '../../components/packages/PackagesGrid';
import FaqSection from '../../components/packages/FaqSection';
import CTASection from '../../components/packages/CTASection';

export default function PackagesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <PackagesGrid />
      <FaqSection />
      <CTASection />
      <Footer />
    </main>
  );
}
