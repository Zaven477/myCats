import { Formik } from "formik";
import "./style.css";
import type { OpenModalProps } from "./types";
import { validationFieldsModal } from "./validationFieldsModal";
import { useEditModal } from "./useEditModal";

export const EditModal = ({ setOpen, setUpdateUserProfile }: OpenModalProps) => {
  const initialValuesFieldsModal = { name: "", login: "", password: "" };
  const { onSubmitForm } = useEditModal({ setOpen, setUpdateUserProfile });

  return (
    <div className="editModalProfile">
      <h1 className="textEdit">Редактировать профиль</h1>
      <Formik
        initialValues={initialValuesFieldsModal}
        onSubmit={(values) => onSubmitForm(values)}
        validationSchema={validationFieldsModal}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="containerInputs">
              <div className="name">Имя:</div>
              <input
                type="text"
                name="name"
                className={`inputModal ${
                  props.errors.name ? "borderInput" : ""
                }`}
                onChange={props.handleChange}
              />
              <div className="error-message-name">{props.errors.name}</div>
              <div className="login">Логин:</div>
              <input
                type="text"
                name="login"
                className={`inputModal ${
                  props.errors.login ? "borderInput" : ""
                }`}
                onChange={props.handleChange}
              />
              <div className="error-message-login">{props.errors.login}</div>
              <div className="password">Пароль:</div>
              <input
                type="password"
                name="password"
                className={`inputModal ${
                  props.errors.password ? "borderInput" : ""
                }`}
                onChange={props.handleChange}
              />
              <div className="error-message-password">
                {props.errors.password}
              </div>
            </div>
            <div className="buttonsModal">
              <button className="btn-Modal" onClick={() => setOpen(false)}>
                Отмена
              </button>
              <button className="btn-Modal" type="submit">
                Сохранить
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
