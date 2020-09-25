import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useUserInfo } from "context/authContext";
import { requestLogin } from "../lib/api/auth";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserInfo }: any = useUserInfo();
  const history = useHistory();
  const handleRequest = async () => {
    const user = await requestLogin(email, password);
    if (user) {
      const { email, username } = user.user;
      await setUserInfo({ email, username });
      history.push("/");
    }
  };

  return (
    <Wrapper>
      <span>email</span>
      <input onChange={(e) => setEmail(e.target.value)} />
      <span>패스워드</span>
      <input onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRequest}>확인</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  padding: 30px;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
