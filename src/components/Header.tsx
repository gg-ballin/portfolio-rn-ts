import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from './Icon';

type HeaderProps = {
  title: string;
  goBack?: boolean;
  navigation: any;
  route: any;
};
// TODO: make the HeaderProps inherits from StackScreenProps
const Header = ({title, navigation, goBack}: HeaderProps) => {
  return (
    <View style={styles.container}>
      {goBack && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
