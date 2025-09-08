import { useNavigate } from "react-router";
import type { TCountries } from "../types";
import { URL_COUNTRY_DESCRIPTION } from "../../../../../constants";

export const useDiscriptionCountry = () => {
  const navigate = useNavigate();

  const ShowCountryDescription = (id: number, countries: TCountries[]) => {
    navigate(`${URL_COUNTRY_DESCRIPTION}${id}`, { state: { countries } });
  };

  return { ShowCountryDescription };
};
