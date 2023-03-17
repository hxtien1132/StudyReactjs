import React from 'react';

const Cell = ({value,onClick,className}) => {
    // const {value,onClick} = props ; //object desttructuring
    // console.log(value,onClick);
    return (
        <div className={`game-cell ${className}`} onClick={onClick}>
            {value}            
        </div>
    );
};

export default Cell;