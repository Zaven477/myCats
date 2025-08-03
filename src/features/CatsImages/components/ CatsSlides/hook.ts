import { useEffect, useState } from "react";
import { catsImagesUrl } from "./imagesUrl";

export const useSlides = () => {
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
      if (prev - 1 >= 0) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  const switchingImages = () => {
    setCurrentIndex((prev) => {
      if (prev + 1 < catsImagesUrl.length) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      switchingImages();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return {nextImage, prevImage, switchingImages, currentIndex}
};
