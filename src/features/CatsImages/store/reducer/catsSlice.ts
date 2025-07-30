import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { CurrentCats } from "../../components/Cats/types";
import { clearCatsState } from "../actions";

export const catsAdapter = createEntityAdapter<CurrentCats>();

export const catsSlice = createSlice({
  name: "cats",
  initialState: catsAdapter.getInitialState({
    error: null,
    loading: false,
  }),
  reducers: {
    setCats: (state, { payload }) => {
      catsAdapter.upsertMany(state, payload);
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(clearCatsState, () =>
      catsAdapter.getInitialState({ error: null, loading: false })
    );
  },
});

export const { setCats, setError, setLoading } = catsSlice.actions;

export const catsReducer = catsSlice.reducer;
