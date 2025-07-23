'use client';

import { useTranslations } from 'next-intl';

export default function ContactInfo() {
  const t = useTranslations('contact');
  
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        {t('info.title')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 max-w-2xl mx-auto">
        {/* Address */}
        <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              {t('info.address_title')}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              {t('info.address')}
            </p>
          </div>
        </div>
        
        {/* Phone */}
        <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              {t('info.phone_title')}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              {t('info.phone')}
            </p>
          </div>
        </div>
        
        {/* Email */}
        <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              {t('info.email_title')}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              {t('info.email')}
            </p>
          </div>
        </div>
        
        {/* Hours */}
        <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              {t('info.hours_title')}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              {t('info.hours')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Map */}
      <div className="mt-10">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4 text-center">
          {t('info.map_title')}
        </h3>
        <div className="h-96 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 relative shadow-lg">
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            src="https://www.openstreetmap.org/export/embed.html?bbox=38.7927605%2C8.9856034%2C38.8027605%2C8.9956034&amp;layer=mapnik&amp;marker=8.9906034%2C38.7977605" 
            style={{ border: 0 }}
          ></iframe>
          <div className="absolute bottom-4 right-4">
            <a 
              href="https://maps.app.goo.gl/KEZiaWHpxLvmNwzV9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View in Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
