import React from 'react';

import {RootStack} from '../../navigation/components/RootStack';
import TicTacToeHome from './screens';

const SCREEN_OPTIONS = {
  headerShown: false,
};

const TicTacToeStack = (): JSX.Element => {
  return (
    <RootStack.Navigator screenOptions={SCREEN_OPTIONS}>
      <RootStack.Screen
        options={{gestureEnabled: true}}
        name="TicTacToeHome"
        component={TicTacToeHome}
      />
    </RootStack.Navigator>
  );
};

export default TicTacToeStack;
