import type { EntityState } from "@reduxjs/toolkit";
import { store } from "./reducer";
import { catsAdapter } from "./reducer/catsSlice";
import { favoritesCatsAdapter } from "./reducer/favoriteSlice";
import type { CurrentCats } from "../components/Cats/types";

export const catsSelectors = catsAdapter.getSelectors((state: EntityState<CurrentCats, string>) => state)
export const currentCats = () => catsSelectors.selectAll(store.getState().cats);
export const loadingCats = () => store.getState().cats.loading
export const errorCats = () => store.getState().cats.error

export const favoritesCatsSelectors = favoritesCatsAdapter.getSelectors((state: EntityState<CurrentCats, string>) => state)
export const currentFavoritesCats = () => favoritesCatsSelectors.selectAll(store.getState().favoritesCats);
