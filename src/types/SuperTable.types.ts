import {PaginationOptions} from './Paginations.types';

type RowPropsType = number | string | JSX.Element;
export type RowType = {[key: string]: RowPropsType};

export type ColumnSelectorType = (row: RowType) => RowPropsType;
export type CustomSortMethodType = (data: RowType[], selector: ColumnSelectorType) => RowType[];

type ColumnCommonProps = {
  _index: number;
  title: string;
  textAlign?: 'right' | 'left';
  selector: ColumnSelectorType;
};
type ColumnTruncateType =
  | {
      sortable?: false;
      customSortMethod?: never;
    }
  | {
      sortable: true;
      customSortMethod?: CustomSortMethodType;
    };
export type ColumnType = ColumnCommonProps & ColumnTruncateType;

export interface ISuperTableProps {
  columns: ColumnType[];
  data: RowType[];
  title?: string;
  textAlign?: 'right' | 'left';
  defaultSortMethod?: (selector: ColumnSelectorType) => RowType[];
  exportable?: boolean;
  pagination?: boolean;
  paginationOption?: PaginationOptions;
  searcher?: boolean;
}
