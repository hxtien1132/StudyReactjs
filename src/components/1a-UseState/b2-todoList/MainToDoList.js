import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const MainToDoList = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend !" },
    { id: 2, title: "I love Easy Backend !" },
    { id: 3, title: "I love Easy Fullstack !" },
  ]);
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id)
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList)
  }
  function handleSubmit(formvalue) {
    console.log(formvalue);
    const newTodo = {
      id: todoList.length + 1,
      ...formvalue,
    }
    const newTodolist = [...todoList];
    newTodolist.push(newTodo);
    setTodoList(newTodolist)
  }
  return (
    <div style={{width:"500px",margin:'0 auto'}}>
      <h1> React hooks - Todolist</h1>
      <TodoForm onSubmit={handleSubmit}></TodoForm>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList>
    </div>
  );
};

export default MainToDoList;
