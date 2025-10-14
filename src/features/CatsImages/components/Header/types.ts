export type TabType =
  | "cats"
  | "all"
  | "favorites"
  | "slidesCats"
  | "catsTimer"
  | "comments"
  | "files"
  | "loginProfile"
  | "countries"
  | "theme"
  | "infinite"
  | "pdf";

export type Tab = {
  id: TabType;
  label: string;
  children?: Tab[];
  badge?: number;
  path: string;
};

export type DisplayMenuProps = {
  tabs: Tab[];
  activeTab: TabType;
  setIsOpen?: (arg: boolean) => void;
  selectedTab: Record<string, boolean>;
  selectTab: (id: TabType, path: string, children?: Tab[]) => void;
};

export type Depth = {
  depth: number;
};

export type ListSectionsProps = Pick<
  DisplayMenuProps,
  "tabs" | "activeTab" | "setIsOpen" | "selectedTab" | "selectTab"
> &
  Depth;
