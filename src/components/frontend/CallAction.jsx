import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const CallAction = () => {
  return (
    <section className="py-20 px-4 bg-indigo-600 dark:bg-indigo-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Don't Miss Out On Our Latest Deals!
        </motion.h2>
        <motion.p
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="mb-6 text-lg"
        >
          Get exclusive discounts and stay updated with our latest offers.
        </motion.p>
        <Link to="/shop-now">
          <button className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 text-lg">
            Start Shopping
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallAction;
