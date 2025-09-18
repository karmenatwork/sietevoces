import Image from 'next/image';

interface CardProps {
  title: string;
  description?: string;
  author?: string;
  image?: string;
  name?: string;
  bio?: string;
  className?: string;
  onClick?: () => void;
}

export default function Card({ 
  title, 
  description, 
  author, 
  image, 
  name, 
  bio, 
  className = '',
  onClick 
}: CardProps) {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title || name || 'Card image'}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title || name}
        </h3>
        {author && (
          <p className="text-sm text-gray-600 mb-2">by {author}</p>
        )}
        {(description || bio) && (
          <p className="text-gray-700 text-sm leading-relaxed">
            {description || bio}
          </p>
        )}
      </div>
    </div>
  );
}