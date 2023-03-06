import React  from 'react';
import { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);

  const handleClickIncrease = () => {
    setCount(count + 1);
  };

  const handleClickDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
       <div className="App">
        <h1>Hello {count}</h1>
      </div>
      <div>
        <button onClick={handleClickIncrease}>+</button>
        <button onClick={handleClickDecrease}>-</button>
      </div>
    </div>
  );
};

export default UseState;