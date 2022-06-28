import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary?: string;
      tableBanner?: string;
      inPrimaryText?: string;
      paginationNavButton?: string;
      paginationNumberButton?: string;
      paginationSelectedNumberButton?: string;
      tableHeadersBackground?: string;
      tableHeadersText?: string;
      tableCellBackground?: string;
      tableCellText?: string;
    };
  }
}
