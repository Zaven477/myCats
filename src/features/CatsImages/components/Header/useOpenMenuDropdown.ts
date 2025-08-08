import { useEffect, useState } from "react";

export const useOpenMenuDropdown = () => {
  const [isOpen, setOpen] = useState(false);

  const openMenuDropdown = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = '';
    }

  }, [isOpen]);

  return { isOpen, setOpen, openMenuDropdown };
};
