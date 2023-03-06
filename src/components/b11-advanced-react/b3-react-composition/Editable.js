import React, { useState } from 'react';
import useToggle from './useToggle';

const Editable = () => {
    const {show : edit,handleToggleShow :handleTonggleEdit} = useToggle()
   
    return (
        <div>
            {edit && <input type="text" className='p-3 border rounded-lg border-gray-400' />}
            <button onClick={handleTonggleEdit}>button</button>
        </div>
    );
};

export default Editable;