import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "views/components/atoms/title";
import InputSentence from "views/components/atoms/inputShortSentence";
import InputLongText from "views/components/atoms/inputLongSentence";
import StarRating from "views/components/atoms/inputStartRating";

const Question = ({ index, question, handleChange }) => {
  const { title, answer, type } = question;
  return (
    <Wrapper>
      <Title index={index} title={title} />

      {type === "shortSentence" && (
        <InputSentence
          index={index}
          handleChange={handleChange}
          answer={answer}
        />
      )}
      {type === "longSentence" && (
        <InputLongText
          index={index}
          handleChange={handleChange}
          answer={answer}
        />
      )}
      {type === "starRating" && (
        <StarRating index={index} handleChange={handleChange} answer={answer} />
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
  display: flex;
  flex-direction: column;
  height: 20vh;
`;
