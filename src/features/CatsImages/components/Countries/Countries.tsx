import "./style.css";
import { ClipLoader } from "react-spinners";
import { useCountries } from "./useCountries";

export const Countries = () => {
  const {
    countries,
    selected,
    errorMessage,
    loading,
    selectedCountry,
    removeCountry,
    selectAll,
  } = useCountries();

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
  }

  if (errorMessage) {
    return <div className="errorMessage-countries">{errorMessage}</div>;
  }

  return (
    <div className="container-countries">
      <div className="wrapper">
        <div className="containerBtnCountries">
          <button className="btn-remove" onClick={removeCountry}>
            Удалить
          </button>
          <button className="btn-selectAll" onClick={selectAll}>
            {selected.length === countries.length
              ? "Убрать все"
              : "Выбрать все"}
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
            <div>{country.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
