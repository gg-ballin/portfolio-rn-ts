import React, {useState} from 'react';

import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {ScreenComponent} from '../../../navigation/interfaces';
import styles from './styles';

const TURNS = {
  X: 'x',
  O: 'o',
};

const TicTacToeHome = ({}: ScreenComponent<'TicTacToeHome'>) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const checkWinner = checkBoard => {
    const winnerCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerCombos.length; i++) {
      const [a, b, c] = winnerCombos[i];

      const checkBoardA = checkBoard[a];
      const compareAtoB = checkBoard[a] === checkBoard[b];
      const compareAtoC = checkBoard[a] === checkBoard[c];
      if (checkBoardA && compareAtoB && compareAtoC) {
        setWinner(checkBoard[a]);
        return;
      }
      if (!checkBoard.includes(null)) {
        setWinner('Draw');
      }
    }
  };

  const handlePress = index => {
    if (board[index] || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = currentTurn;
    setCurrentTurn(currentTurn === TURNS.X ? TURNS.O : TURNS.X);
    setBoard(newBoard);
    const newWinner = checkWinner(newBoard);
  };

  const renderSquare = index => {
    return (
      <TouchableOpacity
        onPress={() => handlePress(index)}
        disabled={!!winner || board[index]}
        style={styles.squareContainer}>
        <Text style={styles.squareTxtsml}>{index}</Text>
        <Text style={styles.squareTxt}>{board[index]}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeAreaView style={{backgroundColor: 'cadetblue'}} />
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
          <TouchableOpacity style={styles.restart} onPress={() => {}}>
            <Text>Restart</Text>
          </TouchableOpacity>
          <View style={styles.board}>
            <View style={styles.row}>
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </View>
            <View style={styles.row}>
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </View>
            <View style={styles.row}>
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default TicTacToeHome;
