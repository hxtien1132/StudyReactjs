import { useState } from "react";

export default function useHandleChange(initialValues){
    const [values,setValues]=useState(initialValues );
      const handleChange=(e)=>{
        console.log(e.target.type);
        const type = e.target.type
        setValues({
            ...values,
            [e.target.name]:type === "checkbox" ? e.target.checked : e.target.value
        })
        // if(type === 'checked'){
        //     setValues({
        //         ...values,
        //         [e.target.name]:e.target.checked
        //     })
        // }else {
        // setValues({
        //     ...values,
        //     [e.target.name]:e.target.value,
        // });
        // }
      }
      return{
        values,
        handleChange,
      }
}