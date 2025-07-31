import { useCallback, useEffect } from "react";
import { COUNT_IMAGES } from "../../../../constants";
import { useAppDispatch, useAppSelector } from "../../store/reducer/hook";
import { currentCats, errorCats, loadingCats } from "../../store/selectors";
import { getImagesCats, getNextImagesCats } from "../../store/actions";

export const useCats = () => {
  const dispatch = useAppDispatch();
  const cats = useAppSelector(currentCats);
  const loading = useAppSelector(loadingCats);
  const error = useAppSelector(errorCats);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const nextImages = useCallback(
    (count: number) => {
      dispatch(getNextImagesCats(count));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getImagesCats(COUNT_IMAGES));
  }, [dispatch]);

  return { cats, loading, error, nextImages, handleScrollToTop };
};
