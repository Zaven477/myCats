import { useCallback, useState } from "react";
import { tabsProfile, type TabTypeProfile } from "./types";
import { useNavigate } from "react-router";
import { URL_LOGIN_PROFILE } from "../../../../constants";

export const useProfile = () => {
  const [activeTab, setActiveTab] = useState<TabTypeProfile>(
    tabsProfile.Profile
  );
  const navigate = useNavigate();
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const logOut = useCallback(() => {
    localStorage.removeItem("user");
    localStorage.setItem('logOut', new Date().toISOString())
    navigate(URL_LOGIN_PROFILE);
  }, [navigate]);

  const openEditModal = useCallback(() => {
    setIsOpenEditModal((prev) => !prev);
  }, []);

  return {
    activeTab,
    setActiveTab,
    isOpenEditModal,
    setIsOpenEditModal,
    logOut,
    openEditModal,
  };
};
