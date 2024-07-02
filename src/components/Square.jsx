import PropTypes from "prop-types";

export default function Square({ value, onSquareClick, isWinnerSquare }) {
  return (
    <div>
      <button
        className="btn-primary"
        style={{
          background: isWinnerSquare ? "red" : value === "X" ? "black" : "white",
          color: isWinnerSquare || value === "X" ? "white" : "black",
        }}
        onClick={onSquareClick}
      >
        {value}
      </button>
    </div>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func,
  isWinnerSquare: PropTypes.bool,
};
