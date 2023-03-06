//1.tạo component có tên là tooltip
//2.component này có props children, props text
//3.áp dụng portal để khi rê chuột vào  text thì sẽ hiển thị tooltip content ở phía trên,
//   và chính giữa đoạn text
//4. sử dụng getBoundingClientReact
import React from "react";
import useHover from "../../../hooks/UseHover";
import ReactDOM from "react-dom";
import { useState } from "react";

const Tooltip = ({ children, text }) => {
    const {hovered,nodeRef} = useHover()
    const [coords,setCoords] = useState()
    const handleHover = e=>{
        setCoords(e.target.getBoundingClientRect());

    }
  return (
    <div>
        {hovered && 
      <TooltipContent coords={coords}>{children}</TooltipContent>  
        }
      <span className="font-semibold" ref={nodeRef} onMouseOver={handleHover}>{text}</span>
    </div>
  );
};
function TooltipContent({children, coords}){
    console.log("coords", coords);
    return ReactDOM.createPortal(
        <p className="p-3 bg-black text-white rounded-xl inline-block absolute -translate-y-full" style={{
            top:coords.top - coords.height +  window.scrollY,
            left: coords.left - coords.width - coords.y / 2
        }}>
            {children}
        </p>,
        document.querySelector("body")
    );
}
export default Tooltip;
