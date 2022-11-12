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
import {
  searchBarReducer,
  actions as searchBarActions,
} from '../components/filters/components/searchBar/redux/slices';
import searchBar from '../components/filters/components/searchBar/redux/state';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    state,
    tags,
    posts,
    searchBar,
  },
  reducers: {
    setFiltersVisibility: (state, action) => {
      state.state.filtersVisibility = action.payload;
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
    [searchBarActions.setLoading]: (state, action) => {
      state.searchBar = searchBarReducer(state.searchBar, action);
    },

    [searchBarActions.setError]: (state, action) => {
      state.searchBar = searchBarReducer(state.searchBar, action);
    },

    [searchBarActions.setSuggestions]: (state, action) => {
      state.searchBar = searchBarReducer(state.searchBar, action);
    },
    [searchBarActions.setSelectedSuggestion]: (state, action) => {
      state.searchBar = searchBarReducer(state.searchBar, action);
    },
  },
});

export const { setFiltersVisibility } = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
