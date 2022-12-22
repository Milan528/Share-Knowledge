import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const userFormSlice = createSlice({
  name: 'usersUserFormSlice',
  initialState: state,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const actions = userFormSlice.actions;
export const { setLoading, setError, setUser, setRole } = userFormSlice.actions;

export const userFormReducer = userFormSlice.reducer;
