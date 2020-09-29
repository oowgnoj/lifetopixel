import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Question = ({ title }) => {
  return <Title>{title}</Title>;
};

export default Question;

Question.propTypes = {
  title: PropTypes.string,
};

const Title = styled.div`
  margin: 10px;
  width: 100%;
`;
