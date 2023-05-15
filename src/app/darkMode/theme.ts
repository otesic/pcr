"use client";
import { useEffect } from "react";

export type ThemeMode = "light" | "dark";

export function useDarkMode() {
  useEffect(() => {
    const html = document.documentElement;
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    const html = document.documentElement;
    const isDarkMode = html.classList.contains("dark");
    const theme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }

  return toggleTheme;
}
