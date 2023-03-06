import React, { useEffect, useState } from "react";

const UseEffectWithTimerFunction = () => {
  const [coundown, setCountdown] = useState(180);
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <div>
      <h1>{coundown}</h1>
    </div>
  );
};

export default UseEffectWithTimerFunction;
