import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useAuth } from "context/auth";
import { Link } from "react-router-dom";


const LayoutComponent = ({ children }) => {
  const { userInfo, setAuthToken } = useAuth();
  const handleLogout = async () => {
    setAuthToken(undefined);
  };

  return (
    <Layout>
      <Heading>
        {userInfo.me.email}
        <Link to="/">
        <button>메인</button>
        </Link>
        <Link to="/note">
          <button>노트</button>
        </Link>
        <Link to="/day">
        <button>하루 작성하기</button>
        </Link>
        <Link to="/write/note">
          <button>노트 작성하기</button>
        </Link>
        <Link to="/field">
          <button>필드 작성하기</button>
        </Link>
        <button onClick={handleLogout}>로그아웃</button>
      </Heading>
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
