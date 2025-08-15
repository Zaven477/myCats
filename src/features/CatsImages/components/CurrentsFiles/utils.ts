export const fileToBase64 = (file: File) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve({
        name: file.name,
        type: file.type,
        data: reader.result,
      });
    };
    reader.readAsDataURL(file);
  });
};

export const base64ToFile = (base64: string, name: string, type: string) => {
  return fetch(base64)
    .then((res) => res.arrayBuffer())
    .then((buf) => new File([buf], name, { type }));
};
