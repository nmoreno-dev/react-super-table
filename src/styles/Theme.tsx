import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#354a5f",
    tableBanner: "#354a5f",
    inPrimaryText: "#e9ebec",
    pagesNavButton: "#354a5f",
    pagesNumberButton: "#354a5f",
    pagesCurrentNumberButton: "#3c73a9",
    tableHeadersBackground: "#354a5f",
    tableHeadersText: "#e9ebec",
    tableCellBackground: "#ffffff",
    tableCellText: "#000000",
  },
};

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
