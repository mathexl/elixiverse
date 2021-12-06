import logo from "./img/logo.svg";
import "./App.css";
import styled, { keyframes } from "styled-components";
import Loader from "./Loader";
import FontLoader from "./Fonts";
import { Graphics } from "./Graphics";
import { Splash } from "./Splash";
import React from "react";
import { TheConsortsRuse } from "./TheConsortsRuse";
import { ExploreElixirs } from "./ExploreElixirs";
import { ExploreCrena } from "./ExploreCrena";
import { FreeShortStory } from "./FreeShortStory";
import { TicTacToeTai } from "./TicTacToeTai";

const App = () => {
  FontLoader();

  const [page, setPage] = React.useState("splash");

  return (
    <>
      <Loader></Loader>
      <Main>
        <LogoImg src={logo} onClick={() => setPage("splash")}></LogoImg>
        <Navigation className={"hideOnMobile"}>
          <MappedLink
            page={page}
            setPage={setPage}
            value={"theConsortsRuse"}
            title={"THE CONSORT'S RUSE"}
          ></MappedLink>
          <MappedLink
            page={page}
            setPage={setPage}
            value={"exploreElixirs"}
            title={"EXPLORE ELIXIRS"}
          ></MappedLink>
          <MappedLink
            page={page}
            setPage={setPage}
            value={"exploreCrena"}
            title={"EXPLORE CRENA"}
          ></MappedLink>
          <MappedLink
            page={page}
            setPage={setPage}
            value={"freeShortStory"}
            title={"FREE SHORT STORY"}
          ></MappedLink>
          <MappedLink
            page={page}
            setPage={setPage}
            value={"ticTacToeTai"}
            title={"TIC-TAC-TOE-TAI"}
          ></MappedLink>
        </Navigation>
        <Navigation className={"hideOnDesktop"}>
          <MappedIcon
            page={page}
            setPage={setPage}
            value={"theConsortsRuse"}
            className={"fas fa-book-spells"}
          ></MappedIcon>
          <MappedIcon
            page={page}
            setPage={setPage}
            value={"exploreElixirs"}
            className={"far fa-flask-potion"}
          ></MappedIcon>
          <MappedIcon
            page={page}
            setPage={setPage}
            value={"exploreCrena"}
            className={"far fa-map"}
          ></MappedIcon>
          <MappedIcon
            page={page}
            setPage={setPage}
            value={"freeShortStory"}
            className={"far fa-scroll"}
          ></MappedIcon>
        </Navigation>
        <Graphics></Graphics>
        <Exterior>
          <Interior>
            {page === "splash" && <Splash></Splash>}
            {page === "theConsortsRuse" && <TheConsortsRuse></TheConsortsRuse>}
            {page == "exploreElixirs" && <ExploreElixirs></ExploreElixirs>}
            {page == "exploreCrena" && <ExploreCrena></ExploreCrena>}
            {page == "freeShortStory" && <FreeShortStory></FreeShortStory>}
            {page == "ticTacToeTai" && <TicTacToeTai></TicTacToeTai>}
          </Interior>
        </Exterior>
      </Main>
    </>
  );
};

const MappedLink = (props) => (
  <Link
    style={{ opacity: props.page === props.value ? 1 : 0.5 }}
    onClick={() => props.setPage(props.value)}
  >
    {props.title}
  </Link>
);

const MappedIcon = (props) => (
  <i
    style={{
      opacity: props.page === props.value ? 1 : 0.3,
      color: "var(--secondary)",
    }}
    onClick={() => props.setPage(props.value)}
    className={props.className}
  ></i>
);

const Main = styled.div`
  margin: 0;
  font-family: "Bodoni72";
  width: 100vw;
  min-height: 100vh;
  text-align: center;
`;

const Exterior = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Interior = styled.div`
  max-width: 1100px;
  width: 100%;
  position: relative;
  z-index: 3;
`;

const LogoImg = styled.img`
  height: 40px;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const Navigation = styled.div`
  width: 100%;
  height: 44px;
  border-top: 2px var(--secondary) solid;
  border-bottom: 2px var(--secondary) solid;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  box-sizing: border-box;
  @media screen and (max-width: 700px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const Link = styled.div`
  color: var(--secondary);
  width: 160px;
  cursor: pointer;
  opacity: 0.5;
`;

export default App;
