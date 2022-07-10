import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {appColors} from './styles/colors';
import RootStack from './navigators/root-stack';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={appColors.transparent}
          translucent={true}
        />
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
