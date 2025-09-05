import * as Yup from "yup";

export const validationFieldsCountries = Yup.object().shape({
  country: Yup.string().matches(
    /^(?:[А-Я][а-яё]+(?:\s|-)?)+$/,
    "Название страны должно начинаться с заглавной буквы и содержать только кириллицу, пробелы или дефисы"
  ),
});
