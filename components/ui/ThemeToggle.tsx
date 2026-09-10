"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;

    const systemPrefersLight = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;

    const initialTheme: Theme =
      savedTheme ?? (systemPrefersLight ? "light" : "dark");

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  if (!mounted) {
    return (
      <button
        className="nav-icon desktop-only"
        type="button"
        aria-label="Toggle theme"
      >
        <Moon size={17} />
      </button>
    );
  }

  return (
    <button
      className="nav-icon desktop-only"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}