import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Layout from "views/components/layout";
import Record from "views/components/organisms/record";
import { postDay } from "lib/api/day";
import { transformToRequstBody } from "lib/common/helper";
import IQuestion, { IQuestionType } from "types/question";
import IDay from "types/day";

const questions: IQuestion[] = [
  {
    index: 0,
    type: IQuestionType.shortSentence,
    title: "좋았던 점",
    field: "goodThing",
    answer: "",
  },
  {
    index: 1,
    type: IQuestionType.shortSentence,
    title: "안좋았던 점",
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
    title: "오늘 점수는? (1~10)",
    field: "score",
    answer: "",
  },
];

export default () => {
  const [answers, setAnswer] = useState(questions);
  const history = useHistory();

  const handleAnswer = (index: number, text: string) => {
    const newAnswer = questions.map((el, i) => {
      if (i === index) {
        el.answer = text;
      }
      return el;
    });
    setAnswer(newAnswer);
  };
  const handleRequest = async () => {
    const body: IDay = transformToRequstBody(answers);
    const result = await postDay(body);
    console.log(result);
    if (result.hasError) {
      alert(result.data.response.data);
    } else {
      alert("성공적으로 제출되었습니다.");
      history.push("/");
    }
  };
  return (
    <Layout>
      <Wrapper>
        <Record type="day" questions={questions} handleChange={handleAnswer} />
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          뒤로가기
        </button>
        <button onClick={handleRequest}>제출</button>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
