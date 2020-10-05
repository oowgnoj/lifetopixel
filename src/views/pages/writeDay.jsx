import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Layout from "views/components/layout/default";
import Record from "views/components/organisms/record";
import TypingAnimation from "views/components/molecules/typingAnimation";

import { postDay } from "lib/api/day";
import { transformToRequstBody } from "lib/common/helper";

const questions = [
  {
    index: 0,
    type: "starRating",
    title: "좋았던 점",
    field: "goodThing",
    answer: "",
  },
  {
    index: 1,
    type: "shortSentence",
    title: "안좋았던 점",
    field: "badThing",
    answer: "",
  },
  {
    index: 2,
    type: "shortSentence",
    title: "내일 목표는 무엇인가요?",
    field: "goalTomorrow",
    answer: "",
  },
  {
    index: 3,
    type: "shortSentence",
    title: "오늘의 주요 활동은?",
    field: "mainActivity",
    answer: "",
  },
  {
    index: 4,
    type: "starRating",
    title: "오늘 점수는? (1~10)",
    field: "score",
    answer: "",
  },
];

const WriteDay = () => {
  const [answers, setAnswer] = useState(questions);
  const [step, setStep] = useState(0);
  const history = useHistory();

  const handleAnswer = (index, text) => {
    console.log("index is", index, "text is ", text);
    const newAnswer = questions.map((el, i) => {
      if (i === index) {
        console.log("here");
        el.answer = text;
      }
      return el;
    });
    setAnswer(newAnswer);
  };
  const handleRequest = async () => {
    const body = transformToRequstBody(answers);
    const result = await postDay(body);
    if (result.hasError) {
      alert(result.data.response.data);
    } else {
      alert("성공적으로 제출되었습니다.");
      history.push("/");
    }
  };

  const handleNext = () => {
    console.log(step);
    console.log(questions.length);
    if (step === questions.length - 1) {
      handleRequest();
    } else {
      setStep((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (step === 0) {
      history.push("/");
    } else {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <Layout>
      {console.log(answers)}
      <Record
        index={step}
        handleText={handleAnswer}
        handleNext={handleNext}
        handlePrev={handlePrev}
        question={questions[step]}
      />
    </Layout>
  );
};

const Wrapper = styled.div``;

export default WriteDay;
