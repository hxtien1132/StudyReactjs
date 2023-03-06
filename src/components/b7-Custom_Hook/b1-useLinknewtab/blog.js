import React, { useEffect } from 'react';
import { useRef } from 'react';
import useLinknewtab from '../../../hooks/useLinknewtab';
import useHover from './UseHover';


const Blog = () => {
    const {contentRef}= useLinknewtab
    const {hovered,nodeRef} = useHover();
    // useEffect(()=>{
    //     if(contentRef){
    //         const links = contentRef.current.querySelectorAll("a");
    //         links.forEach((element) => 
    //             element.setAttribute("target","_blank")
    //       );
  
    //     }
    // },[])
    return (
        <div className='entry-content' ref={contentRef}> 
            <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit delectus odio quam quas iusto non ipsa maiores optio!
                 Enim dolor, quod assumenda fuga rerum molestias illo impedit quis error!
                 <a href="http://google.com"className={`underline ${hovered ? "text-green-400":""}`} ref={nodeRef}>google</a>
            </p>
            <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit delectus odio quam quas iusto non ipsa maiores optio!
                 Enim dolor, quod assumenda fuga rerum molestias illo impedit quis error!
                 <a href="http://google.com"className="underline  hover:text-green-400" >google</a>
            </p>
            <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit delectus odio quam quas iusto non ipsa maiores optio!
                 Enim dolor, quod assumenda fuga rerum molestias illo impedit quis error!
                 <a href="http://google.com"className="underline hover:text-green-400" >google</a>
            </p>
        </div>
    );
};

export default Blog;