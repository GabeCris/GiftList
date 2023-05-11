import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("userId");
  const currentRoute = window.location.pathname;

  return isAuthenticated && currentRoute !== "/" ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} />
  );
};

export default PrivateRoute;
