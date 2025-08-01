import { Formik } from "formik";
import "./style.css";
import { validationForm } from "./validation";
import { useAutorization } from "./hook";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Autorization = () => {
  const initialValuesFields = { login: "", password: "" };
  const { onSubmitForm, showPassword, isShowPassword } = useAutorization();

  return (
    <div className="container-form">
      <Formik
        initialValues={initialValuesFields}
        validationSchema={validationForm}
        onSubmit={(values) => onSubmitForm(values)}
      >
        {(props) => {
          return (
            <form className="form-autorization" onSubmit={props.handleSubmit}>
              <div className="text-login">Логин</div>
              <input
                type="login"
                name="login"
                className="form-input"
                style={
                  props.errors.login ? { border: "1px solid red" } : undefined
                }
                onChange={props.handleChange}
              />
              <div className="error-login">{props.errors.login}</div>
              <div className="text-password">Пароль</div>
              <div className="container-input">
                <input
                  type={isShowPassword ? "text" : "password"}
                  name="password"
                  className="form-input"
                  style={
                    props.errors.password
                      ? { border: "1px solid red" }
                      : undefined
                  }
                  onChange={props.handleChange}
                />
                <button
                  type="button"
                  className="btn-Eye"
                  onClick={showPassword}
                >
                  {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <div className="error-password">{props.errors.password}</div>
              <button type="submit" className="btn">
                Войти
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
