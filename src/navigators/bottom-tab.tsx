import {StyleSheet} from 'react-native';
import React, {memo, useMemo} from 'react';
import Home from '../screens/home';
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
  BottomTabScreenProps as BottomTabScreenPropsLib,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

export type BottomTabScreensParams = {
  Home: undefined;
  Video: undefined;
};

export type BottomTabScreens = keyof BottomTabScreensParams;

export type BottomTabScreenProps<T extends BottomTabScreens> =
  BottomTabScreenPropsLib<BottomTabScreensParams, T>;

export type UseBottomTabNavigation<T extends BottomTabScreens = 'Home'> =
  BottomTabNavigationProp<BottomTabScreensParams, T>;

const Tab = createBottomTabNavigator<BottomTabScreensParams>();

const BottomTab = memo(() => {
  const screenOptions: BottomTabNavigationOptions = useMemo(
    () => ({
      tabBarShowLabel: false,
      headerShown: false,
    }),
    [],
  );

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Video" component={Home} />
    </Tab.Navigator>
  );
});

export default BottomTab;
