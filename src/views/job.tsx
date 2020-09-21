import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postJob } from "lib/api/job";
import Record from "views/components/organisms/record";
import IJob from "types/job";
import { transformToRequstBody } from "lib/common/helper";
import IQuestion, { IQuestionType } from "types/question";

const questions: IQuestion[] = [
  {
    index: 0,
    type: IQuestionType.shortSentence,
    title: "무슨 작업인가요",
    field: "name",
    answer: "",
  },
  {
    index: 1,
    type: IQuestionType.shortSentence,
    title: "카테고리?",
    field: "category",
    answer: "",
  },
  {
    index: 2,
    type: IQuestionType.shortSentence,
    title: "type?",
    field: "type",
    answer: "",
  },
  {
    index: 3,
    type: IQuestionType.shortSentence,
    title: "시작시간?",
    field: "끝시간",
    answer: "",
  },
];

export default () => {
  const [answers, setAnswer] = useState(questions);
  const history = useHistory();
  const handleAnswer = (index: number, text: string) => {
    const newAnswer = questions.map((el, i) => {
      if (i == index) {
        el.answer = text;
      }
      return el;
    });
    setAnswer(newAnswer);
  };
  const handleRequest = async () => {
    const body: IJob = transformToRequstBody(answers);
    const result = await postJob(body);
    if (result.hasError) {
      alert(result.data);
    } else {
      history.push("/");
    }
  };
  return (
    <>
      <Record type="job" questions={questions} handleChange={handleAnswer} />
      <button onClick={handleRequest}>제출</button>
    </>
  );
};
