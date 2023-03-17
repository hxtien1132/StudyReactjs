import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import EmpSearch from "./EmpSearch";
import queryString from "query-string";
const EmpListing = () => {
  const URL = "http://localhost:8000/employee/";
  const [empdata, setEmpdata] = useState([]);
  const { debounceValue, setDebounceValue } = useDebounce();
  //  const paramString = queryString.stringify(filters);
  //  console.log("paramString", paramString);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function handleApi() {
      try {
        const response = await fetch(URL).then((res) => res.json());
        console.log(response);
        setEmpdata(response);
      } catch (error) {
        console.log("api err");
      }
    }
    handleApi();
  }, []);
  function loadDetail(id) {
    navigate("/employee/detail/" + id);
  }
  function loadRemove(id) {
    if (window.confirm("do you want to remove")) {
      fetch(URL + id, {
        method: "DELETE",
      })
        .then((resp) => {
          alert("delete success");
          window.location.reload();
        })
        .catch((err) => console.log(err));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }
  function loadEdit(id) {
    navigate("/employee/edit/" + id);
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-title text-center">
          <h2 className="text-center">Employee</h2>
        </div>
        <div className="card-body">
          <div className="input-group input-group-lg my-3">
            
            <input
              type="text"
              className="form-control"
              aria-describedby="inputGroup-sizing-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <Link to="employee/create" className="btn btn-success">
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
              {empdata &&
                empdata
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.name.toLowerCase().includes(search) ||
                          item.phone.toLowerCase().includes(search) ||
                          item.email.toLowerCase().includes(search) ||
                          item.id.toString().toLowerCase().includes(search);
                  })
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

export default EmpListing;
