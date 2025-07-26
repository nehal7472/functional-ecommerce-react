import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const mode = useSelector((state) => state.theme.mode);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.current_price * item.quantity,
    0
  );

  return (
    <div
      className={` p-4 sm:p-6 lg:p-8 ${
        mode === "dark" ? "bg-gray-900 text-gray-300" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table
              className={`table w-full ${
                mode === "dark" ? "table-zebra-dark" : "table-zebra"
              }`}
            >
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th className="text-center">Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(({ product, quantity }) => (
                  <tr key={product._id}>
                    <td className="flex items-center gap-4">
                      <img
                        src={product.photos?.[0]}
                        alt={product.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <span className="font-semibold">
                        {product.title}
                      </span>
                    </td>
                    <td>৳ {product.current_price.toLocaleString()}</td>
                    <td className="text-center">
                      <div className="inline-flex items-center space-x-2">
                        <button
                          onClick={() =>
                            dispatch(decreaseQuantity(product._id))
                          }
                          className={`btn btn-xs btn-outline ${
                            mode === "dark" ? "btn-info" : ""
                          }`}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="px-3">{quantity}</span>
                        <button
                          onClick={() =>
                            dispatch(increaseQuantity(product._id))
                          }
                          className={`btn btn-xs btn-outline ${
                            mode === "dark" ? "btn-info" : ""
                          }`}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      ৳ {(product.current_price * quantity).toLocaleString()}
                    </td>
                    <td>
                      <button
                        onClick={() => dispatch(removeFromCart(product._id))}
                        className="btn btn-xs btn-error text-white"
                        aria-label="Remove product"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total & Clear */}
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
            <button
              onClick={() => dispatch(clearCart())}
              className={`btn btn-error btn-outline sm:order-2 ${
                mode === "dark" ? "btn-info" : ""
              }`}
            >
              Clear Cart
            </button>
            <div className="text-2xl font-bold sm:order-1">
              Total: ৳ {totalPrice.toLocaleString()}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
