"use client";
import React from "react";

const ThemeTest = () => {
  const darkMode = () => {
    localStorage.setItem("mode", "dark");
  };
  return (
    <div>
      <button onClick={darkMode}>다크모드</button>
    </div>
  );
};

export default ThemeTest;
