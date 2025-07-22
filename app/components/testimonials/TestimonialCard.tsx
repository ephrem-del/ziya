'use client';

interface TestimonialCardProps {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  date: string;
  text: string;
  serviceUsed: string;
}

export default function TestimonialCard({ name, location, image, rating, date, text, serviceUsed }: TestimonialCardProps) {
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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {/* Profile Image */}
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={`${name} profile`} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
            {name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {location}
          </p>
        </div>
      </div>
      
      <div className="mb-3 flex items-center">
        {renderStars(rating)}
        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
          {date}
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
        &quot;{text}&quot;
      </p>
      
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-pink-600 dark:text-pink-400">
          Service: <span className="font-medium">{serviceUsed}</span>
        </p>
      </div>
    </div>
  );
}
