import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import chunk from "lodash.chunk";
import { v4 as uuidv4 } from "uuid";
import cloneDeep from "lodash.clonedeep";
import flatten from "lodash.flatten";
import {
  Column,
  NormalizedColumn,
  SuperTableProps,
} from "../types/SuperTable.types";

export const useSuperTable = <T extends Record<string, unknown>>(
  data: T[],
  columns: SuperTableProps<T>["columns"],
  defaultSortMethod: SuperTableProps<T>["defaultSortMethod"],
  defaultSearchMethod: SuperTableProps<T>["defaultSearchMethod"]
) => {
  const [currentRows, setCurrentRows] = useState<T[]>([]);
  const [normalizedColumns, setNormalizedColums] = useState<
    NormalizedColumn<T>[]
  >([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pages, setPages] = useState<T[][]>(chunk(data, 10));
  const columnBeingSortedID = useRef("");

  const stringComparator = useCallback(Intl.Collator("es").compare, []);

  const normalizeColumns = (): NormalizedColumn<T>[] => {
    return columns.map((column) => ({
      ...column,
      _id: uuidv4(),
      ascendingOrder: false,
    }));
  };

  const defaultSort =
    defaultSortMethod ||
    ((data: T[], selector: Column<T>["selector"]) =>
      [...data].sort((a, b) => {
        const [keyA, keyB] = [selector(a), selector(b)];

        const bothAreNumbers =
          typeof keyA === "number" && typeof keyB === "number";
        if (bothAreNumbers) return keyA - keyB;

        if (typeof keyA === "string")
          return stringComparator(keyA, keyB.toString());

        return 0;
      }));

  const search =
    defaultSearchMethod ||
    ((searchValue: string, data: T[], columns: Column<T>[]) =>
      data.filter((row) =>
        searchValue
          ? columns.some((column) => {
              if (column.searchCriteria) console.log(column.searchCriteria);

              const getValueToCompare =
                column.searchCriteria || column.selector;

              const valueToCompare = getValueToCompare(row);

              if (valueToCompare) {
                return (
                  valueToCompare
                    .toString()
                    .toLowerCase()
                    .indexOf(searchValue.toLowerCase()) > -1
                );
              }
            })
          : true
      ));

  const reversePageRows = () => {
    setPages(pages.map((page) => [...page].reverse()).reverse());
    setCurrentRows(pages[0]);
  };

  const updatePages = (updateData: T[]) => {
    setPages(chunk(updateData, rowsPerPage));
  };

  const handleRowsAmmountToShow = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value: number = parseInt(event.target.value);

    if (Number.isNaN(rowsPerPage)) {
      console.error(
        "The data that was obtained from the rows per page selector is not a number"
      );
      return;
    }
    setRowsPerPage(value);
  };

  const handleSort = (columnToSort: NormalizedColumn<T>) => {
    const isTheColumnBeingSorted =
      columnToSort._id === columnBeingSortedID.current;
    if (isTheColumnBeingSorted) return reversePageRows();

    columnBeingSortedID.current = columnToSort._id;

    const [selector, sortMethod] = [
      columnToSort.selector,
      columnToSort.sortMethod,
    ];

    const newData: T[] = sortMethod
      ? sortMethod(cloneDeep(data), selector)
      : defaultSort(data, selector);

    updatePages(newData);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const newData = search(inputValue, data, normalizedColumns);
    updatePages(newData);
  };

  const handlePagination = (pageIndex: number) => {
    setCurrentRows(pages[pageIndex]);
  };

  useEffect(() => {
    updatePages(flatten(pages));
  }, [rowsPerPage]);

  useEffect(() => {
    console.log(pages);

    setCurrentRows(pages[0]);
  }, [pages]);

  useEffect(() => {
    setNormalizedColums(normalizeColumns());
    setCurrentRows(pages[0]);
  }, []);

  return {
    pages: pages,
    currentRows,
    normalizedColumns,
    rowsPerPage,
    rowsAmount: flatten(pages).length,
    handleRowsAmmountToShow,
    handleSort,
    handleSearchInputChange,
    handlePagination,
  };
};
