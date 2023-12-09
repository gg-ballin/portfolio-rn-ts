import {createRef} from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainerRefWithCurrent} from '@react-navigation/native';

import {RootScreenParams} from './interfaces';

export const navigationRef =
  createRef<NavigationContainerRefWithCurrent<RootScreenParams>>();

export const TAB_STYLES = StyleSheet.create({
  tabBar: {
    borderTopWidth: 1,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    elevation: 19,
  },
});
