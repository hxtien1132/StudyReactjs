import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

const Watch = () => {
    const timerRef = useRef(null);
    const [count,setCount]=useState(0)
    console.log(count);
    const handleStart = () =>{
        if(timerRef.current) return //điều kiện null(true) trả về return
      timerRef.current = setInterval(()=>{  
        setCount((counter)=>counter+1)
       },2000)
    }
    const handleStop = ()=>{
            clearInterval(timerRef.current)
            console.log(timerRef.current);

            timerRef.current = null
            console.log(timerRef.current);
    }
    useEffect(()=>{
     return()=>{
        clearInterval(timerRef.current)
     }
    },[]) //[] giúp chạy lần đầu tiên (1 lần)
    return (
        <div>
            <h3>Timer : {count}s</h3>
            <div>
                <button onClick={handleStart}>Start</button>

                <button onClick={handleStop}>stop</button>
            </div>
        </div>
    );
};

export default Watch;