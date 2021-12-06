import Lottie from "lottie-react";
import styled, { keyframes } from "styled-components";
import { CTA } from "./Splash";
import { GeneralContent, FadeInKeyframes } from "./Styles";
import sriin from "./animations/sriin.json";
import sriinPreview from "./animations/sriin.png";
import argent from "./animations/argent.json";
import argentPreview from "./animations/argent.png";
import ferashin from "./animations/ferashin.json";
import ferashinPreview from "./animations/ferashin.png";
import pria from "./animations/pria.json";
import priaPreview from "./animations/pria.png";
import React from "react";

export const ExploreElixirs = () => {
  const [elixirBuffer, setElixirBuffer] = React.useState(0);

  React.useEffect(() => {
    elixirBuffer < elixirs.length &&
      setTimeout(() => setElixirBuffer(elixirBuffer + 1), 1500);
  }, [elixirBuffer]);

  return (
    <ExploreElixirsDiv>
      <br></br>
      <br></br>
      <Cache>
        {elixirs.map((e) => (
          <Elixir {...e} key={e.name}></Elixir>
        ))}
      </Cache>
      <h2>
        Unlock the mystifying world of commercial elixirs and the supernatural
        abilities that come with them.{" "}
      </h2>
      {elixirs.map((e, i) => {
        return i < elixirBuffer ? (
          <Elixir {...e} key={e.name}></Elixir>
        ) : (
          <ElixirDivLoader key={i}>Loading...</ElixirDivLoader>
        );
      })}
      <ElixirDiv>
        <ElixirContent>
          <h1>
            And many more<span className={"hideOnMobile"}> ...</span>
          </h1>

          <p>
            Discover them in the upcoming Elixiverse debut novel, the Consort's
            Ruse{" "}
          </p>
          <p></p>
        </ElixirContent>
      </ElixirDiv>
    </ExploreElixirsDiv>
  );
};

const elixirs = [
  {
    animation: sriin,
    background: sriinPreview,
    name: (
      <>
        Sriin{" "}
        <span>
          Informal names include: <span>The Trust Elixir</span>,{" "}
          <span>The Mind Elixir</span>, <span>The Telepathy Elixir</span>
        </span>
      </>
    ),
    description:
      "A difficult elixir to brew, Sriin enables elixes to telepathetically speak without uttering an audible sound. There is a catch: the elix can only trasmit thoughts they could to be true. Because lies never work with Sriin, the elixir is an effective tool at establishing mutual trust.",
    ingredients: [
      "Elderflowers",
      "Kisra wings",
      "Yellow-Bellied Harks",
      "Boka Flowers",
      "Bibbli Bugs",
    ],
  },
  {
    animation: argent,
    background: argentPreview,
    name: "Argent",
    description:
      "Argent brought about an industrial revolution in Crena. While difficult to master, Argent enables elixes to manipulate silver, including suspending it in air. Argixes are experts on argent and wield spades, light silver knives useful in combat.",
    ingredients: ["Dragonflies", "Parrot Flower", "Deathleaf"],
  },
  {
    animation: pria,
    background: priaPreview,
    name: "Pria",
    description:
      "Elixes wielding Pria can cast a mist that will lock up any moving parts - be it the tiny gears of a clock or the wheels of an armored carriage. With plenty of industrial uses, Pria is a common elixir to mechanics. ",
    ingredients: ["Coppermite", "Roses", "Whole Kisras", "Gonga Flower"],
  },
  {
    animation: ferashin,
    background: ferashinPreview,
    name: "Ferashin",
    description:
      "Ferashin is used to cast thick, opaque smoke. Excellent for both self-defense and theatrics, Ferashin is an elixir common to eveyday prople in Crena. Ferashin smoke dissolves upon contact with stone.",
    ingredients: ["Kisra Wings", "Barron Wheat", "Honeyflower"],
  },
];

const Elixir = (props) => (
  <ElixirDiv>
    <ElixirPreview>
      <img src={props.background}></img>
      <Lottie animationData={props.animation} loop={false} />
    </ElixirPreview>
    <ElixirContent>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>
        Ingredients include{" "}
        {props.ingredients.map((a) => " " + a).slice(0, -1) +
          ", and " +
          props.ingredients[props.ingredients.length - 1]}
      </p>
    </ElixirContent>
  </ElixirDiv>
);

const ExploreElixirsDiv = styled.div`
  margin-bottom: 80px;

  h2 {
      text-align:left;
      color:var(--secondary);
      font-weight: 300;
  }

  @media screen and (max-width: 700px) {
    & {
      width: 90%;
      margin-left: 5%;
      margin-right: 5%;
    }
  }
`;

const ElixirDiv = styled.div`
  width: 100%;
  height: 200px;
  background: white;
  box-shadow: 0px 2px 8px #bbb;
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;
  opacity: 0;
  animation: ${FadeInKeyframes} 0.5s 1 forwards;

  @media screen and (max-width: 700px) {
    height: auto;
    display: inline-block;
  }
`;

const ElixirDivLoader = styled.div`
  width: 100%;
  height: 200px;
  background: rgba(255, 255, 255, 0.2);
  border: 3px var(--black) solid;
  box-shadow: 0px 2px 8px #bbb;
  margin-top: 10px;
  box-sizing: border-box;
  opacity: 0;
  animation: ${FadeInKeyframes} 0.5s 1 forwards;
  color: var(--black);
  justify-content: center;
  align-items: center;
  display: flex;
  font-variant-caps: small-caps;
`;

const ElixirPreview = styled.div`
  height: 180px;
  width: 180px;
  float: left;
  border: 2px var(--black) solid;
  box-sizing: border-box;
  animation: ${FadeInKeyframes} 0.5s 1 forwards;

  position: relative;

  img {
    position: absolute;
    top: 0px;
    height: 100%;
    left: 0px;
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
  }
`;

const ElixirContent = styled.div`
  float: left;
  width: calc(100% - 180px);
  height: 180px;
  padding-left: 15px;
  box-sizing: border-box;
  text-align: left;
  position: relative;

  h1 {
    margin-top: 0px;
    color: var(--tertiary);
    font-size: 48px;
    font-weight: 300;
    margin-bottom: 0px;
    opacity: 0;
    animation: ${FadeInKeyframes} 0.5s 1 forwards 0.2s;

    span {
      color: var(--black);
      font-size: 14px;
      opacity: 0;
      animation: ${FadeInKeyframes} 0.5s 1 forwards 0.3s;
      span {
        color: var(--tertiary);
      }
    }
  }

  p {
    margin-top: 0px;
    font-size: 18px;
    color: var(--black);
    font-weight: 300;
    span {
      color: var(--secondary);
    }
    opacity: 0;
    animation: ${FadeInKeyframes} 0.5s 1 forwards 0.4s;
    font-family: GilroyQ;
  }

  p:last-child {
    position: absolute;
    bottom: 0px;
    margin-bottom: 0px;
    opacity: 0;
    animation: ${FadeInKeyframes} 0.5s 1 forwards 0.6s;
  }

  @media screen and (max-width: 700px) {
    & {
      width: 100%;
      height: auto;
    }

    h1 {
      margin-top: 10px;
      span {
        display: none;
      }
    }

    p:last-child {
      position: relative;
      bottom: auto;
      margin-bottom: auto;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
`;

const Cache = styled.div`
  opacity: 0;
  pointer-events: none;
  position: absolute;
`;
