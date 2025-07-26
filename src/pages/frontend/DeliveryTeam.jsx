import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const deliveryTeam = [
  {
    name: "Md. Karim",
    role: "Delivery Manager",
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    bio: "Oversees all delivery operations ensuring timely and safe shipments.",
    contact: "karim@asyncstore.com",
  },
  {
    name: "Rina Akter",
    role: "Senior Delivery Executive",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    bio: "Expert in route planning and customer communication for smooth deliveries.",
    contact: "rina@asyncstore.com",
  },
  {
    name: "Jamal Uddin",
    role: "Logistics Coordinator",
    photo: "https://randomuser.me/api/portraits/men/39.jpg",
    bio: "Manages inventory and ensures stock availability for delivery schedules.",
    contact: "jamal@asyncstore.com",
  },
  {
    name: "Sadia Hasan",
    role: "Delivery Executive",
    photo: "https://randomuser.me/api/portraits/women/32.jpg",
    bio: "Committed to fast and safe delivery, always keeping customers satisfied.",
    contact: "sadia@asyncstore.com",
  },
];

const DeliveryTeam = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <main
      className={`min-h-screen px-6 md:px-20 py-16  mx-auto
        ${
          mode === "dark"
            ? "bg-gray-900 text-gray-200"
            : "bg-white text-gray-900"
        }`}
    >
      <section className="mb-16 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Meet Our <span className="text-pink-600">Delivery Team</span>
        </h1>
        <p className="text-lg md:text-xl tracking-wide leading-relaxed">
          Our dedicated delivery team ensures your orders reach you on time,
          safely, and with a smile.
        </p>
      </section>

      <motion.section
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto"
      >
        {deliveryTeam.map(({ name, role, photo, bio, contact }) => (
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
            <p className="text-pink-600 font-medium mb-2">{role}</p>
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

      <section className="text-center max-w-3xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-6">Interested in Joining?</h2>
        <p className="mb-8 text-lg leading-relaxed">
          We're always looking for passionate individuals to join our delivery
          team. If you're committed to excellence and customer satisfaction,
          we'd love to hear from you.
        </p>
        <button
          className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-md transition"
          onClick={() => (window.location.href = "#")}
        >
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default DeliveryTeam;
