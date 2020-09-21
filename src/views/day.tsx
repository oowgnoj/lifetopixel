import React, { useState } from "react";
import { postDay } from "lib/api/day";
import Record from "views/components/organisms/record";
import IDay from "types/day";
import { transformToRequstBody } from "lib/common/helper";
import IQuestion, { IQuestionType } from "types/question";
import { useHistory } from "react-router-dom";

const questions: IQuestion[] = [
  {
    index: 0,
    type: IQuestionType.shortSentence,
    title: "오늘 좋았나요",
    field: "goodThing",
    answer: "",
  },
  {
    index: 1,
    type: IQuestionType.shortSentence,
    title: "안좋았던 일은 무엇인가요?",
    field: "badThing",
    answer: "",
  },
  {
    index: 2,
    type: IQuestionType.shortSentence,
    title: "내일 목표는 무엇인가요?",
    field: "goalTomorrow",
    answer: "",
  },
  {
    index: 3,
    type: IQuestionType.shortSentence,
    title: "오늘의 주요 활동은?",
    field: "mainActivity",
    answer: "",
  },
  {
    index: 4,
    type: IQuestionType.shortSentence,
    title: "오늘 점수는?",
    field: "score",
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
    const body: IDay = transformToRequstBody(answers);
    const result = await postDay(body);
    if (result.hasError) {
      alert(result.data);
    } else {
      history.push("/");
    }
  };
  return (
    <>
      <Record type="day" questions={questions} handleChange={handleAnswer} />
      <button onClick={handleRequest}>제출</button>
    </>
  );
};
