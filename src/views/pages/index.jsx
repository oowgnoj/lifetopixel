import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Layout from "views/components/layout";
import DayPic from "assets/images/day.jpeg";
import { useAuth } from "context/auth";

const Index = (props) => {
  const { userInfo, setAuthToken } = useAuth();
  return (
    <Layout>
      <Wrapper>
        <Link to="/day">
          <button>작성하기</button>
        </Link>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div``;

export default Index;
