import type { DisplayMenuProps, ListSectionsProps } from "../types";
import { HiChevronDown } from "react-icons/hi";

const ListSections = ({
  tabs,
  activeTab,
  selectTab,
  selectedTab,
  setIsOpen,
  depth,
}: ListSectionsProps) => {
  return (
    <ul>
      {tabs.map((tab) => (
        <li key={tab.id} className="list-sections">
          <button
            className={`buttons level-${depth} ${
              tab.id === activeTab ? "active" : ""
            }`}
            key={tab.id}
            onClick={() => selectTab(tab.id, tab.path, tab.children)}
          >
            <div className="container-text-icon">
              <div>
                {tab.label} {tab.badge ? `(${tab.badge})` : null}
              </div>
              <div>{tab.children && <HiChevronDown size={20} />}</div>
            </div>
          </button>
          {selectedTab[tab.id] && tab.children && (
            <ListSections
              tabs={tab.children}
              activeTab={activeTab}
              selectTab={selectTab}
              selectedTab={selectedTab}
              setIsOpen={setIsOpen}
              depth={depth + 1}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export const DisplayMenu = ({
  tabs,
  activeTab,
  setIsOpen,
  selectedTab,
  selectTab,
}: DisplayMenuProps) => {
  return (
    <div>
      <ListSections
        tabs={tabs}
        activeTab={activeTab}
        selectTab={selectTab}
        selectedTab={selectedTab}
        setIsOpen={setIsOpen}
        depth={0}
      />
    </div>
  );
};
