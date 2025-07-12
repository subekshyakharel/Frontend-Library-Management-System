import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  recentBorrow: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
    removeBookFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((book) => book._id !== payload);
    },
    emptyCart: (state) => {
      state.cart = [];
    },
    setRecentBorrow: (state, { payload }) => {
      state.recentBorrow = payload;
    },
    emptyRecentBorrow: (state) => {
      state.recentBorrow = [];
    },
  },
});

const { reducer, actions } = cartSlice;

export const {
  setCart,
  removeBookFromCart,
  emptyCart,
  setRecentBorrow,
  emptyRecentBorrow,
} = actions;

export default reducer;
