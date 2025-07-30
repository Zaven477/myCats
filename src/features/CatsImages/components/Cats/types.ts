import type { TabType } from "../Header/types";

export type CurrentCats = {
  id: string;
  url: string;
  width: number;
  height: number;
}


export type TCats = {
  activeTab: TabType
  addFavorites: (cat: CurrentCats) => void;
  favoritesCats: CurrentCats[];
  isFavorites: (id: string) => boolean;
  removeFavorites: (id: string) => void;
};
