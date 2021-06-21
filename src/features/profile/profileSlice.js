import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {
      token: null,
    },
    status: "idle", // idle, loading, success, error
    error: null,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
      state.status = "success";
    },
  },
  extraReducers: {},
});

export const { setProfile } = profileSlice.actions;

export const selectToken = (state) => state.profile.token;

export default profileSlice.reducer;
