import React from 'react';

import {RootStack} from '../../navigation/components/RootStack';
import SignUpFormScreen from './screens';

const SCREEN_OPTIONS = {
  headerShown: false,
};

const SignUpFormScreenStack = (): JSX.Element => {
  return (
    <RootStack.Navigator screenOptions={SCREEN_OPTIONS}>
      <RootStack.Screen name="SignUpFormScreen" component={SignUpFormScreen} />
    </RootStack.Navigator>
  );
};

export default SignUpFormScreenStack;
