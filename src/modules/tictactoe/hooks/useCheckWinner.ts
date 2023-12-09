import {useState} from 'react';
import {winnerCombos} from '../constants';

const useCheckWinner = () => {
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = (checkBoard: (string | null)[]) => {
    for (let i = 0; i < winnerCombos.length; i++) {
      const [a, b, c] = winnerCombos[i];
      const isWinner =
        checkBoard[a] &&
        checkBoard[a] === checkBoard[b] &&
        checkBoard[a] === checkBoard[c];

      if (isWinner) {
        setWinner(checkBoard[a]);
        return;
      }
    }
    if (!checkBoard.includes(null)) {
      setWinner('Draw');
    }
  };
  const resetWinner = () => {
    setWinner(null);
  };
  return {winner, checkWinner, resetWinner};
};

export default useCheckWinner;
