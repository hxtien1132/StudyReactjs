import { useEffect, useState } from "react";

function formatDate(date) {
  if (!date) return;
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}

const useClock = (props) => {
  const [timeString, setTimeString] = useState("");
  console.log("hxtienF");
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);
    return () => {
      console.log("clock cleanup");
      clearInterval(clockInterval);
    };
  }, []);
  return { timeString };
};

export default useClock;
