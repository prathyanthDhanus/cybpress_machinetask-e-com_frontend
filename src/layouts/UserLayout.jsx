import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const UserLayout = () => {
  const location = useLocation();
  const hideNavbarFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box sx={{ flexShrink: 0 }}>{!hideNavbarFooter && <Navbar />}</Box>

      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>

      <Box sx={{ flexShrink: 0 }}>{!hideNavbarFooter && <Footer />}</Box>
    </Box>
  );
};

export default UserLayout;
