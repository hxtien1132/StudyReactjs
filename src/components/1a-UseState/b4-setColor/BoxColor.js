import React, { useState } from "react";

function getRandomColor() {
  const COLOR_LIST = ["red", "pink", "green", "yellow", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

const BoxColor = () => {
  const [color, setColor] = useState(() => {  //initialStateValue
    const initColor = localStorage.getItem("box-color" || "red"); //chỉ chạy lần đầu tiên
    return initColor;
  });
  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box-color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{
        backgroundColor: color,
        textAlign: "center",
        width: "200px",
        height: "200px",
      }}
      onClick={handleBoxClick}
    ></div>
  );
};

export default BoxColor;
