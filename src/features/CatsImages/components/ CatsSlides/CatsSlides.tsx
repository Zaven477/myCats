import { useState } from "react";
import { catsImagesUrl } from "./imagesUrl";
import "./style.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export const CatsSlides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => {
      if (prev + 1 < catsImagesUrl.length) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };

  const prevImage = () => {
    setCurrentIndex((prev) => {
      if (prev - 1 < catsImagesUrl.length && prev - 1 > 0) {
        return prev - 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="container-slider">
      <button
        className={`btn-next ${currentIndex > 0 ? "visible" : "hidden"}`}
        onClick={prevImage}
      >
        <IoChevronBack size={30} color={"#00BFFF"} />
      </button>
      <div className="slides-container">
        <div
          className="slides-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {catsImagesUrl.map((cat) => (
            <img src={cat.url} key={cat.id} className="slide-image" />
          ))}
        </div>
      </div>
      <button
        className={`btn-next ${
          currentIndex < catsImagesUrl.length - 1 ? "visible" : "hidden"
        }`}
        onClick={nextImage}
      >
        <IoChevronForward size={30} color={"#00BFFF"} />
      </button>
    </div>
  );
};
