import "./style.css";
import type { TSlidesBullets } from "./types";

export const BulletsSlides = ({ currentIndexSlide, currentProgress }: TSlidesBullets) => {

  return (
    <div className="container-bullets">
      {currentProgress.map((prog, index) =>
        index === currentIndexSlide ? (
          <div className="bulletActive">
            <div className="bulletProgress" style={{ width: `${prog}%` }}></div>
          </div>
        ) : (
          <div className="bullet"></div>
        )
      )}
    </div>
  );
};
