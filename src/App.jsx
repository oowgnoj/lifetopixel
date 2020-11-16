import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";
import "./styles/index.css";
import { AuthContext } from "context/auth";
import { getMe } from "lib/api/auth";
import PrivateRoute from "privateRoute";
import Index from "./views/pages";
import Login from "./views/pages/login";
import Day from "./views/pages/writeDay";
import Note from "./views/pages/Note";
import Field from "./views/pages/writeField";
import WriteNote from "./views/pages/writeNote";

export default function App() {
  const existingTokens = localStorage.getItem("token");
  const [authToken, setAuthToken] = useState(existingTokens);
  const [me, setMe] = useState({ email: undefined, userName: undefined });

  React.useEffect(() => {
    async function requestMe() {
      try {
        const me = await getMe();
        setMe(me.data);
      } catch (error) {
        console.error(error);
      }
    }
    authToken && requestMe();
  }, [authToken]);

  const setToken = (data) => {
    setAuthToken(data);
    localStorage.setItem("token", JSON.stringify(data));
  };

  return (
    <AuthContext.Provider
      value={{ userInfo: { me, authToken }, setAuthToken: setToken }}
    >
      <Router>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Index} />
        <PrivateRoute exact path="/day" component={Day} />
        <PrivateRoute exact path="/note" component={Note} />
        <PrivateRoute exact path="/field" component={Field} />
        <PrivateRoute exact path="/write/note" component={WriteNote} />

      </Router>
    </AuthContext.Provider>
  );
}
