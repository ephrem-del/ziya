'use client';

import { useTranslations } from 'next-intl';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('home');
  const commonT = useTranslations('common');
  
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center text-white overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596394723269-d282bd471280?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
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
      
      {/* Location Section */}
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
              {/* Map placeholder - would be replaced with actual map in production */}
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-600 dark:text-gray-400">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Services Preview */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">{commonT('services')}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">{t('featuredServices.subheading')}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gray-300 dark:bg-gray-600 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-pink-600 dark:text-pink-400 mb-2">{t('featuredServices.nuruTitle')}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t('featuredServices.nuruDesc')}
                </p>
                <Link 
                  href="/services" 
                  className="text-pink-600 dark:text-pink-400 font-medium inline-flex items-center"
                >
                  {t('featuredServices.learnMore')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gray-300 dark:bg-gray-600 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-pink-600 dark:text-pink-400 mb-2">{t('featuredServices.soapyTitle')}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t('featuredServices.soapyDesc')}
                </p>
                <Link 
                  href="/services" 
                  className="text-pink-600 dark:text-pink-400 font-medium inline-flex items-center"
                >
                  {t('featuredServices.learnMore')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gray-300 dark:bg-gray-600 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-pink-600 dark:text-pink-400 mb-2">{t('featuredServices.swedishTitle')}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t('featuredServices.swedishDesc')}
                </p>
                <Link 
                  href="/services" 
                  className="text-pink-600 dark:text-pink-400 font-medium inline-flex items-center"
                >
                  {t('featuredServices.learnMore')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service Card 4 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gray-300 dark:bg-gray-600 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620553967899-9e8705c64d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-pink-600 dark:text-pink-400 mb-2">{t('featuredServices.eroticTitle')}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t('featuredServices.eroticDesc')}
                </p>
                <Link 
                  href="/services" 
                  className="text-pink-600 dark:text-pink-400 font-medium inline-flex items-center"
                >
                  {t('featuredServices.learnMore')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
