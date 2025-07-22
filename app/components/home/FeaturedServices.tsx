'use client';

import { useTranslations } from 'next-intl';
import ServiceCard from '../home/ServiceCard';

export default function FeaturedServices() {
  const t = useTranslations('home');
  const commonT = useTranslations('common');
  
  const services = [
    {
      id: 'nuru',
      image: '/images/home/Nuru.jpg',
      title: t('featuredServices.nuruTitle'),
      description: t('featuredServices.nuruDesc')
    },
    {
      id: 'soapy',
      image: '/images/home/Soapy.jpg',
      title: t('featuredServices.soapyTitle'),
      description: t('featuredServices.soapyDesc')
    },
    {
      id: 'swedish',
      image: '/images/home/Swedish.jpg',
      title: t('featuredServices.swedishTitle'),
      description: t('featuredServices.swedishDesc')
    },
    {
      id: 'erotic',
      image: '/images/home/Erotic.jpg',
      title: t('featuredServices.eroticTitle'),
      description: t('featuredServices.eroticDesc')
    }
  ];
  
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">{commonT('services')}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12">{t('featuredServices.subheading')}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              learnMoreText={t('featuredServices.learnMore')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
