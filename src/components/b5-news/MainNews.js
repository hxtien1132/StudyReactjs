import React, { useState } from "react";
import HackerNews from "./HackerNews";

const MainNews = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <HackerNews></HackerNews>}
    </div>
  );
};

export default MainNews;
