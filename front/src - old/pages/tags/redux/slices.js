import initialState from "./state"; 
import { createSlice } from "@reduxjs/toolkit";

const tagsSlice = createSlice({
  name: "tags",
  initialState: initialState,
  reducers: {
    loading: (state, action) => {
        return { 
            ...state,
            loading: action.payload
        };
    },
    handleError: (state, action) => {
        return { 
            ...state,
            error: action.payload
        };
    },
    updateTags: (state, action) => {
      return { 
        ...state,
        updateTags: action.payload
      };
    },
    setTags: (state, action) => {
      return { 
        ...state,
        tags: action.payload
      };
    },
  },
});

export const { loading, handleError, updateTags, setTags } = tagsSlice.actions;
export const tagsReducer = tagsSlice.reducer;


  
