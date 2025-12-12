import type { ICreateUserResponse } from "./types";

export const createUser = async (
  data: ICreateUserResponse
): Promise<string> => {
  const response = await new Promise<string>((resolve) => {
    if (data) {
      setTimeout(() => resolve("Данный пользователь успешно создан"), 1000);
    }
  });
  return response;
};
