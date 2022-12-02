import initialState from './state';
import { createSlice } from '@reduxjs/toolkit';

const viewPostSlice = createSlice({
  name: 'viewPost',
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },

    setComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { setLoading, setError, setComments } = viewPostSlice.actions;
export const viewPostReducer = viewPostSlice.reducer;
