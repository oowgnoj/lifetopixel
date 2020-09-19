import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/login";
export default function App() {
  return (
    <Router>
      <Route exact path="/">
        <Index />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Router>
  );
}
