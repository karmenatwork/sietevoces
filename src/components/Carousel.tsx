'use client';

import React, { useEffect, useRef, useState } from 'react';

type Item = {
  id: string | number;
  content: React.ReactNode;
  alt?: string;
};

type Props = {
  items: Item[];
  intervalMs?: number;
  className?: string;
  controls?: boolean;
  ariaLabel?: string;
};

export default function Carousel({
  items,
  intervalMs = 4000,
  className = '',
  controls = true,
  ariaLabel = 'carousel',
}: Props) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (items.length <= 1) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [items.length, intervalMs]);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  if (!items.length) return null;

  return (
    <section className={`relative w-full ${className}`} aria-roledescription="carousel" aria-label={ariaLabel}>
      <div className="overflow-hidden rounded-lg border">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
          aria-live="polite"
        >
          {items.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0 p-6">
              <div className="mx-auto max-w-3xl text-center text-gray-800">{item.content}</div>
            </div>
          ))}
        </div>
      </div>

      {controls && items.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between p-2 pointer-events-none">
          <button
            type="button"
            onClick={prev}
            className="pointer-events-auto bg-white/80 hover:bg-white border rounded-full p-2 shadow"
            aria-label="Previous"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className="pointer-events-auto bg-white/80 hover:bg-white border rounded-full p-2 shadow"
            aria-label="Next"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {items.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-gray-800' : 'bg-gray-300'}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
