import React, { useContext } from "react";
import { TaskListContext } from "./TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { search,tasks } = useContext(TaskListContext);

  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.filter((item)=> search.toLowerCase() === '' ? item  : item.title.toLowerCase().includes(search)).map(task => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}
    </div>
  );
};

export default TaskList;
