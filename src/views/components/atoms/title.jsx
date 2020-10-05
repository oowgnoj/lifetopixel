import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GlobalStyle from "styles/globalstyle";

const Question = ({ title }) => {
  return <Title>{title}</Title>;
};

export default Question;

Question.propTypes = {
  title: PropTypes.string,
};

const Title = styled.span`
  font-size: 30px;
  color: ${GlobalStyle.MAIN_COLOR};
  padding-bottom: 3px;
  margin-bottom: 21px;
`;
