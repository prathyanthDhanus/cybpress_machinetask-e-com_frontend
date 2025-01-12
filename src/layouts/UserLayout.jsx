import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const UserLayout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default UserLayout;
