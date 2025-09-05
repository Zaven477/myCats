import { useCallback, useEffect, useState } from "react";
import { getCountries } from "../../api/getListCountries/getListCountries";
import type { TCountries } from "./types";

export const useCountries = () => {
  const [countries, setCountries] = useState<TCountries[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getListCountries = useCallback(async () => {
    setLoading(true);

    try {
      const response = await getCountries();
      setCountries(response);
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getListCountries();
    }

    return () => {
      mounted = false;
    };
  }, [getListCountries]);

  const selectedCountry = useCallback((currentId: number) => {
    setSelected((prev) => {
      if (!prev.includes(currentId)) {
        return [...prev, currentId];
      }
      return prev.filter((id) => id !== currentId);
    });
  }, []);

  const removeCountry = useCallback(() => {
    setCountries((prev) => {
      return prev.filter((country) => {
        setSelected((prev) =>
          prev.filter((currentId) => currentId !== country.id)
        );
        return !selected.includes(country.id);
      });
    });
  }, [selected]);

  const selectAll = useCallback(() => {
    const selectsCountries = countries.filter(
      (country) => !selected.includes(country.id)
    );
    const currentsIds = selectsCountries.map((country) => country.id);
    if (currentsIds.length > 0) {
      setSelected((prev) => [...prev, ...currentsIds]);
    } else {
      setSelected(currentsIds);
    }
  }, [countries, selected]);

  return {
    countries,
    selected,
    errorMessage,
    loading,
    selectedCountry,
    removeCountry,
    selectAll,
    setCountries,
  };
};
