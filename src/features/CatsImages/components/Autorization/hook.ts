import { useNavigate } from "react-router";
import type { ValuesFields } from "./types";
import { sendData } from "../../api/formData";
import { useCallback, useEffect, useState } from "react";

export const useAutorization = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onSubmitForm = useCallback(
    async (data: ValuesFields) => {
      if (data.login && data.password) {
        const result = await sendData(data);
        if (result) {
          localStorage.setItem("isAuth", "true");
          navigate("/cats");
        }
      }
    },
    [navigate]
  );

  const showPassword = () => {
    setIsShowPassword((prev) => !prev);
  }

  useEffect(() => {
     const isAuth = localStorage.getItem('isAuth') === 'true'
     if(isAuth) {
      navigate('/cats');
     }
  }, [navigate])

  return { onSubmitForm, showPassword, isShowPassword };
};
