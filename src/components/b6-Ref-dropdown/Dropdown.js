import React, { useEffect, useRef } from "react";
import { useState } from "react";
import UseClickOutSide from "../../hooks/useClickOutSide"

const Dropdown = () => {
  const {show, setshow, nodeRef} = UseClickOutSide();
  return (
    <div className="relative w-full max-w-[400px] " ref={nodeRef}>
      <div className="p-5 border-solid border  border-gray-300 rounded-lg w-full cursor-pointer"
      onClick={()=>setshow(!show)}>
        selector
      </div>
      {/* true hiện ra */}
      {show &&<div className="p-5 border-solid border border-gray-300 rounded-lg absolute top-full left-0 w-full bg-white ">
        <div className="py-5 cursor-pointer border-b border-solid border-b-gray-200">
          javascript
        </div>
        <div className="py-5 cursor-pointer border-b border-solid border-b-gray-200">
          html
        </div>
        <div className="py-5 cursor-pointer ">
          scss
        </div>
      </div>}
    </div>
  );
};

export default Dropdown;
