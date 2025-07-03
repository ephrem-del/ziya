'use client';

import { useTranslations } from 'next-intl';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  const t = useTranslations('services');
  const massageT = useTranslations('services.massageTypes');
  
  // Define the massage services
  const massageServices = [
    {
      id: 'nuru',
      title: massageT('nuru'),
      description: massageT('nuru_desc'),
      image: 'https://images.unsplash.com/photo-1591343395902-1adcb454c4e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '60-120 minutes',
      price: '$150-$300'
    },
    {
      id: 'soapy',
      title: massageT('soapy'),
      description: massageT('soapy_desc'),
      image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '60-90 minutes',
      price: '$150-$250'
    },
    {
      id: 'swedish',
      title: massageT('swedish'),
      description: massageT('swedish_desc'),
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '60 minutes',
      price: '$120-$180'
    },
    {
      id: 'erotic',
      title: massageT('erotic'),
      description: massageT('erotic_desc'),
      image: 'https://images.unsplash.com/photo-1620553967899-9e8705c64d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '60-120 minutes',
      price: '$200-$350'
    },
    {
      id: 'deeptissue',
      title: 'Deep Tissue Massage',
      description: 'Intense massage focusing on the deeper layers of muscle tissue',
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '60 minutes',
      price: '$150-$200'
    },
    {
      id: 'aromatherapy',
      title: 'Aromatherapy Massage',
      description: 'Relaxing massage with essential oils to stimulate your senses',
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '60 minutes',
      price: '$140-$190'
    }
  ];
  
  // Define additional services
  const additionalServices = [
    {
      title: 'Full Body Experience',
      description: 'Complete intimate experience with our trained professionals',
      price: 'Starting at $300'
    },
    {
      title: 'Couple\'s Package',
      description: 'Enjoy our services with your partner in a luxurious setting',
      price: 'Starting at $450'
    },
    {
      title: 'VIP Treatment',
      description: 'Premium service with multiple escorts and extended time',
      price: 'Starting at $600'
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540552999122-a0ac7a9a0908?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-80"></div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('title')}
          </h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            Discover our range of premium massage services designed to please and satisfy
          </p>
        </div>
      </section>
      
      {/* Massage Types Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {massageT('title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {massageServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url('${service.image}')` }}>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl text-pink-600 dark:text-pink-400">
                      {service.title}
                    </h3>
                    <span className="bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 text-sm font-medium px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      Duration: {service.duration}
                    </span>
                    <Link 
                      href="/contact" 
                      className="text-pink-600 dark:text-pink-400 font-medium hover:underline"
                    >
                      Book Now →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Additional Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md"
              >
                <h3 className="font-bold text-xl text-pink-600 dark:text-pink-400 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mt-6">
                  <span className="font-medium text-lg">
                    {service.price}
                  </span>
                  <Link 
                    href="/contact" 
                    className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition duration-300"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">100% Discretion</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your privacy is our top priority. All encounters are completely confidential.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Competitive Pricing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Best value for the quality of service provided in the area.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Experienced Escorts</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All our escorts are experienced professionals trained in the art of pleasure.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">24/7 Availability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our services are available at any time, day or night, to fit your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for an Unforgettable Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us now to book your session with our professional escorts
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center"
          >
            Book Now
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
