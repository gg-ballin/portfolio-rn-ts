import React from 'react';

import {SafeAreaView as SafeAreaViewRN, StyleSheet} from 'react-native';
import colors from '../theme/colors';

const SafeAreaView = () => {
  return <SafeAreaViewRN style={styles.safearea} />;
};

const styles = StyleSheet.create({
  safearea: {
    flex: 0,
    backgroundColor: colors.light.primary,
  },
});

export default SafeAreaView;
