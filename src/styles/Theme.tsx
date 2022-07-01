import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

interface CustomThemeProviderProps {
  children?: React.ReactNode;
  theme?: DefaultTheme;
}

const theme: DefaultTheme = {
  colors: {
    primary: "#354a5f",
    tableBanner: "#354a5f",
    inPrimaryText: "#e9ebec",
    paginationNavButton: "#354a5f",
    paginationNumberButton: "#354a5f",
    selectedPageButtonBackround: "#3c73a9",
    selectedPageButtonText: "#e9ebec",
    tableHeadersBackground: "#354a5f",
    tableHeadersText: "#e9ebec",
    tableCellBackground: "#ffffff",
    tableCellText: "#000000",
  },
  paginationContainer: {
    gap: '10px',
    marginTop: '10px',
  },
};

const CustomThemeProvider = (props: CustomThemeProviderProps) => (
  <ThemeProvider theme={{ ...theme, ...props.theme }}>
    {props.children}
  </ThemeProvider>
);

export default CustomThemeProvider;
