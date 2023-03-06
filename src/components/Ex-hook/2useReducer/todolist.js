import React from 'react';
const initialState={
    job:'',
    job:[]
}
const Todolist = () => {
    return (
        <div className='px-5'>
            <h3>Todo</h3>
            <input className='border border-solid border-gray-600' type="text" placeholder='enter todo' />
            <button>add</button>
            <ul>
                <li>hxt &times</li>
                <li>tlc</li>
                <li>hhs</li>
            </ul>
            
        </div>
    );
};

export default Todolist;