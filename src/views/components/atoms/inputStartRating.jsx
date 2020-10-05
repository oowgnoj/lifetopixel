import React, { useState } from "react";
import styled from "styled-components";
import EmptyStar from "assets/images/empty_star.svg";
import FilledStar from "assets/images/filled_star.svg";
import { useEffect } from "react";

const InputStarRating = ({ index, answer, handleChange }) => {
  const [rating, setRating] = useState([false, false, false, false, false]);

  const handleRating = (nums) => {
    setRating(generateScore(nums));
    const score = generateScore(nums).filter((el) => el == true).length;
    handleChange(index, score);
  };
  useEffect(() => {
    setRating(generateScore(answer));
  }, []);
  const generateScore = (num) => {
    let def = [false, false, false, false, false];
    return def.map((el, index) => (index <= num ? true : false));
  };

  return (
    <Wrapper>
      {rating.map((el, nums) => (
        <img
          src={el ? FilledStar : EmptyStar}
          onClick={() => handleRating(nums)}
        />
      ))}
    </Wrapper>
  );
};

export default InputStarRating;

const Wrapper = styled.div`
  display: flex;
`;
