import { PaginationOptions } from "./Paginations.types";

type ColumnCommon<T extends Record<string, unknown>> = {
  _index: number;
  textAling?: "left" | "right" | "center";
  title: string;
  selector: (row: T) => keyof T;
  sortCriteria?: (row: T) => unknown;
  searchCriteria?: (row: T) => unknown;
};

type ColumnTruncate<T extends Record<string, unknown>> =
  | {
      sortable?: false;
      sortMethod?: never;
    }
  | {
      sortable: true;
      sortMethod?: (data: T[], selector: (row: T) => keyof T) => T[];
    };

export type Column<T extends Record<string, unknown>> = ColumnCommon<T> &
  ColumnTruncate<T>;

export type NormalizedColumn<T extends Record<string, unknown>> = Column<T> & {
  _id: string;
  ascendingOrder: boolean;
};

type SuperTablePaginationTruncate =
  | {
      pagination?: false;
      paginationOption?: never;
    }
  | {
      pagination: true;
      paginationOption?: PaginationOptions;
    };

type SuperTableSearchTruncate<T extends Record<string, unknown>> =
  | {
      searcher?: false;
      searchMethod?: never;
    }
  | {
      pagination: true;
      searchMethod?: (
        searchValue: string,
        data: T[],
        columns: NormalizedColumn<T>[]
      ) => T[];
    };

type SuperTableCommon<T extends Record<string, unknown>> = {
  columns: Column<T>[];
  rows: T[];
  title?: string;
  textAling?: "left" | "right" | "center";
  defaultSortMethod?: (data: T[], selector: (row: T) => keyof T) => T[];
  defaultSearchMethod?: (
    searchValue: string,
    data: T[],
    columns: NormalizedColumn<T>[]
  ) => T[];
  exportable?: boolean;
  searcher?: boolean;
};

export type SuperTableProps<T extends Record<string, unknown>> =
  SuperTableCommon<T> &
    SuperTablePaginationTruncate &
    SuperTableSearchTruncate<T>;
