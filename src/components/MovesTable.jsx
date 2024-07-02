import PropTypes from "prop-types";

export default function MovesTable({ movesHistory, onMovesHistoryChange }) {
  const deleteMoves = (index) => {
    const updatedMovesHistory = movesHistory.filter((move, ind) => ind <= index);
    onMovesHistoryChange(updatedMovesHistory);
  };

  return (
    <div>
      {movesHistory.map((move, index) => {
        if (index === 0)
          return (
            <button
              key={index}
              onClick={() => {
                onMovesHistoryChange([Array(9).fill(null)]);
              }}
              className="btn-secondary"
            >
              Restart Game
            </button>
          );
        else
          return (
            <button key={index} className="btn-secondary" onClick={() => deleteMoves(index)}>
              Go to move {index}
            </button>
          );
      })}
    </div>
  );
}

MovesTable.propTypes = {
  movesHistory: PropTypes.arrayOf(PropTypes.array).isRequired,
  onMovesHistoryChange: PropTypes.func.isRequired,
};
