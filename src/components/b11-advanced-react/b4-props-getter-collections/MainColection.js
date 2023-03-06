import React from "react";
import Switch from "./Switch";

function useToggle() {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);
  function getToggleProps({onClick, ...rest}={}){
    return{
        onClick: ()=>{ //props-getter
            onClick && onClick(); // nếu có onClick thì được sử dụng thêm Onclick()
            toggle()
        },
        ...rest
    };
    
  }
  return { on, toggle, 
    toggleProps:{//props-colections
    onClick:toggle,
  },getToggleProps};
}
//props-colections- kentc dodds-creator of remix
const MainCollection = () => {
  const { on, toggleProps,getToggleProps} = useToggle();
  return (
    <div>
      <Switch  {...getToggleProps({on})} />
      <hr />
      <button aria-label="custom-button"{...getToggleProps({
        onClick: () => console.info("hello"),
      })}>{on ? "on" : "off"}</button>
    </div>
  );
};
export default MainCollection;
