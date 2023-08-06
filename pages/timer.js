import { useEffect, useState } from "react";

const TimePage = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

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
    setTimer(0);
  };

  const formatTime = (time) => {
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
    const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <div className="whiteTimeBox">
        <h2 className="timeHeading">{formatTime(timer)}</h2>
        <div>
          {!isActive ? (
            <button className="btnAlarm" type="button" onClick={handleStart}>
              Start
            </button>
          ) : (
            <button className="btnStop" type="button" onClick={handleStop}>
              Stop
            </button>
          )}

          <button
            className="btnAlarm"
            style={{ marginLeft: "3px" }}
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mainWrapper">
        <div className="whiteTimeBoxTwo">
          <div className="panelHeading">
            Set the alarm for the specified time
          </div>
          <div className="panelBody">
            <p>
              Set the hour, minute, and second for the online countdown timer,
              and start it. Alternatively, you can set the date and time to
              count days, hours, minutes, and seconds till (or from) the event.
              The timer triggered alert will appear, and the pre-selected sound
              will be played at the set time.
            </p>
            <p>
              When setting the timer, you can click the "Test" button to preview
              the alert and check the sound volume.
            </p>
            <p>
              Click the "Reset" button to start the timer from the initial
              value. Click the "Stop" ("Start") button to stop (start) the
              timer.
            </p>
            <p>
              You can add links to online timers with different time settings to
              your browser's Favorites. Opening such a link will set the timer
              to the predefined time.
            </p>
            <p>
              In the holiday list, you can launch a countdown timer for any
              holiday on the list, or you can create a new timer for your own
              event or holiday. Make sure to share your timer with your friends.
            </p>
          </div>
        </div>

        <div className="whiteTimeBoxTwo">
          <div className="panel-body">
            <div className="panelHeading">Holidays</div>
            <table className="center table-lr">
              <tbody>
                <tr>
                  <td>
                    <a h>New Year</a>
                  </td>
                  <td>Jan 1, 2024</td>
                  <td>149 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Martin Luther King Day</a>
                  </td>
                  <td>Jan 15, 2024</td>
                  <td>163 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Groundhog Day</a>
                  </td>
                  <td>Feb 2, 2024</td>
                  <td>181 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Chinese New Year</a>
                  </td>
                  <td>Feb 10, 2024</td>
                  <td>189 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Valentine's Day</a>
                  </td>
                  <td>Feb 14, 2024</td>
                  <td>193 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Presidents Day</a>
                  </td>
                  <td>Feb 19, 2024</td>
                  <td>198 days</td>
                </tr>
                <tr>
                  <td>
                    <a>St. Patrick's Day</a>
                  </td>
                  <td>Mar 17, 2024</td>
                  <td>225 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Good Friday</a>
                  </td>
                  <td>Mar 29, 2024</td>
                  <td>237 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Easter</a>
                  </td>
                  <td>Mar 31, 2024</td>
                  <td>239 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Tax Day</a>
                  </td>
                  <td>Apr 15, 2024</td>
                  <td>254 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Mother's Day</a>
                  </td>
                  <td>May 12, 2024</td>
                  <td>281 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Memorial Day</a>
                  </td>
                  <td>May 27, 2024</td>
                  <td>296 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Father's Day</a>
                  </td>
                  <td>Jun 16, 2024</td>
                  <td>316 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Juneteenth</a>
                  </td>
                  <td>Jun 19, 2024</td>
                  <td>319 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Independence Day</a>
                  </td>
                  <td>Jul 4, 2024</td>
                  <td>334 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Labor Day</a>
                  </td>
                  <td>Sep 4, 2023</td>
                  <td>30 days</td>
                </tr>
                <tr>
                  <td>
                    <a href="/timer/columbus-day/">Columbus Day</a>
                  </td>
                  <td>Oct 9, 2023</td>
                  <td>65 days</td>
                </tr>
                <tr>
                  <td>
                    <a href="/timer/halloween/">Halloween</a>
                  </td>
                  <td>Oct 31, 2023</td>
                  <td>87 days</td>
                </tr>
                <tr>
                  <td>
                    <a href="/timer/veterans-day/">Veterans Day</a>
                  </td>
                  <td>Nov 11, 2023</td>
                  <td>98 days</td>
                </tr>
                <tr>
                  <td>
                    <a href="/timer/thanksgiving-day/">Thanksgiving Day</a>
                  </td>
                  <td>Nov 23, 2023</td>
                  <td>110 days</td>
                </tr>
                <tr>
                  <td>
                    <a href="/timer/black-friday/">Black Friday</a>
                  </td>
                  <td>Nov 24, 2023</td>
                  <td>111 days</td>
                </tr>
                <tr>
                  <td>
                    <a href="/timer/cyber-monday/">Cyber Monday</a>
                  </td>
                  <td>Nov 27, 2023</td>
                  <td>114 days</td>
                </tr>
                <tr>
                  <td>
                    <a href="/timer/christmas-day/">Christmas</a>
                  </td>
                  <td>Dec 25, 2023</td>
                  <td>142 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default TimePage;
