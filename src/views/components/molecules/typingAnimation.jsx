import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TypingAnimation = ({ text }) => {
  return (
    <Wrapper>
      <div>{text}</div>
    </Wrapper>
  );
};

export default TypingAnimation;

TypingAnimation.propTypes = {
  text: PropTypes.string,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
