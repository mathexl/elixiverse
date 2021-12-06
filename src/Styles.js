import styled, { keyframes } from "styled-components";

export const FadeInKeyframes = keyframes`
    from { opacity: 0}
    to {opacity: 1}
`;

export const GeneralContent = styled.div`
  text-align: left;
  color: var(--black);
  width: 100%;
  z-index: 3;
  position: relative;

  h1 {
    margin-top: 0px;
    font-variant-caps: small-caps;
    font-size: 48px;
    margin-bottom: 0px;
    font-weight: 300;
    opacity: 0;
    animation: ${FadeInKeyframes} 0.5s 1 forwards;

    @media screen and (max-width: 700px) {
        font-size: 36px;
    }
  }

  h2 {
    margin-top: 5px;
    font-size: 24px;
    margin-bottom: 0px;
    font-weight: 300;
    opacity: 0;
    animation: ${FadeInKeyframes} 0.5s 1 forwards 0.2s;
    @media screen and (max-width: 700px) {
        font-size: 18px;
    }
  }

  h3 {
    margin-top: 16px;
    font-size: 16px;
    margin-bottom: 5px;
    font-variant-caps: small-caps;
    font-weight: 300;
    opacity: 0;
    animation: ${FadeInKeyframes} 0.5s 1 forwards 0.3s;
    font-family: GilroyQ;
  }

  p {
    font-size: 16px;
    margin-top: 0px;
    opacity: 0;
    animation: ${FadeInKeyframes} 0.5s 1 forwards 0.3s;
    font-family: "GilroyQ";
  }
`;
