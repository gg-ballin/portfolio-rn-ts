import {StackScreenProps} from '@react-navigation/stack';

export type TicTacToeScreenParams = {
  TicTacToeStack: undefined;
  TicTacToeHome: undefined;
};

export type SignUpFormScreenParams = {
  SignUpFormStack: undefined;
  SignUpFormScreen: undefined;
};

export type HomeScreenParams = {
  HomeStack: undefined;
  HomeScreen: undefined;
};

export type RootScreenParams = TicTacToeScreenParams &
  SignUpFormScreenParams &
  HomeScreenParams;

export type ScreenComponent<
  RouteName extends keyof RootScreenParams = keyof RootScreenParams,
> = StackScreenProps<RootScreenParams, RouteName>;
