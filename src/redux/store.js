import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../features/user/userSlice.js";

export default configureStore({
  reducer: {
    userInfo: useReducer,
  },
});
