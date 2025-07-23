'use client';

import { useTranslations } from 'next-intl';


export default function CTASection() {
  const t = useTranslations('testimonials');
  
  return (
    <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{t('ctaTitle')}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {t('ctaDescription')}
        </p>
        <a 
          href="tel:+251709811778" 
          className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {t('bookNow')}
        </a>
      </div>
    </section>
  );
}
