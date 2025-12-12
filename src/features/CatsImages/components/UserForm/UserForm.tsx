import { useState } from "react";
import { fields } from "./fields";
import "./style.css";
import { messageValidate } from "./message";
import { createUser } from "../../api/createUser/createUser";
import { toast, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";

export const UserForm = () => {
  const [dataInputForm, setDataInputForm] = useState({
    name: "",
    lastName: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const normalizedValue = value.trim();
    setDataInputForm((prev) => ({
      ...prev,
      [name]: normalizedValue,
      [name]: normalizedValue,
      [name]: normalizedValue,
    }));
  };

  const handleSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !dataInputForm.name ||
      !dataInputForm.lastName ||
      !dataInputForm.email
    ) {
      return;
    } else {
      setLoading(true);
      const response = await createUser(dataInputForm);
      setLoading(false);
      toast.success(response);
    }
  };

  return (
    <div className="containerForm">
      <form className="form" onSubmit={handleSubmitForm}>
        <h1>Личные данные</h1>
        {fields.map((field) => (
          <div key={field.name} className="wrapperInput">
            <h1 className="titleField">{field.title}</h1>
            <input
              className={`inputForm ${
                !dataInputForm[field.name] && "inputForm-border"
              }`}
              name={field.name}
              type={field.type}
              onChange={handleChange}
            />
            {!dataInputForm[field.name] ? (
              <p className="messageValidate">{messageValidate}</p>
            ) : null}
          </div>
        ))}
        <button className="btnSubmit" type="submit">
          {loading ? <ClipLoader size={20} color="#FFA500" /> : "Отправить"}
        </button>
      </form>
      <ToastContainer toastClassName="toastInfo" />
    </div>
  );
};
