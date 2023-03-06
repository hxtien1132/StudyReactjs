import React, { useState } from "react";
import "./crud.css";
const LISTS = [
  { id: 1, name: "hxt" },
  { id: 2, name: "duc toan" },
  { id: 3, name: "linh chi" },
];

const Crud = () => {
  const [lists, setLists] = useState(LISTS);
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="id">Id</label>
          <input type="text" id="id" placeholder="Id" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="name" />
        </div>
        <button>Add</button>
      </form>
      <div>
        <ul className="lists">
          {lists.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Crud;
