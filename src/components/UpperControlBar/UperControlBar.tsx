import React from "react"
import { ControlBarContainer, PagesAndSearchControlBarContainer } from "./UpperControlBar.elements"

type UpperControlBarProps = {
    title?: string,
    rowsAmount: number,
    rowLength: number,
    showSearcher?: boolean,
    handleRowsAmmountToShow: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    handleSearchInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
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
        <ControlBarContainer>
        {title && <h1>{title}</h1>}
            <PagesAndSearchControlBarContainer>
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
    </PagesAndSearchControlBarContainer>
        </ControlBarContainer>
  )
}