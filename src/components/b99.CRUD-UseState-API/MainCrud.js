import React from "react";
import { Route, Routes } from "react-router-dom";
import EmpCreate from "./EmpCreate";
import EmpDetails from "./EmpDetails";
import EmpEdit from "./EmpEdit";
import EmpListing from "./EmpListing";
const MainCrud = () => {
  return (
    <div className="app">
      <h1 className="text-center">REACT CRUD USING JSON-SEVER</h1>
      <Routes>
        <Route path="/" element={<EmpListing></EmpListing>}></Route>
        <Route
          path="/employee/create"
          element={<EmpCreate></EmpCreate>}
        ></Route>
        <Route
          path="/employee/edit/:empid"
          element={<EmpEdit></EmpEdit>}
        ></Route>
        <Route
          path="/employee/detail/:empid"
          element={<EmpDetails></EmpDetails>}
        ></Route>
      </Routes>
    </div>
  );
};

export default MainCrud;
