import {StackScreenProps} from '@react-navigation/stack';

export type TicTacToeScreenParams = {
  TicTacToeStack: undefined;
  TicTacToeHome: undefined;
};

export type HomeScreenParams = {
  HomeStack: undefined;
  HomeScreen: undefined;
};

export type RootScreenParams = TicTacToeScreenParams & HomeScreenParams;

export type ScreenComponent<
  RouteName extends keyof RootScreenParams = keyof RootScreenParams,
> = StackScreenProps<RootScreenParams, RouteName>;
