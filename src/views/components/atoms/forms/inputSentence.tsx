import React, { FunctionComponent } from "react";

type ShortSentenceProps = {
  index: number;
  handleChange: (index: number, text: string) => void;
};
const ShortSentence: FunctionComponent<ShortSentenceProps> = ({
  index,
  handleChange,
}) => {
  return <input onChange={(e) => handleChange(index, e.target.value)}></input>;
};

export default ShortSentence;
