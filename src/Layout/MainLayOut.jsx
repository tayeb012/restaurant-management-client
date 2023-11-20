import React from "react";
import NavBar from "../Component/ReuseElement/NavBar/NavBar";
import Footer from "../Component/ReuseElement/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <div className="bg-gray-700 text-[#333333]">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
