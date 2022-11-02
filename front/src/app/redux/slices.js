import { createSlice } from "@reduxjs/toolkit";
import state from "./state";

const appSlice = createSlice({
  name: "app",
  initialState: state,
  reducers: {
    loading: (state, action) => {
      return {
        ...state,
        loadingApp: action.payload,
      };
    },
  },
});

export const { loading } = appSlice.actions;
export const appReducer = appSlice.reducer;
