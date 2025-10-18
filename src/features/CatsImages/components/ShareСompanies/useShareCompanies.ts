import { useEffect, useState } from "react";
import type { TShareCompanies } from "./types";
import { getShareCompanies } from "../../api/getShareCompanies/getShareCompanies";

export const useShareCompanies = () => {
  const [shareValue, setShareValue] = useState<TShareCompanies[]>([]);
  const initialValue = 0;
  const half = 6;
  const firstСompanies = shareValue.slice(initialValue, half);
  const restCompanies = shareValue.slice(half, shareValue.length);

  useEffect(() => {
    let mounted = true;

    getShareCompanies().then((data) => {
      if (mounted) {
        setShareValue(data);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return { firstСompanies, restCompanies };
};
