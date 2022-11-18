import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const profileSlice = createSlice({
  name: 'profile',
  initialState: state,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const actions = profileSlice.actions;
export const { setLoading, setError } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
