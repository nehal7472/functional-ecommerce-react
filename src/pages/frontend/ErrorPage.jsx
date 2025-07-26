import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4 ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="text-center">
        <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
        <p className="text-2xl md:text-3xl mt-4 font-semibold">
          Page Not Found
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className={`inline-block mt-6 px-6 py-3 text-sm font-medium rounded-lg shadow-md transition 
          ${
            mode === "dark"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
