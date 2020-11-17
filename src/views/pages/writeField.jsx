import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Layout from "views/components/layout";
import Record from "views/components/organisms/record";

import { postField } from "lib/api/field";
import { transformToRequstBody } from "lib/common/helper";

const questions = [
  {
    index: 0,
    type: "shortSentence",
    title: "제목",
    field: "title",
    answer: "",
  },
  {
    index: 1,
    type: "shortSentence",
    title: "설명",
    field: "description",
    answer: "",
  },
];

const WriteDay = () => {
  const [answers, setAnswer] = useState(questions);
  const [step, setStep] = useState(0);
  const history = useHistory();

  const handleAnswer = (index, text) => {
    const newAnswer = questions.map((el, i) => {
      if (i === index) {
        el.answer = text;
      }
      return el;
    });
    setAnswer(newAnswer);
  };
  const handleRequest = async () => {
    const body = transformToRequstBody(answers);
    try {
      await postField(body);
      alert("성공적으로 제출되었습니다.");
      history.push("/");
      setAnswer(questions);

    } catch (error) {
      alert(error.message);
    }
  };

  const handleNext = () => {
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
