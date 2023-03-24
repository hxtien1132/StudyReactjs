import React, { useReducer, useState } from "react";
import "./style.css";

// const [state, dispatch] = useReducer(reducer, initState);
// init state
const initState = 0;
// Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";
const reducer = (state, action) => {
  console.log("reducer-running");
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
    </div>
  );
};

export default UseReducer;
