import initialState from "./state"; 
import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
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

    setPost: (state, action) => {
      return { 
          ...state,
          post: action.payload
      };
    },
    
    pushDocument: (state, action) => {
      return { 
          ...state,
          documents: [...state.documents, action.payload]
      };
    },

    setPostOwner: (state, action) => {
      return { 
          ...state,
          postOwner: action.payload
      };
    },

    clearDocuments: (state, action) => {
      return { 
          ...state,
          documents: []
      };
    },
  },
});

export const { loading, handleError, setPost, pushDocument, setPostOwner, clearDocuments} = postSlice.actions;
export const postReducer = postSlice.reducer;


  
