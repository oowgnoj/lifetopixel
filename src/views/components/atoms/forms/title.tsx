import React, { FunctionComponent } from "react";

type QuestionProps = {
  index: number;
  title: string;
};
const Question: FunctionComponent<QuestionProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default Question;
