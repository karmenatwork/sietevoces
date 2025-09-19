import React from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  author: string;
  description?: string;
  image?: string;
  isbn?: string;
  publishedYear?: string;
  genre?: string;
  className?: string;
};

export default function Book({
  title,
  author,
  description,
  image,
  isbn,
  publishedYear,
  genre,
  className = '',
}: Props) {
  return (
    <article className={`flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {image && (
        <div className="relative w-full md:w-48 h-56 md:h-auto">
          <Image src={image} alt={`${title} cover`} fill className="object-cover" />
        </div>
      )}
      <div className="p-6 flex-1">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">by {author}</p>
        {description && <p className="text-gray-700 mt-3">{description}</p>}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-4">
          {publishedYear && <span>Year: {publishedYear}</span>}
          {genre && <span>Genre: {genre}</span>}
          {isbn && <span>ISBN: {isbn}</span>}
        </div>
      </div>
    </article>
  );
}
