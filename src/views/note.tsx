import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Record from "views/components/organisms/record";
import { transformToRequstBody } from "lib/common/helper";
import { postNote } from "lib/api/note";
import IQuestion, { IQuestionType } from "types/question";
import INote from "types/note";

const questions: IQuestion[] = [
  {
    index: 0,
    type: IQuestionType.shortSentence,
    title: "title",
    field: "title",
    answer: "",
  },
  {
    index: 1,
    type: IQuestionType.shortSentence,
    title: "summary",
    field: "summary",
    answer: "",
  },
  {
    index: 2,
    type: IQuestionType.shortSentence,
    title: "detail?",
    field: "detail",
    answer: "",
  },
  {
    index: 3,
    type: IQuestionType.shortSentence,
    title: "tag[]",
    field: "tag",
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
    const body: INote = transformToRequstBody(answers);
    const result = await postNote(body);
    if (result.hasError) {
      alert(result.data);
    } else {
      history.push("/");
    }
  };
  return (
    <Wrapper>
      <Record type="note" questions={questions} handleChange={handleAnswer} />
      <button onClick={handleRequest}>제출</button>
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
