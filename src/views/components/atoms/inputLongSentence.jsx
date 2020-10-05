import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LongSentence = ({ index, answer, handleChange }) => {
  return (
    <TextBox
      value={answer ? answer : ""}
      placeholder="Autosize height with minimum and maximum number of lines"
      autoSize={{ minRows: 2, maxRows: 6 }}
      onChange={(e) => handleChange(index, e.target.value)}
    />
  );
};

export default LongSentence;

const TextBox = styled.textarea`
  border: 1px solid #2b3553;
  border-radius: 0.4285rem;
  ::focus {
    border: 1px solid #e14eca;
    border-radius: 0.4285rem;
  }
`;

LongSentence.propTypes = {
  index: PropTypes.number,
  handleChange: PropTypes.func,
};
