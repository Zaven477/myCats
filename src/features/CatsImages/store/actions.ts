import { createAction } from "@reduxjs/toolkit";

export const clearCatsState = createAction("clearCats");
export const getImagesCats = createAction<number>("imagesCats");
export const getNextImagesCats = createAction<number>("nextImagesCats");
