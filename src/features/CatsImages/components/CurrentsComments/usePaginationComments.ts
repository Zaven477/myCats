import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/reducer/hook";
import { getCurrentComments } from "../../store/actions";
import { paginationPages } from "./utils";

export const usePaginationComments = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { rangeCurrentsPages, pages } = paginationPages(currentPage);

  useEffect(() => {
    const saved = sessionStorage.getItem("savePage");
    const savedCurrentPage = saved === null ? 1 : Number(saved);
    setCurrentPage(savedCurrentPage);
  }, []);

  useEffect(() => {
    dispatch(getCurrentComments(currentPage));
    sessionStorage.setItem("savePage", JSON.stringify(currentPage));
  }, [dispatch, currentPage]);

  const changePage = (page: number | string) => {
    if (typeof page === "number") {
      setCurrentPage(page);
    }
  };

  const nextPage = () => {
    setCurrentPage((prev) => {
      const newPage = prev + 1;
      return newPage;
    });
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  return {
    rangeCurrentsPages,
    pages,
    currentPage,
    changePage,
    nextPage,
    goToFirstPage,
  };
};
