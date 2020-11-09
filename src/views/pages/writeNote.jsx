import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Layout from "views/components/layout";
import Record from "views/components/organisms/record";
import TypingAnimation from "views/components/molecules/typingAnimation";

import { postNote } from "lib/api/note";
import { transformToRequstBody } from "lib/common/helper";

const questions = [
  {
    index: 0,
    type: "fieldSelect",
    title: "해당되는 필드",
    field: "fieldId",
    answer: "",
  },
  {
    index: 0,
    type: "shortSentence",
    title: "노트 제목",
    field: "title",
    answer: "",
  },
  {
    index: 1,
    type: "shortSentence",
    title: "요약",
    field: "summary",
    answer: "",
  },
  {
    index: 2,
    type: "shortSentence",
    title: "풀어쓰기",
    field: "detail",
    answer: "",
  },
  {
    index: 3,
    type: "shortSentence",
    title: "참고자료",
    field: "reference",
    answer: "",
  },
  {
    index: 4,
    type: "multiSelect",
    title: "태그 목록",
    field: "tags",
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
    console.log(answers);
    const body = transformToRequstBody(answers);
    try {
      await postNote(body);
      alert("성공적으로 제출되었습니다.");
      history.push("/");
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
