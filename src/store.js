import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import profileReducer from "./features/profile/profileSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    profile: profileReducer,
  },
});
