import React, { useEffect, useRef } from 'react';



export default function useLinknewtab(){
    const contentRef= useRef(null)
    
    useEffect(()=>{
        if(contentRef){
            console.log(contentRef);
            const links = contentRef.current.querySelectorAll("a");
            links.length > 0 && links.forEach((element) => 
                element.setAttribute("target","_blank")
               
          );
            // console.log(links);

        }

    },[])
    return{
        contentRef
    };
};