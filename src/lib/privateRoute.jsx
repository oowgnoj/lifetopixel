import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserInfo } from "context/authContext";

const PrivateRoute = (props) => {
  const { userInfo, setUserInfo } = useUserInfo();
  console.log(userInfo);
  console.log(props);
  console.log("renderinf");
  return userInfo !== {} ? (
    <Route {...props} component={props.component} />
  ) : (
    <Redirect to={"/login"} />
  );
};

export default PrivateRoute;
