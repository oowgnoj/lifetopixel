import React, { FunctionComponent } from "react";
import styled from 'styled-components';
type QuestionProps = {
  index: number;
  title: string;
};
const Question: FunctionComponent<QuestionProps> = ({ title }) => {
  return <Title>{title}</Title>;
};

export default Question;

const Title = styled.div`
  margin: 10px;
  width: 100%;
`