import React, { useState } from "react";
import { requestLogin, requestLogout } from "../lib/api/auth";
import { useHistory } from "react-router-dom";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleRequest = async () => {
    const user = await requestLogin(email, password);
    if (user) {
      history.push("/");
    }
  };
  return (
    <div>
      <span>email</span>
      <input onChange={(e) => setEmail(e.target.value)} />
      <span>패스워드</span>
      <input onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRequest}>확인</button>
      <button onClick={() => requestLogout()}>로그아웃</button>
    </div>
  );
};
