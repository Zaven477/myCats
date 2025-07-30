export type TabType = 'all' | 'favorites';


export type Tab = {
  id: TabType;
  label: string;
  badge?: number;
};

export type HeaderProps = {
  tabs: Tab[];
  activeTab: TabType;
  setTab: (tab: TabType) => void;
};


