import React from 'react';
import TodoListReducer from './TodoUseReducer';

const MainTodoReducer = () => {
    return (
        <div>
            <TodoListReducer username={'alo'}></TodoListReducer>
        </div>
    );
};

export default MainTodoReducer;