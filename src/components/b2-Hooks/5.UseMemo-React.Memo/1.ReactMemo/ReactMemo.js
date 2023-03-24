import React, { useState } from 'react';
import Content from './Content';

const ReactMemo = () => {
    const [count, setCount] = useState(1)
    const [count2, setCount2] = useState(1);
    const incre = () => {
      setCount(count + 1)
    }
     const incre2 = () => {
      setCount2(count2 + 1)
    }
    
    return (
        <div>
            <Content count={count}></Content>
        <h1>{count}</h1>
        <h1>{count2}</h1>
        <button onClick={incre}>click me!</button>
        <button onClick={incre2}>click me2!</button>
      </div>
    );
};

export default ReactMemo;