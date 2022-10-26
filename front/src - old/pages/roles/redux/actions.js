import { createAction } from "@reduxjs/toolkit";

export const loading = createAction("loading");
export const handleError = createAction("handleError");

export const setUser = createAction("setUser");
export const clearUser = createAction("clearUser");
export const setRole = createAction("setRole");
export const setUsers = createAction("setUsers");