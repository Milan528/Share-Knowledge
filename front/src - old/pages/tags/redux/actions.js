import { createAction } from "@reduxjs/toolkit";

export const loading = createAction("loading");
export const handleError = createAction("handleError");

export const updateTags = createAction("updateTags");
export const setTags = createAction("setTags");
