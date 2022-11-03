import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const homeSlice = createSlice({
  name: 'home',
  initialState: state,
  reducers: {
    loading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    setPosts: (state, action) => {
      return {
        ...state,
        posts: action.payload,
      };
    },
    setSelectedTags: (state, action) => {
      return {
        ...state,
        selectedTags: action.payload,
      };
    },
    setAllTags: (state, action) => {
      return {
        ...state,
        allTags: action.payload,
      };
    },
  },
});
export const { loading, setError, setPosts, setSelectedTags, setAllTags } =
  homeSlice.actions;
export const homeReducer = homeSlice.reducer;
