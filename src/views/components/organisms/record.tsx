import React, { FunctionComponent, useState, useEffect } from "react";
import Question from "views/components/molecules/question";

type RecordProps = {
  type: string;
  questions: { title: string; type: string; index: number }[];
  handleChange: (index: number, text: string) => void;
};
const Record: FunctionComponent<RecordProps> = ({
  type,
  questions,
  handleChange,
}) => {
  return (
    <>
      <div>Records</div>
      {questions.map((el) => (
        <Question
          key={el.index}
          index={el.index}
          title={el.title}
          type={el.type}
          handleChange={handleChange}
        />
      ))}
    </>
  );
};

export default Record;
