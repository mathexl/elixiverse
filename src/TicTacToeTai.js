import { useState } from "react";
import styled from "styled-components";
import board from "./img/tictactoetai.png";
import { CTA } from "./Splash";
import { GeneralContent } from "./Styles";

const emptyBoard = new Array(8).fill(new Array(4).fill(0));

export const TicTacToeTai = () => {
  const [spots, setSpots] = useState(emptyBoard);
  const [turn, setTurn] = useState(1);

  var winningMarkers = new Array(8).fill(new Array(4).fill(0));

  const reset = () => setSpots(emptyBoard);

  spots.map((col, ci) =>
    col.map((row, ri) => {
      //winning via col.
      if (
        spots[ci][0] === spots[ci][1] &&
        spots[ci][0] === spots[ci][2] &&
        spots[ci][0] === spots[ci][3] &&
        spots[ci][0] !== 0
      ) {
        winningMarkers[ci] = [
          spots[ci][0],
          spots[ci][0],
          spots[ci][0],
          spots[ci][0],
        ];
      }

      //winning via forwards diagonal
      if (
        spots[(ci - ri + 8) % 8][0] === spots[(ci - ri + 1 + 8) % 8][1] &&
        spots[(ci - ri + 8) % 8][0] === spots[(ci - ri + 2 + 8) % 8][2] &&
        spots[(ci - ri + 8) % 8][0] === spots[(ci - ri + 3 + 8) % 8][3] &&
        spots[ci][ri] !== 0
      ) {
        winningMarkers = winningMarkers.map((ccol, cci) =>
          ccol.map((rrow, rri) =>
            cci === ci && rri === ri ? spots[ci][ri] : rrow
          )
        );
      }

      //winning via backwards diagonal
      if (
        spots[(ci + ri + 8) % 8][0] === spots[(ci + ri - 1 + 8) % 8][1] &&
        spots[(ci + ri + 8) % 8][0] === spots[(ci + ri - 2 + 8) % 8][2] &&
        spots[(ci + ri + 8) % 8][0] === spots[(ci + ri - 3 + 8) % 8][3] &&
        spots[ci][ri] !== 0
      ) {
        winningMarkers = winningMarkers.map((ccol, cci) =>
          ccol.map((rrow, rri) =>
            cci === ci && rri === ri ? spots[ci][ri] : rrow
          )
        );
      }

      //winning via first in row
      if (
        spots[ci][ri] === spots[(ci + 1) % 8][ri] &&
        spots[ci][ri] === spots[(ci + 2) % 8][ri] &&
        spots[ci][ri] === spots[(ci + 3) % 8][ri] &&
        spots[ci][ri] !== 0
      ) {
        winningMarkers = winningMarkers.map((ccol, cci) =>
          ccol.map((rrow, rri) =>
            cci === ci && rri === ri ? spots[ci][ri] : rrow
          )
        );
      }

      //winning via second in row
      if (
        spots[ci][ri] === spots[(ci - 1 + 8) % 8][ri] &&
        spots[ci][ri] === spots[(ci + 1) % 8][ri] &&
        spots[ci][ri] === spots[(ci + 2) % 8][ri] &&
        spots[ci][ri] !== 0
      ) {
        winningMarkers = winningMarkers.map((ccol, cci) =>
          ccol.map((rrow, rri) =>
            cci === ci && rri === ri ? spots[ci][ri] : rrow
          )
        );
      }

      //winning via third in row
      if (
        spots[ci][ri] === spots[(ci - 1 + 8) % 8][ri] &&
        spots[ci][ri] === spots[(ci - 2 + 8) % 8][ri] &&
        spots[ci][ri] === spots[(ci + 1) % 8][ri] &&
        spots[ci][ri] !== 0
      ) {
        winningMarkers = winningMarkers.map((ccol, cci) =>
          ccol.map((rrow, rri) =>
            cci === ci && rri === ri ? spots[ci][ri] : rrow
          )
        );
      }

      //winning via fourth in row
      if (
        spots[ci][ri] === spots[(ci - 1 + 8) % 8][ri] &&
        spots[ci][ri] === spots[(ci - 2 + 8) % 8][ri] &&
        spots[ci][ri] === spots[(ci - 3 + 8) % 8][ri] &&
        spots[ci][ri] !== 0
      ) {
        winningMarkers = winningMarkers.map((ccol, cci) =>
          ccol.map((rrow, rri) =>
            cci === ci && rri === ri ? spots[ci][ri] : rrow
          )
        );
      }
    })
  );

  //are there any winning markers.
  const winningMarkersFlat = winningMarkers.flat().filter((x) => x);
  const winner = winningMarkersFlat.length !== 0;

  return (
    <TicTacToeTaiDiv>
      {spots && (
        <TicTacToeTaiBoard>
          <img src={board}></img>
          <h3
            style={{
              background: winner
                ? winningMarkersFlat[0] === 1
                  ? "var(--tertiary)"
                  : "var(--secondary)"
                : turn === 0
                ? "var(--tertiary)"
                : "var(--secondary)",
            }}
          >
            {winner
              ? (winningMarkersFlat[0] === 1 ? "Ѧ" : "Ѣ") + " Wins!"
              : (turn === 0 ? "Ѧ" : "Ѣ") + "'s Turn"}
          </h3>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((v) =>
            [1, 2, 3, 4].map((b) => (
              <div
                className={"s" + v + "-" + b}
                style={{
                  cursor:
                    !winner && spots[v - 1][b - 1] === 0
                      ? "pointer"
                      : "default",
                  opacity: winner
                    ? winningMarkers[v - 1][b - 1]
                      ? 1
                      : 0.3
                    : 1,
                }}
                onClick={() => {
                  if (!winner && spots[v - 1][b - 1] === 0) {
                    setSpots(
                      spots.map((c, i) =>
                        //if matching spot, set to whoever's turn it is's marker.
                        c.map((r, j) =>
                          i === v - 1 && j === b - 1 ? turn + 1 : r
                        )
                      )
                    );
                    setTurn((turn + 1) % 2);
                  }
                }}
              >
                {spots[v - 1][b - 1] === 1 ? (
                  <span>Ѧ</span>
                ) : spots[v - 1][b - 1] === 2 ? (
                  "Ѣ"
                ) : (
                  ""
                )}
              </div>
            ))
          )}
        </TicTacToeTaiBoard>
      )}
      <TicTacToeOptions>
        <GeneralContent>
          <h1>Tic-Tac-Toe-Tai</h1>
          <h2>
            Play the peculiar spin on tic-tac-toe, popular to tyros in Chancellor
            Quail's conservatory.
          </h2>
          <br></br>
          <p>
            Similar to tic-tac-toe, players alternate making marks on the board.
            Without going through the center, a player <b>must</b> connect four
            markers in a row to win (via a row, column or diagonal).<br></br>
            <br></br>
            The circular diagonals get tricky! Good luck.
          </p>
          <br></br>
          <CTA onClick={reset}>Reset Game</CTA>
        </GeneralContent>
      </TicTacToeOptions>
    </TicTacToeTaiDiv>
  );
};

