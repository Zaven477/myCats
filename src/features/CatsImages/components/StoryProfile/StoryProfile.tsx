import { useEffect, useState } from "react";
import { listStory } from "./listStory";
import "./style.css";
import type { TCheckedProps } from "./types";

export const StoryProfile = ({ isChecked }: TCheckedProps) => {
  const [dateLoginUser, setDateLoginUser] = useState("");
  const [dateLogOutUser, setDateLogOutUser] = useState("");
  const list = listStory(dateLoginUser, dateLogOutUser);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      const parsed = JSON.parse(saved);
      setDateLoginUser(parsed.userLoginDate);
    }

    const savedDateLogOut = localStorage.getItem("logOut");
    if (savedDateLogOut) {
      setDateLogOutUser(savedDateLogOut);
    }
  }, []);

  return (
    <div>
      <h1 className={`text-story ${isChecked ? "textStoryColor" : ""}`}>
        История
      </h1>
      <div className="containerInfo">
        {list.map((story) => (
          <div key={story.id} className="textInfo">
            <div className="dateStory">{story.date}</div>
            <div
              className={`nameStory ${isChecked ? "textNameStoryColor" : ""}`}
            >
              {story.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
