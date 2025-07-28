import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.js"; // ✅ fixed name
import bookReducer from "../features/book/bookSlice.js";
import cartReducer from "../features/cart/cartSlice.js";
import borrowReducer from "../features/borrow/borrowSlice.js";
import systemReducer from "../features/system/systemSlice.js";
import reviewReducer from "../features/review/reviewSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const rootReducer = combineReducers({
  userInfo: userReducer,
  bookInfo: bookReducer,
  borrowInfo: borrowReducer,
  systemInfo: systemReducer,
  reviewInfo: reviewReducer,
  cartInfo: persistReducer(cartPersistConfig, cartReducer), // ✅ persists cartInfo
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;

// export default configureStore({
//   reducer: {
//     userInfo: useReducer,
//     bookInfo: bookReducer,
//     cartInfo: cartReducer,
//   },
// });
