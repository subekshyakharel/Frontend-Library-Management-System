import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalShow: false,
  modalContent: {
    title: "hey this is titlte",
    content: "hey this is content",
  },
};

const cartSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setmodalShow: (state, { payload }) => {
      state.modalShow = payload;
    },
    setModalContent: (state, { payload }) => {
      state.modalContent = payload; // || {...state.modalContent, payload};
    },
  },
});

const { reducer, actions } = cartSlice;

export const { setmodalShow, setModalContent } = actions;

export default reducer;
