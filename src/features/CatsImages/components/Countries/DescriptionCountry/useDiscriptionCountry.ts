import { useNavigate } from "react-router";
import type { TCountries } from "../types";
import { URL_COUNTRY_DESCRIPTION } from "../../../../../constants";
import { useCallback } from "react";

export const useDiscriptionCountry = () => {
  const navigate = useNavigate();

  const ShowCountryDescription = useCallback(
    (id: number, countries: TCountries[]) => {
      navigate(`${URL_COUNTRY_DESCRIPTION}${id}`, { state: { countries } });
    },
    [navigate]
  );

  return { ShowCountryDescription };
};
