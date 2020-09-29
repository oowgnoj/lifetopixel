import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useUserInfo } from "context/authContext";
import { requestLogin } from "../lib/api/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userInfo, setUserInfo } = useUserInfo();
  const history = useHistory();

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo]);

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
      <InputWrapper>
        <Title>Life To Pixel</Title>
        <span>email</span>
        <input onChange={(e) => setEmail(e.target.value)} />
        <span>패스워드</span>
        <input onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleRequest}>확인</button>
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const InputWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 40vw;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  display: flex;
  align-self: center;
  font-size: 30px;
`;

export default Login;
