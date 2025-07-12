import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allBorrows: [], //admit to see
  myBorrows: [], // only client to see
};

const borrowSlice = createSlice({
  name: "borrow",
  initialState,
  reducers: {
    setAllBorrows: (state, { payload }) => {
      state.allBorrows = payload;
    },
    setMyBorrows: (state, { payload }) => {
      state.myBorrows = payload;
    },
  },
});

const { reducer, actions } = borrowSlice;

export const { setAllBorrows, setMyBorrows } = actions;

export default reducer;
