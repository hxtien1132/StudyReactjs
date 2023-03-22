import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRef } from "react";

const TextArea = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const handleChange = (e) => {
    setText(e.target.value);
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
    setTextareaHeight("auto");
  };
  useLayoutEffect(() => {   
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);

  return (
    <div className="p-5" style={{minHeight:parentHeight}}>
      <textarea
        className="transition-all overflow-hidden w-full max-w-[400px] p-5 
        rounded-lg border border-gray-300 focus:border-blue-400 resize-none leading-normal"
        placeholder="Please Enter Your Content ..."
        value={text}
        ref={textareaRef}
        style={{ height: textareaHeight }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
