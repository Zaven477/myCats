import { ClipLoader } from "react-spinners";
import type { TCountriesProps } from "../types";
import Flag from "react-world-flags";
import { useDiscriptionCountry } from "../DescriptionCountry/useDiscriptionCountry";
import { AlertCircle } from "lucide-react";

export const ListCountries = ({
  countries,
  selected,
  errorMessage,
  loading,
  selectedCountry,
  removeCountry,
  selectAll,
}: TCountriesProps) => {
  const { ShowCountryDescription } = useDiscriptionCountry();

  if (loading) {
    return (
      <div className="loader-countries">
        <ClipLoader
          color="rgba(33, 150, 243, 1)"
          size={50}
          cssOverride={{ borderWidth: "3px" }}
        />
      </div>
    );
  } else if (errorMessage) {
    return <div className="errorMessage-countries">{errorMessage}</div>;
  }
  return (
    <div className="wrapper">
      <div className="containerBtnCountries">
        <button className="btn-remove" onClick={removeCountry}>
          Удалить
        </button>
        <button className="btn-selectAll" onClick={selectAll}>
          {selected.length === countries.length ? "Убрать все" : "Выбрать все"}
        </button>
      </div>
      <div className="alertInfo">
        <AlertCircle color="#1E90FF"/>
        <span>Нажмите на название страны, чтобы узнать больше.</span>
      </div>
      {countries.map((country) => (
        <div className="container-name" key={country.id}>
          <input
            type="checkbox"
            className="input-checkbox"
            checked={selected.includes(country.id)}
            onChange={() => selectedCountry(country.id)}
          />
          <div className="flagWrapper">
            <Flag code={country.code} className="flagCountry" />
          </div>
          <div
            className="currentCountry"
            onClick={() => ShowCountryDescription(country.id, countries)}
          >
            {country.name}
          </div>
        </div>
      ))}
    </div>
  );
};
