import { useCallback } from "react";
import { updateProfile } from "../../api/updateProfile/updateProfile";
import type { OpenModalProps, ValuesFieldsModal } from "./types";

export const useEditModal = ({
  setOpen,
  setUpdateUserProfile,
}: OpenModalProps) => {
  const onSubmitForm = useCallback(
    async (values: ValuesFieldsModal) => {
      if (!values.name && !values.login && !values.password) {
        return;
      }
      const response = await updateProfile(values);
      setUpdateUserProfile(response);
      localStorage.setItem("user", JSON.stringify(response));
      setOpen(false);
    },
    [setOpen, setUpdateUserProfile]
  );

  return { onSubmitForm };
};
