"use client";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : [],
  },
  reducers: {
    cartTotal: (state, action) => {
      const findIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findIndex >= 0) {
        state.cartItems[findIndex].cartQun += 1;
      } else {
        const newItem = { ...action.payload, cartQun: 1 };
        state.cartItems.push(newItem);
      }

      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    },

    updateQuantity: (state, action) => {
      const findIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findIndex >= 0) {
        if (action.payload.act == "plus") {
          state.cartItems[findIndex].cartQun++;
        } else {
          if (state.cartItems[findIndex].cartQun >= 2) {
            state.cartItems[findIndex].cartQun--;
          }
        }
      }

      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    },
  },
});

export const { cartTotal, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
