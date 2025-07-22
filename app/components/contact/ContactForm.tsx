'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ContactForm() {
  const t = useTranslations('contact');
  
  return (
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
  );
}
