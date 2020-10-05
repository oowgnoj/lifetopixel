import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Question from "views/components/molecules/question";
import GlobalStyle from "styles/globalstyle";
import { useUserInfo } from "context/authContext";

const Record = ({ index, question, handleText, handleNext, handlePrev }) => {
  const prev = "<";
  const next = ">";
  return (
    <Wrapper>
      <Question index={index} question={question} handleChange={handleText} />
      <ButtonWrapper>
        <Pointer onClick={handlePrev}>{prev}</Pointer>
        <Pointer onClick={handleNext}>{next}</Pointer>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Record;

Record.propTypes = {
  type: PropTypes.oneOf(["shortSentence", "longSentence"]),
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

const Pointer = styled.div`
  cursor: pointer;
  color: ${GlobalStyle.MAIN_COLOR};
  font-size: 21px;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
