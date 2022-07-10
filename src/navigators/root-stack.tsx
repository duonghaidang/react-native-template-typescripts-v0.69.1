import React, {memo, useMemo} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Home from '../screens/home';

type RootStackParamList = {
  Home: undefined;
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
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
});

export default RootStack;
