"use client";
import { useState } from "react";
import Image from "next/image";

// import { FacebookLink, InstagramLink } from "./custom-links";
import { SocialLinks } from "./social-links";


import { Button } from "@/components/ui/button";
import { Menu, X } from "@deemlol/next-icons";

// import ThemeToggle from "./theme-toggle";
// import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 bg-[#f8f8e3]/80 backdrop-blur supports-[backdrop-filter]:bg-[#f8f8e3]/60 dark:bg-[#023f5c]/80 dark:supports-[backdrop-filter]:bg-[#023f5c]/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="7Voces Home"
        >
          <div className="flex items-center gap-2  bg-white-smoke">
            <Image
              src="/logo-orange.png"
              alt="7 Voces"
              width={140}
              height={140}
              className="object-contain rounded-full"
            />
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-2 sm:gap-3 justify-end px-4 py-2"
        >
          {/* <ThemeToggle /> */}
          <SocialLinks className="inline-flex h-9 w-9 text-orange hover:text-purple-700" />
          {/* <FacebookLink
            username={"7vocesPodcast"}
            show={false}
            color="oklch(75% 0.183 55.934)"
            className="inline-flex h-9 w-9"
          />
          <InstagramLink
            username={"7vocesPodcast"}
            show={false}
            color="oklch(75% 0.183 55.934)"
            className="inline-flex h-9 w-9 hover:text-indigo-800 transition-colors"
          /> */}

          {/* Theme Toggle */}
        
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {/* <ThemeToggle /> */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="h-9 w-9 rounded-full"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#023f5c]/10 dark:border-white/10 bg-[#f8f8e3] dark:bg-[#023f5c]">
          <nav
            aria-label="Mobile navigation"
            className="container mx-auto px-6 py-4 space-y-3"
          >
            <div className="flex items-center justify-center gap-3 pt-2">
               <SocialLinks className="inline-flex h-9 w-9 text-orange hover:text-purple-700" />
              {/* <InstagramLink
                username={"7vocesPodcast"}
                show={false}
                className="inline-flex h-9 w-9 rounded-full border border-[#023f5c]/20 bg-[#fef8e3]/70 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
              />
              <FacebookLink
                username={"7vocesPodcast"}
                show={false}
                className="inline-flex h-9 w-9 rounded-full border border-[#023f5c]/20 bg-[#fef8e3]/70 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
              /> */}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

