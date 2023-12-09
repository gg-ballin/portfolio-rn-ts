import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

type SquareProps = {
  index: number;
  board: (string | null)[];
  handlePress: () => void;
  winner: string | null;
};

const Square = ({index, board, handlePress, winner}: SquareProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={!!winner || !!board[index]}
      style={styles.squareContainer}>
      <Text style={styles.squareTxtsml}>{index}</Text>
      <Text style={styles.squareTxt}>{board[index]}</Text>
    </TouchableOpacity>
  );
};

export default Square;
