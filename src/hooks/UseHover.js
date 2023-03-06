
import { useEffect, useRef, useState } from "react";

export default function useHover(){
    //mouseover:khi rê chuột vào
    //mouseout: khi rê chuột ra
    const [hovered,setHovered] = useState(false);
    const nodeRef = useRef(null)
    useEffect(()=>{ 
        function handlemouseOver(){
            setHovered(true)
        }
        function handlemouseOut(){
            setHovered(false)
        }
        const dom = nodeRef.current
        if(dom){
             nodeRef.current.addEventListener("mouseover",handlemouseOver);
             console.log(nodeRef.current);
             nodeRef.current.addEventListener("mouseout",handlemouseOut)

        }
        return()=>{
            dom.removeEventListener("mouseover",handlemouseOver)
            dom.removeEventListener("mouseout",handlemouseOut)

        }
    },[])
    return{
        hovered,
        nodeRef,
    }
}