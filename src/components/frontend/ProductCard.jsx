import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const mode = useSelector((state) => state.theme.mode);
  const navigate = useNavigate();

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

  const handleInfoClick = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <div
      className={`rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 overflow-hidden
        ${mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      <img
        src={product.photos?.[0]}
        alt={product.title}
        className="w-full h-44 object-cover"
      />
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h2 className={`${mode === "dark" ? "text-white" : "text-gray-800"} text-sm font-semibold`}>
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
          <div className={`flex items-center gap-2 text-xs ${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            <img
              src={product.categories[0].icon}
              alt={product.categories[0].title}
              className="w-3.5 h-3.5"
            />
            <span>{product.categories[0].title}</span>
          </div>
        )}

        <p className={`${mode === "dark" ? "text-gray-300" : "text-gray-600"} text-xs`}>
          {shortDesc}
        </p>

        <div className="flex justify-between items-center mt-2">
          <span className={`text-sm font-bold ${mode === "dark" ? "text-blue-400" : "text-blue-600"}`}>
            ৳ {product.current_price}
          </span>

          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="cursor-pointer px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Add
            </button>
            <button
              onClick={handleInfoClick}
              className={`px-3 py-2 text-sm rounded transition cursor-pointer
                ${mode === "dark" 
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
            >
              Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
