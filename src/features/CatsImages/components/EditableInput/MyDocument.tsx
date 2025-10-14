import type { MyDocumentProps } from "./types";
import { Page, Text, Document } from "@react-pdf/renderer";

export const MyDocument = ({ text }: MyDocumentProps) => {
  return (
    <Document>
      <Page>
        <Text
          style={{
            paddingLeft: "5px",
            paddingTop: "5px",
            paddingRight: "5px",
            fontSize: "16px",
          }}
        >
          {text}
        </Text>
      </Page>
    </Document>
  );
};
