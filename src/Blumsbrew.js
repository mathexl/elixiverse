import Lottie from "lottie-react";
import styled, { keyframes } from "styled-components";
import { CTA } from "./Splash";
import { GeneralContent, FadeInKeyframes } from "./Styles";
import blumsbrew from "./img/blumsbrew.png";
import React from "react";

export const Blumsbrew = () => {
  return (
    <>
      <BlumsbrewTopDiv>
        <img src={blumsbrew}></img>
        <p>
          Interested in joining the leading elixir manufacturer in Daisha?
          Blumsbrew Ltd. was founded by the visionary Benicio Blum to develop
          quality, safe vials.<br></br>
          <br></br>
          Explore Blumsbrew's diverse careers board below.
        </p>
      </BlumsbrewTopDiv>
      <BlumsbrewJobsBoard>
        <BlumsbrewJobsGroup>
          <h1>Theorist Positions</h1>
          <h2>Cultivation</h2>
          <h3>Berry Specialist</h3>
          <h3>Senior Berry Specialist</h3>
          <h3>Seed Inspector</h3>
          <h3>Spice Inspector</h3>
          <h3>Berry Specialist Intern</h3>
          <h3>Seed Inspector Intern</h3>

          <h2>Engineering</h2>
          <h3>Infusion Engineer</h3>
          <h3>Titration Engineer</h3>
          <h3>Iatrochemist</h3>
          <h3>Mixology Expert</h3>
          <h3>Infusion Intern</h3>
          <h3>Titration Intern</h3>

          <h2>Applications</h2>
          <h3>Elixir Testing Manager</h3>
          <h3>Usability Evaluator</h3>
        </BlumsbrewJobsGroup>
        <BlumsbrewJobsGroup>
          <h1>Practionist Positions</h1>
          <h2>Productions</h2>
          <h3>Swirlers</h3>
          <h3>Twirlers</h3>
          <h3>Wafters</h3>
          <h3>Jugglers</h3>
          <h3>Sterilizers</h3>
        </BlumsbrewJobsGroup>
      </BlumsbrewJobsBoard>
      <p>To Apply, please report to the Lotus Building and seek out Mr. Vira Tallulah</p>
      <br></br><br></br>
    </>
  );
};

const BlumsbrewJobsBoard = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BlumsbrewJobsGroup = styled.div`
  width: 48%;
  padding: 20px;
  background: white;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px #ddd;
  text-align: left;
  h1 {
    font-size: 24px;
    font-weight: 300;
    text-align:center;
  }

   h2 {
     font-size: 18px;
     font-weight: 300;
     border-bottom: 1px #ddd solid;
     margin-bottom: 0px;
     margin-top: 25px;
   }

   h3 {
    font-size: 14px;
    margin:10px 0px;
    font-weight: 300;
  }
`;

const BlumsbrewTopDiv = styled.div`
  margin-bottom: 80px;
  display: flex;
  padding-top: 40px;
  img {
    width: 20%;
  }

  p {
    text-align: left;
    color: var(--secondary);
    font-weight: 300;
    font-size: 24px;
    padding: 0px 30px;
    line-height: 34px;
  }

  @media screen and (max-width: 700px) {
    & {
      width: 90%;
      margin-left: 5%;
      margin-right: 5%;
    }
  }
`;
