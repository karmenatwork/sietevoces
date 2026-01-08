"use client"
import Image from "next/image"

export const voices = [
    {
        name: "Itsalia",
        description: "Líder corporativa y coach, en constante crecimiento.",
        image: "/nosotras/Itsalia.gif",
    },
    {
        name: "Rosaida",
        description: "Madre, empresaria y podcaster de contenido cristiano.",
        image: "/nosotras/Rosaida.gif",
    },
    {
        name: "Carmen",
        description: "Madre y Software Engineer, siempre en evolución.",
        image: "/nosotras/CarmenPodcaster.gif",
    },
    {
        name: "Yvonne",
        description: "Madre, empresaria y consultora de RH, guiada por optimismo y espiritualidad.",
        image: "/nosotras/Yvvone.jpg",
    },
    {
        name: "Marie Carmen",
        description: "NeuroCoach de Bienestar Integral, enfocada en reinvención y amor propio.",
        image: "/nosotras/MarieCarmen.gif",
    },
    {
        name: "Rosanna",
        description: "Vengo de Wall Street, soy mamá osa y coach ejecutiva.",
        image: "/nosotras/Rosanna.gif",
    },

    {
        name: "Cecilia",
        description: "Inmigrante peruana y mamá, mujer en proceso de sanación. ",
        image: "/nosotras/Cecilia.gif",
    },
]

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
            <div className="relative md:w-48 md:h-48 w-32 h-32  mb-6 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Image
                    src={voice.image || "/placeholder.svg"}
                    alt={`${voice.name} - 7 VOCES`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    // If the file ends with .gif we tell Next not to optimize it
                    unoptimized={voice.image?.toLowerCase().endsWith(".gif")}
                />
            </div>
            {/* Name */}
            <h3 className="md:text-2xl text-lg font-bold text-heading mb-3 group-hover:text-accent transition-colors">
                {voice.name}
            </h3>
            {/* Description */}
            <p className="text-muted-foreground leading-relaxed px-2 md:px-4 text-xs sm:text-xs md:text-base lg:text-lg">
                {voice.description}
            </p>
        </div>
    )
}

function VocesGrid() {
    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* First 4 voices */}
        {voices.slice(0, 4).map((voice, index) => (
            <div
                key={voice.name}
                className="group flex flex-col items-center text-center"
                style={{
                    animation: `fade-in 0.6s ease-out ${index * 0.1}s both`,
                }}
            >
                {/* Profile Image */}
                <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <Image
                        src={voice.image || "/placeholder.svg"}
                        alt={`${voice.name} - 7 VOCES`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {voice.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed px-4">{voice.description}</p>
            </div>
        ))}

        {/* Last 3 voices - centered in second row */}
        <div className="sm:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-32">
            {voices.slice(4).map((voice, index) => (
                <div
                    key={voice.name}
                    className="group flex flex-col items-center text-center"
                    style={{
                        animation: `fade-in 0.6s ease-out ${(index + 4) * 0.1}s both`,
                    }}
                >
                    {/* Profile Image */}
                    <div className="relative md:w-48 md:h-48 w-32 h-32 mb-6 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent transition-all duration-300 shadow-lg group-hover:shadow-xl">
                        <Image
                            src={voice.image || "/placeholder.svg"}
                            alt={`${voice.name} - 7 VOCES`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                        {voice.name}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed px-4">{voice.description}</p>
                </div>
            ))}
        </div>
    </div>;
}