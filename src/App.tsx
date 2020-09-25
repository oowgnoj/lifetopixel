import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from "context/authContext";
import PrivateRoute from "lib/privateRoute";
import Index from "./views";
import Login from "./views/login";
import Day from "./views/day";
import Job from "./views/job";
import Note from "./views/note";

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Index} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/day" component={Day} />
          <PrivateRoute exact path="/note" component={Note} />
          <PrivateRoute exact path="/job" component={Job} />
        </Switch>
      </Router>
    </UserProvider>
  );
}
