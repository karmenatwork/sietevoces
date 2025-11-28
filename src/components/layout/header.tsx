"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "@deemlol/next-icons";
import Link from "next/link";

import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";

import ThemeToggle from "../theme-toggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 bg-[#f8f8e3]/80 backdrop-blur supports-[backdrop-filter]:bg-[#f8f8e3]/60 dark:bg-[#023f5c]/80 dark:supports-[backdrop-filter]:bg-[#023f5c]/60">
      <div className="container mx-auto flex items-center justify-between px-4 ">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="7Voces Home"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/7voces-orange-ring.png"
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
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

