import { useEffect, useState } from "react";
import Head from "next/head";

const StopWatchPage = ({ digit }) => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [startOfCurrentLap, setStartOfCurrentLap] = useState(0);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 10);
      }, 10); // Updating every 10 milliseconds for 1/100th of a second precision
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimer(0);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps([
      ...laps,
      { lapTime: timer - startOfCurrentLap, totalTime: timer },
    ]);
    setStartOfCurrentLap(timer);
  };

  const formatTime = (time) => {
    const milliseconds = String(Math.floor(time % 1000)).padStart(2, "0");
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
    const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, "0");
    const hours = String(Math.floor(time / 3600000)).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  const currentLapTime = timer - startOfCurrentLap;
  return (
    <>
      <Head>
        <title>Stop Watch Clock</title>
        <meta name="StopWatch" content="Stop watch clock page." />
      </Head>
      <div>
        <div className="whiteTimeBox">
          <h2 className={`timeHeading text-center ${digit && "digital-clock"}`}>
            {formatTime(timer)}
          </h2>
          <p className={`${digit && "digital-clock"}`}>
            Current Lap: {formatTime(currentLapTime)}
          </p>
          <div style={{ display: "flex" }}>
            {!isActive ? (
              <button className="btnStart" onClick={handleStart}>
                Start
              </button>
            ) : (
              <button className="btnStop" onClick={handleStop}>
                Stop
              </button>
            )}
            {isActive ? (
              <button className="btnReset" onClick={handleLap}>
                Lap
              </button>
            ) : (
              <button className="btnReset" onClick={handleReset}>
                Reset
              </button>
            )}
          </div>
        </div>
        <div className="whiteTimeBoxthree">
          <div className="panelHeading">Stopwatch Laps</div>
          <div className="mainbody">
            <ul>
              {laps.map((lap, index) => (
                <li key={index}>
                  Lap {index + 1}: {formatTime(lap.lapTime)} (Total:{" "}
                  {formatTime(lap.totalTime)})
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="whiteTimeBoxthree">
          <div className="panelHeading">How to use the online stopwatch</div>
          <div className="mainbody">
            <p>
              The online stopwatch counts the time to the millisecond that
              passes after you click the "Start" button. It allows you to add
              laps. If you close the stopwatch, the value and laps will be
              automatically saved. If the period is sufficiently large, the
              number of days passed will be displayed, too.
            </p>
            <p>
              You can configure the accuracy for displaying fractions of a
              second in the stopwatch settings.
            </p>
            <p>
              Click the "Start" or "Stop" buttons to start or stop the
              stopwatch. Click the "Lap" button to add one lap and the current
              stopwatch value to the lap list. To reset laps and the stopwatch
              value, click the "Reset" button (the button appears when the
              stopwatch is stopped).
            </p>
            <p>
              You can configure the stopwatch appearance (text color, type, and
              size), and these settings will be saved; they will be used when
              you open your web browser next time.
            </p>
            <p>
              You can add links to online stopwatches with various time values
              and lap lists to your browser's Favorites.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default StopWatchPage;
