import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import moment from "moment";
import moment1 from "moment-timezone";

export default function Time() {
  const router = useRouter();
  const { time } = router.query;

  const [timer, setTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      setTime(moment().tz(time?.split("-").join("/"))?.format("h:mm:ss A"));
    };
    updateDateTime(); // Update datetime immediately
    const timerId = setInterval(updateDateTime, 1000);
    return () => clearInterval(timerId); // Clear interval on unmount
  }, []);

  return (
    <div>
      <div className="whiteTimeBoxtime">
        <h2>{time}</h2>
        <h2 className="timeHeading">
          {moment().tz(time?.split("-").join("/"))?.format("h:mm:ss A")}
        </h2>
        <h3 className="dateHeading">{`${moment()
          ?.tz(time?.split("-").join("/"))
          ?.format("ddd")} - ${moment()
          ?.tz(time?.split("-").join("/"))
          ?.format("ll")}`}</h3>
      </div>
    </div>
  );
}
