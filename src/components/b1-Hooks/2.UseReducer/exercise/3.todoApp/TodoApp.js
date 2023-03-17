import React, { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { addJob, deleteJob, setJob } from './actions'
import logger from "./logger";
import "../style.css";

//1.initState
// const initState = {
//   job: "",
//   jobs: [],
// };
//2.Actions
// const SET_JOB = "set_job";
// const ADD_JOB = "add_job";
// const DELETE_JOB = "delete_job";

// const setJob = (payload) => {
//   return {
//     type: SET_JOB, //type:tên set_job
//     payload, //payload là dữ liệu
//   };
// };
// const addJob = (payload) => {
//   return {
//     type: ADD_JOB,
//     payload,
//   };
// };
// const deleteJob = (payload) => {
//   return {
//     type: DELETE_JOB,
//     payload,
//   };
// };
//3.reducer
// const reducer = (state, action) => {
//   console.log("action", action);
//   console.log("prev-state", state);
//   let newState;
//   switch (action.type) {
//     case SET_JOB:
//       newState = {
//         ...state,
//         job: action.payload,
//       };
//       break;
//     case ADD_JOB:
//       newState = {
//         ...state,
//         jobs: [...state.jobs, action.payload],
//       };
//       break;
//     case DELETE_JOB:
//       console.log(action.payload);
//       const newJobs = [...state.jobs];
//       newJobs.splice(action.payload, 1);
//       newState = {
//         ...state,
//         jobs: newJobs,
//       };
//       break;
//     default:
//       throw new Error("invalid action.");
//   }
//   console.log("new state", newState);
//   return newState; // return về state để update state
// };
//4.Dispatch

const TodoApp = () => {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  //dùng dispatch để gọi hàm reducer
  const { job, jobs } = state;
  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(addJob(job)); //job là payload
    dispatch(setJob(""));
    inputRef.current.focus();
  };
  return (
    <div style={{ padding: "0 20px" }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>add</button>
      <ul>
        {jobs &&
          jobs.map((job, index) => (
            <li key={index}>
              {job}{" "}
              <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default TodoApp;
