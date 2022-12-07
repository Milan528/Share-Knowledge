import { createSlice } from '@reduxjs/toolkit';
import {
  tagsReducer,
  actions as tagActions,
} from '../components/filters/components/tags/redux/slices';
import tags from '../components/filters/components/tags/redux/state';
import state from './state';
import {
  postsReducer,
  actions as postActions,
} from '../components/posts/redux/slices';
import posts from '../components/posts/redux/state';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    state,
    tags,
    posts,
  },
  reducers: {
    setFiltersVisibility: (state, action) => {
      state.state.filtersVisibility = action.payload;
    },
    setType: (state, action) => {
      state.state.type = action.payload;
    },
    setSearch: (state, action) => {
      state.state.search = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.state.currentPage = action.payload;
    },
    setPostPerPage: (state, action) => {
      state.state.postPerPage = action.payload;
    },
    setTotalNumberOfPages: (state, action) => {
      state.state.totalNumberOfPages = action.payload;
    },
    setTotalNumberOfPosts: (state, action) => {
      state.state.totalNumberOfPosts = action.payload;
    },
  },
  extraReducers: {
    [tagActions.setSelectedTags]: (state, action) => {
      state.tags = tagsReducer(state.tags, action);
    },

    [tagActions.setAllTags]: (state, action) => {
      state.tags = tagsReducer(state.tags, action);
    },

    [tagActions.setLoading]: (state, action) => {
      state.tags = tagsReducer(state.tags, action);
    },

    [tagActions.setError]: (state, action) => {
      state.tags = tagsReducer(state.tags, action);
    },

    [postActions.setLoading]: (state, action) => {
      state.posts = postsReducer(state.posts, action);
    },

    [postActions.setError]: (state, action) => {
      state.posts = postsReducer(state.posts, action);
    },

    [postActions.setPosts]: (state, action) => {
      state.posts = postsReducer(state.posts, action);
    },
  },
});

export const {
  setFiltersVisibility,
  setType,
  setSearch,
  setCurrentPage,
  setPostPerPage,
  setTotalNumberOfPages,
  setTotalNumberOfPosts,
} = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
