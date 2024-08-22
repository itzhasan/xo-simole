import React, { useState } from 'react';
import './Board.css'; // Import the CSS file

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = index => {
    const newBoard = board.slice();
    if (winner || newBoard[index]) {
      return;
    }
    newBoard[index] = xIsNext ? 'X' : 'O';
    const currentWinner = calculateWinner(newBoard);
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    setWinner(currentWinner);
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    }
    if (board.every(square => square)) {
      return "It's a draw!";
    }
    return `Next player: ${xIsNext ? 'X' : 'O'}`;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  return (
    <div className="board-container">
      <div className="status">{getStatus()}</div>
      <div className="board">
        {board.map((_, index) => renderSquare(index))}
      </div>
      <button className="reset-button" onClick={resetGame}>Restart Game</button>
    </div>
  );
};

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default Board;
