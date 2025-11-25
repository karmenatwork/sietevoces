"use client"

import { Moon, Sun } from "@deemlol/next-icons";
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <Moon className="w-5 h-5 text-orange-500" /> : <Sun className="w-5 h-5 text-orange-500" />}
    </button>
  )
}
