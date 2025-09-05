import "./style.css";
import { useCountries } from "./useCountries";
import { useAddCountries } from "./useAddCountries";
import { ListCountries } from "./ListCountries/ListCountries";
import { ClipLoader } from "react-spinners";
import { Formik } from "formik";
import { validationFieldsCountries } from "./validationFieldsCountries";

export const Countries = () => {
  const {
    countries,
    selected,
    errorMessage,
    loading,
    selectedCountry,
    removeCountry,
    selectAll,
    setCountries,
  } = useCountries();

  const { onSubmitForm, loadingCountries, initialValues } =
    useAddCountries(setCountries, countries);

  return (
    <div className="container-countries">
      <Formik
        validationSchema={validationFieldsCountries}
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          onSubmitForm(values, actions);
        }}
      >
        {(props) => {
          return (
            <form
              className="containerInputAddCountries"
              onSubmit={props.handleSubmit}
            >
              <div className="inputContainer">
                <input
                  type="text"
                  name="country"
                  onChange={props.handleChange}
                  value={props.values.country}
                  className={`${
                    props.errors.country ? "borderInputCountries" : ""
                  }`}
                />
                <div className="errorMessageInputcountries">
                  {props.errors.country}
                </div>
              </div>
              <button type="submit" className="btnAddCountries">
                {loadingCountries ? (
                  <ClipLoader size={20} color="blue" />
                ) : (
                  "Добавить"
                )}
              </button>
            </form>
          );
        }}
      </Formik>
      <ListCountries
        countries={countries}
        selected={selected}
        errorMessage={errorMessage}
        loading={loading}
        selectedCountry={selectedCountry}
        removeCountry={removeCountry}
        selectAll={selectAll}
      />
    </div>
  );
};
