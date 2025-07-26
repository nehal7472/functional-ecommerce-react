import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HeroImage from "../../../public/hero-image.svg"; // Adjust if needed

const HeroSection = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <section
      className={`min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10 transition-colors duration-500 ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Discover the power of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
            Async Store
          </span>
        </h1>

        <p className="text-lg md:text-xl tracking-wide text-gray-600 dark:text-gray-300">
          Elevate your shopping experience with hand-picked collections and
          unbeatable prices.
        </p>

        <Link to="/shop-now">
          <button className="relative inline-block px-8 py-3 font-semibold group">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-pink-600 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-md"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-pink-600 group-hover:bg-pink-600 rounded-md"></span>
            <span className="relative text-pink-600 group-hover:text-white">
              Shop Now
            </span>
          </button>
        </Link>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={HeroImage}
          alt="Async Store Hero"
          className="w-full max-w-[600px] md:max-w-[700px] drop-shadow-2xl"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;
