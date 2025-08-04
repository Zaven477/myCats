import "./style.css";
import type { HeaderProps } from "./types";
import { useLogout } from "./useLogout";
import { DisplayTabs } from "./DisplayTabs/DisplayTabs";
import { FiMenu } from "react-icons/fi";
import { useOpenMenuDropdown } from "./useOpenMenuDropdown";

export const Header = ({ tabs, activeTab, setTab }: HeaderProps) => {
  const { logout } = useLogout();
  const {isOpen, setOpen, openMenuDropdown} = useOpenMenuDropdown();
  

  return (
    <header className="header">
      <div className="mobile-menu-button">
        <FiMenu size={24} color="white" onClick={openMenuDropdown} />
        {isOpen && (
          <div className="btn-menu">
            <DisplayTabs tabs={tabs} activeTab={activeTab} setTab={setTab} setOpen={setOpen}/>
          </div>
        )}
      </div>
      <div className="tabs">
        <DisplayTabs tabs={tabs} activeTab={activeTab} setTab={setTab} />
      </div>
      <button className="btn-logout" onClick={logout}>
        Выйти
      </button>
    </header>
  );
};
