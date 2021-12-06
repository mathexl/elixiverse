import React, { useState } from "react";
import styled from "styled-components";
import crena from "./img/crena.svg";

export const ExploreCrena = () => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const [dragLeftRef, setDragLeftRef] = useState(0);
  const [dragTopRef, setDragTopRef] = useState(0);

  const [dragLeftCurrent, setDragLeftCurrent] = useState(0);
  const [dragTopCurrent, setDragTopCurrent] = useState(0);

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
        src={crena}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          marginTop: top - dragTopRef + dragTopCurrent,
          marginLeft: left - dragLeftRef + dragLeftCurrent,
        }}
      ></img>
      <div>Use Arrow Keys to Move</div>
    </ExploreCrenaDiv>
  );
};

const ExploreCrenaDiv = styled.div`
  width: 100vw;
  height: calc(100vh - 50px - 70px);
  background: white;
  position: fixed;
  left: 0px;
  overflow: hidden;

  img {
    position: absolute;
    width: 160%;
    left: -5%;
    top: -80%;
    transition: 1s ease-in-out;
  }

  div {
    position: absolute;
    z-index: 4;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    top: 20px;
    left: 20px;
    border-radius: 8px;
    padding: 10px 18px;
    font-variant-caps: small-caps;
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
      display:none;
    }
  }
`;
