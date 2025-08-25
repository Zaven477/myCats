import { useCallback, useState } from "react";
import type { OpenModalProps, ValuesFieldsModal } from "./types";
import { sendDataLoginProfile } from "../../api/sendDataLoginProfile/sendDataLoginProfile";

export const useEditModal = ({
  setOpen,
  setUpdateUserProfile,
}: OpenModalProps) => {
  const [loading, setLoading] = useState(false)
  const onSubmitForm = useCallback(
    async (values: ValuesFieldsModal) => {
      if (!values.name && !values.login && !values.password) {
        return;
      }
      setLoading(true);
      const response = await sendDataLoginProfile(null, values);
      setLoading(false)
      if (typeof response === "object") {
        setUpdateUserProfile(response);
        localStorage.setItem("user", JSON.stringify(response));
        setOpen(false);
      }
    },
    [setOpen, setUpdateUserProfile]
  );

  return { onSubmitForm, loading };
};
