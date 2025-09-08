import { useLocation, useParams } from "react-router";
import type { TCountries } from "../types";

export const useListCountriesDiscriptions = () => {
  const { currentId } = useParams();
  const countryId = Number(currentId);
  const location = useLocation();
  const currentCountries: TCountries[] = location.state.countries;

  return { countryId, currentCountries };
};
