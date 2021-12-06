import smoke from "./img/smoke.png";
import kisra from "./img/kisra.svg";
import spade from "./img/spade.png";
import styled, { keyframes } from "styled-components";

export const Graphics = () => {
  return (
    <>
      {" "}
      <SmokeImg src={smoke}></SmokeImg>
      <KisraImg src={kisra}></KisraImg>
      <SpadeImg src={spade}></SpadeImg>
    </>
  );
};

const SmokeAnimation = keyframes`
  from {
    filter:blur(5px);
  }

  to {
    filter:blur(0px);
  }
`;

const SmokeImg = styled.img`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 180px;
  animation: ${SmokeAnimation} 0.5s ease-in-out forwards 1 3.5s;
  filter: blur(5px);

  @media screen and (max-width: 700px) {
    & {
      display: none;
    }
  }
`;

const KisraAnimation = keyframes`
  from {
    margin-top: 200px;
    margin-left: -260px
  }

  to {
    margin-top: 0px;
    margin-left: 0px
  }
`;
const KisraImg = styled.img`
  position: fixed;
  top: 120px;
  left: 0px;
  width: 300px;
  margin-top: 200px;
  margin-left: -260px;
  animation: ${KisraAnimation} 0.5s ease-in-out forwards 1 4s;
`;

const SpadeAnimation = keyframes`
  from {
    margin-top: 200px;
    margin-right: -147px;
  }

  to {
    margin-top: 0px;
    margin-right: 0px
  }
`;

const SpadeImg = styled.img`
  position: fixed;
  top: 74vh;
  right: 0px;
  width: 180px;
  margin-top: 200px;
  margin-right: -147px;
  animation: ${SpadeAnimation} 0.5s ease-in-out forwards 1 4.5s;
`;
