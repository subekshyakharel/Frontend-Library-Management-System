import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  publicBooks: [],
  selectedBook: {},
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setbook: (state, action) => {
      state.books = action.payload;
    },
    setPublicbook: (state, action) => {
      state.publicBooks = action.payload;
    },
    setSelectedbook: (state, { payload }) => {
      state.selectedBook = payload || null;
    },
  },
});

const { reducer, actions } = bookSlice;

export const { setbook, setPublicbook, setSelectedbook } = actions;

export default reducer;
