import { useNavigate } from "react-router";
import "./style.css";
import { URL_CATS } from "../constants";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(URL_CATS);
  }

  return (
    <div className="text-info">
      <h1>По вашему запросу ничего не найдено</h1>
      <button className="btn-back" onClick={goBack}>Вернуться на главную</button>
    </div>
  );
};
