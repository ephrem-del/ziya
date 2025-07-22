'use client';

interface MassageCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
}

export default function MassageCard({ title, description, image, duration, price }: MassageCardProps) {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }}>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-xl text-pink-600 dark:text-pink-400">
            {title}
          </h3>
          <div className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm px-3 py-1 rounded-full">
            {price}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {duration}
        </div>
      </div>
    </div>
  );
}
