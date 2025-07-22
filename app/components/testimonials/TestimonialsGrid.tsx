'use client';

import { useTranslations } from 'next-intl';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsGrid() {
  const t = useTranslations('testimonials');
  
  // Testimonial data (would typically come from a database or API)
  const testimonials = [
    {
      id: 1,
      name: 'Alex K.',
      location: 'New York',
      image: '/images/testimonials/user1.webp',
      rating: 5,
      date: 'October 12, 2023',
      text: 'I was amazed by the quality of service. The atmosphere was perfect and the massage technique was unlike anything I have experienced before. Truly professional and attentive to every detail.',
      serviceUsed: 'Nuru Massage'
    },
    {
      id: 2,
      name: 'Jamie T.',
      location: 'Los Angeles',
      image: '/images/testimonials/user2.jpeg',
      rating: 5,
      date: 'September 3, 2023',
      text: 'I\'ve tried many escort services in the city, but this one stands out by far. The escort was not only beautiful but also had an amazing personality. Will definitely return for more sessions!',
      serviceUsed: 'VIP Package'
    },
    {
      id: 3,
      name: 'Morgan B.',
      location: 'Chicago',
      image: '/images/testimonials/user3.jpeg',
      rating: 4,
      date: 'August 15, 2023',
      text: 'The Swedish massage was incredibly relaxing, and the escort was professional and skilled. The entire experience was discreet and enjoyable from start to finish.',
      serviceUsed: 'Swedish Massage'
    },
    {
      id: 4,
      name: 'አብርሃም ተ.',
      location: 'አዲስ አበባ',
      image: '/images/testimonials/user4.jpeg',
      rating: 5,
      date: 'July 22, 2023',
      text: 'የፕሬሚየም ጥቅል ለልዩ ዝግጅት አዝዤ ነበረ ዋው ልጅቷ በጣም አሪፍ ናት',
      serviceUsed: 'Premium Package'
    },
    {
      id: 5,
      name: 'Jordan L.',
      location: 'Las Vegas',
      image: '/images/testimonials/user5.jpg',
      rating: 5,
      date: 'June 8, 2023',
      text: 'The erotic massage experience was truly mind-blowing. The techniques used were exceptional, and the escort made sure I was comfortable throughout the entire session. Worth every penny!',
      serviceUsed: 'Erotic Massage'
    },
    {
      id: 6,
      name: 'ማርቆስ',
      location: 'አዲስ አበባ',
      image: '/images/testimonials/user6.jpg',
      rating: 4,
      date: 'May 17, 2023',
      text: 'መጀመርያ ፈርቼ ነበር ከዛ ካወራዋት ቡሃላ ቀለል አለኝ በታም አሪፍ ጊዜ ነበር ያሳለፍኩት። መቼም አልረሳውም',
      serviceUsed: 'Soapy Massage'
    }
  ];
  
  return (
    <>
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t('clientTestimonials')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                id={testimonial.id}
                name={testimonial.name}
                location={testimonial.location}
                image={testimonial.image}
                rating={testimonial.rating}
                date={testimonial.date}
                text={testimonial.text}
                serviceUsed={testimonial.serviceUsed}
              />
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
    </>
  );
}
