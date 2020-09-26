import React from "react";
import styled from "styled-components";
import { useUserInfo } from "context/authContext";
import { useHistory } from "react-router-dom";
import { requestLogout } from "lib/api/auth";

const Layout: React.FunctionComponent = ({ children }) => {
  const { userInfo, setUserInfo }: any = useUserInfo();
  const history = useHistory();
  const handleLogout = () => {
    setUserInfo(null);
    requestLogout();
    history.push("/login");
  };
  if (!userInfo) {
    return <div>...</div>;
  }
  return (
    <Wrapper>
      <Header>
        <div>{userInfo.username}</div>
        <button onClick={handleLogout}>logout</button>
      </Header>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  padding: 0 20vw;
`;
const Header = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: space-between;
`;

export default Layout;
