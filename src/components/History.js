import React from "react";

const History = ({ history, moveTo }) => {
  console.log("history", history);
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              type="button"
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? `Go to start game` : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
