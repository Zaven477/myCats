import { useEffect, useState } from "react";
import type { CurrentUser } from "./types";

export const useCurrentProfile = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      const parsed = JSON.parse(saved);
      setCurrentUser(parsed);
    }
  }, [currentUser]);

  return { currentUser };
};
