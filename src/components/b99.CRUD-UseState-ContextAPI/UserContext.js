import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Usercontext = createContext();
const URL = "http://localhost:8000/employee";
const UserProvider = (props) => {
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState([]);
  const [reload, setReload] = useState(true);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        setUsersData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [reload]);
  function loadDetail(id) {
    navigate("/detail/" + id);
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
    navigate("/edit/" + id);
  }
  function searchUser(e) {
    setSearch(e.target.value);
  }
  const data = {
    usersData,
    setUsersData,
    reload,
    setReload,
    loadDetail,
    loadEdit,
    loadRemove,
    search,
    searchUser,
  };
  return <Usercontext.Provider value={data} {...props}></Usercontext.Provider>;
};

export { Usercontext, UserProvider };
