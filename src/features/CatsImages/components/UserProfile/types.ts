export const tabsProfile = {
  Profile: "profile",
  Story: "story",
  Settings: "settings",
} as const;

export type TabTypeProfile = "profile" | "story" | "settings";

export type TabsProfile = {
  id: TabTypeProfile;
  label: string;
};
