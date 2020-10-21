import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "normalize.css";
import "./styles/index.css";
import PrivateRoute from "lib/privateRoute";
import Index from "./views/pages";
import Login from "./views/pages/login";
import Day from "./views/pages/writeDay";
import { AuthContext } from "context/authContext";

export default function App() {
  console.log("app");
  return (
    <AuthContext.Provider value={true}>
      <Router>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Index} />
        <PrivateRoute path="/day" component={Day} />
      </Router>
    </AuthContext.Provider>
  );
}
