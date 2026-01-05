import { slides } from "./slides";
import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";
import "./styles.css";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export const ImagesSlides = () => {
  const [isDisabledBtnLeft, setDisabledBtnLeft] = useState(true);
  const [isDisabledBtnRight, setDisabledBtnRight] = useState(false);
  const currentRef = useRef<HTMLDivElement>(null);
  const [widthImage, setWidthImage] = useState(0);
  const [gap, setGap] = useState(0);

  const nextSlide = () => {
    currentRef.current?.scrollTo({
      left: currentRef.current.scrollLeft + widthImage + gap,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    currentRef.current?.scrollTo({
      left: currentRef.current.scrollLeft - (widthImage + gap),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = currentRef.current;
    if (!container) {
      return;
    }

    const currentWidthImage = container.children[0].clientWidth;
    const styles = getComputedStyle(container);
    const gapImage = parseInt(styles.columnGap);

    setWidthImage(currentWidthImage);
    setGap(gapImage);

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



export const Slides = () => { //это улучшенное решение отображения слайдов по переключению по одному слайду(но этот компонент здесь не используется)
  const currentRef = useRef<HTMLDivElement>(null);
  const { ref: firstRef, inView: isFirstInView } = useInView({ threshold: 1 });
  const { ref: lastRef, inView: isLastInView } = useInView({ threshold: 1 });
  const scrollAmount = 300;

  const nextSlide = () => {
    currentRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const prevSlide = () => {
    currentRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="flex items-center h-screen">
      <div className="w-88 mx-auto h-90 flex items-center overflow-hidden rounded-[10px] bg-[#00BFFF] relative">
        {!isFirstInView && (
          <LuCircleChevronLeft
            className="absolute left-1 cursor-pointer"
            size={40}
            color="yellow"
            onClick={prevSlide}
          />
        )}
        <div
          className="flex gap-3 items-center h-screen pr-5 pl-6 overflow-scroll scroll-smooth snap-x snap-mandatory scroll-pl-6"
          ref={currentRef}
        >
          {slides.map((item, index) => {
            return (
              <img
                ref={
                  index === 0
                    ? firstRef
                    : index === slides.length - 1
                    ? lastRef
                    : null
                }
                src={item.url}
                key={item.id}
                className="w-75 h-40 shrink-0 rounded-[10px] snap-start"
              />
            );
          })}
        </div>
        {!isLastInView && (
          <LuCircleChevronRight
            className="absolute right-1 cursor-pointer"
            size={40}
            color="yellow"
            onClick={nextSlide}
          />
        )}
      </div>
    </div>
  );
};

