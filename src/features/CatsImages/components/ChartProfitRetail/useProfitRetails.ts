import { useEffect, useState } from "react";
import type { DataMagnetGlobe } from "./types";
import { getProfitsRetails } from "../../api/getProfits/getProfitsRetails";

export const useProfitRetails = () => {
  const [profitsRetails, setProfitsRetails] = useState<DataMagnetGlobe[]>([]);

  useEffect(() => {
    let mounted = true;

    getProfitsRetails().then((data) => {
      if (mounted) {
        setProfitsRetails(data);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return { profitsRetails };
};
