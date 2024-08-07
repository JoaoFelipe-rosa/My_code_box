import React, { useState, useEffect } from 'react';
import HomeButton from '../../Components/buttons/homeButton';

const boardSize = 3;

type SquareValue = 'X' | 'O' | '';

export default function JogoDaVelha() {
  const [board, setBoard] = useState<Array<Array<SquareValue>>>(() =>
    Array(boardSize)
      .fill(null)
      .map(() => Array(boardSize).fill(''))
  );
  const [currentPlayer, setCurrentPlayer] = useState<SquareValue>('X');
  const [winner, setWinner] = useState<SquareValue | 'Tie' | null>(null);
  const [restartGame, setRestartGame] = useState(false);
  const checkWinner = (): SquareValue => {
    for (let i = 0; i < boardSize; i++) {
      if (
        board[i][0] !== '' &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]
      ) {
        return board[i][0];
      }
    }
    for (let i = 0; i < boardSize; i++) {
      if (
        board[0][i] !== '' &&
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i]
      ) {
        return board[0][i];
      }
    }
    if (
      board[0][0] !== '' &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      return board[0][0];
    }
    if (
      board[0][2] !== '' &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    ) {
      return board[0][2];
    }
    return '';
  };

  const checkTie = (): boolean => {
    return board.flat().every(cell => cell !== '');
  };

  const handleCellClick = (rowIndex: number, cellIndex: number) => {
    if (!board[rowIndex][cellIndex] && !winner) {
      const newBoard = [...board];
      newBoard[rowIndex][cellIndex] = currentPlayer;
      setBoard(newBoard);

      const winnerResult = checkWinner();
      if (winnerResult) {
        setWinner(winnerResult);
      } else if (checkTie()) {
        setWinner('Tie');
      } else {
        setCurrentPlayer(prevPlayer => (prevPlayer === 'X' ? 'O' : 'X'));
      }
    }
  };
  function resetGame() {
    setBoard(
      Array(boardSize)
        .fill(null)
        .map(() => Array(boardSize).fill(''))
    );
    setCurrentPlayer('X');
    setWinner(null);
    setRestartGame(false);
  }

  useEffect(() => {
    const winnerResult = checkWinner();
    if (winnerResult) {
      setWinner(winnerResult);
    } else if (checkTie()) {
      setWinner('Tie');
    }
  }, [board]);

  useEffect(() => {
    if (restartGame) {
      resetGame();
    }
  }, [restartGame]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        {winner ? (
          <div className="mb-4 text-2xl font-bold">
            {winner === 'Tie' ? 'Empatou!' : `Jogado ${winner} Venceu!`}
          </div>
        ) : (
          <div className="mb-4 text-2xl font-bold">{`É a vez do jogador ${currentPlayer}`}</div>
        )}
        <div className="grid grid-cols-3 gap-4">
          {board.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <button
                key={`${rowIndex}-${cellIndex}`}
                className="w-16 h-16 flex items-center justify-center border border-gray-400 cursor-pointer select-none"
                onClick={() => handleCellClick(rowIndex, cellIndex)}
                disabled={!!cell || !!winner}
              >
                {cell}
              </button>
            ))
          )}
        </div>
        {winner || checkTie() ? (
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded"
            onClick={() => setRestartGame(true)}
          >
            Restart Game
          </button>
        ) : null}
      </div>
      <HomeButton />
    </div>
  );
}
