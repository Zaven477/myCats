import "./style.css";
import { useLogout } from "./useLogout";
import { DisplayMenu } from "./DisplayMenu/DisplayMenu";
import { FiMenu } from "react-icons/fi";
import { useTabs } from "./DisplayMenu/useTabs";
import { useOpenMenu } from "./useOpenMenu";

export const Header = () => {
  const { logout } = useLogout();
  const { isOpenMenu, setOpenMenu, openMenu, activeTab, selectedTab, selectTab } = useOpenMenu();
  const {tabs} = useTabs();

  return (
    <header className="header">
      <div className="tabs">
        <FiMenu
          size={30}
          color="white"
          onClick={openMenu}
          className="icon-menu"
        />
        <div className={`tabs-menu ${isOpenMenu ? "open" : ""}`}>
          <DisplayMenu
            tabs={tabs}
            activeTab={activeTab}
            setIsOpen={setOpenMenu}
            selectedTab={selectedTab}
            selectTab={selectTab}
          />
        </div>
      </div>
      <button className="btn-logout" onClick={logout}>
        Выйти
      </button>
    </header>
  );
};
