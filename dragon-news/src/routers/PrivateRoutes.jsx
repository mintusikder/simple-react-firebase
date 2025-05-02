import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/auth/login"}></Navigate>;
};

export default PrivateRoutes;
