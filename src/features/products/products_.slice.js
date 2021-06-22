import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const fetchProducts = createAsyncThunk(
  "users/fetchProducts",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setStatus("loading"));
    const response = await api.get("/v1/products");
    return response.data.payload;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", // idle, loading, success, error
    error: null,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
  },
});

export const { setStatus } = productsSlice.actions;

export const selectProductsStatus = (state) => state.products.status;
export const selectAllProducts = (state) => state.products.items;
export const selectProductById = (id) => (state) => {
  return state.products.items.find((product) => product._id === id);
};

export default productsSlice.reducer;
