import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "normalize.css";
import "./styles/index.css";
import { UserProvider } from "context/authContext";
import PrivateRoute from "lib/privateRoute";
import Index from "./views/pages";
import Login from "./views/pages/login";
import Day from "./views/pages/writeDay";

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
