import React, { createContext, useState, useEffect } from "react";
import uuid from "react-uuid";
export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);
  const [search,setSearch] = useState('')
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [editItem, setEditItem] = useState(null);

  // Add tasks
  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  // Remove tasks
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Clear tasks
  const clearList = () => {
    setTasks([]);
  };

  // Find task
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  // Edit task
  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );

    console.log(newTasks);

    setTasks(newTasks);
    setEditItem(null);
  };

  //SearchTitle
  const searchTitle = (e) => {
   setSearch(e.target.value)
  }

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
        search,
        searchTitle,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
