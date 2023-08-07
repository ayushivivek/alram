import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import moment1 from "moment-timezone";

const TimerPage = () => {
  const router = useRouter();
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

  const handleOnClick = (zone) => {
    const selected = zone.split("/").join("-");
    router.push(`/worldtime/${selected}`);
  };

  return (
    <div>
      <div className="whiteTimeBox">
        <h6>Now Time</h6>
        <h2 className="timeHeading">{time}</h2>
        <h3 className="dateHeading">{date}</h3>
      </div>

      <div className="parent">
        {timezone.map((tz, index) => (
          <div className="whiteTimeBoxTime child" key={index}>
            <div className="panelHeadingtime" onClick={() => handleOnClick(tz)}>
              {tz}
            </div>
            <div className="timemain">
              {moment().tz(tz).format("h:mm:ss A")}
            </div>
          </div>
        ))}
        <div className="addbtnwhitebox child">
          <button className="btnStart">Add</button>
        </div>
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
    </div>
  );
};
export default TimerPage;
