import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productApi = "https://ecom-rs8e.onrender.com/api/products"; // <-- same endpoint

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(productApi);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const json = await response.json();
        // Access nested: data -> data -> results
        const results = json?.data?.results || [];
        setProducts(results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center">Loading products...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-primary text-center mb-6">
        Products
      </h1>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 overflow-hidden"
          >
            {/* Product Image */}
            <img
              src={product.photos?.[0] || "https://via.placeholder.com/300"}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{product?.title}</h2>
              <p className="text-sm text-gray-500">{product?.brand?.title}</p>

              {/* Price */}
              <p className="text-primary font-bold text-xl mt-2">
                {product.current_price
                  ? `৳ ${product?.current_price}`
                  : "Price Not Available"}
              </p>

              {/* Button */}
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
