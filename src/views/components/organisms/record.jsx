import React from "react";
import PropTypes from "prop-types";
import Question from "views/components/molecules/question";

const Record = ({ type, questions, handleChange }) => {
  return (
    <>
      <div>Records</div>
      {questions.map((el) => (
        <Question
          key={el.index}
          index={el.index}
          title={el.title}
          type={el.type}
          handleChange={handleChange}
        />
      ))}
    </>
  );
};

export default Record;

Record.propTypes = {
  type: PropTypes.oneOf(["shortSentence", "longSentence"]),
};
