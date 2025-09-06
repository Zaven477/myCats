import { useContext } from "react";
import "./style.css";
import type { SectionPanelProps } from "./types";
import { ThemeContext } from "./context";

export const SectionPanel = ({ children }: SectionPanelProps) => {
  const currentTheme = useContext(ThemeContext);

  return (
    <div className="section" style={{ background: currentTheme.theme }}>
      {children}
    </div>
  );
};
