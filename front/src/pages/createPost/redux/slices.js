import { createSlice } from '@reduxjs/toolkit';
import {
  tagsReducer,
  actions as tagActions,
} from '../components/form/components/tags/redux/slices';
import tags from '../components/form/components/tags/redux/state';
import state from './state';

const createPostSlice = createSlice({
  name: 'createPost',
  initialState: {
    tags,
    state,
  },
  reducers: {
    setLoading: (state, action) => {
      state.state.loading = action.payload;
    },
    setError: (state, action) => {
      state.state.error = action.payload;
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
  },
});

export const createPostReducer = createPostSlice.reducer;
export const { setLoading, setError } = createPostSlice.actions;
