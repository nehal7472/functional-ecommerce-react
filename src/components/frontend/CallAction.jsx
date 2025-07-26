import React from "react";
import { Link } from "react-router-dom";

const CallAction = () => {
  return (
    <section className="py-20 px-4 bg-indigo-600 dark:bg-indigo-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Don't Miss Out On Our Latest Deals!
        </h2>
        <p className="mb-6 text-lg">
          Get exclusive discounts and stay updated with our latest offers.
        </p>
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
