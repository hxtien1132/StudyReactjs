import React from "react";
import UserCreate from "./UserCreate";
import EditUser from "./UserEdit";
import { Route, Router, Routes } from "react-router-dom";
import UserLists from "./UserLists";
import { UserProvider } from "./UserContext";
import UserDetails from "./DetailsUser";
import UserEdit from "./UserEdit";

const MainCrud = () => {
  return (
    <div className="App">
      <h1 className="text-center">REACT CRUD USING CONTEXT USESTATE</h1>
      <UserProvider>
        <Routes>
          <Route path="/" element={<UserLists></UserLists>}></Route>
          <Route path="/create" element={<UserCreate></UserCreate>}></Route>
          <Route path="/edit/:empid" element={<UserEdit></UserEdit>}></Route>
          <Route
            path="/detail/:empid"
            element={<UserDetails></UserDetails>}
          ></Route>
        </Routes>
      </UserProvider>
    </div>
  );
};

export default MainCrud;
