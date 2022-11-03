import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const postsSlice = createSlice({
  name: 'posts',
  initialState: state,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setLoading, setError, setPosts } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;

export default postsReducer;
