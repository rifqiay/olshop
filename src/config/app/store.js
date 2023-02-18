import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import categoriesSlice from "../features/categories/categoriesSlice";
import productSlice from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    categories: categoriesSlice,
    product: productSlice,
  },
});
