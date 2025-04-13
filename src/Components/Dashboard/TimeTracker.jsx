import React, { useState, useEffect } from "react";

export default function TimeTracker({ task }) {
  const [timeSpent, setTimeSpent] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isTimerActive) {
      timer = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isTimerActive]);

  const startTimer = () => {
    setIsTimerActive(true);
  };

  const stopTimer = () => {
    setIsTimerActive(false);
  };

  const resetTimer = () => {
    setTimeSpent(0);
    setIsTimerActive(false);
  };

  return (
    <div className="timer-container">
      <h5>
        Time Spent: {Math.floor(timeSpent / 60)}m {timeSpent % 60}s
      </h5>
      <div className="timer">
        <button onClick={startTimer} disabled={isTimerActive}>
          Start Timer
        </button>
        <button onClick={stopTimer} disabled={!isTimerActive}>
          Stop Timer
        </button>
        <button onClick={resetTimer} disabled={isTimerActive}>
          Reset Timer
        </button>
      </div>
    </div>
  );
}
