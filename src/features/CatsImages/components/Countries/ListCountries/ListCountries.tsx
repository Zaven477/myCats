import { ClipLoader } from "react-spinners";
import type { TCountriesProps } from "../types";
import Flag from "react-world-flags";

export const ListCountries = ({
  countries,
  selected,
  errorMessage,
  loading,
  selectedCountry,
  removeCountry,
  selectAll,
}: TCountriesProps) => {
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
      {countries.map((country) => (
        <div className="container-name" key={country.id}>
          <input
            type="checkbox"
            className="input-checkbox"
            checked={selected.includes(country.id)}
            onChange={() => selectedCountry(country.id)}
          />
          <Flag code={country.code} className="flagCountry" />
          <div>{country.name}</div>
        </div>
      ))}
    </div>
  );
};
