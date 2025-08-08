import "./styles.css";
import { useCats } from "./useCats";
import { ClipLoader } from "react-spinners";
import { FavoriteIcons } from "../FavoriteIcons/FavoriteIcons";
import { COUNT_IMAGES } from "../../../../constants";
import { FaArrowCircleUp } from "react-icons/fa";
import { useOutletContext } from "react-router";
import type { useFavoritesCats } from "./useFavoritesCats";
import { useRedirect } from "./useRedirect";

export const Cats = () => {
  const { addFavorites, favoritesCats, isFavoritesCats, removeFavoritesCats } =
    useOutletContext<ReturnType<typeof useFavoritesCats>>();
  const { cats, loading, error, nextImages, handleScrollToTop } = useCats();
  const {valueQueryParams} = useRedirect();

  const tab = valueQueryParams === "favorites" ? "favorites" : "all";

  const tabs = { all: cats, favorites: favoritesCats };

  const imagesCats = tabs[tab];

  if (loading && imagesCats.length === 0) {
    return (
      <div className="loader">
        <ClipLoader
          size={50}
          color="rgba(33, 150, 243, 1)"
          cssOverride={{ borderWidth: "3px" }}
        />
      </div>
    );
  }

  if (error) {
    return <div className="error-text">{error}</div>;
  }

  return (
    <div>
      <div className="container-cats">
        {imagesCats.map((cat) => (
          <ul key={cat.id}>
            <li className="list-card-image">
              <div
                className="container-image"
                onClick={
                  isFavoritesCats(cat.id)
                    ? () => removeFavoritesCats(cat.id)
                    : () => addFavorites(cat)
                }
              >
                <img key={cat.id} src={cat.url} className="card-image" />
                <div className="icon-overlay">
                  <FavoriteIcons isFavorite={isFavoritesCats(cat.id)} />
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
      {tab === "all" && imagesCats.length > 0 && (
        <div className="button-container">
          <button
            className="button-pagination"
            onClick={() => nextImages(COUNT_IMAGES)}
          >
            {loading ? "Загрузка..." : "Загрузить еще котиков"}
          </button>
        </div>
      )}
      {imagesCats.length > 20 && (
        <FaArrowCircleUp
          size={40}
          className="icon-up"
          onClick={handleScrollToTop}
        />
      )}
    </div>
  );
};
