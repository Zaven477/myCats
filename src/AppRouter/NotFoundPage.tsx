import { useNavigate } from "react-router";
import "./style.css";
import { URL_CATS } from "../constants";
import { useCallback } from "react";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(URL_CATS);
  }, [navigate]);

  return (
    <div className="text-info">
      <h1>По вашему запросу ничего не найдено</h1>
      <button className="btn-back" onClick={goBack}>
        Вернуться на главную
      </button>
    </div>
  );
};
