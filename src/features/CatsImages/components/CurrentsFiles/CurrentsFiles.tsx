import "./style.css";
import { BarLoader } from "react-spinners";
import { useFiles } from "./useFiles";

export const CurrentsFiles = () => {
  const {loading, selectFiles, uploadFile, removeImage, uploadFiles} = useFiles();

  return (
    <div>
      {loading && <BarLoader width={"100%"} color="red" />}
      <div className="container-files">
        <input
          type="file"
          multiple
          onChange={selectFiles}
          className="fileInput"
        />
        <button onClick={uploadFiles} className="btn-upload">
          Загрузить
        </button>
      </div>
      <div className="container-images">
        {uploadFile.map((file, index) => (
          <div className="wrapper-image" key={index}>
            <img
              key={index}
              src={URL.createObjectURL(file)}
              className="currentImage"
              onClick={() => removeImage(file.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
