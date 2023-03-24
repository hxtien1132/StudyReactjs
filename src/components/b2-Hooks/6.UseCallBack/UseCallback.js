import React, { useCallback, useState } from "react";
import Content from "./Content";

const UseCallback = () => {
  const [count, setCount] = useState(1);
  // const [count2, setCount2] = useState(1);
  const handleincre = useCallback(() => {
    // console.log("click");
    setCount((prev) => prev + 1);
  }, []);
  // useCallback + react.memo
  // react.memo : giúp component k bị re-render
  // useCallback : giúp sự kiện truyền qua props k bị re-render
  return (
    <div>
      <Content onIncre={handleincre}></Content>
      <h1>{count}</h1>
      {/* <h1>{count2}</h1> */}
      {/* <button onClick={incre2}>click me2!</button> */}
    </div>
  );
};

export default UseCallback;
