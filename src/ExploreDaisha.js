import React, { useState } from "react";
import styled from "styled-components";
import daisha from "./img/map.svg";

export const ExploreDaisha = () => {
  const [left, setLeft] = useState(-300);
  const [top, setTop] = useState(0);
  console.log(top, left);

  const [dragLeftRef, setDragLeftRef] = useState(0);
  const [dragTopRef, setDragTopRef] = useState(0);

  const [dragLeftCurrent, setDragLeftCurrent] = useState(0);
  const [dragTopCurrent, setDragTopCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);

  const addToTop = (x) => setTop((old) => old + x);
  const addToLeft = (x) => setLeft((old) => old + x);

  const onTouchStart = (e) => {
    setDragLeftRef(e.touches[0].pageX);
    setDragTopRef(e.touches[0].pageY);
    setDragLeftCurrent(e.touches[0].pageX);
    setDragTopCurrent(e.touches[0].pageY);
  };

  const onTouchMove = (e) => {
    setDragLeftCurrent(e.touches[0].pageX);
    setDragTopCurrent(e.touches[0].pageY);
  };

  const onTouchEnd = (e) => {
    setLeft(left - dragLeftRef + dragLeftCurrent);
    setTop(top - dragTopRef + dragTopCurrent);
    setDragLeftRef(0);
    setDragTopRef(0);
    setDragLeftCurrent(0);
    setDragTopCurrent(0);
  };

  const onDragStart = (e) => {
    e.preventDefault();
    setDragLeftRef(e.pageX);
    setDragTopRef(e.pageY);
    setDragLeftCurrent(e.pageX);
    setDragTopCurrent(e.pageY);
    setDragging(true);
  };

  const onDrag = (e) => {
    e.preventDefault();
    if (dragging) {
      setDragLeftCurrent(e.pageX);
      setDragTopCurrent(e.pageY);
    }
  };

  const onDragEnd = (e) => {
    e.preventDefault();
    setLeft(left - dragLeftRef + dragLeftCurrent);
    setTop(top - dragTopRef + dragTopCurrent);
    setDragLeftRef(0);
    setDragTopRef(0);
    setDragLeftCurrent(0);
    setDragTopCurrent(0);
    setDragging(false);
  };

  const [chosenStoryIndex, setChosenStoryIndex] = React.useState(-1);

  React.useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") addToTop(-200);
      if (e.key === "ArrowUp") addToTop(200);
      if (e.key === "ArrowRight") addToLeft(-200);
      if (e.key === "ArrowLeft") addToLeft(200);
    });
  }, []);

  return (
    <ExploreCrenaDiv>
      <img
        src={daisha}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        draggable={true}
        onMouseDown={onDragStart}
        onMouseMove={onDrag}
        onMouseUp={onDragEnd}
        style={{
          marginTop: top - dragTopRef + dragTopCurrent,
          marginLeft: left - dragLeftRef + dragLeftCurrent,
        }}
      ></img>
      {false && (
        <StoryList>
          <Story
            onClick={() => {
              setChosenStoryIndex(0);
            }}
            chosen={chosenStoryIndex === 0}
            title={"Symbiotes I"}
            description={"Apricot Minolta and Jox Li are up to no good."}
          ></Story>
          <Story
            onClick={() => {
              setChosenStoryIndex(1);
            }}
            chosen={chosenStoryIndex === 1}
            title={"Symbiotes II"}
            description={"Apricot and Jox return for a curious reunion."}
          ></Story>
        </StoryList>
      )}
    </ExploreCrenaDiv>
  );
};

const Story = (props) => (
  <StoryDiv className={props.chosen ? "chosen" : ""}>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </StoryDiv>
);

const StoryList = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  width: 250px;
  background-color: white;
  box-shadow: 0px 0px 4px #ddd;
  border-radius: 4px;
`;

const StoryDiv = styled.div`
  padding: 20px;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  float: left;
  border-top: 1px #ddd solid;
  cursor: pointer;

  &.chosen {
    background: black;
  }

  h1 {
    padding: 0px;
    margin: 0px;
    font-size: 24px;
  }

  p {
    padding: 0px;
    margin: 0px;
    font-size: 14px;
    margin-top: 4px;
  }
`;

const ExploreCrenaDiv = styled.div`
  width: 100vw;
  height: calc(100vh - 50px - 70px);
  background: #ded582;
  position: fixed;
  left: 0px;
  overflow: hidden;

  img {
    position: absolute;
    width: 160%;
    left: -5%;
    top: -80%;
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }

  @media screen and (max-width: 700px) {
    img {
      transition: 0s ease-in-out;
      height: 247%;
      width: auto;
      left: -28%;
      top: -58%;
    }

    div {
      display: none;
    }
  }
`;
