import { useState } from "react";
import { Header } from "../Header/Header";
import { Tabs } from "./types";
import type { TabType } from "../Header/types";
import { useFavoritesCats } from "../Cats/useFavoritesCats";
import { Outlet } from "react-router";
import { tabsMenu } from "./tabs";

export const Layout = () => {
  const { addFavorites, favoritesCats, isFavoritesCats, removeFavoritesCats } =
    useFavoritesCats();
  const tabs = tabsMenu(favoritesCats);

  const [activeTab, setActiveTab] = useState<TabType>(Tabs.All);

  return (
    <main>
      <Header tabs={tabs} activeTab={activeTab} setTab={setActiveTab} />
      <Outlet
        context={{
          addFavorites,
          favoritesCats,
          isFavoritesCats,
          removeFavoritesCats,
        }}
      />
    </main>
  );
};
