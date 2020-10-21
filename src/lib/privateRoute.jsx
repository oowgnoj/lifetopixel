import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "context/authContext";
import { getMe } from "lib/api/auth";

const PrivateRoute = ({ Component, ...rest }) => {
  const isAuthenticated = useAuth();
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
