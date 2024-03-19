// function PrivateRoute({ children }) {
//      const isAuthenticated = checkUserAuthentication();
//      return isAuthenticated ? children : <Navigate to="/login" />;
//    }

import React from "react";
import { useContext } from "react";
import { authcontext } from "./Context";

import { Navigate } from "react-router-dom";

function Privateroute({ children }) {
  const { user } = useContext(authcontext);
  return <>{user ? children : <Navigate to="/" />}</>;
}

export default Privateroute;
