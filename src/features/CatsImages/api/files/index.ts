export const fetchFiles = async (data: FormData) => {
  const response = new Promise<File[]>((resolve) =>
    setTimeout(() => {
      const result = data.getAll("files") as File[];
      resolve(result);
    }, 1000)
  );

  return response;
};
