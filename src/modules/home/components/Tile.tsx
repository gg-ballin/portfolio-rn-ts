import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './Tile.styles';

type TileProps = {
  title: string;
  subtitle: string;
  onPress: () => void;
};

const Tile = ({title, subtitle, onPress}: TileProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container]}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Icon name="chevron-right" size={20} />
    </TouchableOpacity>
  );
};

export default Tile;
