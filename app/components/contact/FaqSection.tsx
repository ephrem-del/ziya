'use client';

import { useTranslations } from 'next-intl';

export default function FaqSection() {
  const t = useTranslations('contact');
  
  const faqItems = [
    {
      id: 'q2',
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      id: 'q3',
      question: t('faq.q3'),
      answer: t('faq.a3')
    }
  ];
  
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t('faq.title')}
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-pink-600 dark:text-pink-400">
                {item.question}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
