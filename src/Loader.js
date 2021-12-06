import styled, { keyframes } from "styled-components";
import Lottie from "lottie-react";
import logoAnimation from "./animations/logo.json";

const Loader = () => {
  return (
    <LoaderDiv>
      <LoaderContainer>
        <Lottie animationData={logoAnimation} loop={false} />
      </LoaderContainer>
    </LoaderDiv>
  );
};

const LoaderAnimation = keyframes`
  from {
    opacity:1;
  }

  to {
    opacity:0;
  }
`;

const LoaderDiv = styled.div`
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  background: var(--secondary);
  position: fixed;
  top: 0px;
  left: 0px;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 1;
  animation: ${LoaderAnimation} 1s linear 1 3s forwards;
`;

const LoaderContainer = styled.div`
  width: 30vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 700px) {
    & {
      width: 60vw;
      height: 60vh;
    }
  }
`;

export default Loader;
