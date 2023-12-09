import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import Square from '../Square';

interface BoardProps {
  board: (string | null)[];
  handlePress: (index: number) => void;
  winner: string | null;
}

const Board: React.FC<BoardProps> = ({board, handlePress, winner}) => {
  return (
    <View>
      {[0, 1, 2].map(rowIndex => (
        <View key={rowIndex} style={styles.row}>
          {[0, 1, 2].map(colIndex => (
            <Square
              key={colIndex}
              index={rowIndex * 3 + colIndex}
              handlePress={() => handlePress(rowIndex * 3 + colIndex)}
              board={board}
              winner={winner}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Board;
