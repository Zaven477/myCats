import { useState } from "react";
import { Button } from "./Button";
import { ThemeContext } from "./context";
import { SectionPanel } from "./SectionPanel";

export const Panel = () => {
  const [theme, setTheme] = useState("white");

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "white") {
        return "rgba(33, 150, 243, 1)";
      } else {
        return "white";
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SectionPanel>
        <Button />
      </SectionPanel>
    </ThemeContext.Provider>
  );
};
