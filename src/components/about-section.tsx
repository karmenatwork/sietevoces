import { BookCarousel } from "./book-carousel";
export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-accent" id="about-us">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3C096C] text-center mb-12">
          ¿Quiénes son 7 Voces?
        </h2>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <p className="text-center text-lg text-[#5A189A] font-medium  md:text-2xl font-jost">
            {/* Siete mujeres nos encontramos gracias al libro Worthy, y en ese pequeño book club nació una amistad que nos abrazó el alma. */}
            Somos siete mujeres que nos conocimos luego del lanzamiento del
            libro &quot;Worthy&quot;(Febrero 2024), de ahi nació un book club y,
            casi sin darnos cuenta, un simple book club se convirtió en amistad,
            apoyo y muchas conversaciones que nos han hecho crecer diariamente.
            <br />
          </p>
          <p className="text-center text-sm text-[#5A189A] font-medium md:text-xl">
            Hoy somos <strong>7 Voces</strong>, un espacio donde compartimos lo
            que aprendimos juntas, con corazón y autenticidad. Y queremos
            compartirlo contigo.{" "}
          </p>

          {/* <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-[#9D4EDD]/30">
              <div className="w-12 h-12 bg-[#5A189A] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3C096C] mb-3">Primer Libro</h3>
              <p className="text-[#3C096C]">
                <span className="font-bold">Worthy</span> de Jamie Kern Lima — Un viaje hacia el autoconocimiento y la
                autoaceptación.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-100 border-2 border-[#FFC880]/50">
              <div className="w-12 h-12 bg-[#FF9100] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3C096C] mb-3">Segundo Libro</h3>
              <p className="text-[#3C096C]">
                <span className="font-bold">Greatness</span> de Lewis Howes — Cómo alcanzar tu máximo potencial.
              </p>
            </div>
          </div> */}

          <div className="mt-12">
            <BookCarousel />
          </div>
          <p className="text-center mt-12 text-[#3C096C]">
            Cada episodio es una conversación honesta sobre lo que estos libros
            nos han enseñado y cómo lo estamos aplicando a nuestras vidas
            diariamente.
          </p>
        </div>
      </div>
    </section>
  );
}
