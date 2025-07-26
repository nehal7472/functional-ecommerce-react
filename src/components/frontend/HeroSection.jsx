/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HeroImage from "../../../public/hero-image.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroSection = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <section
      className={`relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20 overflow-hidden ${
        mode === "dark" ? "bg-gray-900 text-white" : "text-gray-900"
      }`}
    >
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 -z-10 ${
          mode === "dark"
            ? "bg-[linear-gradient(-45deg,#0f172a,#1e293b,#334155,#0f172a)]"
            : "bg-[linear-gradient(-45deg,#a5b4fc,#c084fc,#f9a8d4,#a5b4fc)]"
        } bg-[length:400%_400%] animate-[gradient_6s_ease_infinite]`}
      ></div>

      {/* Background grid overlay */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,#d1d5db_1px,transparent_0)] 
        [background-size:24px_24px] opacity-30 dark:opacity-10"
      ></div>

      {/* Left Content */}
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="md:w-1/2 text-center md:text-left space-y-6 animate-pulse"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          E-Commerce
          <br />
          Revolutionized with{" "}
          <span className="inline-flex items-center gap-2">
            AI{" "}
            <span className="w-7 h-7 bg-blue-100 border border-blue-200 rounded-lg flex items-center justify-center text-blue-600 font-bold text-sm shadow">
              🤖
            </span>{" "}
            Powered
          </span>
        </h1>

        <p className="text-lg md:text-xl tracking-wide text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
          Boost sales, enhance customer experience, and streamline operations
          with our cutting-edge AI technology.
        </p>

        {/* Email Input + Button */}
        <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto md:mx-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-transform duration-300 hover:scale-105 shadow-md">
            Get Started
          </button>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          30 day free trial, no credit card required.
        </p>
      </motion.div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center relative animate-[float_4s_ease-in-out_infinite]">
        <img
          src={HeroImage}
          alt="AI E-Commerce"
          className="w-full max-w-[350px] md:max-w-[420px] drop-shadow-2xl"
        />
        {/* Floating Cards */}
        <div className="absolute -top-6 left-0 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md text-sm flex items-center gap-2 animate-[bounceSlow_3s_ease-in-out_infinite]">
          <span className="text-yellow-500">🏆</span> #1 AI for E-Commerce
        </div>
        <div className="absolute bottom-10 -right-8 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md text-sm flex items-center gap-2 animate-[bounceSlow_3s_ease-in-out_infinite_0.5s]">
          <span className="font-bold text-blue-600">100K+</span> Satisfied Users
        </div>
      </div>

      {/* Keyframes (Tailwind v4 inline syntax) */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
