import { useState } from "react";
import { useIntersectionObserver, useQuery } from "@siberiacancode/reactuse";
import type { CurrentCats } from "../Cats/types";
import "./styleInfinite.css";
import { ClipLoader } from "react-spinners";
import { COUNT_CATS_INFINITE } from "../../../../constants";

export const ListCatsInfinite = () => {
  const [count, setCount] = useState(0);
  const [cats, setCats] = useState<CurrentCats[]>([]);

  const { isLoading, isError, error, isSuccess } = useQuery(
    () =>
      fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${COUNT_CATS_INFINITE}`
      ).then((data) => data.json()),
    {
      keys: [count],
      onSuccess: (dataCats) => {
        setCats((prev) => [...prev, ...dataCats]);
      },
    }
  );

  const { ref } = useIntersectionObserver<HTMLLIElement>({
    rootMargin: "200px",
    threshold: 1,
    onChange: (entries) => {
      if (entries[0].isIntersecting) {
        setCount((prev) => prev + COUNT_CATS_INFINITE);
      }
    },
  });

  if (isLoading) {
    return (
      <div className="currentLoader">
        <ClipLoader
          color={"rgba(33, 150, 243, 1)"}
          cssOverride={{ borderWidth: "3px" }}
          size={40}
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="containerErrorInfinite">
        <div className="errorInfinite">{error?.message}</div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div>
        <ul className="listCats">
          {cats.map((item, index) => (
            <li key={index} ref={ref}>
              <img src={item.url} className="currentImage" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
