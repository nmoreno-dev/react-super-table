import React from 'react';
import {usePagination} from '../../customHooks/usePagination';
import {PaginationOptionsEnum, PaginationProps} from '../../types/Paginations.types';
import {FirstLastButtons} from '../FirstLastButtons/FirstLastButtons';
import {NumberButtons} from '../NumbersButtons/NumberButtons';
import {PreviousNextButtons} from '../PreviousNext/PreviousNextButtons';

export const Pagination = ({
  pages,
  setCurrentPage,
  controlOption = PaginationOptionsEnum.full,
}: PaginationProps) => {
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
  console.log('render pagination');

  const paginationControls = {
    [PaginationOptionsEnum.simple]: <PreviousNextButtons onNext={goNext} onPrevious={goPrevious} />,
    [PaginationOptionsEnum.numbers]: (
      <NumberButtons
        numbers={pagesIndices}
        currentSelected={currentPageIndex}
        onNumberClick={goToPage}
      />
    ),
    [PaginationOptionsEnum.simple_numbers]: (
      <PreviousNextButtons onNext={goNext} onPrevious={goPrevious}>
        <NumberButtons
          numbers={navegableIndices}
          currentSelected={currentPageIndex}
          onNumberClick={goToPage}
        />
      </PreviousNextButtons>
    ),
    [PaginationOptionsEnum.full]: (
      <FirstLastButtons onFirst={goFirst} onLast={goLast}>
        <PreviousNextButtons onNext={goNext} onPrevious={goPrevious} />
      </FirstLastButtons>
    ),
    [PaginationOptionsEnum.full_numbers]: (
      <FirstLastButtons onFirst={goFirst} onLast={goLast}>
        <PreviousNextButtons onNext={goNext} onPrevious={goPrevious}>
          <NumberButtons
            numbers={navegableIndices}
            currentSelected={currentPageIndex}
            onNumberClick={goToPage}
          />
        </PreviousNextButtons>
      </FirstLastButtons>
    ),
    [PaginationOptionsEnum.first_last_numbers]: (
      <FirstLastButtons onFirst={goFirst} onLast={goLast}>
        <NumberButtons
          numbers={navegableIndices}
          currentSelected={currentPageIndex}
          onNumberClick={goToPage}
        />
      </FirstLastButtons>
    ),
  };

  return <span>{paginationControls[controlOption]}</span>;
};
