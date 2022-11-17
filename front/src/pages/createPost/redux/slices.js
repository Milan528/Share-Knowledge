import { createSlice } from '@reduxjs/toolkit';
import {
  tagsReducer,
  actions as tagActions,
} from '../components/form/components/tags/redux/slices';
import tags from '../components/form/components/tags/redux/state';

const createPostSlice = createSlice({
  name: 'createPost',
  initialState: {
    tags,
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
  },
});

export const createPostReducer = createPostSlice.reducer;
