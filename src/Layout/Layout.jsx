import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Footer/Footer";
// import Banner from "../Components/Banner/Banner";
// import Blog from "../Components/Blog/Blog";

const Layout = () => {
  return (
    <div>

      <Navbar></Navbar>
      {/* <Banner></Banner> */}
      {/* <Blog></Blog> */}
      
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Layout;
