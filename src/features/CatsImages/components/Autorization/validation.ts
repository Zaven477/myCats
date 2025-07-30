import * as Yup from "yup";

export const validationForm = Yup.object().shape({
  login: Yup.string()
    .test('no-digits', 'Логин не должен содержать цифры',(value) => {
      if(!value) {
        return true;
      } else {
        return !/\d/.test(value);
      }
    })
    .min(6, "логин должен содержать не менее 6 символов")
    .max(8, "логин должен содержать не более 8 символов")
    .required("Обязательное поле"),
  password: Yup.string()
    .min(5, "пароль должен содержать не менее 5 символов")
    .max(9, "пароль должен содержать не более 9 символов")
    .required("Обязательное поле"),
});
