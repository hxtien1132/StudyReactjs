import { useEffect, useRef, useState } from "react";
function randomColor(color) {
  const color_list = ["red", "green", "yellow", "blue"];
  const currentIndex = color_list.indexOf(color);
  console.log(currentIndex);
  let newIndex = currentIndex;
  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * color_list.length);
  }
  console.log(color_list[newIndex]);
  return color_list[newIndex];
}
function useMagicColor(props) {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");
  useEffect(() => {
    const colorInterval = setInterval(() => {
      // console.log("first-color", color);
      //   console.log("change-color", colorRef.current);
      const newcolor = randomColor(colorRef.current);
        setColor(newcolor);
        colorRef.current = newcolor
    }, 2000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
