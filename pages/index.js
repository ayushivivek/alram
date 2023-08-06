"use client";
import { useEffect, useState } from "react";
import moment from "moment";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { hour, min, tunes, quick } from "../uttils";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ReactPlayer from "react-player";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const AlarmClockPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [hr, setHr] = useState("12 AM");
  const [mi, setmin] = useState("0");
  const [ring, setRing] = useState("Classic");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      setDate(`${moment().format("ddd")} - ${moment().format("ll")}`);
      setTime(moment().format("h:mm:ss A"));
      clock();
    };

    updateDateTime(); // Update datetime immediately

    const timerId = setInterval(updateDateTime, 1000);

    return () => clearInterval(timerId); // Clear interval on unmount
  }, []);
  const clock = () => {
    const tt = localStorage.getItem("alarm");
    if (tt === moment().format("h:mm A")) {
      setTimeout(() => {
        localStorage.setItem("al", true);
        localStorage.setItem("open", true);
        localStorage.setItem("ring", tunes[ring]);
      }, 1000);
    }
  };

  const handleChange = (event) => {
    setRing(event.target.value);
  };

  const onSetAlarm = () => {
    let tempTime = hr.split(" ");
    let alarmTime = `${tempTime[0]}:${mi.length == 2 ? mi : 0 + mi} ${
      tempTime[1]
    }`;
    localStorage.setItem("alarm", alarmTime);
    setOpen(false);
    alert(`Alarm set for ${alarmTime}`);
  };

  const onCloseAlarm = () => {
    localStorage.clear();
  };

  const onTest = () => {
    let alarmTime = moment().format("h:mm A");
    localStorage.setItem("alarm", alarmTime);
    localStorage.setItem("al", true);
    localStorage.setItem("open", true);
  };
  const playRing = () => {
    localStorage.setItem("al", true);
  };
  const stopRing = () => {
    localStorage.setItem("al", false);
  };

  const quickSet = (alarmTime) => {
    localStorage.setItem("alarm", alarmTime);
    alert(`Alarm set for ${alarmTime}`);
  };

  return (
    <div>
      <ReactPlayer
        style={{ display: "none" }}
        url={tunes[ring]}
        loop={true}
        playing={
          typeof window !== "undefined" &&
          localStorage.getItem("alarm") &&
          localStorage.getItem("al") === "true"
            ? true
            : false
        }
      />
      <div className="whiteTimeBox">
        <h2 className="timeHeading">{time}</h2>
        <h3 className="dateHeading">{date}</h3>
        <button
          className="btnAlarm"
          type="button"
          onClick={() => setOpen(true)}
        >
          Set Alarm
        </button>
      </div>

      <div className="mainWrapper">
        <div className="whiteTimeBoxTwo">
          <div className="panelHeading">
            Set the alarm for the specified time
          </div>
          <div className="panelBody">
            {quick.map((item, index) => (
              <p
                className="alermBtn"
                style={{ cursor: "pointer" }}
                keys={index}
                onClick={() => quickSet(item)}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="whiteTimeBoxTwo">
          <div className="panelHeading">Recently used</div>
          <div className="panelBody">
            <div className="recentBox">
              <p className="recenttime">4:00 AM</p>
              <p>4:00 AM</p>
            </div>
            <div className="recentBox">
              <p className="recenttime">4:30 AM</p>
              <p>4:00 AM</p>
            </div>
            <div className="recentBox">
              <p className="recenttime">5:00 AM</p>
              <p>4:00 AM</p>
            </div>
            <div className="recentBox">
              <p className="recenttime">5:30 AM</p>
              <p>4:00 AM</p>
            </div>
            <div className="recentBox">
              <p className="recenttime">6:00 AM</p>
              <p>4:00 AM</p>
            </div>
            <div className="recentBox">
              <p className="recenttime">6:30 AM</p>
              <p>4:00 AM</p>
            </div>
            <div className="recentBox">
              <p className="recenttime">7:00 AM</p>
              <p>4:00 AM</p>
            </div>
            <div className="recentBox">
              <p className="recenttime">7:30 AM</p>
              <p>4:00 AM</p>
            </div>
            <div className="recentBox">
              <p className="recenttime">8:00 AM</p>
              <p>4:00 AM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="whiteTimeBoxthree">
        <div className="panelHeading">How to use the online alarm clock</div>
        <div className="mainbody">
          <p>
            Set the hour and minute for the online alarm clock. The alarm
            message will appear, and the preselected sound will be played at the
            set time.
          </p>
          <p>
            When setting the alarm, you can click the "Test" button to preview
            the alert and check the sound volume.
          </p>
          <p>
            You can configure the alarm clock appearance (text color, type, and
            size), and these settings will be saved; they will be used when you
            open your web browser next time.
          </p>
          <p>
            The online alarm clock will not work if you close your browser or
            shut down your computer, but it can work without an internet
            connection.
          </p>
          <p>
            You can add links to online alarm clocks with different time
            settings to your browser's Favorites. Opening such a link will set
            the alarm clock to the predefined time.
          </p>
        </div>
      </div>
      <Modal className="modalBox" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 600, backgroundColor: "white" }}>
          <h2
            id="parent-modal-title"
            style={{
              backgroundColor: "green",
              height: "70px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Edit Alarm
          </h2>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              padding: "0px 10px 5px 10px;",
            }}
          >
            <Box sx={{ width: "50%" }}>
              <InputLabel id="demo-simple-select-error-label">Hour</InputLabel>
              <Select
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                label="Age"
                value={hr}
                sx={{ width: "100%" }}
                onChange={(event) => setHr(event.target.value)}
              >
                {Object.keys(hour).map((item) => (
                  <MenuItem key={item} value={item}>
                    {hour[item]}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box sx={{ width: "50%" }}>
              <InputLabel id="demo-simple-select-error-label">Min</InputLabel>
              <Select
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                label="Age"
                value={mi}
                sx={{ width: "100%" }}
                onChange={(event) => setmin(event.target.value)}
              >
                {Object.keys(min).map((item) => (
                  <MenuItem key={item} value={item}>
                    {min[item]}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              padding: "0px 10px 5px 10px;",
            }}
          >
            <InputLabel id="demo-simple-select-error-label">Sound</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Rings"
              value={ring}
              sx={{ width: "100%" }}
              onChange={(event) => handleChange(event)}
            >
              {Object.keys(tunes).map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Box>
          {typeof window !== "undefined" &&
          localStorage.getItem("al") === "true" ? (
            <Button onClick={stopRing}>Stop</Button>
          ) : (
            <Button onClick={playRing}>Play</Button>
          )}
          <Box
            sx={{
              width: "100%",
              padding: "0px 10px 5px 10px;",
            }}
          >
            <InputLabel id="demo-simple-select-error-label">Title</InputLabel>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 10px",
            }}
          >
            <Button
              sx={{
                backgroundColor: "dirty !important",
                color: "black",
                margin: " 0px 0px 10px 0px",
                border: "1px solid darkgray",
              }}
              onClick={onTest}
            >
              Test
            </Button>
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
      <Modal
        className="modalBox"
        open={
          typeof window !== "undefined" &&
          localStorage.getItem("alarm") &&
          localStorage.getItem("open") === "true"
            ? true
            : false
        }
      >
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
            Alarm
          </h2>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <div>
              <AccessAlarmIcon
                color="disabled"
                sx={{ width: "100%", fontSize: 40 }}
              />
              <h4>
                {typeof window !== "undefined" && localStorage.getItem("alarm")}
              </h4>
            </div>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                backgroundColor: "green !important",
                color: "white",
                margin: " 0px 0px 10px 0px",
              }}
              onClick={() => onCloseAlarm()}
            >
              Ok
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default AlarmClockPage;
