import "./style.css";
import type { HeaderProps } from "./types";
import { useLogout } from "./useLogout";
import { DisplayTabs } from "./DisplayTabs/DisplayTabs";
import { FiMenu } from "react-icons/fi";
import { useOpenMenuDropdown } from "./useOpenMenuDropdown";

export const Header = ({ tabs, activeTab, setTab }: HeaderProps) => {
  const { logout } = useLogout();
  const { isOpen, openMenuDropdown } = useOpenMenuDropdown();

  return (
    <header className="header">
      <div className="tabs">
        <FiMenu
          size={30}
          color="white"
          onClick={openMenuDropdown}
          className="icon-menu"
        />
        {isOpen && (
          <div className="tabs-menu">
            <DisplayTabs tabs={tabs} activeTab={activeTab} setTab={setTab} />
          </div>
        )}
      </div>
      <button className="btn-logout" onClick={logout}>
        Выйти
      </button>
    </header>
  );
};
