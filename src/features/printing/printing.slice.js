import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const printingSlice = createSlice({
  name: "printing",
  initialState: {
    drawer: {
      open: false,
    },
  },
  reducers: {
    openDrawer: (state) => {
      state.drawer.open = true;
    },
    closeDrawer: (state) => {
      state.drawer.open = false;
    },
  },
});

export const { openDrawer, closeDrawer } = printingSlice.actions;

export default printingSlice.reducer;
