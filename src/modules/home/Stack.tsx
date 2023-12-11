import React from 'react';

import {RootStack} from '../../navigation/components/RootStack';
import Home from './screens';

const SCREEN_OPTIONS = {
  headerShown: false,
};

const HomeStack = (): JSX.Element => {
  return (
    <RootStack.Navigator screenOptions={SCREEN_OPTIONS}>
      <RootStack.Screen name="HomeScreen" component={Home} />
    </RootStack.Navigator>
  );
};

export default HomeStack;
