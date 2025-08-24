import { Formik } from "formik";
import "./style.css";
import { validationForm } from "./validation";
import { ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useLoginFormProfile } from "./useLoginFormProfile";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const LoginFormProfile = () => {
  const initialValuesFields = { login: "", password: "" };
  const { loading, handleSubmitForm, isShowPassword, showPassword } =
    useLoginFormProfile();

  return (
    <div className="container-profile">
      <Formik
        initialValues={initialValuesFields}
        onSubmit={handleSubmitForm}
        validationSchema={validationForm}
      >
        {(props) => {
          return (
            <form onSubmit={props.handleSubmit}>
              <div className="wrapper-profile">
                <div className="text-profile">Вход в личный кабинет</div>
                <div>Логин:</div>
                <input
                  type="login"
                  name="login"
                  className={`input-login ${
                    props.errors.login ? "borderLogin" : ""
                  }`}
                  onChange={props.handleChange}
                />
                <div className="error-login">{props.errors.login}</div>
                <div>Пароль:</div>
                <div className="wrapperInput">
                  <input
                    type={isShowPassword ? "text" : "password"}
                    name="password"
                    className={`input-password ${
                      props.errors.password ? "borderPassword" : ""
                    }`}
                    onChange={props.handleChange}
                  />
                  <button
                    type="button"
                    className="btnEye"
                    onClick={showPassword}
                  >
                    {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
                <div className="error-password">{props.errors.password}</div>
                <button type="submit" className="btnSubmitProfile">
                  {loading ? <ClipLoader size={25} color="blue" /> : "Войти"}
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
      <ToastContainer className="location" />
    </div>
  );
};
