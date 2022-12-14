import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const sideNavbarSlice = createSlice({
  name: 'sideNavbar',
  initialState: state,
  reducers: {
    setProfileView: (state, action) => {
      state.profileView = action.payload;
    },
  },
});

export const { setProfileView } = sideNavbarSlice.actions;
export const actions = sideNavbarSlice.actions;
export const sideNavbarReducer = sideNavbarSlice.reducer;
