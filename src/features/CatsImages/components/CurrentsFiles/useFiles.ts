import { useCallback, useEffect, useState } from "react";
import type { CurrentFile } from "./types";
import { fetchFiles } from "../../api/files";
import { base64ToFile, fileToBase64 } from "./utils";

export const useFiles = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadFile, setUploadFile] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const selectFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(Array.from(event.target.files ?? []));
  };

  const uploadFiles = useCallback(async () => {
    const data = new FormData();
    files.forEach((file) => {
      data.append("files", file);
    });
    setLoading(true);
    const response = await fetchFiles(data);
    setLoading(false);
    setUploadFile((prev) => [...prev, ...response]);
  }, [files]);

  const removeImage = useCallback(
    (name: string) => {
      const removeCurrentImage = uploadFile.filter(
        (file) => file.name !== name
      );
      setUploadFile(removeCurrentImage);
    },
    [uploadFile]
  );

  useEffect(() => {
    (async () => {
      const serialized = await Promise.all(uploadFile.map(fileToBase64));
      localStorage.setItem("files", JSON.stringify(serialized));
    })();
  }, [uploadFile]);

  useEffect(() => {
    (async () => {
      const saved = localStorage.getItem("files");
      if (saved) {
        const parsed = JSON.parse(saved);
        const restored = await Promise.all(
          parsed.map((file: CurrentFile) =>
            base64ToFile(file.data, file.name, file.type)
          )
        );
        setUploadFile(restored);
      }
    })();
  }, []);

  return { loading, selectFiles, uploadFile, removeImage, uploadFiles };
};
