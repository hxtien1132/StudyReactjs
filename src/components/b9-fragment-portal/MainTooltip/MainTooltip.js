import React from "react";
import Tooltip from "./Tooltip";

const MainTooltip = () => {
  return (
    <div>
      <div className="p-16 mt-16">
        <Tooltip text="hover me"> this is tooltip content</Tooltip>
      </div>
      ;
    </div>
  );
};

export default MainTooltip;
