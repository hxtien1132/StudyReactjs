import React, { useState } from 'react';

export default function useToggle () {
    const [show,setShow] = useState(false);
    const handleToggleShow=()=>{
        setShow((e)=>setShow(!show))
    }
    return {
        show,
        handleToggleShow,
    }
};

