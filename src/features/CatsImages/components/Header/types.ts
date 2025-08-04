export type TabType = "all" | "favorites" | "slidesCats";

export type Tab = {
  id: TabType;
  label: string;
  badge?: number;
};

export type HeaderProps = {
  tabs: Tab[];
  activeTab: TabType;
  setTab: (tab: TabType) => void;
  setOpen?: (prev: boolean) => void;
};

