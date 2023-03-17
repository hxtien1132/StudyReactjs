import React, { useReducer, useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();
const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "add_todo": {
      return {
        ...state,
        todoss: [...state.todoss, action.payload],
      };
    }
    case "delete_todo": {
      const newTodos = state.todoss.filter(
        (todo) => todo.id !== action.id
      );
      console.log(newTodos);
      return {
        ...state,
        todoss: newTodos,
      };
    }
    case "toggle_complete": {
      const newTodos = state.todoss.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

      return {
        ...state,
        todoss: newTodos,
      };
    }
    case "edit_todo": {
      const newTodos = state.todoss.map((todo) =>
        todo.id === action.id ? { ...todo, isEditing: !todo.isEditing } : todo
      );
      return {
        ...state,
        todoss: newTodos,
      };
    }
    case "edit_tasks": {
      const newTodos = state.todoss.map((todo) =>
        todo.id === action.payloadId
          ? { ...todo, task: action.payloadTask, isEditing: !todo.isEditing }
          : todo
      );

      return {
        ...state,
        todoss: newTodos,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
};
const initialState = {
  todo: "",
  todoss: [],
};
export const TodoWrapper = () => {
  // const [todos, setTodos] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todo, todoss } = state;
  const addTodo = (todo) => {
    dispatch({
      type: "add_todo",
      payload: { id: uuidv4(), task: todo, completed: false, isEditing: false },
    });
    // setTodos([
    //   ...todos,
    //   { id: uuidv4(), task: todo, completed: false, isEditing: false },
    // ]);
  };

  const deleteTodo = (id) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    dispatch({
      type: "delete_todo",
      id: id,
    });
  };

  const toggleComplete = (id) => {
    dispatch({
      type: "toggle_complete",
      id: id,
    });
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //   )
    // );
  };

  const editTodo = (id) => {
    console.log(id);
    dispatch({
      type: "edit_todo",
      id: id,
    });
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    //   )
    // );
  };

  const editTask = (task, id) => {
    dispatch({
      type: "edit_tasks",
      payloadTask: task,
      payloadId: id,
    });
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    //   )
    // );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      {todoss &&
        todoss.map((todo, index) =>
          todo.isEditing ? (
            <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          )
        )}
    </div>
  );
};
