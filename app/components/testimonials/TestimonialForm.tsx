'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

export default function TestimonialForm() {
  const t = useTranslations('testimonials');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    service: '',
    rating: 0,
    review: ''
  });
  
  // Notification state
  const [showNotification, setShowNotification] = useState(false);
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle star rating click
  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show notification
    setShowNotification(true);
    
    // Clear form after submission
    setFormData({
      name: '',
      location: '',
      service: '',
      rating: 0,
      review: ''
    });
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };
  
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t('shareExperience')}
          </h2>
          
          {/* Notification */}
          {showNotification && (
            <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-out">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t('reviewSubmitted')}</span>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('name')}
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder={t('namePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('location')}
                </label>
                <input 
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder={t('locationPlaceholder')}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('serviceUsed')}
              </label>
              <select 
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">{t('selectService')}</option>
                <option value="nuru">{t('nuruMassage')}</option>
                <option value="soapy">{t('soapyMassage')}</option>
                <option value="swedish">{t('swedishMassage')}</option>
                <option value="erotic">{t('eroticMassage')}</option>
                <option value="basic">{t('basicPackage')}</option>
                <option value="premium">{t('premiumPackage')}</option>
                <option value="vip">{t('vipPackage')}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('rating')}
              </label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    className="w-8 h-8 focus:outline-none"
                  >
                    <svg 
                      className={`w-8 h-8 ${formData.rating >= star ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="review" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('yourReview')}
              </label>
              <textarea 
                id="review"
                name="review"
                value={formData.review}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[150px]"
                placeholder={t('reviewPlaceholder')}
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                {t('submitReview')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
