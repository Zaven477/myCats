import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { CurrentCats } from "../../components/Cats/types";

export const favoritesCatsAdapter = createEntityAdapter<CurrentCats>();

export const favoritesCatsSlice = createSlice({
  name: "favorites",
  initialState: favoritesCatsAdapter.getInitialState(),
  reducers: {
    setFavoritesCats: (state, { payload }) => {
      favoritesCatsAdapter.upsertOne(state, payload);
    },
    savedFavoritesCats: (state, { payload }) => {
      favoritesCatsAdapter.upsertMany(state, payload);
    },
    removeFavorites: (state, { payload }) => {
      favoritesCatsAdapter.removeOne(state, payload);
    },
  },
});

export const { setFavoritesCats, removeFavorites, savedFavoritesCats } =
  favoritesCatsSlice.actions;

export const favoritesCatsReducer = favoritesCatsSlice.reducer;
