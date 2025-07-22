'use client';

import { useTranslations } from 'next-intl';

export default function LocationSection() {
  const t = useTranslations('home');
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('location.sectionTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-pink-600 dark:text-pink-400 mb-4">{t('location.findUs')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 dark:text-pink-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">{t('location.address')}</p>
                  <p className="text-gray-600 dark:text-gray-400">{t('location.addressLine1')}</p>
                  <p className="text-gray-600 dark:text-gray-400">{t('location.addressLine2')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 dark:text-pink-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">{t('location.hours')}</p>
                  <p className="text-gray-600 dark:text-gray-400">{t('location.hoursLine1')}</p>
                  <p className="text-gray-600 dark:text-gray-400">{t('location.hoursLine2')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 dark:text-pink-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">{t('location.phone')}</p>
                  <p className="text-gray-600 dark:text-gray-400">{t('location.phoneNumber')}</p>
                  <p className="text-gray-600 dark:text-gray-400">{t('location.phoneNote')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md">
            <div className="relative w-full h-full">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                src="https://www.openstreetmap.org/export/embed.html?bbox=38.7527605%2C8.9756034%2C38.7627605%2C8.9856034&amp;layer=mapnik&amp;marker=8.9806034%2C38.7577605" 
                style={{ border: 0 }}
              ></iframe>
              <div className="absolute bottom-2 right-2">
                <a 
                  href="https://maps.app.goo.gl/Fp7VWTMsSvdXsdiL7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white px-3 py-1 rounded-lg text-sm font-medium shadow-md hover:bg-gray-100 transition-colors"
                >
                  View in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
