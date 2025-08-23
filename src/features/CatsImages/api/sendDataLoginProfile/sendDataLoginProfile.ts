import type { ProfileValuesFields } from "../../components/LoginFormProfile/types";

export const sendDataLoginProfile = async (values: ProfileValuesFields) => {
  const response = await new Promise((resolve) => {
    const user = {
      name: "Zaven Papikyan",
      login: "Zav.com",
      password: "12345",
      userLoginDate: new Date().toISOString()
    };
    if (user.login === values.login && user.password === values.password) {
      setTimeout(() => resolve(user), 1000);
    } else {
      setTimeout(() => resolve("Такой пользователь не найден"), 1000);
    }
  });

  return response;
};
