import React from "react";
import { usePagination } from "../../hooks/usePagination";
import {
  PaginationOptionsEnum,
  PaginationProps,
} from "../../types/Paginations.types";
import { NumberButtons } from "../NumbersButtons/NumberButtons";
import { Button } from "../Button/Button";
import { PaginationContainer } from "./Pagination.elements";

export const Pagination = <T extends object>({
  pages,
  setCurrentPage,
  controlOption = PaginationOptionsEnum.full,
}: PaginationProps<T>) => {
  const {
    pagesIndices,
    currentPageIndex,
    navegableIndices,
    canGoBackward,
    canGoFordward,
    goFirst,
    goNext,
    goToPage,
    goPrevious,
    goLast,
  } = usePagination(pages, setCurrentPage);

  const paginationControls = {
    [PaginationOptionsEnum.simple]: (
      <PaginationContainer elementName="paginationContainer">
        <Button
          onClick={goPrevious}
          label={"Previous"}
          disabled={!canGoBackward}
        />
        <Button onClick={goNext} label={"Next"} disabled={!canGoFordward} />
      </PaginationContainer>
    ),
    [PaginationOptionsEnum.numbers]: (
      <PaginationContainer elementName="paginationContainer">
        <NumberButtons
          numbers={pagesIndices}
          currentSelected={currentPageIndex}
          onNumberClick={goToPage}
        />
      </PaginationContainer>
    ),
    [PaginationOptionsEnum.simple_numbers]: (
      <PaginationContainer elementName="paginationContainer">
        <Button
          onClick={goPrevious}
          label={"Previous"}
          disabled={!canGoBackward}
        />
        <NumberButtons
          numbers={navegableIndices}
          currentSelected={currentPageIndex}
          onNumberClick={goToPage}
        />
        <Button onClick={goNext} label={"Next"} disabled={!canGoFordward} />
      </PaginationContainer>
    ),
    [PaginationOptionsEnum.full]: (
      <PaginationContainer elementName="paginationContainer">
        <Button onClick={goFirst} label={"First"} disabled={!canGoBackward} />
        <Button
          onClick={goPrevious}
          label={"Previous"}
          disabled={!canGoBackward}
        />
        <Button onClick={goNext} label={"Next"} disabled={!canGoFordward} />
        <Button onClick={goLast} label={"Last"} disabled={!canGoFordward} />
      </PaginationContainer>
    ),
    [PaginationOptionsEnum.full_numbers]: (
      <PaginationContainer elementName="paginationContainer">
        <Button onClick={goFirst} label={"First"} disabled={!canGoBackward} />
        <Button
          onClick={goPrevious}
          label={"Previous"}
          disabled={!canGoBackward}
        />
        <NumberButtons
          numbers={navegableIndices}
          currentSelected={currentPageIndex}
          onNumberClick={goToPage}
        />
        <Button onClick={goNext} label={"Next"} disabled={!canGoFordward} />
        <Button onClick={goLast} label={"Last"} disabled={!canGoFordward} />
      </PaginationContainer>
    ),
    [PaginationOptionsEnum.first_last_numbers]: (
      <PaginationContainer elementName="paginationContainer">
        <Button onClick={goFirst} label={"First"} disabled={!canGoBackward} />
        <NumberButtons
          numbers={navegableIndices}
          currentSelected={currentPageIndex}
          onNumberClick={goToPage}
        />
        <Button onClick={goLast} label={"Last"} disabled={!canGoBackward} />
      </PaginationContainer>
    ),
  };

  return <span>{paginationControls[controlOption]}</span>;
};
