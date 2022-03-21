import {useCallback, useEffect, useRef, useState} from 'react';
import {ColumnType, ISuperTableProps, RowType} from './SuperTable.types';
import chunk from 'lodash.chunk';
import {v4 as uuidv4} from 'uuid';
import cloneDeep from 'lodash.clonedeep';
import flatten from 'lodash.flatten';

type NormalizedColumnType = ColumnType & {
  _id: string;
};

export const useSuperTable = (
  data: ISuperTableProps['data'],
  columns: ISuperTableProps['columns'],
  defaultSortMethod: ISuperTableProps['defaultSortMethod']
) => {
  const [currentRows, setRows] = useState<ISuperTableProps['data']>([]);
  const [normalizedColumns, setNormalizedColums] = useState<NormalizedColumnType[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const pages = useRef<RowType[][]>(chunk(data, 10));
  const columnBeingSortedID = useRef<string>('');
  const stringComparator = useCallback(Intl.Collator('es').compare, []);

  const normalizeColumns = (): NormalizedColumnType[] => {
    return columns.map((column: ColumnType) => ({
      ...column,
      _id: uuidv4(),
      ascendingOrder: false,
    }));
  };

  const defaultSort: ISuperTableProps['defaultSortMethod'] =
    defaultSortMethod ||
    ((selector: ColumnType['selector']) => {
      return [...data].sort((a: RowType, b: RowType) => {
        const [keyA, keyB] = [selector(a), selector(b)];

        const bothAreNumbers = typeof keyA === 'number' && typeof keyB === 'number';
        if (bothAreNumbers) return keyA - keyB;

        if (typeof keyA === 'string') return stringComparator(keyA, keyB.toString());

        return 0;
      });
    });

  const reversePageRows = () => {
    pages.current = pages.current.map(page => [...page].reverse()).reverse();
    setRows(pages.current[0]);
  };

  const updatePages = (updateData: RowType[]) => {
    pages.current = chunk(updateData, rowsPerPage);
    setRows(pages.current[0]);
  };

  const handleRowsAmmountToShow = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value: number = parseInt(event.target.value);

    if (Number.isNaN(rowsPerPage)) {
      console.error(
        'A data type that was obtained from the rows per page selector is not a number'
      );
      return;
    }
    setRowsPerPage(value);
  };

  const handleSort = (columnToSort: NormalizedColumnType) => {
    const isTheColumnBeingSorted = columnToSort._id === columnBeingSortedID.current;
    if (isTheColumnBeingSorted) return reversePageRows();

    columnBeingSortedID.current = columnToSort._id;

    const [selector, customSortMethod] = [columnToSort.selector, columnToSort.customSortMethod];

    const newData: RowType[] = customSortMethod
      ? customSortMethod(cloneDeep(data), selector)
      : defaultSort(selector);
    updatePages(newData);
  };

  useEffect(() => {
    updatePages(flatten(pages.current));
  }, [rowsPerPage]);

  useEffect(() => {
    setNormalizedColums(normalizeColumns());
    setRows(pages.current[0]);
  }, []);

  return {
    currentRows,
    normalizedColumns,
    rowsPerPage,
    handleRowsAmmountToShow,
    handleSort,
  };
};
