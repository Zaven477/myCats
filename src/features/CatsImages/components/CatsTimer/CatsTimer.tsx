import "./style.css";
import { useCatsTimer } from "./useCatsTimer";

export const CatsTimer = () => {
  const { seconds, start, setStart, displayTimer } = useCatsTimer();

  return (
    <div className="timer-container">
      <div className="currentTime">
        <div className="timer">{displayTimer(seconds)}</div>
        <button
          className="btn-start-pause"
          onClick={start ? () => setStart(false) : () => setStart(true)}
        >
          {start ? "Пауза" : "Старт"}
        </button>
      </div>
    </div>
  );
};
