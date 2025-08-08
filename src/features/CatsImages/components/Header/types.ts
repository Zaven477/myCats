export type TabType = "cats" | "all" | "favorites" | "slidesCats";

export type Tab = {
  id: TabType;
  label: string;
  children?: Tab[];
  badge?: number;
  path: string;
};

export type HeaderProps = {
  tabs: Tab[];
  activeTab: TabType;
  setTab: (tab: TabType) => void;
};

export type TPropsListSections = {
  selectTab: (id: TabType, path: string) => void;
  isOpen: Record<string, boolean>;
  depth: number;
};
