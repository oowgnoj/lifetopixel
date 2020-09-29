import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ShortSentence = ({ index, handleChange }) => {
  return <Input onChange={(e) => handleChange(index, e.target.value)}></Input>;
};

export default ShortSentence;

ShortSentence.propTypes = {
  index: PropTypes.number,
  handleChange: PropTypes.func,
};

const Input = styled.input`
  width: 100%;
  outline: 0;
  border-width: 0 0 2px;
  border-color: olive;
`;
