import React from 'react';

import TicTacToeStack from '../../../modules/tictactoe/Stack';
import {RootStack} from '../RootStack';

const SCREEN_OPTIONS = {
  headerShown: false,
};

const Stacks = () => {
  return (
    <RootStack.Navigator screenOptions={SCREEN_OPTIONS}>
      <RootStack.Screen name="TicTacToeStack" component={TicTacToeStack} />
    </RootStack.Navigator>
  );
};

export default Stacks;
