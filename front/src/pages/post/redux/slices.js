import initialState from './state';
import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },

    setPost: (state, action) => {
      state.post = action.payload;
    },

    setFiles: (state, action) => {
      state.files = action.payload;
    },
  },
});

export const { setLoading, setError, setPost, setFiles } = postSlice.actions;
export const postReducer = postSlice.reducer;
