"use client";

import { useState, useEffect } from "react";
import { PhraseCarousel } from "@/components/phrase-carousel";

export default function ComingSoon() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex-1 flex items-center justify-center relative">
      <div className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://videos.pexels.com/video-files/7052871/7052871-hd_720_1280_25fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br z-0 " />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#3C096C]/ via-[#5A189A]/70 to-[#9D4EDD]/60 z-0" /> */}

        {/* Decorative circles */}
        <div className="absolute top-5 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#9D4EDD] to-[#FFC880] opacity-20 blur-3xl" />
        <div className="absolute bottom-5 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#FF9100] to-[#5A189A] opacity-20 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Logo/Title */}
            <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-[#FFC880] via-[#FFC880] to-[#FF9100] bg-clip-text text-transparent drop-shadow-lg">
                7 Voces
              </span>
{/*                             
              <div className="text-2xl font-bold bg-gradient-to-r from-[#FFC880] via-[#9D4EDD] to-[#FF9100] bg-clip-text text-transparent">
                Un viaje contado a través de las páginas en siete voces.
              </div> */}
              <div className="flex items-center justify-center gap-2 text-[#5A189A]">
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>
              </div>
            </h1>
            {/* <h1 className="flex flex-col items-center ">
              <div className="text-7xl md:text-9xl font-bold  bg-gradient-to-r from-[#FFC880] via-[#9D4EDD] to-[#FF9100] bg-clip-text text-transparent">
                7 Voces
              </div>
              <p className="text-sm text-white/80 text-center md:text-left">
                Un podcast sobre crecimiento personal y transformación
              </p>
            </h1> */}
            {/* Coming Soon Badge */}
            <div className="inline-block">
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-[#5A189A] to-[#9D4EDD] text-white font-semibold text-lg shadow-lg">
                Próximamente
              </div>
            </div>

            <PhraseCarousel currentIndex={currentPhraseIndex} />

            <div className="flex items-center justify-center gap-3 mt-12">
              {[...Array(7)].map((_, i) => {
                // Map dots to phrases: dots 0-2 = phrase 0, dots 3-4 = phrase 1, dots 5-6 = phrase 2, dots 7-8 = phrase 3
                const phraseIndex = i <= 2 ? 0 : i <= 4 ? 1 : i <= 6 ? 2 : 3;
                const isActive = phraseIndex === currentPhraseIndex;

                return (
                  <button
                    key={i}
                    onClick={() => setCurrentPhraseIndex(phraseIndex)}
                    className={`rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
                      isActive
                        ? "w-4 h-4 ring-2 ring-white ring-offset-2 ring-offset-transparent"
                        : "w-3 h-3"
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${
                        [
                          "#3C096C",
                          "#5A189A",
                          "#9D4EDD",
                          "#FFC880",
                          "#FF9100",
                          "#9D4EDD",
                          "#5A189A",
                        ][i]
                      }, ${
                        [
                          "#5A189A",
                          "#9D4EDD",
                          "#FFC880",
                          "#FF9100",
                          "#FFC880",
                          "#5A189A",
                          "#3C096C",
                        ][i]
                      })`,
                    }}
                    aria-label={`Go to phrase ${phraseIndex + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
