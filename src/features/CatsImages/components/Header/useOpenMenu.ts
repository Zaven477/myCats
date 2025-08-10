import { useCallback, useEffect, useState } from "react";
import type { Tab, TabType } from "./types";
import { Tabs } from "../Layout/types";
import { useNavigate } from "react-router";

export const useOpenMenu = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>(Tabs.Cats);
  const [selectedTab, setSelectedTab] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  const selectTab = useCallback(
    (id: TabType, path: string, children?: Tab[]) => {
      setActiveTab(id);
      setSelectedTab((prev) => ({ ...prev, [id]: !prev[id] }));
      navigate(path);
      if (children) {
        setOpenMenu(true);
      } else {
        setOpenMenu(false);
      }
    },
    [navigate]
  );

  const openMenu = useCallback(() => {
    setOpenMenu((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenMenu]);

  return {
    isOpenMenu,
    setOpenMenu,
    openMenu,
    activeTab,
    setActiveTab,
    selectedTab,
    selectTab,
  };
};
