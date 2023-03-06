import { createContext, useContext } from "react";
import useToggle from "./useToggle";

const AccordionContext = createContext();
function AccordionProvider(props) {
  console.log("props",props);
  const { show, handleToggleShow } = useToggle();
  const values = { show, handleToggleShow };
  //   console.log(values);
  return (
    <AccordionContext.Provider
      value={values}
      {...props} //AccordionHeader-context
    ></AccordionContext.Provider>
  );
}
function useAccordion() {
  const context = useContext(AccordionContext);
  // console.log(context);
  if (typeof context === "undefined") throw new Error("err");
  return context;
}
export { useAccordion, AccordionProvider };
