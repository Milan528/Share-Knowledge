import initialState from './state';
import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
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
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

export const { setLoading, setError, setUser, setRole, setAllUsers } =
  usersSlice.actions;
export const usersReducer = usersSlice.reducer;
