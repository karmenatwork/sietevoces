export default function ComingSoonSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#3C096C] to-[#5A189A] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Próximamente</h2>
        <p className="text-sm md:text-2xl mb-12 text-purple-100">
          Estamos preparando algo especial. Un espacio donde compartiremos nuestras reflexiones, aprendizajes y conversaciones sobre los libros que nos inspiran.
        </p>

        <div className="flex  justify-center gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Conversaciones Auténticas</h3>
            <p className="text-purple-200">Sin guiones, solo reflexiones reales</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Crecimiento Personal</h3>
            <p className="text-purple-200">Herramientas prácticas para nuestra vida diaria</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Amistad</h3>
            <p className="text-purple-200"> 7 diferentes perspectivas que terminaron en amistad</p>
          </div>
        </div>
      </div>
    </section>
  )
}
