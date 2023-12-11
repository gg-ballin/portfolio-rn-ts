import React from 'react';

import TicTacToeStack from '../../../modules/tictactoe/Stack';
import {RootStack} from '../RootStack';
import HomeStack from '../../../modules/home/Stack';

const SCREEN_OPTIONS = {
  headerShown: false,
};

const Stacks = () => {
  return (
    <RootStack.Navigator
      screenOptions={SCREEN_OPTIONS}
      initialRouteName="HomeStack">
      <RootStack.Screen name="HomeStack" component={HomeStack} />
      <RootStack.Screen
        options={{gestureEnabled: true}}
        name="TicTacToeStack"
        component={TicTacToeStack}
      />
    </RootStack.Navigator>
  );
};

export default Stacks;
