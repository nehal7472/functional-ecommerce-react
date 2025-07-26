import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <footer
      className={`w-full py-10 px-6 md:px-20 ${
        mode === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-gray-100 text-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Async Store</h3>
          <p className="text-sm leading-relaxed">
            Async Store is your reliable e-commerce platform, offering a wide
            range of quality products at competitive prices. Customer
            satisfaction and swift delivery are our top priorities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-pink-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop-now" className="hover:text-pink-600 transition">
                Shop Now
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/delivery-team"
                className="hover:text-pink-600 transition"
              >
                Delivery Team
              </Link>
            </li>
            <li>
              <Link to="/sellers" className="hover:text-pink-600 transition">
                Sellers
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:support@asyncstore.com"
              className="hover:text-pink-600 transition"
            >
              support@asyncstore.com
            </a>
          </p>
          <p className="text-sm mt-2">Phone: +880 1234 567 890</p>
          <p className="text-sm mt-2">
            Address: 123 Async St, Dhaka, Bangladesh
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-pink-600 transition"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-pink-600 transition"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-600 transition"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-pink-600 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`mt-10 border-t pt-6 text-center text-sm ${
          mode === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      >
        &copy; {new Date().getFullYear()} Async Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
