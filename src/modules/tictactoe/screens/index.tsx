import React, {useEffect} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import {ScreenComponent} from '../../../navigation/interfaces';
import useCheckWinner from '../hooks/useCheckWinner';
import useHandlePress from '../hooks/useHandlePress';
import Board from '../components/Board';

import styles from './styles';
import Header from '../../../components/Header';
import SafeAreaView from '../../../components/SafeAreaView';

const TicTacToeHome = ({
  navigation,
  route,
}: ScreenComponent<'TicTacToeHome'>) => {
  const {winner, checkWinner, resetWinner} = useCheckWinner();
  const {board, currentTurn, handlePress, cleanGame} = useHandlePress();

  useEffect(() => {
    checkWinner(board);
  }, [board, checkWinner]);

  const restartGame = () => {
    cleanGame();
    resetWinner();
  };
  return (
    <>
      <SafeAreaView />
      <Header
        title="Tic-tac-toe"
        goBack
        navigation={navigation}
        route={route}
      />
      <View style={styles.container}>
        <View style={styles.contentGame}>
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
            <Board board={board} handlePress={handlePress} winner={winner} />
          </View>
        </View>
      </View>
    </>
  );
};

export default TicTacToeHome;
