import initialState from "./state"; 
import { createSlice } from "@reduxjs/toolkit";
  
const createPostSlice = createSlice({
  name: "createPost",
  initialState: initialState,
  reducers: {
    setDocuments: (state, action) => {
        return { 
            ...state,
            documents: action.payload
        };
    },
    setImages: (state, action) => {
        return { 
            ...state,
            images: action.payload
        };
    },
    setChosenTags: (state, action) => {
        return { 
            ...state,
            chosenTags: action.payload
        };
    },
    setType: (state, action) => {
        return { 
            ...state,
            type: action.payload
        };
    },
    setText: (state, action) => {
        return { 
            ...state,
            text: action.payload
        };
    },
    setTitle: (state, action) => {
        return { 
            ...state,
            title: action.payload
        };
    },
    setAllTags: (state, action) => {
        return { 
            ...state,
            allTags: action.payload
        };
    },
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
  },
});

export const { loading, handleError, setDocuments, setImages, setChosenTags, setType, setText, setTitle, setAllTags} = createPostSlice.actions;
export const createPostReducer = createPostSlice.reducer;

