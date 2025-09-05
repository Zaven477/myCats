import { useCallback, useState } from "react";
import { requestNewCountry } from "../../api/addCounty/addCountry";
import type { TCountries, TSetCountries, TValueField } from "./types";
import type { FormikHelpers } from "formik";

export const useAddCountries = (
  setCountries: TSetCountries,
  countries: TCountries[]
) => {
  const [loadingCountries, setLoadingCountries] = useState(false);
  const initialValues = { country: "" };

  const onSubmitForm = useCallback(
    async (values: TValueField, actions: FormikHelpers<TValueField>) => {
      if (!values.country) {
        return;
      }
      setLoadingCountries(true);
      const response = await requestNewCountry(values);
      setLoadingCountries(false);
      if (Array.isArray(response) && response.length > 0) {
        const exists = countries.some(
          (country) => country.id === response[0].id
        );
        if (exists) {
          actions.setFieldError("country", "Такая страна уже есть в списке");
        } else if (!exists) {
          setCountries((prev) => [...prev, ...response]);
          actions.resetForm();
        }
      } else {
        actions.setFieldError("country", "Невозможно добавить такую страну");
      }
    },
    [countries, setCountries]
  );

  return { onSubmitForm, loadingCountries, initialValues };
};
