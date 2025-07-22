'use client';

import { useTranslations } from 'next-intl';

export default function AdditionalServicesSection() {
  const t = useTranslations('services');
  
  // Define additional services
  const additionalServices = [
    {
      title: t('additionalServices.fullBody.title'),
      description: t('additionalServices.fullBody.description'),
      price: t('additionalServices.fullBody.price')
    },
    {
      title: t('additionalServices.couples.title'),
      description: t('additionalServices.couples.description'),
      price: t('additionalServices.couples.price')
    },
    {
      title: t('additionalServices.vip.title'),
      description: t('additionalServices.vip.description'),
      price: t('additionalServices.vip.price')
    }
  ];
  
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t('additionalServices.title')}
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {additionalServices.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
                <div className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-lg font-semibold whitespace-nowrap">
                  {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
