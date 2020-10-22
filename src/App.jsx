import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import "normalize.css";
import "./styles/index.css";
import PrivateRoute from "privateRoute";
import Index from "./views/pages";
import Login from "./views/pages/login";
import Day from "./views/pages/writeDay";
import { AuthContext } from "context/auth";

export default function App() {
  const existingTokens = localStorage.getItem("token");
  const [authToken, setAuthToken] = useState(existingTokens);
  
  const setToken = (data) => {
    console.log(data);
    localStorage.setItem("token", JSON.stringify(data));
    setAuthToken(data);
  }

  return (
    <AuthContext.Provider value={{authToken, setAuthToken: setToken}}>
      <Router>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Index} />
        <PrivateRoute path="/day" component={Day} />
      </Router>
    </AuthContext.Provider>
  );
}
