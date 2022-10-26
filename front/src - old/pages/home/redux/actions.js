import { createAction } from "@reduxjs/toolkit";

export const loading = createAction("loading");
export const handleError = createAction("handleError");

export const setPosts = createAction("setPosts");
export const setAllTags = createAction("setAllTags");
export const setChosenTags = createAction("setChosenTags");
export const setSearch = createAction("setSearch");
export const setPostsNumber = createAction("setPostsNumber");
export const setPagesNumber = createAction("setPagesNumber");
export const setCurrentPageNumber = createAction("setCurrentPageNumber");