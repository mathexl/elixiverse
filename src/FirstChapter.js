import React, { useState } from "react";
import styled from "styled-components";
import { StoryText } from "./StoryText";
import { FadeInKeyframes } from "./Styles";

const FirstChapterDiv = styled.div`
  text-align: left;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  box-shadow: 0px 0px 4px solid;
  box-sizing: border-box;
  padding: 60px;
  padding-top: 50px;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 600px;
  margin-left: calc(50% - 300px);
  height: calc(100vh - 160px);
  overflow-y: scroll;
  opacity: 0;
  box-shadow: 0px 0px 8px #ddd;
  animation: ${FadeInKeyframes} 1s 1 forwards;

  h1 {
    margin: 0px;
    font-variant: small-caps;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    opacity: 0;
    animation: ${FadeInKeyframes} 1s 1 forwards 0.5s;
  }
  h2 {
    margin: 0px;
    font-variant: small-caps;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 300;
    text-align: center;
    opacity: 0;
    animation: ${FadeInKeyframes} 1s 1 forwards 0.8s;
  }

  @media screen and (max-width: 700px) {
    & {
      width: 90%;
      margin-left: 5%;
      margin-right: 5%;
      padding: 20px;
    }

    h2 {
      font-size: 14px;
    }
  }

  p {
    font-weight: 300;
    font-size: 15px;
    text-indent: 20px;
    margin: 0px;
    line-height: 26px;
    text-align: justify;
    opacity: 0;
    font-family: "Ibarra", "Times New Roman", Times, serif;
    animation: ${FadeInKeyframes} 1s 1 forwards 1.8s;
  }

  p.noIndent {
    text-indent: 0px;
  }

  .center {
    text-align: center;
  }

  p.p5 {
    margin: 0px 0px 0px 0px;
    text-align: justify;
    font: 14px "Ibarra Real Nova";
    color: #000000;
    line-height: 25px;
  }

  p.p6 {
    margin: 0px 0px 0px 0px;
    text-align: justify;
    text-indent: 10.8px;
    font: 14px "Ibarra Real Nova";
    color: #000000;
    line-height: 25px;
  }

  p.p7 {
    margin: 0px 0px 0px 0px;
    text-align: center;
    text-indent: 10.8px;
    font: 11px "Ibarra Real Nova";
    color: #000000;
    min-height: 13px;
    line-height: 25px;
  }
`;

export const FirstChapter = () => (
  <FirstChapterDiv>
    <h1>CHAPTER ONE</h1>
    <h2>Dova</h2>
    {StoryText}
  </FirstChapterDiv>
);
