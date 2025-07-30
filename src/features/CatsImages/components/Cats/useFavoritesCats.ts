import { useCallback, useEffect } from "react";
import type { CurrentCats } from "./types";
import { FAVORITES_STORAGE_KEY } from "../../../../constants";
import { useAppDispatch, useAppSelector } from "../../store/reducer/hook";
import {
  removeFavorites,
  savedFavoritesCats,
  setFavoritesCats,
} from "../../store/reducer/favoriteSlice";
import { currentFavoritesCats } from "../../store/selectors";

export const useFavoritesCats = () => {
  const dispatch = useAppDispatch();
  const favoritesCats = useAppSelector(currentFavoritesCats);

  const addFavorites = useCallback(
    (cat: CurrentCats) => {
      dispatch(setFavoritesCats(cat));
    },
    [dispatch]
  );

  const removeFavoritesCats = useCallback(
    (id: string) => {
      dispatch(removeFavorites(id));
    },
    [dispatch]
  );

  const isFavoritesCats = useCallback(
    (id: string) => {
      return favoritesCats.some((cat) => cat.id === id);
    },
    [favoritesCats]
  );

  useEffect(() => {
    const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (savedFavorites) {
      const currentFavorites = JSON.parse(savedFavorites);
      dispatch(savedFavoritesCats(currentFavorites));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoritesCats));
  }, [favoritesCats]);

  return { addFavorites, removeFavoritesCats, favoritesCats, isFavoritesCats };
};
