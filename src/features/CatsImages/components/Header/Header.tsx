import "./style.css";
import type { HeaderProps } from "./types";
import { useLogout } from "./hook";
import { DisplayTabs } from "./DisplayTabs/DisplayTabs";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

export const Header = ({ tabs, activeTab, setTab }: HeaderProps) => {
  const [isOpen, setOpen] = useState(false);
  const { logout } = useLogout();

  const openDropdown = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="mobile-menu-button">
        <FiMenu size={24} color="white" onClick={openDropdown} />
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
