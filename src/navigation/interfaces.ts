import {StackScreenProps} from '@react-navigation/stack';

// import { CardsScreensParams } from '~/modules/contentCreator/cards/interfaces';

// import { BottomTabScreensParams } from './components/BottomTab';

// export type ContentCreatorScreenParams = CardsScreensParams &
//   BottomTabScreensParams & {
//     ProfileCreatorStack: undefined;
//     AlertsCreatorScreen: undefined;
//   };
export type TicTacToeScreenParams = {
  TicTacToeStack: undefined;
  TicTacToeHome: undefined;
};

// export type RootScreenParams = ContentCreatorScreenParams & MecenaScreenParams;
export type RootScreenParams = TicTacToeScreenParams;

export type ScreenComponent<
  RouteName extends keyof RootScreenParams = keyof RootScreenParams,
> = StackScreenProps<RootScreenParams, RouteName>;
