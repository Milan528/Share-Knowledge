import { createSlice } from '@reduxjs/toolkit';
import {
  commentsReducer,
  actions as commentActions,
} from '../components/comments/redux/slices';
import comments from '../components/comments/redux/state';
import {
  postReducer,
  actions as postActions,
} from '../components/post/redux/slices';
import post from '../components/post/redux/state';

const viewPostSlice = createSlice({
  name: 'viewPost',
  initialState: {
    comments,
    post,
  },
  extraReducers: {
    [commentActions.setComments]: (state, action) => {
      state.tags = commentsReducer(state.comments, action);
    },

    [commentActions.setLoading]: (state, action) => {
      state.tags = commentsReducer(state.comments, action);
    },

    [commentActions.setError]: (state, action) => {
      state.tags = commentsReducer(state.comments, action);
    },

    [postActions.setPost]: (state, action) => {
      state.post = postReducer(state.post, action);
    },

    [postActions.setLoading]: (state, action) => {
      state.post = postReducer(state.post, action);
    },

    [postActions.setError]: (state, action) => {
      state.post = postReducer(state.post, action);
    },
  },
});

export const viewPostReducer = viewPostSlice.reducer;