const TicTacToeTaiDiv = styled.div`
  margin-top: 30px;
`;

const TicTacToeOptions = styled.div`
  float: left;
  width: calc(100% - 500px);
  padding-left: 50px;
  box-sizing: border-box;
`;

const TicTacToeTaiBoard = styled.div`
  width: 500px;
  height: 500px;
  float: left;
  position: relative;

  h3 {
    font-weight: 300;
    color: white;
    background: black;
    border-radius: 8px;
    padding: 10px 18px;
    font-size: 18px;
    font-variant-caps: small-caps;
    position: absolute;
    top: -10px;
    left: -10px;
    font-family: GilroyQ;
  }

  img {
    width: 100%;
  }

  div {
    position: absolute;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: var(--secondary);
    cursor: pointer;

    span {
      color: var(--tertiary);
    }
  }

  div.s1-1 {
    top: 10%;
    left: 27%;
    width: 27%;
    height: 9%;
    transform: rotate(-9deg);
  }

  div.s2-1 {
    top: 10%;
    left: 55%;
    width: 27%;
    height: 9%;
    transform: rotate(15deg);
  }

  div.s3-1 {
    top: 28%;
    left: 72%;
    width: 27%;
    height: 9%;
    transform: rotate(69deg);
  }

  div.s4-1 {
    top: 58%;
    left: 72%;
    width: 30%;
    height: 9%;
    transform: rotate(114deg);
  }

  div.s5-1 {
    top: 76%;
    left: 50%;
    width: 28%;
    height: 12%;
    transform: rotate(160deg);
  }

  div.s6-1 {
    top: 74%;
    left: 19%;
    width: 33%;
    height: 12%;
    transform: rotate(207deg);
  }

  div.s7-1 {
    top: 56%;
    left: 5%;
    width: 24%;
    height: 10%;
    transform: rotate(257deg);
  }

  div.s8-1 {
    top: 28%;
    left: 5%;
    width: 30%;
    height: 10%;
    transform: rotate(295deg);
  }

  div.s1-2 {
    top: 19%;
    left: 34%;
    width: 22%;
    height: 9%;
    transform: rotate(-17deg);
  }

  div.s2-2 {
    top: 19%;
    left: 54%;
    width: 22%;
    height: 9%;
    transform: rotate(27deg);
  }

  div.s3-2 {
    top: 33%;
    left: 68%;
    width: 19%;
    height: 9%;
    transform: rotate(62deg);
  }

  div.s4-2 {
    top: 54%;
    left: 67%;
    width: 22%;
    height: 9%;
    transform: rotate(107deg);
  }

  div.s5-2 {
    top: 66%;
    left: 51%;
    width: 20%;
    height: 9%;
    transform: rotate(162deg);
  }

  div.s6-2 {
    top: 65%;
    left: 28%;
    width: 24%;
    height: 10%;
    transform: rotate(204deg);
  }

  div.s7-2 {
    top: 50%;
    left: 17%;
    width: 20%;
    height: 10%;
    transform: rotate(250deg);
  }

  div.s8-2 {
    top: 31%;
    left: 20%;
    width: 20%;
    height: 10%;
    transform: rotate(294deg);
  }

  div.s1-3 {
    top: 26%;
    left: 41%;
    width: 15%;
    height: 9%;
    transform: rotate(-17deg);
  }

  div.s2-3 {
    top: 27%;
    left: 54%;
    width: 15%;
    height: 9%;
    transform: rotate(30deg);
  }

  div.s3-3 {
    top: 36%;
    left: 64%;
    width: 15%;
    height: 9%;
    transform: rotate(51deg);
  }

  div.s4-3 {
    top: 27%;
    left: 54%;
    width: 15%;
    height: 9%;
    transform: rotate(30deg);
  }

  div.s4-3 {
    top: 49%;
    left: 62%;
    width: 15%;
    height: 9%;
    transform: rotate(115deg);
  }

  div.s5-3 {
    top: 58%;
    left: 52%;
    width: 13%;
    height: 9%;
    transform: rotate(152deg);
  }

  div.s6-3 {
    top: 57%;
    left: 37%;
    width: 15%;
    height: 9%;
    transform: rotate(201deg);
  }

  div.s7-3 {
    top: 47%;
    left: 30%;
    width: 13%;
    height: 9%;
    transform: rotate(250deg);
  }

  div.s8-3 {
    top: 35%;
    left: 31%;
    width: 13%;
    height: 7%;
    transform: rotate(297deg);
  }

  div.s1-4 {
    top: 34%;
    left: 48%;
    width: 7%;
    height: 9%;
    transform: rotate(-17deg);
  }

  div.s2-4 {
    top: 35%;
    left: 55%;
    width: 6%;
    height: 9%;
    transform: rotate(36deg);
  }

  div.s3-4 {
    top: 39%;
    left: 59%;
    width: 5%;
    height: 9%;
    transform: rotate(75deg);
  }

  div.s4-4 {
    top: 44%;
    left: 57%;
    width: 7%;
    height: 10%;
    transform: rotate(101deg);
  }

  div.s5-4 {
    top: 49%;
    left: 53%;
    width: 6%;
    height: 9%;
    transform: rotate(161deg);
  }

  div.s6-4 {
    top: 48%;
    left: 47%;
    width: 7%;
    height: 11%;
    transform: rotate(202deg);
  }

  div.s7-4 {
    top: 43%;
    left: 42%;
    width: 7%;
    height: 11%;
    transform: rotate(245deg);
  }

  div.s8-4 {
    top: 36%;
    left: 42%;
    width: 6%;
    height: 11%;
    transform: rotate(300deg);
  }
`;
