import initialState from "./state"; 
import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
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
    setAllTags: (state, action) => {
        return { 
            ...state,
            allTags: action.payload
        };
    },
    setChosenTags: (state, action) => {
        return { 
            ...state,
            chosenTags: action.payload
        };
    },
    setSearch: (state, action) => {
        return { 
            ...state,
            search: action.payload
        };
    },
    setPosts: (state, action) => {
        return { 
            ...state,
            posts: action.payload
        };
    },
    setPostsNumber: (state, action) => {
        return { 
            ...state,
            postsNumber: action.payload
        };
    },
    setPagesNumber: (state, action) => {
        return { 
            ...state,
            pagesNumber: action.payload
        };
    },
    setCurrentPageNumber: (state, action) => {
        return { 
            ...state,
            currentPageNumber: action.payload
        };
    },
   
  },
});

export const { loading, handleError, setAllTags, setChosenTags, setSearch, setPosts, setPostsNumber, setPagesNumber, setCurrentPageNumber} = homeSlice.actions;
export const homeReducer = homeSlice.reducer;


  
