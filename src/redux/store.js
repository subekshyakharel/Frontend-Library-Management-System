import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../features/user/userSlice.js";
import bookReducer from "../features/book/bookSlice.js";

export default configureStore({
  reducer: {
    userInfo: useReducer,
    bookInfo: bookReducer,
  },
});
