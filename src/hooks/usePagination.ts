import { useEffect, useRef, useState } from "react";
import { PaginationProps } from "../types/Paginations.types";

export const usePagination = <T extends object>(
  pages: PaginationProps<T>["pages"],
  setCurrentPage: PaginationProps<T>["setCurrentPage"]
) => {
  const currentPageIndex = useRef(0);
  const pagesIndices = useRef(Array.from(Array(pages.length).keys()));
  const [navegableIndices, setNavegableIndices] = useState<number[]>([]);
  const shouldGoBackward = useRef<boolean>(false);
  const shouldGoFordward = useRef<boolean>(false);

  const goFirst = () => {
    if (!shouldGoBackward.current) return;
    updateCurrentPage(0);
  };

  const goPrevious = () => {
    if (!shouldGoBackward.current) return;
    updateCurrentPage(currentPageIndex.current - 1);
  };

  const goToPage = (pageIndex: number) => {
    const isValidIndex = pageIndex >= 0 && pageIndex < pages.length;
    if (!isValidIndex) return;
    updateCurrentPage(pageIndex);
  };

  const goNext = () => {
    if (!shouldGoFordward.current) return;
    updateCurrentPage(currentPageIndex.current + 1);
  };

  const goLast = () => {
    if (!shouldGoFordward.current) return;
    updateCurrentPage(pages.length - 1);
  };

  const calculateNavegableIndices = () => {
    const subarr = [];
    for (let i = -2; i <= 2; i++) {
      const idx = currentPageIndex.current + i;
      if (idx >= 0 && idx < pages.length) {
        subarr.push(idx);
      }
    }
    setNavegableIndices(subarr);
  };

  const updateCurrentPage = (newCurrent: number) => {
    currentPageIndex.current = newCurrent;
    shouldGoBackward.current = currentPageIndex.current > 0;
    shouldGoFordward.current = currentPageIndex.current < pages.length - 1;
    setCurrentPage(currentPageIndex.current);
    calculateNavegableIndices();
  };

  useEffect(() => {
    currentPageIndex.current = 0;
    calculateNavegableIndices();
  }, [pages]);

  useEffect(() => {
    updateCurrentPage(0);
  }, [pages]);

  return {
    pagesIndices: pagesIndices.current,
    currentPageIndex: currentPageIndex.current,
    navegableIndices,
    goFirst,
    goPrevious,
    goToPage,
    goNext,
    goLast,
  };
};
