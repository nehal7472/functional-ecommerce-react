import React from "react";
import { useSelector } from "react-redux";

const teamMembers = [
  {
    name: "Ahsanul Haque Nehal",
    role: "Founder & CEO",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Passionate about delivering quality products and unmatched customer experience.",
  },
  {
    name: "Sara Ahmed",
    role: "Head of Marketing",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Driving brand awareness with innovative campaigns and strategic vision.",
  },
  {
    name: "John Doe",
    role: "Lead Developer",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Building scalable and performant e-commerce solutions with cutting-edge technology.",
  },
];

const About = () => {
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
      {/* Header */}
      <section className="mb-16 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About <span className="text-pink-600">Async Store</span>
        </h1>
        <p className="text-lg md:text-xl tracking-wide leading-relaxed">
          At Async Store, we believe in transforming the way you shop online.
          Quality products, seamless experience, and customer-first approach are
          our guiding principles.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-base md:text-lg leading-relaxed">
            To provide our customers with the best quality products, a
            hassle-free shopping experience, and exceptional customer service,
            all while embracing sustainable and ethical business practices.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-base md:text-lg leading-relaxed">
            To become the most trusted and preferred e-commerce platform, known
            for innovation, reliability, and a community-centric approach.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Customer First",
              desc: "We prioritize our customers' needs above all, ensuring satisfaction at every step.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-pink-600 mb-4 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.7 6.879 1.897M12 15v6m0-6a5 5 0 100-10 5 5 0 000 10z"
                  />
                </svg>
              ),
            },
            {
              title: "Integrity",
              desc: "Honesty and transparency in every transaction and interaction.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-pink-600 mb-4 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11v10m-4-4h8"
                  />
                </svg>
              ),
            },
            {
              title: "Innovation",
              desc: "Constantly improving and adapting to the latest trends and technology.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-pink-600 mb-4 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              ),
            },
            {
              title: "Sustainability",
              desc: "Committed to eco-friendly practices and reducing our carbon footprint.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-pink-600 mb-4 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16"
                  />
                </svg>
              ),
            },
          ].map(({ title, desc, icon }) => (
            <div
              key={title}
              className={`p-6 rounded-lg shadow-md transition-transform transform hover:scale-105
                ${mode === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-center">
                {title}
              </h3>
              <p className="text-center text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {teamMembers.map(({ name, role, photo, bio }) => (
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
              <p className="text-sm">{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Join Us on Our Journey</h2>
        <p className="mb-8 text-lg leading-relaxed">
          Whether you’re a customer, partner, or future team member, Async Store
          welcomes you. Together, let’s build the future of online shopping.
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

export default About;
