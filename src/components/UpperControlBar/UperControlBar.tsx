import React from "react"

type UpperControlBarProps = {
    title: string,
    rowsAmount: number,
    rowLength: number,
    showSearcher: boolean,
    handleRowsAmmountToShow: () => {},
    handleSearchInputChange: () => {}
}
export const UpperControlBar = (props: UpperControlBarProps) => {

    const {
        title,
        rowsAmount,
        rowLength,
        showSearcher,
        handleRowsAmmountToShow,
        handleSearchInputChange
    } = props
    return(
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {title && <h1>{title}</h1>}
        <span>
        Showing{' '}
        <select name="rowsPerPage" id="rowsPerPage" onChange={handleRowsAmmountToShow}>
            {rowsAmount >= 10 && <option value={10}>10</option>}
            {rowsAmount >= 25 && <option value={25}>25</option>}
            {rowsAmount >= 50 && <option value={50}>50</option>}
            {rowsAmount >= 100 && <option value={100}>100</option>}
            <option value={rowLength}>All</option>
        </select>{' '}
        of {rowsAmount} entries.
        </span>
        {showSearcher && (
        <span>
            Search: <input placeholder="Start typing here..." onChange={handleSearchInputChange} />
        </span>
        )}
    </div>
  )
}