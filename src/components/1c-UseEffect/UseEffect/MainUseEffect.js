import React, { useState } from "react";
import UseEffectPreviewAvatar from "./UseEffect-previewAvatar";
import UseEffectWithDefendencies from "./UseEffectWithDefendencies";
import UseEffectWithDom from "./UseEffectWithDom";
import UseEffectWithTimerFunction from "./UseEffectWithTimerFunction";

const MainUseEffect = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div style={{ margin: "20px 100px" }}>
      <button style={{padding: "5px 10px",border:"1px solid black",borderRadius:"6px"}} onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && (
        /* <UseEffectWithDefendencies></UseEffectWithDefendencies> */
        /* <UseEffectWithDom></UseEffectWithDom> */
              /* <UseEffectWithTimerFunction></UseEffectWithTimerFunction> */
              <UseEffectPreviewAvatar></UseEffectPreviewAvatar>
      )}
    </div>
  );
};

export default MainUseEffect;
