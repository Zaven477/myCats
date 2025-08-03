import { useSlides } from "./hook";
import { catsImagesUrl } from "./imagesUrl";
import "./style.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export const CatsSlides = () => {
  const { currentIndex, nextImage, prevImage } = useSlides();
  
  const shiftSlide = 100;

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
          style={{ transform: `translateX(-${currentIndex * shiftSlide}%)` }}
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
