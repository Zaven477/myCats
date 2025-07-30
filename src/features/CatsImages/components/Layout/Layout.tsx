import { useState } from "react";
import { Header } from "../Header/Header";
import { Tabs } from "./types";
import type { Tab, TabType } from "../Header/types";
import { Cats } from "../Cats/Cats";
import { useFavoritesCats } from "../Cats/useFavoritesCats";

export const Layout = () => {
  const { addFavorites, favoritesCats, isFavoritesCats, removeFavoritesCats } =
    useFavoritesCats();

  const tabs: Tab[] = [
    {
      id: "all",
      label: "Все котики",
    },
    {
      id: "favorites",
      label: "Любимые котики",
      badge: favoritesCats.length
    },
  ];

  const [activeTab, setActiveTab] = useState<TabType>(Tabs.All);

  return (
    <main>
      <Header tabs={tabs} activeTab={activeTab} setTab={setActiveTab} />
      <Cats
        activeTab={activeTab}
        addFavorites={addFavorites}
        favoritesCats={favoritesCats}
        isFavorites={isFavoritesCats}
        removeFavorites={removeFavoritesCats}
      />
    </main>
  );
};
