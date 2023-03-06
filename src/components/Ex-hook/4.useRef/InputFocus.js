import React, { useEffect, useRef } from "react";

const InputFocus = () => {
  const divRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    // console.log(divRef.current);
    // if (divRef.current) divRef.current.style.backgroundColor = "red";
    // inputRef.current.focus();
    if (inputRef.current) inputRef.current.focus();
  }, []);
  // console.log(divRef.current);

  return (
    <div className="input-div" ref={divRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Auto focus input"
        className="inline-block p-8 border-4 border-red-500 focus:border-blue-700 outline-0"
      />
    </div>
  );
};

export default InputFocus;
