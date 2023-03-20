import React, { useState } from 'react';
import HackerNews from '../../b5-news/HackerNews';
import Blog from './blog';

const MainCustomHook = () => {
    const [show,setShow]= useState(false)
    return (
        <div>
            <button onClick={() => setShow(!show)}>toggle</button>
            {show && <HackerNews></HackerNews>}
        </div>
    );
};

export default MainCustomHook;