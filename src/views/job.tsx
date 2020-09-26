import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Record from "views/components/organisms/record";
import { postJob } from "lib/api/job";
import { transformToRequstBody } from "lib/common/helper";
import IQuestion, { IQuestionType } from "types/question";
import IJob from "types/job";

const questions: IQuestion[] = [
  {
    index: 0,
    type: IQuestionType.shortSentence,
    title: "어떤 일을 하셨나요?",
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
    field: "startTime",
    answer: "",
  },
  {
    index: 3,
    type: IQuestionType.shortSentence,
    title: "끝시간?",
    field: "sendTime",
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
    const body: IJob = transformToRequstBody(answers);
    const result = await postJob(body);
    if (result.hasError) {
      alert(result.data);
    } else {
      history.push("/");
    }
  };
  return (
    <Wrapper>
      <Record type="job" questions={questions} handleChange={handleAnswer} />
      <button onClick={handleRequest}>제출</button>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        뒤로가기
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 50vw;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
