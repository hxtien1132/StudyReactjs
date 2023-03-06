import React, { useEffect, useRef, useState } from 'react';



const TextArea = () => {
    const [text,setText] =useState('')
    const textareaRef = useRef(null)
    const [textAreaHeight,setTextAreaHeight]=useState("auto")
    // const [parentHeight,setParentHeight]=useState("auto")
    const handleChange =(event)=>{
        setTextAreaHeight("auto")
        setText(event.target.value)
        console.log(event.target.value);
    }
    useEffect(()=>{
          setTextAreaHeight(`${textareaRef?.current?.scrollHeight}px`)
        //   setParentHeight(`${textareaRef?.current?.scrollHeight}px`)

    },[text])

    return (
        <div className='p-5'>
            <textarea name="" placeholder='please enter your content' className='transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-400 resize-none
            focus:border-blue-500 outline-none'   ref={textareaRef} defaultValue={text} style={{height:textAreaHeight}} id="" 
            onChange={handleChange}>
             
            </textarea>
        </div>
    );
};

export default TextArea;