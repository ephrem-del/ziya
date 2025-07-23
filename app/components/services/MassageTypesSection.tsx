'use client';

import { useTranslations } from 'next-intl';
import MassageCard from './MassageCard';

export default function MassageTypesSection() {
  const massageT = useTranslations('services.massageTypes');
  
  // Define the massage services
  const massageServices = [
    {
      id: 'nuru',
      title: massageT('nuru'),
      description: massageT('nuru_desc'),
      image: '/images/services/Nuru.webp',
      duration: '60-120 minutes',
      price: '$100-$200'
    },
    {
      id: 'soapy',
      title: massageT('soapy'),
      description: massageT('soapy_desc'),
      image: '/images/services/soapy.jpg',
      duration: '60-90 minutes',
      price: '$100-$180'
    },
    {
      id: 'swedish',
      title: massageT('swedish'),
      description: massageT('swedish_desc'),
      image: '/images/services/Swedish.jpg',
      duration: '60 minutes',
      price: '$100-$150'
    },
    {
      id: 'erotic',
      title: massageT('erotic'),
      description: massageT('erotic_desc'),
      image: '/images/services/erotic.avif',
      duration: '60-120 minutes',
      price: '$150-$250'
    },
    {
      id: 'deeptissue',
      title: massageT('deeptissue'),
      description: massageT('deeptissue_desc'),
      image: '/images/services/DeepTissue.jpeg',
      duration: '60 minutes',
      price: '$120-$180'
    },
    {
      id: 'aromatherapy',
      title: massageT('aromatherapy'),
      description: massageT('aromatherapy_desc'),
      image: '/images/services/Aroma.jpeg',
      duration: '60 minutes',
      price: '$100-$150'
    }
  ];
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {massageT('title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {massageServices.map((service) => (
            <MassageCard 
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              duration={service.duration}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
