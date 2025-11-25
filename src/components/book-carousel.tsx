"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "@deemlol/next-icons"

const books = [
  {
    id: 1,
    title: "Worthy",
    author: "Jamie Kern Lima",
    description: "Un viaje hacia el autoconocimiento y la autoaceptación.",
    icon: "book",
    bgGradient: "from-purple-50 to-purple-100",
    borderColor: "#9D4EDD",
    accentColor: "#5A189A",
  },
  {
    id: 2,
    title: "The Greatness Mindset",
    author: "Lewis Howes",
    description: "Desbloquead el poder de tu mente. Cómo alcanzar tu máximo potencial.",
    icon: "shield",
    bgGradient: "from-orange-50 to-amber-100",
    borderColor: "#FFC880",
    accentColor: "#FF9100",
  },
    {
    id: 3,
    title: "The Let Them Theory",
    author: "Mel Robbins",
    description: "Let them. Y mientras tanto, tú enfócate en crecer, no en perseguir.",
    icon: "book",
    bgGradient: "from-purple-50 to-purple-100",
    borderColor: "#9D4EDD",
    accentColor: "#5A189A",
  },
]

export function BookCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % books.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])


  const next = () => {
    setCurrent((prev) => (prev + 1) % books.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + books.length) % books.length)
  }

  const book = books[current]

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between gap-4">
        {/* Previous Button */}
        <button
          onClick={prev}
          className="flex-shrink-0 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Libro anterior"
        >
          <ChevronLeft className="w-6 h-6 text-[#3C096C] dark:text-[#9D4EDD]" />
        </button>

        {/* Book Card */}
        <div className="flex-grow">
          <div
            className={`p-8 rounded-2xl bg-gradient-to-br ${book.bgGradient} border-2 transition-all duration-300 ease-out dark:from-gray-800 dark:to-gray-700`}
            style={{ borderColor: book.borderColor }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: book.accentColor }}
            >
              {book.icon === "book" ? (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              )}
            </div>
            <h3 className="text-2xl font-bold text-[#3C096C] mb-1 dark:text-white">{book.title}</h3>
            <p className="text-sm text-[#5A189A] mb-3 dark:text-[#9D4EDD]">{book.author}</p>
            <p className="text-[#3C096C] dark:text-gray-200">{book.description}</p>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="flex-shrink-0 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Siguiente libro"
        >
          <ChevronRight className="w-6 h-6 text-[#3C096C] dark:text-[#9D4EDD]" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {books.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? "bg-[#FF9100] w-8" : "bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Ir al libro ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
