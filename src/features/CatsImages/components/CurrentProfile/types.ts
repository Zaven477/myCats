export type CurrentUser = {
  name: string;
  login: string;
  password: string;
};

export type OpenEditModalProps = {
  onOpenEditModal: () => void;
  isChecked: boolean;
};
