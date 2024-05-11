import { configureStore } from "@reduxjs/toolkit";
import productsReduser from "../features/basket/basketSlice";

export const store = configureStore({
  reducer: {
    products: productsReduser,
  },
});
