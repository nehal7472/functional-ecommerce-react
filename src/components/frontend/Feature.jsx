import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Feature = () => {
  const mode = useSelector((state) => state.theme.mode);

  const features = [
    {
      title: "Fast Delivery",
      desc: "Get your products delivered in record time with our efficient shipping.",
    },
    {
      title: "24/7 Support",
      desc: "Our team is here to help you any time of the day or night.",
    },
    {
      title: "Secure Payment",
      desc: "Your transactions are safe with our top-notch security measures.",
    },
  ];

  return (
    <motion.section
      variants={fadeIn("up", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className={`py-16 px-4 ${
        mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((item, i) => (
          <div
            key={i}
            className={`rounded-lg p-6 shadow-sm text-center ${
              mode === "dark" ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-2 ${
                mode === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`text-sm ${
                mode === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Feature;
