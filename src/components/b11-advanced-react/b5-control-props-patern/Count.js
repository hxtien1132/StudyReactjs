import React from "react";
import { useCount } from "./CountContext";

const Count = () => {
    const {count} = useCount()
  return (

      <span className="flex flex-1 items-center justify-center text-3xl font-medium">
        {count}
      </span>
   
  );
};

export default Count;
