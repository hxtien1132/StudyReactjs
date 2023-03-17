import { memo } from "react";

const Content = ({ onIncre }) => {
  console.log("re-render");
  return (
    <>
      <button onClick={onIncre}>click me!</button>
    </>
  );
};

export default memo(Content);
