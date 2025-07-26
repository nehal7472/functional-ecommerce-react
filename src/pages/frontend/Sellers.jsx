import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const sellers = [
  {
    name: "Jamil Ahmed",
    storeName: "Jamil's Gadgets",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    bio: "Specializing in latest electronics and accessories with unbeatable prices.",
    contact: "jamil@gadgets.asyncstore.com",
  },
  {
    name: "Nabila Rahman",
    storeName: "Nabila's Fashion",
    photo: "https://randomuser.me/api/portraits/women/48.jpg",
    bio: "Offering stylish and trendy apparel curated with love and quality in mind.",
    contact: "nabila@fashion.asyncstore.com",
  },
  {
    name: "Rafiq Islam",
    storeName: "Rafiq's Books",
    photo: "https://randomuser.me/api/portraits/men/60.jpg",
    bio: "Your go-to store for educational and leisure books with fast shipping.",
    contact: "rafiq@books.asyncstore.com",
  },
  {
    name: "Lina Chowdhury",
    storeName: "Lina's Home Decor",
    photo: "https://randomuser.me/api/portraits/women/51.jpg",
    bio: "Bringing you beautiful home decor pieces that brighten every space.",
    contact: "lina@homedecor.asyncstore.com",
  },
];

const Sellers = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <main
      className={`min-h-screen  md:px-20 py-16  mx-auto
        ${
          mode === "dark"
            ? "bg-gray-900 text-gray-200"
            : "bg-white text-gray-900"
        }`}
    >
      {/* Header */}
      <section className="mb-16 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our <span className="text-pink-600">Sellers</span>
        </h1>
        <p className="text-lg md:text-xl tracking-wide leading-relaxed">
          Meet the passionate sellers behind your favorite products. Each store
          is committed to quality, service, and customer satisfaction.
        </p>
      </section>

      {/* Seller Grid */}
      <motion.section
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto"
      >
        {sellers.map(({ name, storeName, photo, bio, contact }) => (
          <div
            key={name}
            className={`flex flex-col items-center text-center p-6 rounded-lg shadow-md
              ${mode === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
          >
            <img
              src={photo}
              alt={name}
              className="w-28 h-28 rounded-full mb-4 object-cover"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-pink-600 font-medium mb-1">{storeName}</p>
            <p className="text-sm mb-4">{bio}</p>
            <a
              href={`mailto:${contact}`}
              className={`text-sm font-semibold underline transition-colors ${
                mode === "dark"
                  ? "text-pink-400 hover:text-pink-600"
                  : "text-pink-600 hover:text-pink-800"
              }`}
            >
              {contact}
            </a>
          </div>
        ))}
      </motion.section>

      {/* Call to Action */}
      <section className="text-center max-w-3xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-6">Become a Seller</h2>
        <p className="mb-8 text-lg leading-relaxed">
          Interested in joining Async Store as a seller? We welcome
          entrepreneurs and small businesses to partner with us and reach
          customers nationwide.
        </p>
        <button
          className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-md transition"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default Sellers;
