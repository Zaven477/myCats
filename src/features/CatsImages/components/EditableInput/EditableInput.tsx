import { useEffect, useState, type JSX } from "react";
import "./style.css";
import { MyDocument } from "./MyDocument";
import { createLinkDownload } from "./createLinkDownload";
import { PDFViewer } from "@react-pdf/renderer";

export const EditableInput = () => {
  const [text, setText] = useState("");
  const [isEditable, setEditable] = useState(false);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const textInput = () => {
    setEditable((prev) => !prev);
  };

  const downloadPdf = async (component: JSX.Element, fileName: string) => {
    await createLinkDownload(component, fileName);
  };

  useEffect(() => {
    const saved = localStorage.getItem("data");
    if (saved) {
      setText(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", text);
  }, [text]);

  return (
    <div className="container">
      <div className="fieldBtn">
        {!isEditable ? (
          <PDFViewer width={500} height={300} className="documentpdf">
            <MyDocument text={text} />
          </PDFViewer>
        ) : (
          <textarea
            value={text}
            className="field"
            onChange={handleTextChange}
          />
        )}
        <div className="btnContainer">
          <button className="btnSave" onClick={textInput}>
            {!isEditable ? "Редактирование" : "Сохранить"}
          </button>
          <button
            className="btnDownload"
            onClick={() => downloadPdf(<MyDocument text={text} />, "my.pdf")}
          >
            Скачать PDF
          </button>
        </div>
      </div>
    </div>
  );
};
