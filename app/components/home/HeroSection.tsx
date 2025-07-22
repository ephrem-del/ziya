'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HeroSection() {
  const t = useTranslations('home');
  
  return (
    <section className="relative min-h-[80vh] flex items-center text-white overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/home/Home.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 pointer-events-none"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {t('heroDescription')}
          </p>
          <Link 
            href="/services" 
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 inline-flex items-center"
          >
            {t('ctaButton')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
