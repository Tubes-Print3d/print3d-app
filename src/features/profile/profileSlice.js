import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    token: null,
    data: null,
    status: "idle", // idle, loading, success, error
    error: null,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setProfile: (state, action) => {
      const { token, ...data } = action.payload;
      state.token = token;
      state.data = data;
      state.status = "success";
    },
    logout: (state) => {
      state.data = null;
      state.token = null;
      state.status = "idle";
    },
  },
  extraReducers: {},
});

export const { setProfile, logout } = profileSlice.actions;

export const selectToken = (state) => state.profile.token;

export default profileSlice.reducer;
