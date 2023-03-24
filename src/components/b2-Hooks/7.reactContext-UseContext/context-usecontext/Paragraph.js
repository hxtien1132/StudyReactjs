import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Paragraph = () => {
    const context = useContext(ThemeContext);
    console.log(context);
  return <div className={context.theme}>hxtien123@gmail.com</div>;
};

export default Paragraph;
