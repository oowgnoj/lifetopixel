import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "views/components/atoms/forms/title";
import InputSentence from "views/components/atoms/forms/inputSentence";
import InputLongText from "views/components/atoms/forms/inputLongText";

const Question = ({ title, index, type, handleChange }) => {
  return (
    <Wrapper>
      <Title index={index} title={title} />

      {type === "shortSentence" && (
        <InputSentence index={index} handleChange={handleChange} />
      )}

      {type === "longSentence" && (
        <InputLongText index={index} handleChange={handleChange} />
      )}
    </Wrapper>
  );
};

export default Question;
Question.propTypes = {
  title: PropTypes.number,
  index: PropTypes.string,
  type: PropTypes.oneOf(["shortSentence", "longSentence"]),
};

const Wrapper = styled.div`
  padding: 10px 0px;
  margin: 10px 10px;
`;
