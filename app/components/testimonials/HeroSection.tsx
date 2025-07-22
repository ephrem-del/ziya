'use client';

import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('testimonials');
  
  return (
    <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/testimonials/Testimonials.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-80"></div>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          {t('title')}
        </h1>
        <p className="text-xl text-white opacity-90 mb-8">
          {t('description')}
        </p>
        <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
          {t('subtitle') || 'Read what our satisfied clients have to say about their experiences'}
        </p>
      </div>
    </section>
  );
}
