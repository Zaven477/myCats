import type { HeaderProps, TabType } from "../types";

export const DisplayTabs = ({
  tabs,
  activeTab,
  setTab,
  setOpen,
}: HeaderProps) => {
  
  const selectTab = (id: TabType) => {
    setTab(id);
    setOpen?.(false);
  };

  return (
    <div>
      {tabs.map((tab) => (
        <button
          className={`buttons ${tab.id === activeTab ? "active" : ""}`}
          key={tab.id}
          onClick={() => selectTab(tab.id)}
        >
          {tab.label} {tab.badge ? `(${tab.badge})` : null}
        </button>
      ))}
    </div>
  );
};
