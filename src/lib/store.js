import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/counter/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cartDetails: cartSlice,
    },
  });
};
