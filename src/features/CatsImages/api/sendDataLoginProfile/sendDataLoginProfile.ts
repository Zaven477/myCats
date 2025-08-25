import type { TUserDataProfile } from "../../components/EditModal/types";
import type {
  ProfileValuesFields,
  TUpdateDataUser,
} from "../../components/LoginFormProfile/types";

const errorMessage = 'Такой пользователь не найден';

export const cache = new Map();

export const sendDataLoginProfile = async (
  values: ProfileValuesFields | null,
  updateDataUser: TUpdateDataUser | null
): Promise<TUserDataProfile | typeof errorMessage> => {
  const response = await new Promise<TUserDataProfile | typeof errorMessage>((resolve) => {
    if (values && !cache.has("user")) {
      const user = {
        login: values.login,
        password: values.password,
        userLoginDate: new Date().toISOString(),
      };
      cache.set("user", user);
      setTimeout(() => resolve(cache.get("user")), 1000);
    }
    if (updateDataUser && updateDataUser.name) {
      cache.get("user").name = updateDataUser.name;
      setTimeout(() => resolve(cache.get("user")), 1000);
    }
    if (updateDataUser && updateDataUser.login) {
      cache.get("user").login = updateDataUser.login;
      setTimeout(() => resolve(cache.get("user")), 1000);
    }
    if (updateDataUser && updateDataUser.password) {
      cache.get("user").password = updateDataUser.password;
      setTimeout(() => resolve(cache.get("user")), 1000);
    }
    if (
      updateDataUser &&
      updateDataUser.name &&
      updateDataUser.login &&
      updateDataUser.password
    ) {
      cache.get("user").name = updateDataUser.name;
      cache.get("user").login = updateDataUser.login;
      cache.get("user").password = updateDataUser.password;
      setTimeout(() => resolve(cache.get("user")), 1000);
    } else if (
      cache.get("user").login === values?.login &&
      cache.get("user").password === values?.password
    ) {
      setTimeout(() => resolve(cache.get("user")), 1000);
    } else {
      setTimeout(() => resolve(errorMessage), 1000);
    }
  });

  return response;
};
