import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

const PrivateRoute = (props) => {
  const token = localStorage.getItem("token");
  const isTokenExist = Boolean(token);

  return isTokenExist ? (
    <Route {...props} component={props.component} />
  ) : (
    <Redirect to={"/login"} />
  );
};

export default PrivateRoute;
