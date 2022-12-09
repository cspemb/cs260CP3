import { useState, useEffect } from "react";
import TicTacToeBox from "./TicTacToeBox";
import "./TicTacToe.scss";
import { Button } from "../../../lib/components";

const default_state = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {
  const [gameBoxes, setGameBoxes] = useState(default_state);
  const [currPlayer, setCurrPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const makeMove = (index) => {
    setGameBoxes((prev) => {
      const updated = [...prev];
      updated[index] = currPlayer;
      setCurrPlayer(currPlayer === "X" ? "O" : "X");

      return updated;
    });
  };

  useEffect(() => {
    if (gameBoxes.every((box) => box)) {
      setWinner(evaluateWinner(gameBoxes, currPlayer));
    }
  }, [currPlayer, gameBoxes]);

  const resetGame = () => {
    setGameBoxes(default_state);
    setCurrPlayer("X");
    setWinner("");
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h2>Tic Tac Toe</h2>
        <p>{!winner ? `${currPlayer}'s turn:` : getWinnerText(winner)}</p>
      </div>
      <div className="game-board">
        {gameBoxes.map((box, index) => (
          <TicTacToeBox
            key={index}
            onClick={() =>
              !winner && !gameBoxes[index] ? makeMove(index) : null
            }
          >
            {box}
          </TicTacToeBox>
        ))}
      </div>

      <Button className="reset-button" handleClick={resetGame}>
        Reset Game
      </Button>
    </div>
  );
};

function evaluateWinner(boxes, nextPlayer) {
  const isWinningRow = (boxes) => {
    for (let i = 0; i < boxes.length; i += 3) {
      if (
        boxes[i] !== "" &&
        boxes[i] === boxes[i + 1] &&
        boxes[i] === boxes[i + 2]
      )
        return true;
    }
    return false;
  };
  const isWinningColumn = (boxes) => {
    for (let i = 0; i < 3; i++) {
      if (
        boxes[i] !== "" &&
        boxes[i] === boxes[i + 3] &&
        boxes[i] === boxes[i + 6]
      )
        return true;
    }
    return false;
  };
  const isWinningDiagonal = (boxes) => {
    return (
      (boxes[0] !== "" && boxes[0] === boxes[4] && boxes[4] === boxes[8]) ||
      (boxes[2] !== "" && boxes[2] === boxes[4] && boxes[4] === boxes[6])
    );
  };

  const lastPlayer = nextPlayer === "X" ? "O" : "X";

  return isWinningRow(boxes) ||
    isWinningColumn(boxes) ||
    isWinningDiagonal(boxes)
    ? lastPlayer
    : "tie";
}

function getWinnerText(winner) {
  switch (winner) {
    case "X" || "O":
      return `${winner} is the winner! Congrats!`;

    case "tie":
      return "It's a Tie!";

    default:
      return "No winners here :(";
  }
}
