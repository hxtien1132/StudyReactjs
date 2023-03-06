import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [message, setMessage] = useState("Evondev");
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
      clearInterval(timer); // huỷ bỏ yêu cầu trong trường hợp nếu component vào trạng thái unmount
    };
  }, [message]);//defendencies điều kiện (kiểm tra state đó có thay đổi hay k) cho phép rerender hay k !
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default UseEffect;
