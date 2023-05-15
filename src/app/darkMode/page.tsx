"use client";
import React, { useEffect } from "react";
import { useDarkMode } from "./theme";
import { useRouter } from "next/navigation";

const page = () => {
  useEffect(() => {
    const html = document.documentElement;
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, []);

  const toggleTheme = useDarkMode();
  const router = useRouter();
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Dark Mode</button>
      <h1 className="text-4xl">Hello, world!</h1>
      <button onClick={() => router.push("/")}>go main</button>
    </div>
  );
};

export default page;
