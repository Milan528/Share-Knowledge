import { createSlice } from '@reduxjs/toolkit';
import state from './state';
import sideNavbar from '../components/sideNavbar/redux/state';
import {
  sideNavbarReducer,
  actions as sideNavbarActions,
} from '../components/sideNavbar/redux/slices';
import posts from '../components/posts/redux/state';
import {
  postsReducer,
  actions as postsActions,
} from '../components/posts/redux/slices';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    ...state,
    sideNavbar,
    posts,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sideNavbarActions.setProfileView, (state, action) => {
      state.sideNavbar = sideNavbarReducer(state.sideNavbar, action);
    });
    builder.addCase(sideNavbarActions.setSideNavbarHidden, (state, action) => {
      state.sideNavbar = sideNavbarReducer(state.sideNavbar, action);
    });
    builder.addCase(postsActions.setLoading, (state, action) => {
      state.posts = postsReducer(state.posts, action);
    });
    builder.addCase(postsActions.setError, (state, action) => {
      state.posts = postsReducer(state.posts, action);
    });
    builder.addCase(postsActions.setPosts, (state, action) => {
      state.posts = postsReducer(state.posts, action);
    });
    builder.addCase(postsActions.setOrder, (state, action) => {
      state.posts = postsReducer(state.posts, action);
    });
  },
});

export const actions = profileSlice.actions;
export const { setLoading, setError } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
