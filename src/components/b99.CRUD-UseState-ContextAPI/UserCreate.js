import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Usercontext } from "./UserContext";

const UserCreate = () => {
  const URL = "http://localhost:8000/employee";
  const { reload, setReload } = useContext(Usercontext);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    active: false,
  });
  console.log("user", user);
  const [validator, setValidator] = useState({
    validName: false,
    validEmail: false,
    validPhone: false,
  });

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, phone, active } = user;
    const empData = { name, email, phone, active };
    console.log(empData);
    // console.log({ id, name, email, phone, active });
    fetch(URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empData),
    })
      .then((res) => {
        setReload(!reload);
        console.log(res.status, res.data, res.headers);
        alert("save success");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  }
  return (
    <>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title text-center">
                <h2>Employee create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="id">ID</label>
                      <input
                        type="text"
                        value={user.id}
                        disabled="disabled"
                        className="form-control"
                        id="id"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        required
                        onMouseDown={(e) =>
                          setValidator({ ...validator, validName: true })
                        }
                        value={user.name}
                        onChange={(e) =>
                          setUser({ ...user, name: e.target.value })
                        }
                        type="text"
                        className="form-control"
                        id="name"
                      />
                      {user.name.length === 0 && validator.validName && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        required
                        onMouseDown={(e) =>
                          setValidator({ ...validator, validEmail: true })
                        }
                        value={user.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                        type="text"
                        className="form-control"
                        id="email"
                      />
                      {user.email.length === 0 && validator.validEmail && (
                        <span className="text-danger">Enter the email</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        required
                        onMouseDown={(e) =>
                          setValidator({ ...validator, validPhone: true })
                        }
                        value={user.phone}
                        onChange={(e) =>
                          setUser({ ...user, phone: e.target.value })
                        }
                        type="text"
                        className="form-control"
                        id="phone"
                      />
                      {user.phone.length === 0 && validator.validPhone && (
                        <span className="text-danger">Enter the phone</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={user.active}
                        onChange={(e) =>
                          setUser({ ...user, active: e.target.value })
                        }
                        type="checkbox"
                        className="form-check-input"
                      />
                      <label htmlFor="form-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button type="submit" className="btn btn-success">
                        Save
                      </button>
                      <Link to="/" className=" btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserCreate;
