import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import filtersReducer from "../features/filters/filterSlice";
import themeReducer from "../features/theme/themeSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    filters: filtersReducer,
    theme: themeReducer,
  },
});

export default store;
