import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const tagsSlice = createSlice({
  name: 'tags',
  initialState: state,
  reducers: {
    loading: (state, action) => {
      return {
        ...state,
        loadingApp: action.payload,
      };
    },
  },
});

export const { loading } = tagsSlice.actions;
export const tagsReducer = tagsSlice.reducer;
