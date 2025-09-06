import type { ReactNode } from "react";

export type SectionPanelProps = {
  children: ReactNode;
};

export type TContextTheme = {
  theme: string;
  toggleTheme: () => void;
}
