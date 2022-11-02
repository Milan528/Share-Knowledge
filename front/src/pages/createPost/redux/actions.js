import { createAction } from "@reduxjs/toolkit";

export const loading = createAction("loading");
export const handleError = createAction("handleError");

export const setTitle = createAction("setTitle");
export const setText = createAction("setText");
export const setType = createAction("setType");
export const setChosenTags = createAction("setChosenTags");
export const setAllTags = createAction("setAllTags");
export const setImages = createAction("setImages");
export const setDocuments = createAction("setDocuments");