import React from "react";
import PropTypes from "prop-types";

const TodoList = (props) => {
  const { todos, onTodoClick } = props;
  console.log("todos", todos);
  console.log("onTodoclick", onTodoClick);
  function handleClick(todo) {
    if (onTodoClick) {
     onTodoClick(todo) //gọi lại hàm
    }
  }
 

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

export default TodoList;
