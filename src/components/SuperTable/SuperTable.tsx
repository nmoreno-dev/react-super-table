/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useSuperTable } from "../../hooks/useSuperTable";
import { FontStyle } from "../../styles/FontStyles";
import CustomThemeProvider from "../../styles/Theme";
import { PaginationOptionsEnum } from "../../types/Paginations.types";
import { SuperTableProps } from "../../types/SuperTable.types";
import { Pagination } from "../Pagination/Pagination";
import { UpperControlBar } from "../UpperControlBar/UperControlBar";
import {
  Table,
  Headers,
  Header,
  Row,
  SuperTableContainer,
} from "./SuperTable.elements";

export const SuperTable = <T extends Record<string, unknown>>(
  props: SuperTableProps<T>
) => {
  const { rows = [], columns } = props;
  const defaultTextAlign = props.textAling || "left";

  const {
    pages,
    currentRows = [],
    normalizedColumns,
    rowsAmount,
    handleRowsAmmountToShow,
    handleSort,
    handleSearchInputChange,
    handlePagination,
  } = useSuperTable<T>(
    rows,
    columns,
    props.defaultSortMethod,
    props.defaultSearchMethod
  );
  console.log("SuperTable Render");

  return (
    <CustomThemeProvider>
      <FontStyle />
      <SuperTableContainer>
        <UpperControlBar
          title={props.title}
          rowsAmount={rowsAmount}
          rowLength={rows.length}
          showSearcher={props.searcher}
          handleRowsAmmountToShow={handleRowsAmmountToShow}
          handleSearchInputChange={handleSearchInputChange}
        />
        <div>
          <Table>
            <Headers>
              <Row>
                {normalizedColumns.map((column: any, columnIndex: any) => (
                  <Header
                    key={columnIndex}
                    align={column.textAlign || defaultTextAlign}
                    onClick={() => handleSort(column)}
                  >
                    {column.title}
                  </Header>
                ))}
              </Row>
            </Headers>
            <tbody>
              {currentRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {normalizedColumns.map((column: any, columnIndex: any) => (
                    <td
                      key={columnIndex}
                      align={column.textAlign || defaultTextAlign}
                    >
                      {column.selector(row)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            {/* <tfoot></tfoot> */}
          </Table>
          {props.pagination && (
            <Pagination
              controlOption={
                props.paginationOption || PaginationOptionsEnum.simple
              }
              pages={pages}
              setCurrentPage={handlePagination}
            />
          )}
          {currentRows.length <= 0 && <p>There&apos;s no data to show</p>}
        </div>
      </SuperTableContainer>
    </CustomThemeProvider>
  );
};
