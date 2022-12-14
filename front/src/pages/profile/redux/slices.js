import { createSlice } from '@reduxjs/toolkit';
import state from './state';
import sideNavbar from '../components/sideNavbar/redux/state';
import {
  sideNavbarReducer,
  actions as sideNavbarActions,
} from '../components/sideNavbar/redux/slices';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    ...state,
    sideNavbar,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [sideNavbarActions.setProfileView]: (state, action) => {
      state.sideNavbar = sideNavbarReducer(state.sideNavbar, action);
    },
  },
});

export const actions = profileSlice.actions;
export const { setLoading, setError } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
