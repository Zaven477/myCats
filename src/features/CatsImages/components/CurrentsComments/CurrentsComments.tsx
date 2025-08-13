import { useAppSelector } from "../../store/reducer/hook";
import {
  errorComments,
  loaderComments,
  selectCurrentsComments,
} from "../../store/selectors";
import "./style.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { usePaginationComments } from "./usePaginationComments";
import { BarLoader } from "react-spinners";

export const CurrentsComments = () => {
  const {
    paginationPages,
    currentPage,
    activePage,
    changePage,
    nextPage,
    prevPage,
  } = usePaginationComments();
  const currentComments = useAppSelector(selectCurrentsComments);
  const loading = useAppSelector(loaderComments);
  const error = useAppSelector(errorComments);

  if (loading) {
    return <BarLoader width={"100%"} color="red" />;
  }

  if (error) {
    return <div className="error-comments">{error}</div>;
  }

  return (
    <div className="container-text">
      <h1 className="currentComments">Comments</h1>
      {currentComments.map((comment) => (
        <div key={comment.id}>{comment.body}</div>
      ))}
      <div className="containerPages">
        <HiChevronLeft
          size={30}
          onClick={prevPage}
          className={`iconLeft ${currentPage === 1 ? "hidden" : ""}`}
        />
        {paginationPages?.map((page, index) => (
          <div
            key={index}
            onClick={() => changePage(page)}
            className={`btnPagination ${activePage === page ? "active" : ""} ${
              page === "..." ? "no-pointer" : ""
            }`}
          >
            {page}
          </div>
        ))}
        <HiChevronRight
          size={30}
          onClick={nextPage}
          className={`iconRight ${currentPage === 10 ? "hidden" : ""}`}
        />
      </div>
    </div>
  );
};
