import { useCallback, useState } from "react";

export const useSettingsProfile = () => {
  const [isChecked, setIsChecked] = useState(false);

  const changeTheme = useCallback(() => {
    setIsChecked((prev) => !prev);
  }, [])

  return { changeTheme, isChecked };
};
