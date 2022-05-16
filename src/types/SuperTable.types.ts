import {PaginationOptions} from './Paginations.types';

type ColumnCommon<T extends Record<string, any>> = {
  _index: number;
  textAling?: 'left' | 'right' | 'center';
  title: string;
  selector: (row: T) => keyof T;
  sortCriteria?: (row: T) => any;
  searchCriteria?: (row: T) => any;
};

type ColumnTruncate<T extends Object> =
  | {
      sortable?: false;
      sortMethod?: never;
    }
  | {
      sortable: true;
      sortMethod?: (data: T[], selector: (row: T) => keyof T) => T[];
    };

export type Column<T extends Object> = ColumnCommon<T> & ColumnTruncate<T>;

export type NormalizedColumn<T extends Object> = Column<T> & {
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

type SuperTableSearchTruncate<T extends object> =
  | {
      searcher?: false;
      searchMethod?: never;
    }
  | {
      pagination: true;
      searchMethod?: (searchValue: string, data: T[], columns: NormalizedColumn<T>[]) => T[];
    };

type SuperTableCommon<T extends Object> = {
  columns: Column<T>[];
  rows: T[];
  title?: string;
  textAling?: 'left' | 'right' | 'center';
  defaultSortMethod?: (data: T[], selector: (row: T) => keyof T) => T[];
  defaultSearchMethod?: (searchValue: string, data: T[], columns: NormalizedColumn<T>[]) => T[];
  exportable?: boolean;
  searcher?: boolean;
};

export type SuperTableProps<T extends object> = SuperTableCommon<T> &
  SuperTablePaginationTruncate &
  SuperTableSearchTruncate<T>;
