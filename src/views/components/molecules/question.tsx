import React, { FunctionComponent } from "react";
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
    <>
      <Title index={index} title={title} />
      <InputSentence index={index} handleChange={handleChange} />
    </>
  );
};

export default Question;
