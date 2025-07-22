'use client';

import Link from 'next/link';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  learnMoreText: string;
}

export default function ServiceCard({ image, title, description, learnMoreText }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
      <div 
        className="h-48 bg-gray-300 dark:bg-gray-600 bg-cover bg-center" 
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className="p-6">
        <h3 className="font-semibold text-xl text-pink-600 dark:text-pink-400 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        <Link 
          href="/services" 
          className="text-pink-600 dark:text-pink-400 font-medium inline-flex items-center"
        >
          {learnMoreText}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
