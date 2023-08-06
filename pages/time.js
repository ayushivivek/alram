import { useEffect, useState } from "react";
import moment from "moment";
import moment1 from "moment-timezone";

const TimerPage = () => {
  const timeZones = moment1.tz.names();
  const [timezone, setTimezone] = useState([]);
 
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

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
  return (
    <div>
      <div className="whiteTimeBox">
        <h2 className="timeHeading">{time}</h2>
        <h3 className="dateHeading">{date}</h3>
        <button className="btnAlarm" type="button">
          Set Alarm
        </button>
      </div>

      <div className="parent">
        {timezone.map((tz) => (
          <div className="whiteTimeBoxTime child">
            <div className="panelHeadingtime">{tz}</div>
            <div className="timemain">
              {moment().tz(tz).format("h:mm:ss A")}
            </div>
          </div>
          // <div key={tz}>{moment().tz(tz).format("h:mm:ss A")}</div>
        ))}
        <div className="addbtnwhitebox child">
          <button className="btnStart">Add</button>
        </div>
      </div>
      <div className="whiteTimeBoxthree">
        <div className="panelHeading">Most Popular Time Zones and Cities</div>
        <div className="list">
          {timeZones.map((tz) => (
            <div className="listChid">{tz}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TimerPage;
