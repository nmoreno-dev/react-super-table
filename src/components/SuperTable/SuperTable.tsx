import React from 'react';
import {useSuperTable} from '../../hooks/useSuperTable';
import {PaginationOptionsEnum} from '../../types/Paginations.types';
import {SuperTableProps} from '../../types/SuperTable.types';
import {Pagination} from '../Pagination/Pagination';

export const SuperTable = <T extends Object>(props: SuperTableProps<T>) => {
  const {rows = [], columns} = props;
  const defaultTextAlign = props.textAling || 'left';

  const {
    pages,
    currentRows = [],
    normalizedColumns,
    rowsAmount,
    handleRowsAmmountToShow,
    handleSort,
    handleSearchInputChange,
    handlePagination,
  } = useSuperTable<T>(rows, columns, props.defaultSortMethod, props.defaultSearchMethod);
  console.log('SuperTable Render');

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {props.title && <h1>{props.title}</h1>}
        <span>
          Showing{' '}
          <select name="rowsPerPage" id="rowsPerPage" onChange={handleRowsAmmountToShow}>
            {rowsAmount >= 10 && <option value={10}>10</option>}
            {rowsAmount >= 25 && <option value={25}>25</option>}
            {rowsAmount >= 50 && <option value={50}>50</option>}
            {rowsAmount >= 100 && <option value={100}>100</option>}
            <option value={rows.length}>All</option>
          </select>{' '}
          of {rowsAmount} entries.
        </span>
        {props.searcher && (
          <span>
            Search: <input placeholder="Start typing here..." onChange={handleSearchInputChange} />
          </span>
        )}
      </div>
      <div>
        <table width="100%">
          <thead>
            <tr>
              {normalizedColumns.map((column: any, columnIndex: any) => (
                <th
                  key={columnIndex}
                  align={column.textAlign || defaultTextAlign}
                  onClick={() => handleSort(column)}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {normalizedColumns.map((column: any, columnIndex: any) => (
                  <td key={columnIndex} align={column.textAlign || defaultTextAlign}>
                    {column.selector(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {/* <tfoot></tfoot> */}
        </table>
        <div className="bottom-controls">
          {currentRows.length <= 0 && <p>There's no data to show</p>}
          {props.pagination && (
            <Pagination
              controlOption={props.paginationOption || PaginationOptionsEnum.simple}
              pages={pages}
              setCurrentPage={handlePagination}
            />
          )}
        </div>
      </div>
    </>
  );
};
