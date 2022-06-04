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
          onclick={goPrevious}
          label={"Previous"}
          disabled={thereIsNoPrevPage}
        />
        <Button onclick={goNext} label={"Next"} disabled={thereIsNoNextPage} />
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
          onclick={goPrevious}
          label={"Previous"}
          disabled={thereIsNoPrevPage}
        />
        <NumberButtons
          numbers={navegableIndices}
          currentSelected={currentPageIndex}
          onNumberClick={goToPage}
        />
        <Button onclick={goNext} label={"Next"} disabled={thereIsNoNextPage} />
      </>
    ),
    [PaginationOptionsEnum.full]: (
      <>
        <Button
          onclick={goFirst}
          label={"First"}
          disabled={thereIsNoPrevPage}
        />
        <Button
          onclick={goPrevious}
          label={"Previous"}
          disabled={thereIsNoPrevPage}
        />
        <Button onclick={goNext} label={"Next"} disabled={thereIsNoNextPage} />
        <Button onclick={goLast} label={"Last"} disabled={thereIsNoPrevPage} />
      </>
    ),
    [PaginationOptionsEnum.full_numbers]: (
      <>
        <Button
          onclick={goFirst}
          label={"First"}
          disabled={thereIsNoPrevPage}
        />
        <Button
          onclick={goPrevious}
          label={"Previous"}
          disabled={thereIsNoPrevPage}
        />
        <NumberButtons
          numbers={navegableIndices}
          currentSelected={currentPageIndex}
          onNumberClick={goToPage}
        />
        <Button onclick={goNext} label={"Next"} disabled={thereIsNoNextPage} />
        <Button onclick={goLast} label={"Last"} disabled={thereIsNoNextPage} />
      </>
    ),
    [PaginationOptionsEnum.first_last_numbers]: (
      <>
        <Button
          onclick={goFirst}
          label={"First"}
          disabled={thereIsNoPrevPage}
        />
        <NumberButtons
          numbers={navegableIndices}
          currentSelected={currentPageIndex}
          onNumberClick={goToPage}
        />
        <Button onclick={goLast} label={"Last"} disabled={thereIsNoPrevPage} />
      </>
    ),
  };

  return <span>{paginationControls[controlOption]}</span>;
};
