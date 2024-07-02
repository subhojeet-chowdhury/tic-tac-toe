import PropTypes from "prop-types";
import Square from "./Square";

export default function Board({ movesHistory, onMovesHistoryChange }) {
  const isXNext = movesHistory.length % 2 === 1;
  const squares = movesHistory[movesHistory.length - 1].slice();

  let turn;
  const [gotWinner, winnerSquares] = checkWinner(squares);

  if (gotWinner) {
    turn = `Winner is ${isXNext ? "O" : "X"}`;
  } else turn = `Its ${isXNext ? "X" : "O"}'s turn`;

  const handleClick = (i) => {
    if (gotWinner || squares[i]) return;

    const newSqaures = squares.slice();
    newSqaures[i] = isXNext ? "X" : "O";
    onMovesHistoryChange([...movesHistory, newSqaures]);
  };

  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "2rem", marginBottom: "0.5rem" }}>{turn}</div>
      <div className="row">
        <Square
          value={squares[0]}
          onSquareClick={() => {
            handleClick(0);
          }}
          isWinnerSquare={winnerSquares.includes(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => {
            handleClick(1);
          }}
          isWinnerSquare={winnerSquares.includes(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => {
            handleClick(2);
          }}
          isWinnerSquare={winnerSquares.includes(2)}
        />
      </div>
      <div className="row">
        <Square
          value={squares[3]}
          onSquareClick={() => {
            handleClick(3);
          }}
          isWinnerSquare={winnerSquares.includes(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => {
            handleClick(4);
          }}
          isWinnerSquare={winnerSquares.includes(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => {
            handleClick(5);
          }}
          isWinnerSquare={winnerSquares.includes(5)}
        />
      </div>
      <div className="row">
        <Square
          value={squares[6]}
          onSquareClick={() => {
            handleClick(6);
          }}
          isWinnerSquare={winnerSquares.includes(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => {
            handleClick(7);
          }}
          isWinnerSquare={winnerSquares.includes(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => {
            handleClick(8);
          }}
          isWinnerSquare={winnerSquares.includes(8)}
        />
      </div>
    </div>
  );
}

// function to check if current moves leads to a winner
const checkWinner = (squares) => {
  const winnerPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winnerPositions.length; i++) {
    const [first, second, third] = winnerPositions[i];

    if (squares[first] && squares[first] === squares[second] && squares[second] === squares[third])
      return [true, winnerPositions[i]];
  }
  return [false, []];
};

Board.propTypes = {
  movesHistory: PropTypes.arrayOf(PropTypes.array).isRequired,
  onMovesHistoryChange: PropTypes.func.isRequired,
};
