import React from "react";
import ScrollToTop from "react-scroll-to-top";

import Navbar from "./Navbar";
import Contact from "./Contact";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Contact />
      <div className="scroll">
        <ScrollToTop smooth />
      </div>
    </>
  );
};

export default Layout;
