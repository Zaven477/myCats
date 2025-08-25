import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { ProfileValuesFields } from "./types";
import { sendDataLoginProfile } from "../../api/sendDataLoginProfile/sendDataLoginProfile";
import { URL_USER_PROFILE } from "../../../../constants";
import { toast } from "react-toastify";

export const useLoginFormProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isShowPassword, setShowPassword] = useState(false);

  const handleSubmitForm = useCallback(
    async (values: ProfileValuesFields) => {
      setLoading(true);
      const response = await sendDataLoginProfile(values, null);
      setLoading(false);
      if (typeof response === "object") {
        localStorage.setItem("user", JSON.stringify(response));
        navigate(URL_USER_PROFILE);
      }
      if (typeof response === "string") {
        toast.warning(response);
      }
    },
    [navigate]
  );

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      navigate(URL_USER_PROFILE);
    }
  }, [navigate]);

  const showPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return { loading, handleSubmitForm, showPassword, isShowPassword };
};
