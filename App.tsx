/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <Text>Portfolio</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
