import type { ValuesFields } from "../../components/Autorization/types";

export const sendData = async (data: ValuesFields) => {
  const response = await new Promise((resolve) =>
    setTimeout(() => resolve(data), 100)
  );
  return response;
};
