import React from "react";
import {useCount} from "./CountContext"
const Increment = () => {
  const {handleIncrement} = useCount()
  return (
    <div>
      <button className="increment p-5 flex items-center justify-center text-lg bg-slate-200 cursor-pointer" 
      onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Increment;
