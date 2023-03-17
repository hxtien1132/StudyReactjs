import {ADD_JOB,DELETE_JOB,SET_JOB} from'./constants'
export const setJob = (payload) => {
  return {
    type: SET_JOB, //type:tên set_job
    payload, //payload là dữ liệu
  };
};
 export const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
export const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};
