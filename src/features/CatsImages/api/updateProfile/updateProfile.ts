import type { TUserDataProfile, ValuesFieldsModal } from "../../components/EditModal/types";

const user = {
  name: "Zaven Papikyan",
  login: "Zav.com",
  password: "12345",
  userLoginDate: new Date().toISOString()
};

const currentUserProfile = new Map();
currentUserProfile.set("currentUser", user);

export const updateProfile = async (values: ValuesFieldsModal): Promise<TUserDataProfile> => {
  const response = await new Promise<TUserDataProfile>((resolve) => {
    if (values.name && values.login && values.password) {
      currentUserProfile.get("currentUser").name = values.name;
      currentUserProfile.get("currentUser").login = values.login;
      currentUserProfile.get("currentUser").password = values.password;
      resolve(currentUserProfile.get("currentUser"));
    } else if (values.name) {
      currentUserProfile.get("currentUser").name = values.name;
      resolve(currentUserProfile.get("currentUser"));
    } else if (values.login) {
      currentUserProfile.get("currentUser").login = values.login;
      resolve(currentUserProfile.get("currentUser"));
    } else {
      currentUserProfile.get("currentUser").password = values.password;
      resolve(currentUserProfile.get("currentUser"));
    }
  });
  return response;
};
