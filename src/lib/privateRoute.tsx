import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

export interface IPrivateRouteProps extends RouteProps {}

const PrivateRoute: React.FC<IPrivateRouteProps> = (props) => {
  const token: string | null = localStorage.getItem("token");
  const isTokenExist = Boolean(token);

  return isTokenExist ? (
    <Route {...props} component={props.component} />
  ) : (
    <Redirect to={"/login"} />
  );
};

export default PrivateRoute;
