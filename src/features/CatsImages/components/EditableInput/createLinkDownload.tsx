import { pdf } from "@react-pdf/renderer";
import type { JSX } from "react";

//создаем временную ссылку для скачивания

export const createLinkDownload = async (
  component: JSX.Element,
  fileName: string
) => {
  try {
    const blob = await pdf(component).toBlob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  } catch (error) {
    console.log("Error generating PDF:", error);
  }
};
