import React, {memo, useMemo} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import BottomTab, {BottomTabScreens} from './bottom-tab';
import Modal from '../screens/modal';
import {ColorValue} from 'react-native';

export type RootStackParamList = {
  Splash: undefined;
  BottomTab:
    | undefined
    | {
        screen: BottomTabScreens;
      };

  //
  Modal:
    | undefined
    | {
        children?: React.ReactNode;
        backdropOpacity?: number;
        backdropColor?: ColorValue;
      };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreens = keyof RootStackParamList;

export type RootStackScreenProps<T extends RootStackScreens> =
  NativeStackScreenProps<RootStackParamList, T>;

export type UseRootStackNavigation<T extends RootStackScreens> =
  NativeStackNavigationProp<RootStackParamList, T>;

const RootStack = memo(() => {
  const screenOptions: NativeStackNavigationOptions = useMemo(
    () => ({headerShown: false, animation: 'simple_push'}),
    [],
  );

  const screenModalOptions: NativeStackNavigationOptions = useMemo(
    () => ({
      presentation: 'transparentModal',
      animation: 'none',
    }),
    [],
  );

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Group>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Group>
      <Stack.Group screenOptions={screenModalOptions}>
        <Stack.Screen name="Modal" component={Modal} />
      </Stack.Group>
    </Stack.Navigator>
  );
});

export default RootStack;
