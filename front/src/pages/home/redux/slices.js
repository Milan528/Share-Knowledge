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
    setQuotes: (state, action) => {
      return {
        ...state,
        quotes: action.payload,
      };
    },
    setQuotesCount: (state, action) => {
      return {
        ...state,
        quotesCount: action.payload,
      };
    },
  },
});
export const { loading, setQuotes, setQuotesCount } = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
