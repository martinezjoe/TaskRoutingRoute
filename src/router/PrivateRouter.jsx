import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { state } = useLocation();

  return (
    <div>
      {state?.logged
        ? children
        : (alert("You must be logged"), (<Navigate to="/login" />))}
    </div>
  );
};

export default PrivateRoute;
