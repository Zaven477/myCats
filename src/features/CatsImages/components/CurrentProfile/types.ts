import type { TUserDataProfile } from "../EditModal/types";

export type CurrentUser = {
  name: string;
  login: string;
  password: string;
};

export type OpenEditModalProps = {
  onOpenEditModal: () => void;
  isChecked: boolean;
  updateUser: TUserDataProfile | null;
};
