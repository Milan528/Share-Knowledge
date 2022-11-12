import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState: state,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    setSelectedSuggestion: (state, action) => {
      state.selectedSuggestion = action.payload;
    },
  },
});
export const { setLoading, setError, setSuggestions, setSelectedSuggestion } =
  searchBarSlice.actions;
export const actions = searchBarSlice.actions;
export const searchBarReducer = searchBarSlice.reducer;
