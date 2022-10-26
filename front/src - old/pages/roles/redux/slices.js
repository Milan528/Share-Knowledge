import initialState from "./state"; 
import { createSlice } from "@reduxjs/toolkit";

const rolesSlice = createSlice({
  name: "roles",
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
    setUser: (state, action) => {
      return { 
          ...state,
          username: action.payload.username,
          role: action.payload.role
      };
    },
    clearUser: (state, action) => {
      return { 
        ...state,
        username: null,
        role: null
      };
    },

    setRole: (state, action) => {
      return { 
        ...state,
        role: action.payload
      };
    },

    setUsers: (state, action) => {
      return { 
        ...state,
        allUsers: action.payload
      };
    },
  },
});

export const { loading, handleError, setUser, clearUser, setRole, setUsers} = rolesSlice.actions;
export const rolesReducer = rolesSlice.reducer;


  
