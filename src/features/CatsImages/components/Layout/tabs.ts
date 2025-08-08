import {
  URL_CATS,
  URL_CATS_FAVORITES,
  URL_CATS_SLIDES,
} from "../../../../constants";
import type { CurrentCats } from "../Cats/types";
import type { Tab } from "../Header/types";

export const tabsMenu = (favoritesCats: CurrentCats[]): Tab[] => {
  return [
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
  ];
};
