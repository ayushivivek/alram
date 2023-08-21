import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import moment1 from "moment-timezone";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Head from "next/head";

const TimerPage = ({ digit }) => {
  const ll = JSON.parse(
    typeof window !== "undefined" && localStorage.getItem("timeZone")
  );
  const router = useRouter();
  const timeZones = moment1.tz.names();
  const [timezone, setTimezone] = useState([]);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedTimezone, setSelected] = useState();
  const [edit, setEdit] = useState(false);
  const [editIndex, setIndex] = useState();

  useEffect(() => {
    const updateDateTime = () => {
      setDate(`${moment().format("ddd")} - ${moment().format("ll")}`);
      setTime(moment().format("h:mm:ss A"));
    };
    updateDateTime(); // Update datetime immediately
    const timerId = setInterval(updateDateTime, 1000);
    return () => clearInterval(timerId); // Clear interval on unmount
  }, []);

  useEffect(() => {
    setTimezone(timeZones.splice(0, 20));
  }, []);

  const handleOnClick = (zone) => {
    const selected = zone.split("/").join("-");
    router.push(`/worldtime/${selected}`);
  };

  const addTimeZone = () => {
    if (selectedTimezone) {
      localStorage.setItem(
        "timeZone",
        JSON.stringify([...ll, selectedTimezone])
      );
      setOpen(false);
      setSelected();
    }
  };

  const editHandle = () => {
    ll[editIndex] = selectedTimezone;
    localStorage.setItem("timeZone", JSON.stringify(ll));
    setOpen(false);
  };

  const openedit = (index) => {
    setEdit(true);
    setOpen(true);
    setIndex(index);
  };

  const openadd = () => {
    setEdit(false);
    setOpen(true);
  };
  return (
    <>
      <Head>
        <title>Time</title>
        <meta name="time" content="Time page." />
      </Head>
      <div>
        <div className="whiteTimeBox">
          <h6>Now Time</h6>
          <h2 className={`timeHeading ${digit && "digital-clock"}`}>{time}</h2>
          <h3 className={`dateHeading ${digit && "digital-clock"}`}>{date}</h3>
        </div>

        <div className="parent">
          {ll &&
            ll.map((tz, index) => (
              <div className="whiteTimeBoxTime child" key={index}>
                <div
                  className="panelHeadingtime"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="brck" onClick={() => handleOnClick(tz)}>
                    {tz}
                  </div>
                  <div
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => openedit(index)}
                  >
                    <EditIcon />
                  </div>
                </div>
                <div className={`timemain ${digit && "digital-clock"}`}>
                  {moment().tz(tz).format("h:mm:ss A")}
                </div>
              </div>
            ))}
        </div>
        <div className="addbtnwhitebox child">
          <button className="btnStart" onClick={() => openadd()}>
            Add
          </button>
        </div>
        <div className="whiteTimeBoxthree">
          <div className="panelHeading">Most Popular Time Zones and Cities</div>
          <div className="list">
            {timeZones.map((tz, index) => (
              <div
                className="listChid"
                key={index}
                onClick={() => handleOnClick(tz)}
              >
                {tz}
              </div>
            ))}
          </div>
        </div>
        <Modal className="modalBox" open={open}>
          <Box
            className="popup_timer_wrp"
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
              Add
            </h2>
            <Box style={{ padding: "30px 10px 30px 10px" }}>
              <Box sx={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-error-label">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-disabled-label"
                  id="demo-simple-select-disabled"
                  sx={{ width: "100%" }}
                  onChange={(e) => setSelected(e.target.value)}
                >
                  {timeZones.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
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
                {!edit ? (
                  <Button
                    sx={{
                      backgroundColor: "green !important",
                      color: "white",
                      margin: " 0px 0px 10px 10px",
                    }}
                    onClick={addTimeZone}
                    disabled={selectedTimezone === undefined ? true : false}
                  >
                    Start
                  </Button>
                ) : (
                  <Button
                    sx={{
                      backgroundColor: "green !important",
                      color: "white",
                      margin: " 0px 0px 10px 10px",
                    }}
                    onClick={editHandle}
                    disabled={selectedTimezone === undefined ? true : false}
                  >
                    Edit
                  </Button>
                )}
              </div>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default TimerPage;
