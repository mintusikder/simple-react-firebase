import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }

  if (!user) {
    return (
      <Navigate to={"/login"} state={{ form: location }} replace></Navigate>
    );
  }

  return children;
};

export default PrivateRoutes;
