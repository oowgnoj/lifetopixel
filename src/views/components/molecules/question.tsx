import React, { FunctionComponent } from "react";
import styled from 'styled-components';
import Title from "views/components/atoms/forms/title";
import InputSentence from "views/components/atoms/forms/inputSentence";

type QuestionProps = {
  title: string;
  index: number;
  type: string;
  handleChange: (index: number, text: string) => void;
};
const Question: FunctionComponent<QuestionProps> = ({
  title,
  index,
  handleChange,
}) => {
  return (
    <Wrapper>
      <Title index={index} title={title} />
      <InputSentence index={index} handleChange={handleChange} />
    </Wrapper>
  );
};

export default Question;


const Wrapper =styled.div`
  padding: 10px 0px;
  margin: 10px 10px;
`