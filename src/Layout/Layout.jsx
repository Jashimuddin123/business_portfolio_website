import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";

const Layout = () => {
  return (
    <div>

      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet />
    </div>
  );
};

export default Layout;
