import React, {useState} from 'react';

import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {ScreenComponent} from '../../../navigation/interfaces';
import styles from './styles';
import Square from '../components/Square';
import {TURNS, winnerCombos} from '../constants';

const TicTacToeHome = ({}: ScreenComponent<'TicTacToeHome'>) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState(TURNS.X);
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
      if (!checkBoard.includes(null)) {
        setWinner('Draw');
      }
    }
  };

  const handlePress = (index: number) => {
    if (board[index] || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = currentTurn;
    setCurrentTurn(currentTurn === TURNS.X ? TURNS.O : TURNS.X);
    setBoard(newBoard);
    const newWinner = checkWinner(newBoard);
    return newWinner;
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentTurn(TURNS.X);
    setWinner(null);
  };
  return (
    <>
      <SafeAreaView style={styles.safearea} />
      <View style={styles.container}>
        <View style={styles.contentGame}>
          <Text style={styles.title}>Tic-tac-toe</Text>
          <Text style={styles.title}>
            {winner
              ? winner === 'Draw'
                ? "It's a Draw!"
                : `The winner is ${winner}!`
              : `It's ${currentTurn}'s turn`}
          </Text>
          <TouchableOpacity
            style={styles.restart}
            onPress={() => restartGame()}>
            <Text>Restart</Text>
          </TouchableOpacity>
          <View style={styles.board}>
            <View style={styles.row}>
              <Square
                index={0}
                handlePress={() => handlePress(0)}
                board={board}
                winner={winner}
              />
              <Square
                index={1}
                handlePress={() => handlePress(1)}
                board={board}
                winner={winner}
              />
              <Square
                index={2}
                handlePress={() => handlePress(2)}
                board={board}
                winner={winner}
              />
            </View>
            <View style={styles.row}>
              <Square
                index={3}
                handlePress={() => handlePress(3)}
                board={board}
                winner={winner}
              />
              <Square
                index={4}
                handlePress={() => handlePress(4)}
                board={board}
                winner={winner}
              />
              <Square
                index={5}
                handlePress={() => handlePress(5)}
                board={board}
                winner={winner}
              />
            </View>
            <View style={styles.row}>
              <Square
                index={6}
                handlePress={() => handlePress(6)}
                board={board}
                winner={winner}
              />
              <Square
                index={7}
                handlePress={() => handlePress(7)}
                board={board}
                winner={winner}
              />
              <Square
                index={8}
                handlePress={() => handlePress(8)}
                board={board}
                winner={winner}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default TicTacToeHome;
