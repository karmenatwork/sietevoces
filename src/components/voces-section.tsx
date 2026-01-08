"use client";
import Image from "next/image";
import { voices, VoiceCard } from "./voces-elements";


export default function VocesSection() {
    return (
        <section className="py-20 px-6 bg-[var(--color-section-bg)]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-heading  mb-4">Las 7 Voces</h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Conoce a las mujeres extraordinarias que compartirán su viaje de crecimiento
                    </p>
                </div>

                {/* Voices Grid */}
                <div className="flex flex-wrap justify-center gap-8">
                    {voices.map((voice: (typeof voices)[0], index: number) => (
                        <VoiceCard voice={voice} index={index} key={voice.name} />
                    ))}
                </div>

                {/* Decorative Element */}
                <div className="mt-16 text-center">
                    <div className="inline-block px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
                        <p className="text-accent font-medium">Siete voces, un mismo viaje de crecimiento</p>
                    </div>
                </div>
            </div>
        </section>
    );


}
