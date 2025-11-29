"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@deemlol/next-icons";
import { useTheme } from "next-themes";

/**
 * ThemeToggle – client‑only component that avoids hydration mismatches.
 * It waits until the component is mounted on the client before rendering
 * any UI, ensuring the server‑rendered markup matches the first client
 * render. It also uses `resolvedTheme` to reflect the actual theme
 * (including system preference) rather than the possibly‑undefined `theme`
 * value during the initial render.
 */
export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure we only render after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder that matches the server markup (a simple button)
    return (
      <button
        className="p-2 rounded-lg bg-muted hover:text-purple-700 transition-colors"
        aria-label="Toggle theme"
        disabled
      />
    );
  }

  const isLight = resolvedTheme === "light";

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="p-2 rounded-lg bg-muted hover:text-purple-700 transition-colors"
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
    >
      {isLight ? (
        <Moon className="w-5 h-5 text-orange-500 hover:text-purple-700" aria-hidden="true" />
      ) : (
        <Sun className="w-5 h-5 text-orange-500 hover:text-purple-700" aria-hidden="true" />
      )}
    </button>
  );
}
