import React, { useContext } from "react";
import { TaskListContext } from "./TaskListContext";

const TaskListSearch = () => {
  const { searchTitle } = useContext(TaskListContext);

  return (
    <>
      <div className="input-group input-group-lg mb-3 text-center " style={{width:'100%'}}>
        <input
          type="text"
          className="form-control"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>searchTitle(e)}
        />
      </div>
    </>
  );
};

export default TaskListSearch;
