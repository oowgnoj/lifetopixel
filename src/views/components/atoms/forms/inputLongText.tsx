import React, { FunctionComponent } from "react";
import styled from "styled-components";

type ShortSentenceProps = {
  index: number;
  handleChange: (index: number, text: string) => void;
};
const ShortSentence: FunctionComponent<ShortSentenceProps> = ({
  index,
  handleChange,
}) => {
  return <Input onChange={(e) => handleChange(index, e.target.value)}></Input>;
};

export default ShortSentence;

const Input = styled.textarea`
  width: 100%;
  outline: 0;
  height: 40px;
  border-width: 0 0 2px;
  border-color: olive;
`;
