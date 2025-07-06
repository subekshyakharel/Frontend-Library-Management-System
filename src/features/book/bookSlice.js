import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setbook: (state, action) => {
      state.books = action.payload;
    },
  },
});

const { reducer, actions } = bookSlice;

export const { setbook } = actions;

export default reducer;
