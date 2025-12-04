import { slides } from "./slides";
import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";
import "./styles.css";
import { useEffect, useRef, useState } from "react";

export const ImagesSlides = () => {
  const [isDisabledBtnLeft, setDisabledBtnLeft] = useState(true);
  const [isDisabledBtnRight, setDisabledBtnRight] = useState(false);
  const currentRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    const container = currentRef.current;

    if (!container) {
      return;
    }

    const currentWidthImage = container.children[0].clientWidth;
    const styles = getComputedStyle(container);
    const gap = parseInt(styles.columnGap);

    container.scrollTo({
      left: container.scrollLeft + currentWidthImage + gap,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    const container = currentRef.current;

    if (!container) {
      return;
    }

    const currentWidthImage = container.children[0].clientWidth;
    const styles = getComputedStyle(container);
    const gap = parseInt(styles.columnGap);

    container.scrollTo({
      left: container.scrollLeft - (currentWidthImage + gap),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = currentRef.current;
    if (!container) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isFirst = entry.target === container.firstElementChild;
          const isLast = entry.target === container.lastElementChild;

          if (isFirst) {
            setDisabledBtnLeft(entry.isIntersecting);
          }
          if (isLast) {
            setDisabledBtnRight(entry.isIntersecting);
          }
        });
      },
      { threshold: 1 }
    );

    observer.observe(container.firstElementChild as Element);
    observer.observe(container.lastElementChild as Element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="wrapperCenteringSlides">
      <div className="centeringSlides">
        <div className="wrapperLuCircleChevron">
          <LuCircleChevronLeft
            size={35}
            color={`${isDisabledBtnLeft ? "#808080" : ""}`}
            onClick={prevSlide}
          />
          <LuCircleChevronRight
            size={35}
            color={`${isDisabledBtnRight ? "#808080" : ""}`}
            onClick={nextSlide}
          />
        </div>
        <div className="wrapperContainer">
          <div className="slidesContainer" ref={currentRef}>
            {slides.map((image) => (
              <img key={image.id} src={image.url} className="current-image" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
