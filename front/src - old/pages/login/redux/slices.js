import initialState from "./state"; 
import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
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

export const { loading, handleError} = loginSlice.actions;
export const loginReducer = loginSlice.reducer;


  
