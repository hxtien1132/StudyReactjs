import React from 'react';
// import { calculateWinner } from '../../helper';
import Cell from './Cell';
const Board = (props) => {
    console.log(props);
    //Array(9).fill() ->[Underfined*9]
    //  console.log(props);
        // const cells = [null, null , null ,"X","X","X",null,null,null];
        // console.log(calculateWinner(cells));
     
    return (
        <div className='game-board'>
        {
           props.cells.map((item,index)=>(
                <Cell key={index}  value={item} onClick={()=> props.onClick(index)} 
                className={item==="X" ? "is-x" : item ==="O" ? "is-o" : ""}></Cell>
            ))
        }

        </div>
    );
};

export default Board;