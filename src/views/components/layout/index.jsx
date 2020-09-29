import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useUserInfo } from "context/authContext";
import { useHistory } from "react-router-dom";
import { requestLogout } from "lib/api/auth";

const Layout = ({ children }) => {
  const { userInfo, setUserInfo } = useUserInfo();
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
export default Layout;

Layout.propTypes = {
  children: PropTypes.element,
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
