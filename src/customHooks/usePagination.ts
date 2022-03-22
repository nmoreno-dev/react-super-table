import {useEffect, useRef, useState} from 'react';
import {PaginationProps} from '../types/Paginations.types';

export const usePagination = (
  pages: PaginationProps['pages'],
  setCurrentPage: PaginationProps['setCurrentPage']
) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const pagesIndices = useRef<number[]>(Array.from(Array(pages.length).keys()));
  const [navegableIndices, setNavegableIndices] = useState<number[]>([]);
  const canGoPrevious = useRef<boolean>(false);
  const canGoNext = useRef<boolean>(false);

  const goFirst = () => {
    setCurrentPageIndex(0);
  };

  const goPrevious = () => {
    if (!canGoPrevious.current) return;
    setCurrentPageIndex(prev => prev - 1);
  };

  const goToPage = (pageIndex: number) => {
    const isValidIndex = pageIndex >= 0 && pageIndex < pages.length;
    if (!isValidIndex) return;
    setCurrentPageIndex(pageIndex);
  };

  const goNext = () => {
    if (!canGoNext.current) return;
    setCurrentPageIndex(prev => prev + 1);
  };

  const goLast = () => {
    setCurrentPageIndex(pages.length - 1);
  };

  const culateNavegableIndices = () => {
    const subarr = [];
    for (let i = -2; i <= 2; i++) {
      const idx = currentPageIndex + i;
      if (idx >= 0 && idx < pages.length) {
        subarr.push(idx);
      }
    }
    setNavegableIndices(subarr);
  };

  useEffect(() => {
    canGoPrevious.current = currentPageIndex > 0;
    canGoNext.current = currentPageIndex < pages.length - 1;
    setCurrentPage(currentPageIndex);
    culateNavegableIndices();
  }, [currentPageIndex]);

  useEffect(() => {
    canGoPrevious.current = currentPageIndex > 0;
    canGoNext.current = currentPageIndex < pages.length - 1;
    setCurrentPageIndex(0);
  }, [pages]);

  useEffect(() => {
    culateNavegableIndices();
  }, []);

  return {
    pagesIndices: pagesIndices.current,
    currentPageIndex,
    navegableIndices,
    goFirst,
    goPrevious,
    goToPage,
    goNext,
    goLast,
  };
};
