/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, setTheme } from "../../features/theme/themeSlice";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTheme(theme));
  }, [dispatch]);

  return (
    <div className="flex items-center gap-3">
      <span
        className={`hidden md:flex  font-semibold transition-colors duration-300 ${
          theme === "light" ? "text-slate-900" : "text-slate-400"
        }`}
      >
        Light
      </span>

      <button
        onClick={() => dispatch(toggleTheme())}
        className={`relative flex items-center w-16 h-8 rounded-full p-1 transition-colors duration-500 ${
          theme === "light"
            ? "bg-gradient-to-r from-blue-400 to-blue-500"
            : "bg-gray-700"
        }`}
      >
        <span
          className={`absolute h-6 w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            theme === "light" ? "translate-x-0" : "translate-x-8"
          }`}
        ></span>

        {theme === "light" && (
          <>
            <span className="absolute right-2 top-1 w-2 h-2 bg-white rounded-full opacity-90"></span>
            <span className="absolute right-4 top-2 w-1 h-1 bg-white rounded-full opacity-70"></span>
          </>
        )}
      </button>

      <span
        className={`hidden md:flex  font-semibold transition-colors duration-300 ${
          theme === "dark" ? "text-slate-100" : "text-slate-400"
        }`}
      >
        Dark
      </span>
    </div>
  );
};

export default ThemeToggle;
