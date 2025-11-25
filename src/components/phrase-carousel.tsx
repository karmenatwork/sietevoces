"use client"

import { useState, useEffect } from "react"

const phrases = [
  "Leemos para crecer.",
  "Hablamos para transformar.",
  "De Worthy a Greatness: un viaje contado a través de las páginas en siete voces.",
  "Sumérgete en historias que inspiran y empoderan.",
  "Entre Worthy y Greatness encontramos la verdad: somos capaces de todo.",
  "De sanar la autoestima a abrazar la grandeza: este es nuestro camino.",
  "Siete voces, una misión: descubrir y celebrar nuestro verdadero valor.",
  "Entre capítulos, aprendimos a vernos con amor y a vivir con intención."
]

export function PhraseCarousel({ currentIndex }: { currentIndex: number }) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timeout = setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    return () => clearTimeout(timeout)
  }, [currentIndex])

  return (
    <div className="space-y-6 min-h-[100px] flex items-center justify-center">
      <div
        className={`transition-all duration-500 ${
          isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <p
          className={`font-semibold text-white text-balance drop-shadow-md ${
            currentIndex === 2 ? "text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" : "text-2xl md:text-3xl"
          }`}
        >
          {phrases[currentIndex]}
        </p>
      </div>
    </div>
  )
}
