import {useState} from 'react';
import {TURNS} from '../constants';

const useHandlePress = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState(TURNS.X);

  const handlePress = (index: number) => {
    if (board[index]) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = currentTurn;
    setCurrentTurn(currentTurn === TURNS.X ? TURNS.O : TURNS.X);
    setBoard(newBoard);
  };

  const cleanGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentTurn(TURNS.X);
  };

  return {board, currentTurn, handlePress, cleanGame};
};

export default useHandlePress;
