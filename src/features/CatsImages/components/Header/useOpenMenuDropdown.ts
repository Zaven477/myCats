import { useState } from "react";

export const useOpenMenuDropdown = () => {
  const [isOpen, setOpen] = useState(false);

  const openMenuDropdown = () => {
    setOpen((prev) => !prev);
  };

  return {isOpen, setOpen, openMenuDropdown}
};
