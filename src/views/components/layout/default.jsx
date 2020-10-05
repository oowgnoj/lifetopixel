import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useUserInfo } from "context/authContext";
import { useHistory } from "react-router-dom";
import { requestLogout } from "lib/api/auth";

const LayoutComponent = ({ children }) => {
  const { userInfo, setUserInfo } = useUserInfo();
  const history = useHistory();

  const handleLogout = () => {
    setUserInfo(null);
    requestLogout();
    history.push("/login");
  };
  if (!userInfo) {
    return <></>;
  }
  return (
    <Layout>
      <>
        <Heading>
          {userInfo.username}
          <div style={{ color: "grey" }} onClick={handleLogout}>
            logout
          </div>
        </Heading>
      </>
      <Body>{children}</Body>
    </Layout>
  );
};
export default LayoutComponent;

LayoutComponent.propTypes = {
  children: PropTypes.array,
};

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20vw;
  height: 3vh;
`;

const Body = styled.div`
  margin: 0 20vw;
  height: 97vh;
  @media (max-width: "780px") {
    padding: 8px 0 ${(props) => (props.isShowCategoriesMore ? "0" : "9px")};
  }
`;
