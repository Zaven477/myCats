import { useEffect, useState } from "react";
import type { TProfitCompanies } from "./types";
import { getProfitCompanies } from "../../api/getProfitCompanies/getProfitCompanies";

export const useProfitCompanies = () => {
  const [profitCompanies, setProfitCompanies] = useState<TProfitCompanies[]>(
    []
  );

  useEffect(() => {
    let mounted = true;

    getProfitCompanies().then((data) => {
      if (mounted) {
        setProfitCompanies(data);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return { profitCompanies };
};
