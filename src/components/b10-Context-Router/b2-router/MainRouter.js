import React from "react";
import { Component, Fragment, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./BlogPage";
import BlogPageDetails from "./BlogPageDetails";
import Nav from "./Nav";
import ProfilePage from "./ProfilePage";
const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog/:slug"
            element={<BlogPageDetails></BlogPageDetails>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="*" element={<>this is 404 page</>}></Route>
      </Routes>
    </div>
  );
};

export default MainRouter;
