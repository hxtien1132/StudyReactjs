import React, { useEffect, useRef, useState } from "react";

//lưu giá trị qua một tham chiếu bên ngoài(lưu giá trị trước đó)
//lấy elemt Dom

const UseRef = () => {
  const [count, setCount] = useState(60);
  const timerId = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();
  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  useEffect(() => {
    const rect = h1Ref.current.getBoundingClientRect();
    console.log(rect);
  });
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    // console.log("start->", timerId.current);
  };
  console.log(count, prevCount.current);
  const handleStop = () => {
    clearInterval(timerId.current);
    // console.log("stop", timerId.current);
  };
  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default UseRef;
