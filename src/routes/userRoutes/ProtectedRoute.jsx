import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

import { useSelector } from "react-redux";
import UnauthorizedPage from "../../pages/common/Unauthorized";

// This function decodes the JWT token and returns the role
const getRoleFromToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded?.role; 
  } catch (error) {
    return null;
  }
};

const ProtectedRoute = ({ element, allowedRoles }) => {
  const location = useLocation();
  const { accessToken } = useSelector((state) => state.user);

  if (!accessToken) {
    // If there's no token, redirect to login page
    return <Navigate to="/login" state={{ from: location }} />
  }

  const userRole = getRoleFromToken(accessToken);

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // If the user's role isn't in the allowed roles, show unauthorized page
    return <UnauthorizedPage />;
  }

  return element;
};

export default ProtectedRoute;
