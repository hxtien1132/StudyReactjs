import React from 'react';
import useMagicColor from '../../../hooks/useMagicColor';
import './style.scss'
const MagicColor = props => {
    const color = useMagicColor()
    return (
        <div className='magic-box' style={{backgroundColor:color,margin:'50px'}}>
        </div>
    );
};



export default MagicColor;