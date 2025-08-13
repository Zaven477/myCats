import { COUNT_PAGES, PAGE_NUMBER } from "./constants";

export const buildPaginationPages = (
  listPages: number[],
  currentPage: number
) => {
  const totalPages = listPages.length;
  const startPage = 0;
  const firstEndPage = 7;
  const secondEndPage = 1;
  const firstContinuationEnd = 9;
  const secondContinuationEnd = 3;

  if (totalPages < COUNT_PAGES) {
    return listPages;
  } else if (currentPage <= PAGE_NUMBER) {
    return [
      ...listPages.slice(startPage, firstEndPage),
      "...",
      ...listPages.slice(firstContinuationEnd),
    ];
  } else {
    return [
      ...listPages.slice(startPage, secondEndPage),
      "...",
      ...listPages.slice(secondContinuationEnd),
    ];
  }
};
