import { FacebookIcon, InstagramIcon } from "./social-links";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3C096C] dark:bg-gray-900 text-white py-2 transition-colors">
      {/* <footer className=" bg-[#3C096C] text-white"> */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#FFC880] via-[#9D4EDD] to-[#FF9100] bg-clip-text text-transparent">
              7 Voces
            </div>
            <p className="text-sm text-white/80 text-center md:text-left">
              Un podcast sobre crecimiento personal y transformación
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <Link
                href="https://facebook.com/7vocesPodcast"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#FF9100] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com/7vocesPodcast"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#FF9100] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6" />
              </Link>
            </div>
            <p className="text-xs text-white/60">
              © 2025 7 Voces. Todos los derechos reservados.
            </p>
            <span className="inline-flex items-center text-xs sm:text-xs opacity-80 justify-center">
              Made with ❤️ by Carmen de 7 Voces {" "}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
