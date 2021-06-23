import { configureStore } from "@reduxjs/toolkit";
import { api as productsApi } from "./features/products/products.api";
import profileReducer from "./features/profile/profile.slice";
import { profileApi } from "./features/profile/profile.api";
import { printingApi } from "./features/printing/printing.api";
import printingReducer from "./features/printing/printing.slice";

export default configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,

    profile: profileReducer,
    [profileApi.reducerPath]: profileApi.reducer,

    printing: printingReducer,
    [printingApi.reducerPath]: printingApi.reducer,
  },
  middleware: (gDM) =>
    gDM()
      .concat(profileApi.middleware)
      .concat(productsApi.middleware)
      .concat(printingApi.middleware),
});
