import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage or use empty array
const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem("cartItems");
  return storedCart ? JSON.parse(storedCart) : [];
};

const saveCartToStorage = (items) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

const initialState = {
  items: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const existing = state.items.find(
        (item) => item.product._id === newProduct._id
      );

      if (!existing) {
        state.items.push({ product: newProduct, quantity: 1 });
      }

      saveCartToStorage(state.items);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.product._id !== action.payload
      );
      saveCartToStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.product._id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
      saveCartToStorage(state.items);
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.product._id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveCartToStorage(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
