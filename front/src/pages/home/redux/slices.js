import { createSlice } from '@reduxjs/toolkit';
import tagsReducer, {
  setLoading as setLoadingTags,
  setError as setErrorTags,
  setSelectedTags,
  setAllTags,
} from '../components/filters/components/tags/redux/slices';
import tags from '../components/filters/components/tags/redux/state';

import postsReducer, {
  setLoading as setLoadingPosts,
  setError as setErrorPosts,
  setPosts,
} from '../components/posts/redux/slices';
import posts from '../components/posts/redux/state';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    tags,
    posts,
  },
  extraReducers: {
    [setSelectedTags]: (state, action) => {
      state.tags = tagsReducer(state.tags, action);
    },

    [setAllTags]: (state, action) => {
      state.tags = tagsReducer(state.tags, action);
    },

    [setLoadingTags]: (state, action) => {
      state.tags = tagsReducer(state.tags, action);
    },

    [setErrorTags]: (state, action) => {
      state.tags = tagsReducer(state.tags, action);
    },

    [setLoadingPosts]: (state, action) => {
      state.posts = postsReducer(state.posts, action);
    },

    [setErrorPosts]: (state, action) => {
      state.posts = postsReducer(state.posts, action);
    },

    [setPosts]: (state, action) => {
      state.posts = postsReducer(state.posts, action);
    },
  },
});

// export const {} = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
