import React, { useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import Dropdown from "./Dropdown";
import SideBar from "./sideBar";
import TextArea from "./TextArea";
const Mainb6 = () => {
   const {show,setShow,nodeRef}= useClickOutSide("span")
  return (
    <div>
      {/* <TextArea></TextArea> */}
      {/* <SideBar></SideBar> */}
      <span
        className="inline-block  m-3 p-3 rounded-lg text-white bg-green-400 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        toggle
          </span>
          {show && <SideBar show={show} ref={nodeRef}></SideBar>}
      <Dropdown></Dropdown>
    </div>
  );
};

export default Mainb6;
