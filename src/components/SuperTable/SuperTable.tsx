import React from 'react';
import {ISuperTableProps} from './SuperTable.types';
import {useSuperTable} from './useSuperTable';

export const SuperTable = (props: ISuperTableProps) => {
  const {data, columns} = props;
  const defaultTextAlign = props.textAlign || 'left';
  const {
    currentRows = [],
    normalizedColumns,
    handleRowsAmmountToShow,
    handleSort,
  } = useSuperTable(data, columns, props.defaultSortMethod);
  console.log('SuperTable Render');

  return (
    <>
      <div>
        <span>
          Showing{' '}
          <select name="rowsPerPage" id="rowsPerPage" onChange={handleRowsAmmountToShow}>
            {data.length >= 10 && <option value={10}>10</option>}
            {data.length >= 25 && <option value={25}>25</option>}
            {data.length >= 50 && <option value={50}>50</option>}
            {data.length >= 100 && <option value={100}>100</option>}
            <option value={data.length}>All</option>
          </select>{' '}
          of {data.length} entries.
        </span>
        {props.title && <h1>{props.title}</h1>}
      </div>
      <div>
        <table width="100%">
          <thead>
            <tr>
              {normalizedColumns.map((column, columnIndex) => (
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
                {normalizedColumns.map((column, columnIndex) => (
                  <td key={columnIndex} align={column.textAlign || defaultTextAlign}>
                    {column.selector(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {/* <tfoot></tfoot> */}
        </table>
        <div>{currentRows.length <= 0 && <p>There's no data to show</p>}</div>
      </div>
    </>
  );
};
