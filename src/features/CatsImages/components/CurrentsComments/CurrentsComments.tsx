import { useAppSelector } from "../../store/reducer/hook";
import {
  errorComments,
  loaderComments,
  selectCurrentsComments,
} from "../../store/selectors";
import "./style.css";
import { HiChevronRight } from "react-icons/hi";
import { FaAnglesLeft } from "react-icons/fa6";
import { usePaginationComments } from "./usePaginationComments";
import { BarLoader } from "react-spinners";

export const CurrentsComments = () => {
  const {
    rangeCurrentsPages,
    pages,
    currentPage,
    changePage,
    nextPage,
    goToFirstPage,
  } = usePaginationComments();
  const currentComments = useAppSelector(selectCurrentsComments);
  const loading = useAppSelector(loaderComments);
  const error = useAppSelector(errorComments);
  const lastPage = pages[pages.length - 1];

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
        <FaAnglesLeft
          onClick={goToFirstPage}
          className={`iconLeft ${currentPage === 1 ? "hidden" : ""}`}
        />
        {rangeCurrentsPages.map((page) => (
          <div
            key={page}
            onClick={() => changePage(page)}
            className={`btnPagination ${currentPage === page ? "active" : ""}`}
          >
            {page}
          </div>
        ))}
        <HiChevronRight
          size={30}
          onClick={nextPage}
          className={`iconRight ${currentPage === lastPage ? "hidden" : ""}`}
        />
      </div>
    </div>
  );
};
