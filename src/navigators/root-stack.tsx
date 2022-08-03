import React, {memo, useMemo} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import BottomTab from './bottom-tab';

type RootStackParamList = {
  Splash: undefined;
  BottomTab: undefined;
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

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
});

export default RootStack;
