import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../../store/reducer/hook";
import { getCurrentComments } from "../../store/actions";
import { buildPaginationPages } from "./utils";

export const usePaginationComments = () => {
  const dispatch = useAppDispatch();
  const pages = Array.from({ length: 10 }, (_, index) => index + 1);
  const [currentPage, setCurrentPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const paginationPages = buildPaginationPages(pages, currentPage);

  useEffect(() => {
    dispatch(getCurrentComments(currentPage));
  }, [dispatch, currentPage]);

  const changePage = useCallback((page: string | number) => {
    if (typeof page === "number") {
      setActivePage(page);
      setCurrentPage(page);
    }
  }, []);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => {
      const newPage = prev + 1;
      setActivePage(newPage);
      return newPage;
    });
  }, []);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => {
      const newPage = prev - 1;
      setActivePage(newPage);
      return newPage;
    });
  }, []);

  return {
    paginationPages,
    currentPage,
    activePage,
    changePage,
    nextPage,
    prevPage,
  };
};
