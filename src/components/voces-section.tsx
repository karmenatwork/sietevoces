"use client"
import Image from "next/image"

const voices = [
    {
        name: "Itsalia",
        description: "Líder corporativa, coach y soñadora en constante crecimiento. Cree en comenzar de nuevo con fe, valentía y propósito.",
        image: "/nosotras/Itsalia.gif",
    },
    {
        name: "Rosaida",
        description: "Madre, empresaria y podcaster de contenido cristiano. Le apasiona aprender cosas nuevas y expandir sus horizontes.",
        image: "/nosotras/Rosaida.gif",
    },
    {
        name: "Carmen",
        description: "Tecnóloga, emprendedora y  madre, en contaste crecimiento. Busca nuevas formas de conectar y construir comunidad.",
        image: "/nosotras/CarmenPodcaster.gif",
    },
    {
        name: "Yvonne",
        description: "Madre, empresaria y consultora de RH, guiada por el optimismo y la espiritualidad.",
        image: "/nosotras/Yvvone.jpg",
    },
    {
        name: "Marie Carmen",
        description: "NeuroCoach de Bienestar Integral y acompaña a mujeres en procesos de reinvención y amor propio.",
        image: "/nosotras/MarieCarmen.gif",
    },
    {
        name: "Rosanna",
        description: "Vengo de Wall Street, soy mamá osa y coach ejecutiva que impulsa a las mujeres a reclamar su voz, su poder y su riqueza",
        image: "/nosotras/Rosanna.gif",
    },

    {
        name: "Cecilia",
        description: "Inmigrante peruana y mamá, mujer en proceso de sanación. Alienta a otras mujeres a transformar el dolor en propósito. 💫",
        image: "/nosotras/Cecilia.gif",
    },
]

export default function VoicesSection() {
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
                    {voices.map((voice: typeof voices[0], index: number) => (
                        <VoiceCard voice={voice} index={index} key={voice.name} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export function VoiceCard({ voice, index }: { voice: typeof voices[0]; index: number }) {
    return (
        <div
            key={voice.name}
            className="group flex flex-col items-center text-center"
            style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s both`,
                width: "calc(25% - 2rem)", // 4 per row on large screens
            }}
        >
            {/* Profile Image */}
            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Image
                    src={voice.image || "/placeholder.svg"}
                    alt={`${voice.name} - 7 VOCES`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            {/* Name */}
            <h3 className="text-2xl font-bold text-heading mb-3 group-hover:text-accent transition-colors">
                {voice.name}
            </h3>
            {/* Description */}
            <p className="text-muted-foreground leading-relaxed px-4">
                {voice.description}
            </p>
        </div>
    )
}
