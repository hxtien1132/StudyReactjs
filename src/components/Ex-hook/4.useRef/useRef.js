import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
    console.log( "hxt"+previousInputValue.current );
   
    useEffect(() => {
      previousInputValue.current = inputValue; //current giúp lấy giá trị 
    }, [inputValue]);
  return <div>
    
     <input
        type="text" className=""
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
  </div>;
};

export default UseRef;
