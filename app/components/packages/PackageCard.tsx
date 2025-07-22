'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface PackageCardProps {
  id: string;
  features: string[];
  popular: boolean;
}

export default function PackageCard({ id, features, popular }: PackageCardProps) {
  const t = useTranslations('packages');
  
  return (
    <div 
      className={`relative rounded-2xl overflow-hidden shadow-xl border ${
        popular 
          ? 'border-pink-500 dark:border-pink-400' 
          : 'border-gray-200 dark:border-gray-700'
      }`}
    >
      {/* Background image that covers the entire card */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${id === 'basic' ? '/images/packages/Basic.webp' : id === 'premium' ? '/images/packages/Premium.jpg' : '/images/packages/VIP.jpg'})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Increased opacity for better text contrast */}
      </div>
      
      {popular && (
        <div className="absolute top-0 right-0 bg-pink-500 text-white py-1 px-4 rounded-bl-lg font-medium text-sm z-20">
          {t('premium.popular')}
        </div>
      )}
      
      <div className="p-8 relative z-10 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-white mb-2"> {/* Changed to white for better contrast */}
            {t(`${id}.title`)}
          </h3>
          <p className="text-gray-200 mb-6"> {/* Lightened text color for better visibility */}
            {t(`${id}.description`)}
          </p>
          <div className="text-3xl font-bold text-pink-300 mb-6"> {/* Lightened pink for better contrast */}
            {t(`${id}.price`)}
          </div>
          
          <ul className="space-y-3 mb-8 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="h-5 w-5 text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link 
            href="/contact" 
            className={`w-full py-3 text-center rounded-lg font-semibold transition-colors ${
              popular 
                ? 'bg-pink-600 hover:bg-pink-700 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-pink-100 dark:hover:bg-pink-900 text-gray-800 dark:text-white hover:text-pink-700 dark:hover:text-pink-300'
            }`}
          >
            {t('bookNow')}
          </Link>
      </div>
    </div>
  );
}
