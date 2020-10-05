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
  resize: none !important;
  overflow: auto !important;
  outline: none;
  box-shadow: none !important;
  border-color: #fff !important;
  &:hover {
    resize: none !important;
    overflow: auto !important;
    outline: none;
    box-shadow: none !important;
    border-color: #fff !important;
  }
  width: 100%;
  height: 10em;
  line-height: 31px;
  background-image: -webkit-linear-gradient(left, white 0, transparent 0),
    -webkit-linear-gradient(right, white 0, transparent 0),
    -webkit-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-repeat: repeat-y;
  background-size: 100% 100%, 100% 100%, 100% 31px;
  background-attachment: local;
`;
