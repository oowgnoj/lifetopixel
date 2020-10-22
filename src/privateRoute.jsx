import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "context/auth";
function PrivateRoute({ component: Component, ...rest }) {
  const { userInfo } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return userInfo.authToken ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { referer: props.location } }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
