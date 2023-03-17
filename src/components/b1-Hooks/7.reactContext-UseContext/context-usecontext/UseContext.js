import Content from "./Content";
import React, { useContext } from "react";
import { ThemeContext} from "./ThemeContext";
const UseContext = () => {
  const context = useContext(ThemeContext);
  console.log(context);
  return (
      <div style={{ padding: "20px" }}>
        <button className="toggle" onClick={context.toggleTheme}>
          Togglt theme
        </button>
        <Content></Content>
      </div>
  );
};

export default UseContext;
