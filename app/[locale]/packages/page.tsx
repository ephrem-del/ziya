'use client';

import { useTranslations } from 'next-intl';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function PackagesPage() {
  const t = useTranslations('packages');
  const commonT = useTranslations('common');

  // Define package features
  const packages = [
    {
      id: 'basic',
      features: [
        '1 hour session',
        'Standard massage',
        'Single escort',
        'Basic amenities'
      ]
    },
    {
      id: 'premium',
      features: [
        '2 hour session',
        'Premium massage',
        'Single escort',
        'Luxury amenities',
        'Complimentary drinks'
      ],
      popular: true
    },
    {
      id: 'vip',
      features: [
        '3+ hours',
        'Full service experience',
        'Option for multiple escorts',
        'Premium drinks and food',
        'Special requests accommodated',
        'Luxury environment'
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596394723269-d282bd471280?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-80 pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('title')}
          </h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            Choose the perfect package that suits your desires and budget
          </p>
        </div>
      </section>
      
      {/* Packages Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`relative rounded-2xl overflow-hidden shadow-xl border ${
                  pkg.popular 
                    ? 'border-pink-500 dark:border-pink-400' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-pink-500 text-white py-1 px-4 rounded-bl-lg font-medium text-sm">
                    Most Popular
                  </div>
                )}
                <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${pkg.id === 'basic' ? 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' : pkg.id === 'premium' ? 'https://images.unsplash.com/photo-1583416750470-965b2707b355?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' : 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'})` }}>
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="p-8 relative z-10 flex flex-col h-full text-white">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {t(`${pkg.id}.title`)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {t(`${pkg.id}.description`)}
                  </p>
                  <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-6">
                    {t(`${pkg.id}.price`)}
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="h-5 w-5 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/contact" 
                    className={`w-full py-3 text-center rounded-lg font-semibold transition-colors ${
                      pkg.popular 
                        ? 'bg-pink-600 hover:bg-pink-700 text-white' 
                        : 'bg-gray-200 dark:bg-gray-700 hover:bg-pink-100 dark:hover:bg-pink-900 text-gray-800 dark:text-white hover:text-pink-700 dark:hover:text-pink-300'
                    }`}
                  >
                    Book Now
                  </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">
                How do I book a service?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                You can book our services by contacting us through phone, email, or filling out the contact form. We'll respond promptly to arrange your appointment.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">
                What forms of payment do you accept?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                We accept cash, major credit cards, and mobile payment methods. Payment is required before the service begins.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">
                Can I upgrade my package during the session?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Yes, you can upgrade your package during your session if you wish to extend your time or add additional services, subject to availability.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">
                Is discretion guaranteed?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Absolutely. We value your privacy and ensure complete discretion with all our services. Your personal information will never be shared.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your appointment today and let us provide you with an unforgettable experience.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center"
          >
            {commonT('contact')}
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
