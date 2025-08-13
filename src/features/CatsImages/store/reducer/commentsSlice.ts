import { createSlice } from "@reduxjs/toolkit";
import type { TStateCommentsSlice } from "./types";

const initialState: TStateCommentsSlice = {
  comments: [],
  loading: false,
  errors: null,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, { payload }) => {
      state.comments = payload;
    },
    setErrorComments: (state, { payload }) => {
      state.errors = payload;
    },
    setLoadingComments: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { setComments, setErrorComments, setLoadingComments } =
  commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;
