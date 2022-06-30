import React, { HTMLAttributes } from 'react';
import 'styled-components';

type BoxElement = {
  backgroundColor?: string;
  textColor?: string;
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBotton?: string;
  paddingLeft?: string;
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: string;
  gap?: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary?: string;
      tableBanner?: string;
      inPrimaryText?: string;
      paginationNavButton?: string;
      paginationNumberButton?: string;
      selectedPageButtonBackround?: string;
      selectedPageButtonText?: string;
      tableHeadersBackground?: string;
      tableHeadersText?: string;
      tableCellBackground?: string;
      tableCellText?: string;
    };
    paginationButtons?: BoxElement;
    numberButtons?: BoxElement;
    paginationContainer?: BoxElement;
    header?: BoxElement;
    tableHeaders?: BoxElement;
    tableCells?: BoxElement;
  }
}
