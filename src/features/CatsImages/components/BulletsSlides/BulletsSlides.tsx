import "./style.css";
import type { TSlidesBullets } from "./types";

export const BulletsSlides = ({ currentIndexSlide, currentProgress }: TSlidesBullets) => {

  return (
    <div className="container-bullets">
      {currentProgress.map((prog, index) =>
        index === currentIndexSlide ? (
          <div className="bulletActive" key={index}>
            <div className="bulletProgress" style={{ width: `${prog}%` }}></div>
          </div>
        ) : (
          <div className="bullet" key={index}></div>
        )
      )}
    </div>
  );
};
