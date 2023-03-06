import React, { createContext, useContext, useState } from "react";

const CountContext = createContext(); // tạo biến toàn cục(intance)
function CountProvider(props) {
  const [count, setCount] = useState(0);
  const value = [count, setCount];
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
  //  {...props} : children
}
//thông báo lỗi
function useCount(props) {
  console.log(props);
  const context = useContext(CountContext);
  console.log("context", context);
  if (typeof context === "undefined")
    throw Error("usecount must be used within a CountProvide");
  return context;
}
function CountDislay() {
  const [count] = useCount();
  console.log("count", count);
  return <div>the count is: {count}</div>;
}

function Counter() {
  const [, setCount] = useCount();
  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <button
      className="p-4 rounded-lg text-white font-semibold bg-purple-500"
      onClick={increment}
    >
      Increment count
    </button>
  );
}
const UseContext = () => {
  return (
    <div className="p-5 flex items-center justify-items-center gap-x-5">
      <CountProvider hxt="dtrai">
        <CountDislay></CountDislay>
        <Counter></Counter>
      </CountProvider>
    </div>
  );
};

export default UseContext;
