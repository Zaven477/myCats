export const buildPaginationPages = (currentPage: number) => {   //вариант без точек
  let rangeCurrentsPages;
  const totalPages = 10;
  const rangePages = 5;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const stepBack = 2;
  let startIndex = pages.indexOf(currentPage - stepBack);
  if (startIndex < 0) {
    startIndex = 0;
  }
  const endIndex = startIndex + rangePages;
  rangeCurrentsPages = pages.slice(startIndex, endIndex);

  const diffPages = 2;
  if (pages[pages.length - 1] - currentPage <= diffPages) {
    const initialIndex = pages[pages.length - 1] - rangePages;
    rangeCurrentsPages = pages.slice(initialIndex, pages[pages.length - 1]);
  }
  return { rangeCurrentsPages, pages };
};



export const paginationPages = (currentPage: number) => {  //вариант с точками и показом последней страницы
  let rangeCurrentsPages;
  const totalPages = 10;
  const rangePages = 5;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const stepBack = 2;
  let startIndex = pages.indexOf(currentPage - stepBack);
  if (startIndex < 0) {
    startIndex = 0;
  }
  const endIndex = startIndex + rangePages;
  rangeCurrentsPages = [...pages.slice(startIndex, endIndex), '...', pages[pages.length - 1]]

  const diffPages = 3;
  if (pages[pages.length - 1] - currentPage <= diffPages) {
    const initialIndex = pages[pages.length - 1] - rangePages;
    rangeCurrentsPages = pages.slice(initialIndex, pages[pages.length - 1]);
  }
  return { rangeCurrentsPages, pages };
};




