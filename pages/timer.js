import React, { useState, useEffect } from "react";
import moment from "moment";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { min, hour2 } from "../uttils";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const TimePage = () => {
  const ll = JSON.parse(
    typeof window !== "undefined" && localStorage.getItem("resentTime")
  );
  const [value, setValue] = useState("Runasstopwatch");
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(moment.duration("00:00:00"));
  const [count, setCount] = useState(moment.duration("00:00"));
  const [option, setOption] = useState(false);
  const [hr, setHr] = useState("0");
  const [mi, setmin] = useState("0");
  const [sec, setsec] = useState("0");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isActive) {
        if (option) {
          setTime((prevTime) => {
            if (prevTime.asSeconds() > 0) {
              return moment.duration(prevTime.asSeconds() - 1, "seconds");
            } else {
              clearInterval(timer);
              setIsActive(false);
              return moment.duration("00:00:00");
            }
          });
        } else {
          setCount((prevTime) =>
            moment.duration(prevTime.asSeconds() + 1, "seconds")
          );
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timer]);

  const handleStart = () => {
    if (formatTime() !== "00:00:00") {
      setIsActive(true);
    } else if (!option) {
      setIsActive(true);
    }
  };
  const handleStop = () => {
    setIsActive(false);
  };
  const handleReset = () => {
    setTime(moment.duration("00:00:00"));
    setCount(moment.duration("00:00"));
  };

  const formatTime = () => {
    const hours = time.hours().toString().padStart(2, "0");
    const minutes = time.minutes().toString().padStart(2, "0");
    const seconds = time.seconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };
  const formatTimeCount = () => {
    const minutes = count.minutes().toString().padStart(2, "0");
    const seconds = count.seconds().toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "Runasstopwatch") {
      setOption(false);
    } else {
      setOption(true);
    }
  };

  const onSetAlarm = () => {
    let alarmTime = `${hr.length == 2 ? hr : 0 + hr}:${
      mi.length == 2 ? mi : 0 + mi
    }:${sec.length == 2 ? sec : 0 + sec}`;
    {
      option &&
        localStorage.setItem("resentTime", JSON.stringify([...ll, alarmTime]));
      setTime(moment.duration(alarmTime));
    }
    setOpen(false);
  };

  const handleQuick = (time) => {
    setValue("StopTimer");
    setTime(moment.duration(time));
    setIsActive(true);
    setOption(true);
    localStorage.setItem("resentTime", JSON.stringify([...ll, time]));
  };

  console.log(ll);
  return (
    <>
      <div className="whiteTimeBox">
        {option ? (
          <h2 className="timeHeading">{formatTime()}</h2>
        ) : (
          <h2 className="timeHeading">{formatTimeCount()}</h2>
        )}
        <div>
          <button
            className="btnEdit"
            type="button"
            onClick={() => setOpen(true)}
          >
            Edit
          </button>
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
            className="btnReset"
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
            Set the timer for the specified time
          </div>
          <div className="panelBody">
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => handleQuick("00:01:00")}
                    >
                      01:00 min
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => handleQuick("00:02:00")}
                    >
                      02:00 min
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => handleQuick("00:03:00")}
                    >
                      03:00 min
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => handleQuick("00:04:00")}
                    >
                      04:00 min
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => handleQuick("00:05:00")}
                    >
                      05:00 min
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => handleQuick("00:05:00")}
                    >
                      10:00 min
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => handleQuick("00:05:00")}
                    >
                      30:00 min
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => handleQuick("00:05:00")}
                    >
                      45:00 min
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => handleQuick("00:05:00")}
                    >
                      01:05:00 hour
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="whiteTimeBoxTwo">
          <div className="panel-body">
            <div className="panelHeading">Recently used</div>
            <table>
              <tbody>
                {ll &&
                  ll.reverse().map((item, index) => (
                    <tr key={index}>
                      <td
                        onClick={() => handleQuick(item)}
                        style={{ cursor: "pointer" }}
                      >
                        {item}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
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
                    <a>Columbus Day</a>
                  </td>
                  <td>Oct 9, 2023</td>
                  <td>65 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Halloween</a>
                  </td>
                  <td>Oct 31, 2023</td>
                  <td>87 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Veterans Day</a>
                  </td>
                  <td>Nov 11, 2023</td>
                  <td>98 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Thanksgiving Day</a>
                  </td>
                  <td>Nov 23, 2023</td>
                  <td>110 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Black Friday</a>
                  </td>
                  <td>Nov 24, 2023</td>
                  <td>111 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Cyber Monday</a>
                  </td>
                  <td>Nov 27, 2023</td>
                  <td>114 days</td>
                </tr>
                <tr>
                  <td>
                    <a>Christmas</a>
                  </td>
                  <td>Dec 25, 2023</td>
                  <td>142 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal className="modalBox" open={open}>
        <Box
          sx={{
            width: 600,
            backgroundColor: "white",
          }}
        >
          <h2
            id="parent-modal-title"
            style={{
              backgroundColor: "green",
              height: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Edit Timer
          </h2>
          <Box>
            <Box>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Runasstopwatch"
                  control={<Radio />}
                  label="Run as stopwatch"
                />
                <FormControlLabel
                  value="StopTimer"
                  control={<Radio />}
                  label="Stop Timer"
                />
              </RadioGroup>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                padding: "0px 10px 5px 10px;",
              }}
            >
              <Box sx={{ width: "50%" }}>
                <InputLabel id="demo-simple-select-error-label">
                  Hour
                </InputLabel>
                <Select
                  labelId="demo-simple-select-disabled-label"
                  id="demo-simple-select-disabled"
                  value={hr}
                  sx={{ width: "100%" }}
                  onChange={(event) => setHr(event.target.value)}
                  disabled={value === "Runasstopwatch" ? true : false}
                >
                  {Object.keys(hour2).map((item) => (
                    <MenuItem key={item} value={item}>
                      {min[item]}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
              <Box sx={{ width: "50%" }}>
                <InputLabel id="demo-simple-select-error-label">
                  Minutes
                </InputLabel>
                <Select
                  labelId="demo-simple-select-disabled-label"
                  id="demo-simple-select-disabled"
                  value={mi}
                  sx={{ width: "100%" }}
                  disabled={value === "Runasstopwatch" ? true : false}
                  onChange={(event) => setmin(event.target.value)}
                >
                  {Object.keys(min).map((item) => (
                    <MenuItem key={item} value={item}>
                      {min[item]}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
              <Box sx={{ width: "50%" }}>
                <InputLabel id="demo-simple-select-error-label">
                  Seconds
                </InputLabel>
                <Select
                  labelId="demo-simple-select-disabled-label"
                  id="demo-simple-select-disabled"
                  value={sec}
                  sx={{ width: "100%" }}
                  disabled={value === "Runasstopwatch" ? true : false}
                  onChange={(event) => setsec(event.target.value)}
                >
                  {Object.keys(min).map((item) => (
                    <MenuItem key={item} value={item}>
                      {min[item]}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 10px",
            }}
          >
            <div>
              <Button
                sx={{
                  backgroundColor: "red !important",
                  color: "white",
                  margin: " 0px 0px 10px 0px",
                }}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                sx={{
                  backgroundColor: "green !important",
                  color: "white",
                  margin: " 0px 0px 10px 10px",
                }}
                onClick={onSetAlarm}
              >
                Start
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default TimePage;
