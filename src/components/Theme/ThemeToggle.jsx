import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex items-center gap-3">
      <span
        className={`font-semibold transition-colors duration-300 ${
          theme === "light" ? "text-slate-900" : "text-slate-400"
        }`}
      >
        Light
      </span>

      <button
        onClick={toggleTheme}
        className={`relative flex items-center w-16 h-8 rounded-full p-1 transition-colors duration-500 ${
          theme === "light"
            ? "bg-gradient-to-r from-blue-400 to-blue-500"
            : "bg-gray-700"
        }`}
      >
        {/* Thumb */}
        <span
          className={`absolute h-6 w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            theme === "light" ? "translate-x-0" : "translate-x-8"
          }`}
        ></span>

        {/* Bubbles (light theme only) */}
        {theme === "light" && (
          <>
            <span className="absolute right-2 top-1 w-2 h-2 bg-white rounded-full opacity-90"></span>
            <span className="absolute right-4 top-2 w-1 h-1 bg-white rounded-full opacity-70"></span>
          </>
        )}
      </button>

      <span
        className={`font-semibold transition-colors duration-300 ${
          theme === "dark" ? "text-slate-100" : "text-slate-400"
        }`}
      >
        Dark
      </span>
    </div>
  );
};

export default ThemeToggle;
