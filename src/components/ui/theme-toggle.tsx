"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@deemlol/next-icons";
import { useEffect, useState } from "react";

/**
 * Simple theme toggle that works with Tailwind's `class` dark mode.
 * It adds/removes the `dark` class on the <html> element via next-themes.
 */
export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure we only render after hydration to avoid hydration mismatches
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a placeholder button that matches the final markup size
    return (
      <button
        className="p-2 rounded-lg bg-muted hover:text-purple-700 transition-colors"
        aria-label="Toggle theme"
        disabled
      />
    );
  }

  const isLight = theme === "light" || (!theme && systemTheme === "light");

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="p-2 rounded-lg bg-muted hover:text-purple-700 transition-colors"
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
    >
      {isLight ? (
        <Moon className="w-5 h-5 text-orange-500" aria-hidden="true" />
      ) : (
        <Sun className="w-5 h-5 text-orange-500" aria-hidden="true" />
      )}
    </button>
  );
}
