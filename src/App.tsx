import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./views";
import Login from "./views/login";
import Day from "./views/day";
import Job from "./views/job";
import Note from "./views/note";
export default function App() {
  return (
    <Router>
      <Route exact path="/">
        <Index />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/day">
        <Day />
      </Route>
      <Route exact path="/job">
        <Job />
      </Route>
      <Route exact path="/note">
        <Note />
      </Route>
    </Router>
  );
}
