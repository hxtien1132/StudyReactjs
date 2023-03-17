import React from "react";
import { AuthProvider } from "../../context/AuthContext";
import CardList from "./CardList";
import { GalleryProvider } from "./gallery-context";
import HeaderMain from "./HeaderMain";
import PhotoList from "./photoList";

const MainContext = () => {
  return (
    <div>
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CardList></CardList>
        </GalleryProvider>
      </AuthProvider>
    </div>
  );
};

export default MainContext;
