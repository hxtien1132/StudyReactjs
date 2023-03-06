import React from "react";
import {useCount} from "./CountContext"
const Decrement = () => {
  const {Decrement} = useCount()
  return (
    <div>
      <button className="decrement p-5 flex items-center justify-center bg-slate-200 text-lg cursor-pointer"onClick={Decrement}>
        -
      </button>
    </div>
  );
};

export default Decrement;
