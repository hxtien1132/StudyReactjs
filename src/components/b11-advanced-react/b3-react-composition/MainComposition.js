import React from 'react';
import Accordion from './Accordion';
import Editable from './Editable';
// Specialized component(chuc nang )
// Container component
// Compound component
// props drilling
const MainComposition = () => {
    return (
        <div className='p-10 w-full max-w-xl mx-auto'>
            <Accordion header="Can i change my plane later">
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, illo ducimus
                     praesentium, quidem ullam temporibus recusandae doloribus consequuntur inventore 
                     ipsum molestiae dolorem rerum 
                </div>
            </Accordion>
            
            <Accordion header="Can i change my plane later 2">
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, illo ducimus
                     praesentium, quidem ullam temporibus recusandae doloribus consequuntur inventore 
                     ipsum molestiae dolorem rerum 
                </div>
            </Accordion>
            {/* <Editable></Editable> */}
        </div>
    );
};

export default MainComposition;