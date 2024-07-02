import { useState } from "react";
import Board from "./Board";
import MovesTable from "./MovesTable";

export default function Game() {
  const [movesHistory, setMovesHistory] = useState([Array(9).fill(null)]);

  return (
    <div className="game-board">
      <Board movesHistory={movesHistory} onMovesHistoryChange={setMovesHistory} />
      <MovesTable movesHistory={movesHistory} onMovesHistoryChange={setMovesHistory} />
    </div>
  );
}
