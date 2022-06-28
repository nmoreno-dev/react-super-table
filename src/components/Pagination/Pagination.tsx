import React from "react";
import { usePagination } from "../../hooks/usePagination";
import {
  PaginationOptionsEnum,
  PaginationProps,
} from "../../types/Paginations.types";
import { NumberButtons } from "../NumbersButtons/NumberButtons";
import { Button } from "../Button/Button";

export const Pagination = <T extends object>({
  pages,
  setCurrentPage,
  controlOption = PaginationOptionsEnum.full,
}: PaginationProps<T>) => {
  const {
    pagesIndices,
    currentPageIndex,
    navegableIndices,
    goFirst,
    goNext,
    goToPage,
    goPrevious,
    goLast,
  } = usePagination(pages, setCurrentPage);
  const thereIsNoPrevPage = !(currentPageIndex > 0);
  const thereIsNoNextPage = !(currentPageIndex < pagesIndices.length - 1);
  console.log("render pagination");

  const paginationControls = {
    [PaginationOptionsEnum.simple]: (
      <>
        <Button
          onClick={goPrevious}
          label={"Previous"}
          disabled={thereIsNoPrevPage}
        />
        <Button onClick={goNext} label={"Next"} disabled={thereIsNoNextPage} />
      </>
    ),
    [PaginationOptionsEnum.numbers]: (
      <NumberButtons
        numbers={pagesIndices}
        currentSelected={currentPageIndex}
        onNumberClick={goToPage}
      />
    ),
    [PaginationOptionsEnum.simple_numbers]: (
      <>
        <Button
          onClick={goPrevious}
          label={"Previous"}
          disabled={thereIsNoPrevPage}
        />
        <NumberButtons
          numbers={navegableIndices}
          currentSelected={currentPageIndex}
          onNumberClick={goToPage}
        />
        <Button onClick={goNext} label={"Next"} disabled={thereIsNoNextPage} />
      </>
    ),
    [PaginationOptionsEnum.full]: (
      <>
        <Button
          onClick={goFirst}
          label={"First"}
          disabled={thereIsNoPrevPage}
        />
        <Button
          onClick={goPrevious}
          label={"Previous"}
          disabled={thereIsNoPrevPage}
        />
        <Button onClick={goNext} label={"Next"} disabled={thereIsNoNextPage} />
        <Button onClick={goLast} label={"Last"} disabled={thereIsNoPrevPage} />
      </>
    ),
    [PaginationOptionsEnum.full_numbers]: (
      <>
        <Button
          onClick={goFirst}
          label={"First"}
          disabled={thereIsNoPrevPage}
        />
        <Button
          onClick={goPrevious}
          label={"Previous"}
          disabled={thereIsNoPrevPage}
        />
        <NumberButtons
          numbers={navegableIndices}
          currentSelected={currentPageIndex}
          onNumberClick={goToPage}
        />
        <Button onClick={goNext} label={"Next"} disabled={thereIsNoNextPage} />
        <Button onClick={goLast} label={"Last"} disabled={thereIsNoNextPage} />
      </>
    ),
    [PaginationOptionsEnum.first_last_numbers]: (
      <>
        <Button
          onClick={goFirst}
          label={"First"}
          disabled={thereIsNoPrevPage}
        />
        <NumberButtons
          numbers={navegableIndices}
          currentSelected={currentPageIndex}
          onNumberClick={goToPage}
        />
        <Button onClick={goLast} label={"Last"} disabled={thereIsNoPrevPage} />
      </>
    ),
  };

  return <span>{paginationControls[controlOption]}</span>;
};
