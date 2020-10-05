import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Input } from "antd";

const ShortSentence = ({ index, handleChange, answer }) => {
  return (
    <TextBox
      value={answer ? answer : ""}
      placeholder=""
      autoSize={{ minRows: 6, maxRows: 6 }}
      onChange={(e) => handleChange(index, e.target.value)}
    />
  );
};

export default ShortSentence;

ShortSentence.propTypes = {
  index: PropTypes.number,
  handleChange: PropTypes.func,
};

const TextBox = styled.textarea`
  min-height: 80px;
  color: black;
  font-weight: normal;
  background: white;
  border: 0;
  box-shadow: inset 0 0 3px #8c6746;
`;
