import {initialState} from "./state"; 
import state from "./state"; 
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: state,
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
    setUser: (state, action) => {
        return { 
            ...state,
            token: action.payload.token,
            role: action.payload.role,
            loggedIn: action.payload.loggedIn
        };
    },
    clearUser: (state, action) => {
        return { 
            ...state,
            token: initialState.token,
            role: initialState.role,
            loggedIn: false
        };
    },
  },
});

export const { loading, handleError, setUser, clearUser} = appSlice.actions;
export const appReducer = appSlice.reducer;