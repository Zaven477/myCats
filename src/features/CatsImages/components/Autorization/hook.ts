import { useNavigate } from "react-router";
import type { ValuesFields } from "./types";
import { sendData } from "../../api/SendData";
import { useCallback, useEffect, useState } from "react";
import { URL_CATS } from "../../../../constants";

export const useAutorization = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onSubmitForm = useCallback(
    async (data: ValuesFields) => {
      if (data.login && data.password) {
        const result = await sendData(data);
        if (result) {
          localStorage.setItem("isAuth", "true");
          navigate(URL_CATS);
        }
      }
    },
    [navigate]
  );

  const showPassword = useCallback(() => {
    setIsShowPassword((prev) => !prev);
  }, []);

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth") === "true";
    if (isAuth) {
      navigate(URL_CATS);
    }
  }, [navigate]);

  return { onSubmitForm, showPassword, isShowPassword };
};
