export type TUserDataProfile = {
  name: string;
  login: string;
  password: string;
  userLoginDate: string;
}


export type OpenModalProps = {
  setOpen: (arg: boolean) => void;
  setUpdateUserProfile: (arg: TUserDataProfile) => void;
};

export type ValuesFieldsModal = {
  name: string;
  login: string;
  password: string;
};
