import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LongSentence = ({ index, handleChange }) => {
  return <Input onChange={(e) => handleChange(index, e.target.value)}></Input>;
};

export default LongSentence;

const Input = styled.textarea`
  width: 100%;
  outline: 0;
  height: 40px;
  border-width: 0 0 2px;
  border-color: olive;
`;

LongSentence.propTypes = {
  index: PropTypes.number,
  handleChange: PropTypes.func,
};
