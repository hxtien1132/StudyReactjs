import React, { Children, Fragment } from 'react';
import { useAccordion } from './Accordion-Context';

//specialized component
const AccordionContent = ({children}) => {
const { show} = useAccordion()
    return (
        <div>
            {show && (<div className='content p-4 border-gray-200 mt-2'>{children}</div>)}
        </div>
      
    );
};

export default AccordionContent;