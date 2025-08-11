import {
  URL_CATS,
  URL_CATS_FAVORITES,
  URL_CATS_SLIDES,
  URL_TIMER,
} from "../../../../../constants";
import { useAppSelector } from "../../../store/reducer/hook";
import { currentFavoritesCats } from "../../../store/selectors";
import type { Tab } from "../types";

export const useTabs = () => {
  const favoritesCats = useAppSelector(currentFavoritesCats);

  const tabs: Tab[] = [
    {
      id: "cats",
      label: "Котики",
      path: `${URL_CATS}`,
      children: [
        {
          id: "all",
          label: "Все котики",
          path: `${URL_CATS}`,
        },
        {
          id: "favorites",
          label: "Любимые котики",
          path: `${URL_CATS_FAVORITES}`,
          badge: favoritesCats.length,
        },
      ],
    },
    {
      id: "slidesCats",
      label: "Слайды",
      path: `${URL_CATS_SLIDES}`,
    },
    {
      id: "catsTimer",
      label: "Таймер",
      path: `${URL_TIMER}`,
    },
  ];

  return {tabs}
};
