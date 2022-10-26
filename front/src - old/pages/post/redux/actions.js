import { createAction } from "@reduxjs/toolkit";

export const loading = createAction("loading");
export const handleError = createAction("handleError");

export const setPost = createAction("setPost");
export const pushDocument = createAction("pushDocument");
export const clearDocuments = createAction("clearDocuments");
export const setPostOwner = createAction("setPostOwner");