import "./style.css";
import type { TChangeThemeProps } from "./types";

export const SettingsProfile = ({
  changeCurrentTheme,
  isChecked,
}: TChangeThemeProps) => {
  return (
    <div className="containerSettings">
      <h1 className={`settings ${isChecked ? "colorSettings" : ""}`}>
        Настройки
      </h1>
      <div className="wrapperTheme">
        <input
          type="checkbox"
          className="inputCheckbox"
          checked={isChecked}
          onChange={changeCurrentTheme}
        />
        <span className={`${isChecked ? "colorTheme" : ""}`}>Тёмная тема</span>
      </div>
      <div className={`textTheme ${isChecked ? 'color': ''}`}>
        <span>Текущая тема:</span>
        <span>{isChecked ? 'Темная' : 'Светлая'}</span>
      </div>
    </div>
  );
};
