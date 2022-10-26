import initialState from "./state"; 
import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
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
    
  },
});

export const { loading, handleError} = registerSlice.actions;
export const registerReducer = registerSlice.reducer;


  
