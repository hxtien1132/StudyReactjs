import React from "react";
import { useState } from "react";
import { calculateWinner } from "../../helper";
import Board from "./Board";
import "./GameStyle.css";


const Game = () => {
  // const [board, setboard] = useState(Array(9).fill(null));
  // const [xIsNext, setXisNet] = useState(true);
  const [state, setState]=useState({
    board:Array(9).fill(null),
    xIsNext:true,
    name: 'hxt'
  })
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    console.log(index);
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) return console.log("ok r");
    boardCopy[index] = state.xIsNext ? "X" : "O";
    // setboard(boardCopy);
    // setXisNet((xIsNext) => !xIsNext);
    setState({
      ...state,
      board:boardCopy,
      xIsNext: !state.xIsNext
    })
    console.log(state);
  };
  const handleResetGame = () => {
   setState({
     // setboard(Array(9).fill(null));
    // setXisNet((true);
    board:Array(9).fill(null),
    xIsNext:state.xIsNext
   })
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {/* <div className="game-play">{state.xIsNext ?"X" :"0"} ĐÁNH</div> */}
      <div className="game-winner">{winner ? `${winner} win ` : state.xIsNext ? "X đánh": "O đánh"}</div>
      <br />
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
