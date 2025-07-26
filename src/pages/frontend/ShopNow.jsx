/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsSlice";
import {
  setSearchQuery,
  setCategory,
  setColor,
} from "../../features/filters/filterSlice";
import ProductCard from "../../components/frontend/ProductCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ShopNow = () => {
  const dispatch = useDispatch();

  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.products);

  const { searchQuery, category, color } = useSelector(
    (state) => state.filters
  );

  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter logic
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      category
        ? product.categories?.[0].title?.toLowerCase() ===
          category.toLowerCase()
        : true
    );

  return (
    <div
      className={`flex  mx-auto px-4 p-12 gap-6 ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`hidden lg:block w-64 border-r pr-4 ${
          mode === "dark" ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <h2
          className={`text-lg font-semibold mb-4 ${
            mode === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          Filters
        </h2>
        <div className="mb-4">
          <label
            className={`block mb-1 font-medium ${
              mode === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Color
          </label>
          <select
            onChange={(e) => dispatch(setCategory(e.target.value))}
            className={`w-full p-2 border rounded ${
              mode === "dark"
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-black border-gray-300"
            }`}
            value={category}
          >
            <option value="">All</option>
            <option value="special">Red</option>
            <option value="apply">Black</option>
            <option value="book">White</option>
            <option value="books">Blue</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className={`w-full sm:w-1/2 p-2 border rounded ${
              mode === "dark"
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-black border-gray-300"
            }`}
          />
          <select
            onChange={(e) => dispatch(setCategory(e.target.value))}
            value={category}
            className={`w-full sm:w-1/3 p-2 border rounded ${
              mode === "dark"
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-black border-gray-300"
            }`}
          >
            <option value="">All Categories</option>
            <option value="books">Books</option>
            <option value="apply">Apple</option>
            <option value="book">Article</option>
            <option value="special">Phone</option>
          </select>
        </div>

        {/* Products */}
        {loading ? (
          <div className="text-center text-lg py-10">
            Products are loading...
          </div>
        ) : error ? (
          <div className="text-center text-red-500 text-lg py-10">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopNow;
