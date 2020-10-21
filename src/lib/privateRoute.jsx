import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserInfo } from "context/authContext";

const PrivateRoute = (props) => {
  const { userInfo, setUserInfo } = useUserInfo();
  console.log('private routing !!')
  console.log('here', userInfo)
  return userInfo ? (
    <Route {...props} component={props.component} />
  ) : (
    <Redirect to={"/login"} />
  );
};

export default PrivateRoute;
