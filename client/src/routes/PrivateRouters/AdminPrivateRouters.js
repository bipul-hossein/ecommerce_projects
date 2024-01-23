import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";

const AdminPrivateRouters = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="h-screen flex justify-center content-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminPrivateRouters;
