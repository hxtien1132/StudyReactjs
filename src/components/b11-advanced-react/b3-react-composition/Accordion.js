import React, {  Fragment, useContext, useState } from 'react';
import AccordionContent from './AccordionContent';
import { AccordionProvider, useAccordion } from './Accordion-Context';
import AccordionHeader from './AccordionHeader';
// import useToggle from './useToggle';

//Container component
const Accordion = ({header,children}) => {
// const { show,handleToggleShow} = useAccordion() //k dungf ngoaif
    return (
     <Fragment>
       <AccordionProvider>
          <div className='mb-5'>
              <AccordionHeader >{header}</AccordionHeader>
              <AccordionContent >{children}</AccordionContent>
        </div>
      </AccordionProvider>
     </Fragment>
    );
};

export default Accordion;