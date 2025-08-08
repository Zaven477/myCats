import { useState } from "react";
import type { HeaderProps, TabType, TPropsListSections } from "../types";
import { useNavigate } from "react-router";
import { HiChevronDown } from "react-icons/hi";

const ListSections = ({
  tabs,
  activeTab,
  selectTab,
  isOpen,
  depth,
}: Pick<HeaderProps, "tabs" | "activeTab"> & TPropsListSections) => {
  return (
    <ul>
      {tabs.map((tab) => (
        <li key={tab.id}>
          <button
            className={`buttons level-${depth} ${
              tab.id === activeTab ? "active" : ""
            }`}
            key={tab.id}
            onClick={() => selectTab(tab.id, tab.path)}
          >
            <div className="container-text-icon">
              <div>
                {tab.label} {tab.badge ? `(${tab.badge})` : null}
              </div>
              <div>{tab.children && <HiChevronDown size={20} />}</div>
            </div>
          </button>
          {isOpen[tab.id] && tab.children && (
            <ListSections
              tabs={tab.children}
              activeTab={activeTab}
              selectTab={selectTab}
              isOpen={isOpen}
              depth={depth + 1}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export const DisplayTabs = ({ tabs, activeTab, setTab }: HeaderProps) => {
  const [isOpen, setOpen] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  const selectTab = (id: TabType, path: string) => {
    setTab(id);
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
    navigate(path);
  };

  return (
    <div>
      <ListSections
        tabs={tabs}
        activeTab={activeTab}
        selectTab={selectTab}
        isOpen={isOpen}
        depth={0}
      />
    </div>
  );
};
