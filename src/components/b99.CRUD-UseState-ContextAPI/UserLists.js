import { Alert } from "bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Usercontext } from "./UserContext";
import UserSearch from "./UserSearch";
const URL = "http://localhost:8000/employee/";
const UserLists = () => {
  const { usersData, loadEdit, loadRemove, loadDetail, search } =
    useContext(Usercontext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <div className="card-title text-center">
          <h2 className="text-center">Employee</h2>
        </div>
        <div className="card-body">
          <UserSearch/>
          <div>
            <Link to="/create" className="btn btn-success">
              {" "}
              Add new(+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {usersData &&
                usersData
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(search) ||
                        item.phone.toLowerCase().includes(search) ||
                        item.email.toLowerCase().includes(search) ||
                        item.id.toString().toLowerCase().includes(search);
                }
                  )
                  .map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td className="text-center">
                        <button
                          onClick={() => loadEdit(item.id)}
                          className="btn btn-success"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => loadRemove(item.id)}
                          className="btn btn-danger"
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => loadDetail(item.id)}
                          className="btn btn-primary"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserLists;
