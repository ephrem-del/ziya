'use client';

import { useTranslations } from 'next-intl';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  const t = useTranslations('contact');
  const commonT = useTranslations('common');
  
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596475380310-ce85cca3dea9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-80 pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('title')}
          </h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                {t('form.title')}
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('form.name')}
                    </label>
                    <input 
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder={t('form.name_placeholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('form.phone')}
                    </label>
                    <input 
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder={t('form.phone_placeholder')}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('form.email')}
                  </label>
                  <input 
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder={t('form.email_placeholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('form.service')}
                  </label>
                  <select 
                    id="service"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="">{t('form.service_placeholder')}</option>
                    <option value="nuru">{t('form.service_nuru')}</option>
                    <option value="soapy">{t('form.service_soapy')}</option>
                    <option value="swedish">{t('form.service_swedish')}</option>
                    <option value="erotic">{t('form.service_erotic')}</option>
                    <option value="basic">{t('form.service_basic')}</option>
                    <option value="premium">{t('form.service_premium')}</option>
                    <option value="vip">{t('form.service_vip')}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('form.date')}
                  </label>
                  <input 
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('form.time')}
                  </label>
                  <input 
                    type="time"
                    id="time"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('form.message')}
                  </label>
                  <textarea 
                    id="message"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[120px]"
                    placeholder={t('form.message_placeholder')}
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input 
                    id="privacy"
                    type="checkbox"
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    {t('form.privacy')} <Link href="/privacy" className="text-pink-600 dark:text-pink-400 hover:underline">{t('form.privacy_link')}</Link>
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    {t('form.submit')}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                {t('info.title')}
              </h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex">
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
                <div className="flex">
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
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      {t('info.phone2')}
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex">
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
                <div className="flex">
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
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                  {t('info.map_title')}
                </h3>
                <div className="h-64 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img 
                    src="https://maps.googleapis.com/maps/api/staticmap?center=Addis+Ababa,Ethiopia&zoom=13&size=600x400&maptype=roadmap&markers=color:red%7CAddis+Ababa,Ethiopia&key=DEMO_KEY" 
                    alt="Map location" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t('faq.title')}
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">
                {t('faq.q1')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t('faq.a1')}
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">
                {t('faq.q2')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t('faq.a2')}
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">
                {t('faq.q3')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t('faq.a3')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
