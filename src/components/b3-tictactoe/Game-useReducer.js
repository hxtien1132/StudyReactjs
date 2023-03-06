import React from "react";
import { useState ,useReducer } from "react";
import { calculateWinner } from "../../helper";
import Board from "./Board";
import "./GameStyle.css";

const initialState = {
  board:Array(9).fill(null),
  xIsNext:true,

}
const gameReducer = (state,action) =>{ //state giá trị khởi tạo initialState
  console.log(state);
  console.log(action);
  switch (action.type) { //action chính là dispatch
    case 'CLICK':{

      const{board,xIsNext} = state;
      const{index,winner}= action.payload
      if(winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state)) 
      nextState.board[index]=xIsNext ? "X" :"O"
      nextState.xIsNext = !xIsNext
      return nextState ;
    }

    case 'RESET': {
      const nextState = JSON.parse(JSON.stringify(state)) 
      nextState.board = Array(9).fill(null) ;
      nextState.xIsNext = nextState.xIsNext
      return nextState ;
    }

    default:
      console.log("err");
      break;
  }
 return state
}
const GameUseReducer = () => {
  // const [board, setboard] = useState(Array(9).fill(null));
  // const [xIsNext, setXisNet] = useState(true);
  const [state,dispatch] = useReducer(gameReducer, initialState) //initialState là state ; gameReducer là dispatch
  // const action = {type:'CLICK',payload:{}}
  
  // const [state, setState]=useState({
  //   board:Array(9).fill(null),
  //   xIsNext:true,
  //   name: 'hxt'
  // })
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return console.log("ok r");
    dispatch({
      type :'CLICK',
      payload:{
        index: index,
        winner: winner,
      }
    })
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // setboard(boardCopy);
    // setXisNet((xIsNext) => !xIsNext);
    // setState({
    //   ...state,
    //   board:boardCopy,
    //   xIsNext: !state.xIsNext
    // })
    // console.log(state);
  };
  const handleResetGame = () => {
    dispatch({
      type:'RESET',

    })
  //  setState({
  //    // setboard(Array(9).fill(null));
  //   // setXisNet((true);
  //   board:Array(9).fill(null),
  //   xIsNext:state.xIsNext
  //  })
  };
  return (
    <div>
      <div className="game-winner">{winner ? `${winner} win ` : state.xIsNext ? "X đánh": "O đánh"}</div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {/* <div className="game-play">{state.xIsNext ?"X" :"0"} ĐÁNH</div> */}
      <br />
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default GameUseReducer;