import {RowType} from './SuperTable.types';

export type PaginationProps = {
  pages: RowType[][];
  setCurrentPage: (pageIndex: number) => void;
  controlOption?: PaginationOptions;
};

export enum PaginationOptionsEnum {
  simple = 'simple',
  numbers = 'numbers',
  simple_numbers = 'simple_numbers',
  full = 'full',
  full_numbers = 'full_numbers',
  first_last_numbers = 'first_last_numbers',
}

export type PaginationOptions =
  | 'simple'
  | 'numbers'
  | 'simple_numbers'
  | 'full'
  | 'full_numbers'
  | 'first_last_numbers';
