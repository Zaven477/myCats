import { useEffect, useState } from "react";

export const useCatsTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (start) {
        setSeconds((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [start]);

  const displayTimer = (seconds: number) => {
    const currentMinutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");

    const currentSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${currentMinutes}:${currentSeconds}`;
  };

  return {seconds, start, setStart, displayTimer}
};
