import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Stacks from './components/Stacks';
import {navigationRef} from './constants';

const Navigator = (): JSX.Element => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stacks />
    </NavigationContainer>
  );
};

export default Navigator;
