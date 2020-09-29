import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "normalize.css";
import { UserProvider } from "context/authContext";
import PrivateRoute from "lib/privateRoute";
import Index from "./views";
import Login from "./views/login";
import Day from "./views/day";

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Index} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/day" component={Day} />
        </Switch>
      </Router>
    </UserProvider>
  );
}
