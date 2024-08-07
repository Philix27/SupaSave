"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Sun
        className="h-[10px] w-[10px] dark:hidden flex items-center justify-center"
        size={20}
      />
      <Moon className="hidden h-[10px] w-[10px] dark:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
