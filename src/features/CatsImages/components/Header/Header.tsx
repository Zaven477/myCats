import "./style.css";
import type { HeaderProps } from "./types";
import { useLogout } from "./hook";

export const Header = ({ tabs, activeTab, setTab }: HeaderProps) => {
  const { logout } = useLogout();

  return (
    <header className="header">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            className={`buttons ${tab.id === activeTab ? "active" : ""}`}
            key={tab.id}
            onClick={() => setTab(tab.id)}
          >
            {tab.label} {tab.badge ? `(${tab.badge})` : null}
          </button>
        ))}
      </div>
      <button className="btn-logout" onClick={logout}>
        Выйти
      </button>
    </header>
  );
};
