import { useEffect, useState } from "react";
import { catsImagesUrl } from "./imagesUrl";

export const useSlides = () => {
  const bullets = Array(catsImagesUrl.length).fill(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(bullets);

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
    if (currentIndex === 0) {
      setProgress(bullets);
    }

    const interval = setInterval(() => {
      switchingImages();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);


  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = [...prevProgress];
        if (newProgress[currentIndex] < 100) {
          newProgress[currentIndex] = newProgress[currentIndex] + 2;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return { nextImage, prevImage, switchingImages, currentIndex, progress };
};
