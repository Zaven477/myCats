import { useContext } from "react";
import { ThemeContext } from "./context";

export const Button = () => {
  const currentTheme = useContext(ThemeContext);

  return (
    <button
      className="btn-panel"
      style={{
        background:
          currentTheme.theme === "white" ? "rgba(33, 150, 243, 1)" : "white",
      }}
      onClick={currentTheme.toggleTheme}
    >
      <div
        style={{
          color: currentTheme.theme === "white" ? "white" : "black",
        }}
      >
        Click
      </div>
    </button>
  );
};
