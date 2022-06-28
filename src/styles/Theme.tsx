import React from "react";
import { ThemeProvider, ThemeProviderComponent } from "styled-components";

type ThemeType = {
  colors: {
    primary?: string;
    tableBanner?: string;
    inPrimaryText?: string;
    pagesNavButton?: string;
    pagesNumberButton?: string;
    pagesCurrentNumberButton?: string;
    tableHeadersBackground?: string;
    tableHeadersText?: string;
    tableCellBackground?: string;
    tableCellText?: string;
  };
};

interface CustomThemeProviderProps {
  children?: React.ReactNode;
  theme?: ThemeType;
}

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

const CustomThemeProvider = (props: CustomThemeProviderProps) => (
  <ThemeProvider theme={{ ...theme, ...props.theme }}>
    {props.children}
  </ThemeProvider>
);

export default CustomThemeProvider;
