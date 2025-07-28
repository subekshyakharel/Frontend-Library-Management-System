import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
};

const cartSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setAllReview: (state, { payload }) => {
      state.reviews = payload;
    },
  },
});

const { reducer, actions } = cartSlice;

export const { setAllReview } = actions;

export default reducer;
