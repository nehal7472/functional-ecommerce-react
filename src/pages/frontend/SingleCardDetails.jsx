import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const SingleCardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode); // Get mode from redux

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `https://ecom-rs8e.onrender.com/api/products`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        const foundProduct = data.data.results.find((item) => item._id === id);

        if (!foundProduct) {
          setError("Product not found");
        } else {
          setProduct(foundProduct);
        }
      } catch (err) {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (loading)
    return (
      <div
        className={`flex justify-center items-center h-64 ${
          mode === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Loading product details...
      </div>
    );

  if (error)
    return (
      <div
        className={`text-center py-10 ${
          mode === "dark" ? "text-red-400" : "text-red-600"
        }`}
      >
        {error}
      </div>
    );

  return (
    <div
      className={` px-14 p-4 ${
        mode === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      <button
        onClick={() => navigate(-1)}
        className={`btn mb-6 ${mode === "dark" ? "btn-info" : "btn-primary"}`}
      >
        ← Back
      </button>

      <div
        className={`flex flex-col md:flex-row gap-8 rounded-xl shadow-lg p-6 ${
          mode === "dark" ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        {/* Product Image */}
        <div className="md:w-1/2">
          {product.photos?.[0] ? (
            <img
              src={product.photos[0]}
              alt={product.title}
              className="rounded-lg object-cover w-full max-h-[400px]"
              loading="lazy"
            />
          ) : (
            <div
              className={`w-full h-[300px] rounded-lg flex justify-center items-center ${
                mode === "dark"
                  ? "bg-gray-700 text-gray-400"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              No image available
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 space-y-6">
          <h1
            className={`text-3xl font-bold ${
              mode === "dark" ? "text-gray-200" : "text-gray-900"
            }`}
          >
            {product.title}
          </h1>

          <p className={mode === "dark" ? "text-gray-300" : "text-gray-700"}>
            {product.description || "No description available."}
          </p>

          <div
            className={`space-y-2 text-sm ${
              mode === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <p>
              <span className="font-medium">Brand:</span>{" "}
              {product.brand?.title || "N/A"}
            </p>
            <p>
              <span className="font-medium">Category:</span>{" "}
              {product.categories?.map((cat) => cat.title).join(", ") || "N/A"}
            </p>
            <p>
              <span className="font-medium">Price:</span> ৳{" "}
              {product.current_price}
            </p>
            <p>
              <span className="font-medium">Stock:</span> {product.quantity}
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-full md:w-auto btn ${
              mode === "dark" ? "btn-info" : "btn-primary"
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCardDetails;
