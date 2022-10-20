import { createSlice } from "@reduxjs/toolkit";
import state from "./state";

const homeSlice = createSlice({
  name: "home",
  initialState: state,
  reducers: {
    loading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setPosts: (state, action) => {
      return {
        ...state,
        posts: action.payload,
      };
    },
  },
});
export const { loading, setPosts } = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
