import "./style.css";
import { tabs } from "./tabsProfile";
import { tabsProfile } from "./types";
import { CurrentProfile } from "../CurrentProfile/CurrentProfile";
import { StoryProfile } from "../StoryProfile/StoryProfile";
import { SettingsProfile } from "../SettingsProfile/SettingsProfile";
import { EditModal } from "../EditModal/EditModal";
import { useProfile } from "./useProfile";
import { useSettingsProfile } from "../SettingsProfile/useSettingsProfile";
import { useState } from "react";

export const UserProfile = () => {
  const {
    activeTab,
    setActiveTab,
    isOpenEditModal,
    setIsOpenEditModal,
    logOut,
    openEditModal,
  } = useProfile();
  const { changeTheme, isChecked } = useSettingsProfile();
  const [updateUserProfile, setUpdateUserProfile] = useState(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed;
    } else {
      return null;
    }
  });

  return (
    <div>
      <div className={`wrapperCurrentProfile ${isChecked ? "theme" : ""}`}>
        <h1 className={`account ${isChecked ? "colorAccount" : ""}`}>
          Личный кабинет
        </h1>
        <div className="tabsProfile">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`btnProfile ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
          <button className="btnLogOut" onClick={logOut}>
            Выход
          </button>
        </div>
        {activeTab === tabsProfile.Profile ? (
          <CurrentProfile
            onOpenEditModal={openEditModal}
            isChecked={isChecked}
            updateUser={updateUserProfile}
          />
        ) : null}
        {activeTab === tabsProfile.Story ? (
          <StoryProfile isChecked={isChecked} />
        ) : null}
        {activeTab === tabsProfile.Settings ? (
          <SettingsProfile
            changeCurrentTheme={changeTheme}
            isChecked={isChecked}
          />
        ) : null}
      </div>
      {isOpenEditModal && (
        <div className="backdrop">
          <EditModal
            setOpen={setIsOpenEditModal}
            setUpdateUserProfile={setUpdateUserProfile}
          />
        </div>
      )}
    </div>
  );
};
