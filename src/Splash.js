import styled from "styled-components";
import { FadeInKeyframes } from "./Styles";

export const Splash = () => {
  return (
    <SplashDiv>
      <h1>Welcome to the Elixiverse</h1>
      <h2>Created by M. Pregasen</h2>
      <p>
        Sign up for updates on the Elixiverse’s debut novel, the Consort’s Ruse,
        coming in late 2022.
      </p>
      <CTA>Sign Up for Updates</CTA>
      <br></br>
      <br></br>
    </SplashDiv>
  );
};

const SplashDiv = styled.div`
  width: 80%;
  height: calc(100vh - 50px - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;

  h1 {
    font-weight: 300;
    font-size: 60px;
    font-variant-caps: small-caps;
    color: var(--black);
    margin: 0px;
  }

  h2 {
    font-weight: 300;
    font-size: 30px;
    font-variant-caps: small-caps;
    color: var(--tertiary);
    margin-top: 5px;
  }

  p {
    font-weight: 300;
    font-size: 24px;
    color: var(--black);
    margin-top: 5px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 42px;
    }

    h2 {
      font-size: 25px;
    }
    p {
      font-size: 20px;
    }
  }
`;

export const CTA = styled.button`
  background: var(--secondary);
  color: var(--primary);
  border: none;
  padding: 10px 40px;
  border-radius: 6px;
  font-family: "GilroyQ";
  cursor: pointer;
  font-size: 16px;
  opacity: 0;
  animation: ${FadeInKeyframes} 0.5s 1 forwards 0.5s;
  @media screen and (max-width: 700px) {
    & {
      color: white;
    }
  }
`;
