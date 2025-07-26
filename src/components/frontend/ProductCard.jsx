import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Check if product already in cart
  const isInCart = cartItems.some((item) => item.product._id === product._id);

  const handleAddToCart = () => {
    if (isInCart) {
      alert("This card is already added.");
      return;
    }
    dispatch(addToCart(product));
  };

  const shortDesc =
    product.description?.length > 30
      ? product.description.slice(0, 30) + "..."
      : product.description;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
      <img
        src={product.photos?.[0]}
        alt={product.title}
        className="w-full h-44 object-cover"
      />
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-800 dark:text-white">
            {product.title}
          </h2>
          {product.brand?.icon && (
            <img
              src={product.brand.icon}
              alt={product.brand.title}
              className="w-5 h-5"
              title={product.brand.title}
            />
          )}
        </div>

        {product.categories?.length > 0 && (
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <img
              src={product.categories[0].icon}
              alt={product.categories[0].title}
              className="w-3.5 h-3.5"
            />
            <span>{product.categories[0].title}</span>
          </div>
        )}

        <p className="text-xs text-gray-600 dark:text-gray-300">{shortDesc}</p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
            ৳ {product.current_price}
          </span>

          <div className="flex gap-1">
            <button
              onClick={handleAddToCart}
              className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Add
            </button>
            <button className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
