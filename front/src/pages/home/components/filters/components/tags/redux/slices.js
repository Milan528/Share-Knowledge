import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const tagsSlice = createSlice({
  name: 'tags',
  initialState: state,
  reducers: {
    loading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    setSelectedTags: (state, action) => {
      return {
        ...state,
        selectedTags: action.payload,
      };
    },
    setAllTags: (state, action) => {
      return {
        ...state,
        allTags: action.payload,
      };
    },
  },
});

export const { loading, setError, setSelectedTags, setAllTags } =
  tagsSlice.actions;
export const tagsReducer = tagsSlice.reducer;
