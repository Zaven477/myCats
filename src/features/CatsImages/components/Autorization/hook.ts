import { useNavigate } from "react-router";
import type { ValuesFields } from "./types";
import { sendData } from "../../api/formData";
import { useCallback, useEffect } from "react";

export const useAutorization = () => {
  const navigate = useNavigate();

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

  useEffect(() => {
     const isAuth = localStorage.getItem('isAuth') === 'true'
     if(isAuth) {
      navigate('/cats');
     }
  }, [navigate])

  return { onSubmitForm };
};
