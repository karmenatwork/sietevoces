import { BookCarousel } from "./book-carousel";
export default function AboutSection() {
  return (
    <section className="py-15 px-4 bg-[var(--color-bg)]" id="about-us">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-heading)] text-center mb-5">
          ¿Quiénes son 7 Voces?
        </h2>

        <div className="space-y-8 text-lg text-[var(--color-fg)] leading-relaxed">
          <p className="text-center text-[var(--color-main-content)] font-medium  md:text-xl font-jost">
            {/* Siete mujeres nos encontramos gracias al libro Worthy, y en ese pequeño book club nació una amistad que nos abrazó el alma. */}
            Somos siete mujeres que nos conocimos a partir del lanzamiento del libro Worthy de Jamie Kern Lima, en febrero de 2024.
            Lo que comenzó como un book club pronto se transformó en un espacio de conexión real: amistad, apoyo y conversaciones
            profundas que nos impulsan a crecer, cuestionarnos y acompañarnos en cada etapa de la vida.
            <br />
          </p>
          <p className="text-center text-[var(--color-main-content)] font-medium md:text-xl font-jost ">
            Hoy somos <strong className="text-[var(--color-accent)]">7 Voces</strong>,un espacio donde compartimos aprendizajes reales,
            con corazón y autenticidad. Y queremos compartirlo contigo.{" "}
          </p>

          <div className="mt-5">
            <BookCarousel />
          </div>
          <p className="text-center mt-5 text-[var(--color-main-content)]">
            Cada episodio es una conversación honesta sobre lo que estos libros
            nos han enseñado y cómo lo estamos aplicando a nuestras vidas
            diariamente.
          </p>
        </div>
      </div>
    </section>
  );
}
