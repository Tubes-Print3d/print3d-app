import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const addToCart = createAsyncThunk(
  "profile/addToCart",
  async (productId) => {
    const response = await api.post("/v1/users/carts", { productId });
    return response.data.payload;
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    token: null,
    data: null,
    keranjang: [],
  },
  reducers: {
    setCredentials: (state, { payload }) => {
      const { token, keranjang, ...data } = payload;
      state.token = token;
      state.keranjang = keranjang;
      state.data = data;
    },
    logout: (state) => {
      state.data = null;
      state.token = null;
      state.keranjang = [];
    },
  },
  extraReducers: {
    [addToCart.fulfilled]: (state, action) => {
      state.keranjang.push(action.payload);
      state.keranjang.status = "success";
    },
    [addToCart.pending]: (state) => {
      state.keranjang.status = "loading";
    },
  },
});

export const { logout, setCredentials } = profileSlice.actions;

export const selectPengguna = (state) => state.profile.data;
export const selectKeranjang = (state) => state.profile.keranjang;

export default profileSlice.reducer;
