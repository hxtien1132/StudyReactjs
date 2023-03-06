import React, { Fragment } from 'react';
import { useAccordion } from './Accordion-Context';


//specialized component
const AccordionHeader = ({children}) => {
const { show,handleToggleShow} = useAccordion()
    return (
        <div className='header cursor-pointer p-4  border border-solid border-gray-200 rounded-lg flex items-center justify-between' 
        onClick={handleToggleShow}>{children} {show ? <span>+</span> : <span>-</span>}</div>

    );
};

export default AccordionHeader;