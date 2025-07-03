'use client';

import { useTranslations } from 'next-intl';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function TestimonialsPage() {
  const t = useTranslations('testimonials');
  const commonT = useTranslations('common');
  
  // Testimonial data (would typically come from a database or API)
  const testimonials = [
    {
      id: 1,
      name: 'Alex K.',
      location: 'New York',
      image: 'https://randomuser.me/api/portraits/women/56.jpg',
      rating: 5,
      date: 'October 12, 2023',
      text: 'I was amazed by the quality of service. The atmosphere was perfect and the massage technique was unlike anything I have experienced before. Truly professional and attentive to every detail.',
      serviceUsed: 'Nuru Massage'
    },
    {
      id: 2,
      name: 'Jamie T.',
      location: 'Los Angeles',
      image: 'https://randomuser.me/api/portraits/men/11.jpg',
      rating: 5,
      date: 'September 3, 2023',
      text: 'I\'ve tried many escort services in the city, but this one stands out by far. The escort was not only beautiful but also had an amazing personality. Will definitely return for more sessions!',
      serviceUsed: 'VIP Package'
    },
    {
      id: 3,
      name: 'Morgan B.',
      location: 'Chicago',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 4,
      date: 'August 15, 2023',
      text: 'The Swedish massage was incredibly relaxing, and the escort was professional and skilled. The entire experience was discreet and enjoyable from start to finish.',
      serviceUsed: 'Swedish Massage'
    },
    {
      id: 4,
      name: 'Taylor R.',
      location: 'Miami',
      image: 'https://randomuser.me/api/portraits/men/78.jpg',
      rating: 5,
      date: 'July 22, 2023',
      text: 'I booked the Premium package for a special occasion and was blown away by the attention to detail. Everything was perfect - the ambiance, the service, and especially the escort who was both professional and charming.',
      serviceUsed: 'Premium Package'
    },
    {
      id: 5,
      name: 'Jordan L.',
      location: 'Las Vegas',
      image: 'https://randomuser.me/api/portraits/women/56.jpg',
      rating: 5,
      date: 'June 8, 2023',
      text: 'The erotic massage experience was truly mind-blowing. The techniques used were exceptional, and the escort made sure I was comfortable throughout the entire session. Worth every penny!',
      serviceUsed: 'Erotic Massage'
    },
    {
      id: 6,
      name: 'Casey M.',
      location: 'Atlanta',
      image: 'https://randomuser.me/api/portraits/men/11.jpg',
      rating: 4,
      date: 'May 17, 2023',
      text: 'I was hesitant at first, but the professionalism of the service put me at ease immediately. The soapy massage was incredibly relaxing and satisfying. I\'ve already booked my next appointment.',
      serviceUsed: 'Soapy Massage'
    }
  ];
  
  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg 
          key={i}
          className={`w-5 h-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-pink-300 to-purple-400 dark:from-pink-500 dark:to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('title')}
          </h1>
          <p className="text-xl text-white opacity-90 mb-8">
            {t('description')}
          </p>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            Read what our satisfied clients have to say about their experiences
          </p>
        </div>
      </section>
      
      {/* Testimonials Grid Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {/* Profile Image Placeholder - in production, use real images */}
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mr-4">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-500 text-xs">Photo</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                
                <div className="mb-3 flex items-center">
                  {renderStars(testimonial.rating)}
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.date}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-pink-600 dark:text-pink-400">
                    Service: <span className="font-medium">{testimonial.serviceUsed}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">{t('filter')}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <button className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300">
                  {t('allServices')}
                </button>
              </div>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">500+</p>
              <p className="text-gray-700 dark:text-gray-300">{t('happyClients')}</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">15+</p>
              <p className="text-gray-700 dark:text-gray-300">{t('experiencedEscorts')}</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">4.9</p>
              <p className="text-gray-700 dark:text-gray-300">{t('averageRating')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leave a Review Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('leaveReview')}</h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('yourName')}
                  </label>
                  <input 
                    type="text"
                    id="name"
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
                      className="w-8 h-8 focus:outline-none"
                    >
                      <svg 
                        className="w-8 h-8 text-gray-300 hover:text-yellow-400"
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
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('ctaTitle')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('ctaDescription')}
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center"
          >
            {t('bookNow')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
