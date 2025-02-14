import { useState } from "react";
import ScoreBoard from "./ScoreBoard";
import Board from "./Board";
import Controls from "./Controls";
import ResultDialog from "./ResultDialog";
import { Player, SquareValue } from "../types/PlayerType";

export default function TicTacToe() {
  const [gameState, setGameState] = useState({
    board: Array(9).fill(null) as SquareValue[],
    currentPlayer: 'X' as Player,
    winner: null as Player | 'Draw' | null,
    winningLine: null as number[] | null,
  });
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (index: number) => {
    if (gameState.board[index] || gameState.winner) return;

    const newBoard = [...gameState.board];
    newBoard[index] = gameState.currentPlayer;
    const result = calculateWinner(newBoard);

    setGameState({
      board: newBoard,
      currentPlayer: gameState.currentPlayer === 'X' ? 'O' : 'X',
      winner: (result?.winner || null) as Player | 'Draw' | null,
      winningLine: result?.line || null,
    });

    if (result) {
      if (result.winner !== 'Draw') {
        setScore((prev) => ({ ...prev, [result.winner as 'X' | 'O']: prev[result.winner as 'X' | 'O'] + 1 }));
      }
      setIsOpen(true);
    }
  };

  const resetGame = () => {
    setGameState({
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      winningLine: null,
    });
    setIsOpen(false);
  };

  const resetScore = () => {
    setScore({ X: 0, O: 0 });
    resetGame();
  };

  const calculateWinner = (squares: SquareValue[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: [a, b, c] };
      }
    }
    return squares.every((square) => square !== null) ? { winner: 'Draw', line: null } : null;
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-pink-400 via-pink-600 to-yellow-500 pt-6">
      <h2 className="text-4xl min-[500px]:text-6xl mb-6 font-bold text-[#fff]">Tic-Tac-Toe</h2>
      <ScoreBoard score={score} />
      <Board board={gameState.board} winningLine={gameState.winningLine} handleClick={handleClick} />
      <Controls resetGame={resetGame} resetScore={resetScore} />
      <ResultDialog winner={gameState.winner} isOpen={isOpen} resetGame={resetGame} />
    </div>
  );
}