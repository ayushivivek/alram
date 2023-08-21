import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import moment from "moment";
import Head from "next/head";

export default function Time({ digit }) {
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
    <>
      <Head>
        <title>Detail Timer</title>
        <meta name="Timer" content="Detail Timer clock page." />
      </Head>
      <div>
        <div className="whiteTimeBoxtime">
          <h2 className={`${digit && "digital-clock"}`}>{time}</h2>
          <h2 className={`timeHeading ${digit && "digital-clock"}`}>
            {moment().tz(time?.split("-").join("/"))?.format("h:mm:ss A")}
          </h2>
          <h3 className={`dateHeading ${digit && "digital-clock"}`}>{`${moment()
            ?.tz(time?.split("-").join("/"))
            ?.format("ddd")} - ${moment()
            ?.tz(time?.split("-").join("/"))
            ?.format("ll")}`}</h3>
        </div>
      </div>
    </>
  );
}
