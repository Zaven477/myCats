export type TCountries = {
  id: number;
  name: string;
  code: string;
  description: string;
};

export type TCountriesProps = {
  countries: TCountries[];
  selected: number[];
  errorMessage: string | null;
  loading: boolean;
  selectedCountry: (id: number) => void;
  removeCountry: () => void;
  selectAll: () => void;
};

export type TSetCountries = React.Dispatch<React.SetStateAction<TCountries[]>>;

export type TValueField = {
  country: string;
};
