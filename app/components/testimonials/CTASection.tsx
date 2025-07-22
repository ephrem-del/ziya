'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function CTASection() {
  const t = useTranslations('testimonials');
  
  return (
    <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{t('ctaTitle')}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {t('ctaDescription')}
        </p>
        <Link 
          href="/contact" 
          className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center"
          prefetch={false}
        >
          {t('bookNow')}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
