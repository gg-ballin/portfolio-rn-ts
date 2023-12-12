import React from 'react';

import {View, Text, SafeAreaView} from 'react-native';

import styles from './styles';
import {ScreenComponent} from '../../../navigation/interfaces';
import Tile from '../components/Tile';

const Home = ({navigation}: ScreenComponent<'HomeScreen'>) => {
  return (
    <>
      <SafeAreaView style={styles.safearea} />
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Text
          style={
            styles.subtitle
          }>{`Here is a list of some challenges i've stumbled upon`}</Text>
        <View style={styles.list}>
          <Tile
            onPress={() => navigation.navigate('TicTacToeStack')}
            title="Tic Tac Toe"
            subtitle="Play Tic Tac Toe"
          />
          <Tile
            onPress={() => navigation.navigate('SignUpFormStack')}
            title="Sign Up Form"
            subtitle="Simple sign up form with validation in React Native"
          />
        </View>
      </View>
    </>
  );
};

export default Home;
